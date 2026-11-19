// Lee los módulos de src/data sin duplicar su contenido en otro formato.
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const ts = require('typescript');

const dataDir = path.resolve(__dirname, '../src/data');
const modules = {
  datosContacto: 'datosContacto.ts',
  experienciaProfesional: 'experienciaProfesional.ts',
  formacionAcademica: 'formacionAcademica.ts',
  proyectos: 'proyectos.ts',
  skillStack: 'skillStack.ts',
};

function readModule(exportName, filename) {
  const file = path.join(dataDir, filename);
  const source = fs.readFileSync(file, 'utf8');
  const compiled = ts.transpileModule(source, {
    fileName: file,
    reportDiagnostics: true,
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2020,
    },
  });
  const errors = (compiled.diagnostics || []).filter(
    (diag) => diag.category === ts.DiagnosticCategory.Error,
  );
  if (errors.length) {
    throw new Error('Error compilando ' + filename + ': ' + ts.formatDiagnosticsWithColorAndContext(errors, {
      getCurrentDirectory: () => process.cwd(),
      getCanonicalFileName: (name) => name,
      getNewLine: () => '\n',
    }));
  }

  // Los archivos de datos exportan objetos y arrays: no necesitan imports ni acceso al sistema.
  const exports = {};
  vm.runInNewContext(compiled.outputText, { exports }, { filename: file, timeout: 1000 });
  if (!(exportName in exports)) {
    throw new Error('No se encontró la exportación ' + exportName + ' en ' + filename);
  }
  return JSON.parse(JSON.stringify(exports[exportName]));
}

try {
  const data = Object.fromEntries(
    Object.entries(modules).map(([name, file]) => [name, readModule(name, file)]),
  );
  process.stdout.write(JSON.stringify(data));
} catch (error) {
  console.error(error);
  process.exitCode = 1;
}
