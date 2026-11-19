"""Genera el CV a partir de los mismos módulos src/data/ que usa la web."""

import json
import subprocess
from html import escape
from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.platypus import (
    HRFlowable,
    PageBreak,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
    Table,
    TableStyle,
)

ROOT = Path(__file__).resolve().parents[1]
NAVY = colors.HexColor('#14263D')
BLUE = colors.HexColor('#2463A6')
PALE = colors.HexColor('#EDF3F9')
TEXT = colors.HexColor('#263445')
MUTED = colors.HexColor('#5C6878')
RULE = colors.HexColor('#D5DEE8')


def load_data():
    result = subprocess.run(
        ['node', str(ROOT / 'scripts' / 'export_cv_data.cjs')],
        cwd=ROOT,
        text=True,
        capture_output=True,
        check=True,
    )
    return json.loads(result.stdout)


def styles():
    s = getSampleStyleSheet()
    definitions = [
        ('NameCV', 'Helvetica-Bold', 24, 28, NAVY, 0),
        ('RoleCV', 'Helvetica-Bold', 9.5, 13, BLUE, 4),
        ('ContactCV', 'Helvetica', 8, 11, MUTED, 1),
        ('SectionCV', 'Helvetica-Bold', 11, 14, NAVY, 8),
        ('BodyCV', 'Helvetica', 9.5, 13.5, TEXT, 6),
        ('BulletCV', 'Helvetica', 8.8, 12.2, TEXT, 4),
        ('JobCV', 'Helvetica-Bold', 10, 13, NAVY, 3),
        ('MetaCV', 'Helvetica-Oblique', 8.5, 11.5, MUTED, 6),
        ('LabelCV', 'Helvetica-Bold', 8.8, 12, NAVY, 0),
        ('TextCV', 'Helvetica', 8.7, 12.3, TEXT, 0),
        ('ProjectTitleCV', 'Helvetica-Bold', 10, 13, NAVY, 4),
        ('ProjectTextCV', 'Helvetica', 9, 13, TEXT, 3),
        ('FooterCV', 'Helvetica', 7.5, 9, MUTED, 0),
    ]
    for name, font, size, leading, color, after in definitions:
        s.add(ParagraphStyle(
            name=name,
            fontName=font,
            fontSize=size,
            leading=leading,
            textColor=color,
            spaceAfter=after,
            keepWithNext=name in {'SectionCV', 'JobCV'},
            leftIndent=13 if name == 'BulletCV' else 0,
            firstLineIndent=-8 if name == 'BulletCV' else 0,
            spaceBefore=10 if name == 'SectionCV' else 0,
        ))
    return s


def info_table(rows, widths, label_column=False):
    table = Table(rows, colWidths=widths, hAlign='LEFT')
    commands = [
        ('BOX', (0, 0), (-1, -1), 0.6, RULE),
        ('INNERGRID', (0, 0), (-1, -1), 0.35, RULE),
        ('VALIGN', (0, 0), (-1, -1), 'TOP'),
        ('LEFTPADDING', (0, 0), (-1, -1), 3 * mm),
        ('RIGHTPADDING', (0, 0), (-1, -1), 3 * mm),
        ('TOPPADDING', (0, 0), (-1, -1), 2.5 * mm),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 2.5 * mm),
    ]
    if label_column:
        commands.append(('BACKGROUND', (0, 0), (0, -1), PALE))
    table.setStyle(TableStyle(commands))
    return table


def project_card(title, description, url, paragraph):
    content = [paragraph(title, 'ProjectTitleCV'), paragraph(description, 'ProjectTextCV')]
    if url:
        content.append(paragraph('Código: ' + url, 'ProjectTextCV'))
    table = Table([[content]], colWidths=[174 * mm], hAlign='LEFT')
    table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, -1), colors.HexColor('#F8FAFC')),
        ('BOX', (0, 0), (-1, -1), 0.6, RULE),
        ('LINEBEFORE', (0, 0), (0, 0), 2.2, BLUE),
        ('LEFTPADDING', (0, 0), (-1, -1), 4 * mm),
        ('RIGHTPADDING', (0, 0), (-1, -1), 4 * mm),
        ('TOPPADDING', (0, 0), (-1, -1), 3.5 * mm),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 3 * mm),
    ]))
    return table


def generate():
    data = load_data()
    contact = data['datosContacto']
    pdf_name = contact['curriculumPdf'].removeprefix('/')
    if not pdf_name.endswith('.pdf') or Path(pdf_name).name != pdf_name:
        raise ValueError('curriculumPdf debe ser un archivo PDF dentro de public/')
    output = ROOT / 'public' / pdf_name
    output.parent.mkdir(parents=True, exist_ok=True)

    s = styles()

    def p(value, style='BodyCV'):
        return Paragraph(escape(str(value)), s[style])

    def footer(canvas, doc):
        canvas.saveState()
        canvas.setStrokeColor(RULE)
        canvas.setLineWidth(0.6)
        canvas.line(18 * mm, 14 * mm, A4[0] - 18 * mm, 14 * mm)
        canvas.setFont('Helvetica', 7.5)
        canvas.setFillColor(MUTED)
        canvas.drawString(18 * mm, 9 * mm, contact['nombre'] + ' · Desarrollo de software')
        canvas.drawRightString(A4[0] - 18 * mm, 9 * mm, str(doc.page))
        canvas.restoreState()

    doc = SimpleDocTemplate(
        str(output), pagesize=A4,
        leftMargin=18 * mm, rightMargin=18 * mm,
        topMargin=13 * mm, bottomMargin=19 * mm,
        title='CV ' + contact['nombre'],
    )
    story = []
    header_rows = [
        [p(contact['nombre'], 'NameCV')],
        [p(contact['rol'].upper(), 'RoleCV')],
        [p(contact['localizacion'] + ' · ' + contact['email'], 'ContactCV')],
        [p('Portafolio: ' + contact['webCv'], 'ContactCV')],
        [p('GitHub: ' + contact['github'] + ' · LinkedIn: ' + contact['linkedin'], 'ContactCV')],
    ]
    header = Table(header_rows, colWidths=[174 * mm])
    header.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, -1), PALE),
        ('BOX', (0, 0), (-1, -1), 0.7, RULE),
        ('LEFTPADDING', (0, 0), (-1, -1), 5 * mm),
        ('RIGHTPADDING', (0, 0), (-1, -1), 5 * mm),
        ('TOPPADDING', (0, 0), (-1, 0), 3.5 * mm),
        ('BOTTOMPADDING', (0, 0), (-1, 0), 1.2 * mm),
        ('TOPPADDING', (0, 1), (-1, -1), 1 * mm),
        ('BOTTOMPADDING', (0, -1), (-1, -1), 3.5 * mm),
    ]))
    story.extend([header, Spacer(1, 4 * mm), p('PERFIL PROFESIONAL', 'SectionCV'),
                  p(contact['perfilProfesional'])])

    if data['experienciaProfesional']:
        story.append(p('EXPERIENCIA PROFESIONAL', 'SectionCV'))
        for job in data['experienciaProfesional']:
            story.extend([
                p(job['rol'] + ' · ' + job['empresa'], 'JobCV'),
                p(job['contexto'] + ' | ' + job['fechaInicio'] + ' – ' + job['fechaFin'], 'MetaCV'),
            ])
            for tarea in job['tareas']:
                for detail in tarea['detalles']:
                    story.append(p('• ' + detail, 'BulletCV'))
            story.append(Spacer(1, 2 * mm))

    if data['skillStack']:
        story.append(p('COMPETENCIAS TÉCNICAS', 'SectionCV'))
        skills = [
            [p(category, 'LabelCV'), p(', '.join(values['tecnologias']), 'TextCV')]
            for category, values in data['skillStack'].items()
        ]
        story.append(info_table(skills, [53 * mm, 121 * mm], label_column=True))

    story.append(PageBreak())
    highlighted_projects = [project for project in data['proyectos'] if project.get('tecnologias')][:3]
    if highlighted_projects:
        story.append(p('PROYECTOS SELECCIONADOS', 'SectionCV'))
        for project in highlighted_projects:
            story.extend([
                project_card(project['titulo'], project['descripcion'], project.get('url', ''), p),
                Spacer(1, 3.5 * mm),
            ])

    if data['formacionAcademica']:
        story.append(p('FORMACIÓN ACADÉMICA', 'SectionCV'))
        education = []
        for item in data['formacionAcademica']:
            entries = [
                p(item['titulacion'], 'JobCV'),
                p(item['institucion'] + ' · ' + item['periodo'], 'MetaCV'),
            ]
            entries.extend(p(detail, 'TextCV') for detail in item.get('detalles', []))
            education.append([entries])
        story.append(info_table(education, [174 * mm]))

    if contact.get('otrosDatos'):
        story.append(p('OTROS DATOS', 'SectionCV'))
        rows = [[p(entry['etiqueta'], 'LabelCV'), p(entry['valor'], 'TextCV')]
                for entry in contact['otrosDatos']]
        story.append(info_table(rows, [35 * mm, 139 * mm], label_column=True))

    story.extend([
        Spacer(1, 4 * mm),
        HRFlowable(width='100%', thickness=0.6, color=RULE),
        Spacer(1, 2 * mm),
        p('Portafolio: ' + contact['webCv'] + ' · GitHub: ' + contact['github'], 'FooterCV'),
    ])
    doc.build(story, onFirstPage=footer, onLaterPages=footer)
    print('CV generado: ' + str(output))


if __name__ == '__main__':
    generate()
