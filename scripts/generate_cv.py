from pathlib import Path
from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import mm
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak, HRFlowable

OUT = Path(__file__).resolve().parents[1] / "public" / "CV_Jose_Conca_082026.pdf"
NAVY = colors.HexColor("#14263D")
BLUE = colors.HexColor("#2463A6")
PALE = colors.HexColor("#EDF3F9")
TEXT = colors.HexColor("#263445")
MUTED = colors.HexColor("#5C6878")
RULE = colors.HexColor("#D5DEE8")

s = getSampleStyleSheet()
s.add(ParagraphStyle(name="NameCV", fontName="Helvetica-Bold", fontSize=24, leading=28, textColor=NAVY, spaceAfter=2))
s.add(ParagraphStyle(name="RoleCV", fontName="Helvetica-Bold", fontSize=9.5, leading=13, textColor=BLUE, spaceAfter=5))
s.add(ParagraphStyle(name="ContactCV", fontName="Helvetica", fontSize=8, leading=11, textColor=MUTED, spaceAfter=1))
s.add(ParagraphStyle(name="SectionCV", fontName="Helvetica-Bold", fontSize=11, leading=14, textColor=NAVY, spaceBefore=10, spaceAfter=6, keepWithNext=True))
s.add(ParagraphStyle(name="BodyCV", fontName="Helvetica", fontSize=9, leading=13, textColor=TEXT, spaceAfter=4))
s.add(ParagraphStyle(name="BulletCV", fontName="Helvetica", fontSize=8.7, leading=12, textColor=TEXT, leftIndent=12, firstLineIndent=-8, spaceAfter=3))
s.add(ParagraphStyle(name="JobCV", fontName="Helvetica-Bold", fontSize=9.5, leading=12, textColor=NAVY, spaceAfter=2, keepWithNext=True))
s.add(ParagraphStyle(name="MetaCV", fontName="Helvetica-Oblique", fontSize=8, leading=10.5, textColor=MUTED, spaceAfter=5, keepWithNext=True))
s.add(ParagraphStyle(name="LabelCV", fontName="Helvetica-Bold", fontSize=8.5, leading=11, textColor=NAVY))
s.add(ParagraphStyle(name="TextCV", fontName="Helvetica", fontSize=8.5, leading=11.5, textColor=TEXT))
s.add(ParagraphStyle(name="ProjectTitleCV", fontName="Helvetica-Bold", fontSize=9.5, leading=12, textColor=NAVY, spaceAfter=3))
s.add(ParagraphStyle(name="ProjectTextCV", fontName="Helvetica", fontSize=8.6, leading=12, textColor=TEXT, spaceAfter=2))
s.add(ParagraphStyle(name="FooterCV", fontName="Helvetica", fontSize=7.5, leading=9, textColor=MUTED))

def p(text, style="BodyCV"):
    return Paragraph(text, s[style])

def footer(canvas, doc):
    canvas.saveState()
    canvas.setStrokeColor(RULE)
    canvas.setLineWidth(0.6)
    canvas.line(18*mm, 14*mm, A4[0]-18*mm, 14*mm)
    canvas.setFont("Helvetica", 7.5)
    canvas.setFillColor(MUTED)
    canvas.drawString(18*mm, 9*mm, "Jose Conca · Desarrollo de software")
    canvas.drawRightString(A4[0]-18*mm, 9*mm, str(doc.page))
    canvas.restoreState()

def info_table(rows, widths, label_column=False):
    table = Table(rows, colWidths=widths, hAlign="LEFT")
    cmds = [
        ("BOX", (0,0), (-1,-1), 0.6, RULE),
        ("INNERGRID", (0,0), (-1,-1), 0.35, RULE),
        ("VALIGN", (0,0), (-1,-1), "TOP"),
        ("LEFTPADDING", (0,0), (-1,-1), 3*mm),
        ("RIGHTPADDING", (0,0), (-1,-1), 3*mm),
        ("TOPPADDING", (0,0), (-1,-1), 2.3*mm),
        ("BOTTOMPADDING", (0,0), (-1,-1), 2.3*mm),
    ]
    if label_column:
        cmds.append(("BACKGROUND", (0,0), (0,-1), PALE))
    table.setStyle(TableStyle(cmds))
    return table

def project_card(title, description, url):
    content = [
        p(title, "ProjectTitleCV"),
        p(description, "ProjectTextCV"),
        p("Código: " + url, "ProjectTextCV"),
    ]
    table = Table([[content]], colWidths=[174*mm], hAlign="LEFT")
    table.setStyle(TableStyle([
        ("BACKGROUND", (0,0), (-1,-1), colors.HexColor("#F8FAFC")),
        ("BOX", (0,0), (-1,-1), 0.6, RULE),
        ("LINEBEFORE", (0,0), (0,0), 2.2, BLUE),
        ("LEFTPADDING", (0,0), (-1,-1), 4*mm),
        ("RIGHTPADDING", (0,0), (-1,-1), 4*mm),
        ("TOPPADDING", (0,0), (-1,-1), 3*mm),
        ("BOTTOMPADDING", (0,0), (-1,-1), 3*mm),
    ]))
    return table

doc = SimpleDocTemplate(str(OUT), pagesize=A4, leftMargin=18*mm, rightMargin=18*mm,
                        topMargin=13*mm, bottomMargin=19*mm, title="CV Jose Conca")
story = []

header_rows = [
    [p("Jose Conca", "NameCV")],
    [p("DESARROLLADOR DE SOFTWARE JUNIOR · BACKEND Y FULL STACK", "RoleCV")],
    [p("Telde, Las Palmas · vl.conca@gmail.com", "ContactCV")],
    [p("Portafolio: https://joseconca.github.io", "ContactCV")],
    [p("GitHub: https://github.com/joseconca · LinkedIn: https://linkedin.com/in/joseconca", "ContactCV")],
]
header = Table(header_rows, colWidths=[174*mm])
header.setStyle(TableStyle([
    ("BACKGROUND", (0,0), (-1,-1), PALE),
    ("BOX", (0,0), (-1,-1), 0.7, RULE),
    ("LEFTPADDING", (0,0), (-1,-1), 5*mm),
    ("RIGHTPADDING", (0,0), (-1,-1), 5*mm),
    ("TOPPADDING", (0,0), (-1,0), 3.5*mm),
    ("BOTTOMPADDING", (0,0), (-1,0), 1.2*mm),
    ("TOPPADDING", (0,1), (-1,-1), 1*mm),
    ("BOTTOMPADDING", (0,1), (-1,-1), 1*mm),
    ("BOTTOMPADDING", (0,-1), (-1,-1), 3.5*mm),
]))
story += [header, Spacer(1, 4*mm), p("PERFIL PROFESIONAL", "SectionCV")]
story.append(p("Desarrollador de software con experiencia profesional en Inerza trabajando con C#/.NET, integración de APIs REST, pruebas automatizadas, Git y metodología Scrum. Técnico Superior en Desarrollo de Aplicaciones Web y estudiante de Ingeniería Informática, actualmente con el TFG en desarrollo. Interesado en desarrollar aplicaciones fiables, colaborar en equipos técnicos y aplicar buenas prácticas de programación."))
story.append(p("EXPERIENCIA PROFESIONAL", "SectionCV"))
story += [
    p("Programador · Inerza", "JobCV"),
    p("Beca Inserta · Fundación Universitaria de Las Palmas | Julio 2025 – Mayo 2026", "MetaCV"),
]
for item in [
    "Desarrollo y mantenimiento de aplicaciones web y de escritorio con C#/.NET.",
    "Integración con APIs REST y actualización de funcionalidades según las necesidades del proyecto.",
    "Creación y ejecución de pruebas unitarias y end-to-end para apoyar la calidad del software.",
    "Trabajo con Git y colaboración en un equipo que utiliza metodología ágil Scrum.",
]:
    story.append(p("• " + item, "BulletCV"))
story += [Spacer(1, 2*mm), p("Analista y desarrollador en prácticas · Inerza", "JobCV"),
          p("Prácticas de Formación Profesional | Marzo 2025 – Junio 2025", "MetaCV")]
for item in [
    "Ajuste de modelos preentrenados con Hugging Face y Unsloth.",
    "Experimentación iterativa para evaluar el rendimiento de los modelos.",
    "Creación de imágenes Docker y despliegue de servicios de inferencia en Azure Container Apps.",
]:
    story.append(p("• " + item, "BulletCV"))

story.append(p("COMPETENCIAS TÉCNICAS", "SectionCV"))
skills = [
    [p("Lenguajes", "LabelCV"), p("C#, Python, Java, TypeScript, JavaScript, SQL", "TextCV")],
    [p("Backend y APIs", "LabelCV"), p(".NET / ASP.NET, FastAPI, Spring Boot, APIs REST", "TextCV")],
    [p("Bases de datos", "LabelCV"), p("PostgreSQL, MySQL, SQLite, Prisma, SQLAlchemy", "TextCV")],
    [p("Calidad", "LabelCV"), p("Git, pruebas unitarias y end-to-end, Postman, Cypress", "TextCV")],
    [p("Cloud e IA", "LabelCV"), p("Docker, Azure Container Apps, Hugging Face, Unsloth; GitHub Copilot, Continue y Ollama como apoyo al desarrollo", "TextCV")],
    [p("Frontend", "LabelCV"), p("Next.js, React, HTML5, CSS3, Tailwind CSS", "TextCV")],
]
story += [info_table(skills, [35*mm, 139*mm], label_column=True), PageBreak()]

story.append(p("PROYECTOS SELECCIONADOS", "SectionCV"))
story += [
    project_card("Find My Pet · API y aplicación web",
                 "Aplicación para gestionar mascotas perdidas y avistamientos geolocalizados. Backend con Python, FastAPI y SQLAlchemy; SQLite y Google Maps API.",
                 "https://github.com/joseconca/proyecto-final-DAW"),
    Spacer(1, 3*mm),
    project_card("Timeline: historia de la informática · Aplicación full stack",
                 "Juego web para ordenar cronológicamente eventos. Desarrollado con Next.js, React, TypeScript, PostgreSQL y Prisma, con lógica de juego y gestión de eventos.",
                 "https://github.com/joseconca/proyecto-timeline"),
    Spacer(1, 3*mm),
    project_card("Gremio Expediciones · RPG web en desarrollo",
                 "Proyecto de rol web con personajes, inventario, misiones y combates por turnos. Usa Next.js, TypeScript, PostgreSQL, Prisma y Zustand; incluye pruebas automatizadas para partes de la lógica de negocio y las API.",
                 "https://github.com/joseconca/gremio-expediciones"),
    p("FORMACIÓN ACADÉMICA", "SectionCV"),
]
education = [
    [p("Ciclo Formativo de Grado Superior en Desarrollo de Aplicaciones Web", "JobCV"),
     p("IES El Rincón · Finalizado en 2025", "MetaCV")],
    [p("Grado en Ingeniería Informática · Especialidad en Tecnologías de la Información", "JobCV"),
     p("Universidad Politécnica de Valencia · En curso; TFG en desarrollo", "MetaCV")],
]
edu_table = Table([[education[0]], [education[1]]], colWidths=[174*mm], hAlign="LEFT")
edu_table.setStyle(TableStyle([
    ("BACKGROUND", (0,0), (-1,-1), PALE),
    ("BOX", (0,0), (-1,-1), 0.6, RULE),
    ("INNERGRID", (0,0), (-1,-1), 0.35, RULE),
    ("LEFTPADDING", (0,0), (-1,-1), 3.5*mm),
    ("RIGHTPADDING", (0,0), (-1,-1), 3.5*mm),
    ("TOPPADDING", (0,0), (-1,-1), 3*mm),
    ("BOTTOMPADDING", (0,0), (-1,-1), 2*mm),
    ("VALIGN", (0,0), (-1,-1), "TOP"),
]))
story += [edu_table, p("OTROS DATOS", "SectionCV")]
other = [
    [p("Idiomas", "LabelCV"), p("Español y valenciano nativos. Inglés avanzado en lectura y escritura; nivel intermedio oral.", "TextCV")],
    [p("Discapacidad", "LabelCV"), p("Discapacidad reconocida del 39%.", "TextCV")],
]
story += [info_table(other, [35*mm, 139*mm], label_column=True), Spacer(1, 4*mm),
          HRFlowable(width="100%", thickness=0.6, color=RULE), Spacer(1, 2*mm),
          p("Portafolio: https://joseconca.github.io · GitHub: https://github.com/joseconca", "FooterCV")]

doc.build(story, onFirstPage=footer, onLaterPages=footer)
