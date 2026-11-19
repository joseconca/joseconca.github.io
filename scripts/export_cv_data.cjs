// Extrae el contenido del CV directamente de los módulos TypeScript de src/data.
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const ts = require('typescript');

const dataDir = path.resolve(__dirname, '../src/data');
const moduloNombres = [
  'datosContacto', 'experienciaProfesional', 'formacionAcademica',
  'proyectos', 'skillStack',
];

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
    (d) => d.category === ts.DiagnosticCategory.Error,
  );
  if (errors.length) {
    throw new Error('Error compilando ' + filename + ': ' + errors.map((d) =>
      ts.flattenDiagnosticMessageText(d.messageText, '\n')).join('\n'));
  }
  const exports = {};
  vm.runInNewContext(compiled.outputText, { exports }, { filename: file, timeout: 1000 });
  if (!(exportName in exports)) {
    throw new Error('Falta ' + exportName + ' en ' + filename);
  }
  return JSON.parse(JSON.stringify(exports[exportName]));
}

try {
  const idioma = process.argv[2];
  if (!['es', 'en'].includes(idioma)) {
    throw new Error('Indica un idioma válido: es o en');
  }
  const carpeta = idioma === 'en' ? 'en/' : '';
  const data = Object.fromEntries(moduloNombres.map((nombre) =>
    [nombre, readModule(nombre, carpeta + nombre + '.ts')]));
  data.textos = readModule('textos', 'textos.ts')[idioma];
  data.contactoCv = readModule('contactoCv', 'contactoCv.ts');
  if (!data.datosContacto.curriculumPdf.endsWith('_' + idioma.toUpperCase() + '.pdf')) {
    throw new Error('Nombre de CV incorrecto para ' + idioma);
  }
  process.stdout.write(JSON.stringify(data));
} catch (error) {
  console.error(error);
  process.exitCode = 1;
}
