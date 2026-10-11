from pathlib import Path
from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import mm
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak

out = Path(__file__).resolve().parents[1] / "public" / "CV_Jose_Conca_082026.pdf"
navy, blue, pale, muted = colors.HexColor("#13243A"), colors.HexColor("#2563A6"), colors.HexColor("#EAF1F8"), colors.HexColor("#5B6878")
s = getSampleStyleSheet()
s.add(ParagraphStyle(name="N", fontName="Helvetica-Bold", fontSize=21, leading=24, textColor=navy, spaceAfter=3))
s.add(ParagraphStyle(name="R", fontSize=9, textColor=blue, spaceAfter=4))
s.add(ParagraphStyle(name="S", fontName="Helvetica-Bold", fontSize=9, leading=11, textColor=navy, spaceBefore=6, spaceAfter=3))
s.add(ParagraphStyle(name="B", fontSize=7.6, leading=9.8, spaceAfter=2))
s.add(ParagraphStyle(name="M", fontName="Helvetica-Oblique", fontSize=7, leading=8, textColor=muted, spaceAfter=2))
s.add(ParagraphStyle(name="J", fontName="Helvetica-Bold", fontSize=8, leading=9.5, textColor=navy, spaceAfter=1))
def p(t, st="B"): return Paragraph(t, s[st])
def footer(c, d):
    c.setFont("Helvetica", 7); c.setFillColor(muted)
    c.drawString(18*mm, 9*mm, "Jose Conca · Desarrollo de software")
    c.drawRightString(A4[0]-18*mm, 9*mm, str(d.page))
d=SimpleDocTemplate(str(out),pagesize=A4,leftMargin=18*mm,rightMargin=18*mm,topMargin=12*mm,bottomMargin=17*mm,title="CV Jose Conca")
a=[[p("Jose Conca","N")],[p("DESARROLLADOR DE SOFTWARE JUNIOR · BACKEND Y FULL STACK","R")],[p("Telde, Las Palmas · vl.conca@gmail.com")],[p("Portafolio: https://joseconca.github.io")],[p("GitHub: https://github.com/joseconca · LinkedIn: https://linkedin.com/in/joseconca")]]
t=Table(a,colWidths=[174*mm]); t.setStyle(TableStyle([("BACKGROUND",(0,0),(-1,-1),pale),("BOX",(0,0),(-1,-1),.5,colors.lightgrey),("LEFTPADDING",(0,0),(-1,-1),4*mm),("TOPPADDING",(0,0),(-1,-1),1.2*mm),("BOTTOMPADDING",(0,0),(-1,-1),1.2*mm)]))
story=[t,p("PERFIL PROFESIONAL","S"),p("Desarrollador de software con experiencia en Inerza trabajando con C#/.NET, APIs REST, pruebas automatizadas, Git y Scrum. Técnico Superior en Desarrollo de Aplicaciones Web y estudiante de Ingeniería Informática, con el TFG en desarrollo. Interés en crear aplicaciones fiables y mantener buenas prácticas de programación."),p("EXPERIENCIA PROFESIONAL","S"),p("Programador · Inerza","J"),p("Beca Inserta · Fundación Universitaria de Las Palmas | Julio 2025 – Mayo 2026","M")]
for x in ["Desarrollo y mantenimiento de aplicaciones web y de escritorio con C#/.NET.","Integración con APIs REST y actualizaciones según las necesidades del cliente.","Pruebas unitarias y end-to-end; uso de Git y metodología Scrum."]: story.append(p("• "+x))
story += [p("Analista y desarrollador en prácticas · Inerza","J"),p("Prácticas de Formación Profesional | Marzo 2025 – Junio 2025","M")]
for x in ["Ajuste de modelos preentrenados con Hugging Face y Unsloth.","Experimentación iterativa para evaluar el rendimiento de los modelos.","Creación de imágenes Docker y despliegue en Azure Container Apps."]: story.append(p("• "+x))
story += [p("COMPETENCIAS TÉCNICAS","S")]
for label, val in [("Lenguajes","C#, Python, Java, TypeScript, JavaScript, SQL"),("Backend / APIs",".NET / ASP.NET, FastAPI, Spring Boot, APIs REST"),("Datos","PostgreSQL, MySQL, SQLite, Prisma, SQLAlchemy"),("Calidad","Git, pruebas unitarias y end-to-end, Postman, Cypress"),("Cloud / IA","Docker, Azure Container Apps, Hugging Face, Unsloth; GitHub Copilot, Continue y Ollama"),("Full stack","Next.js, React, HTML5, CSS3, Tailwind CSS")]:
    story.append(p("<b>"+label+":</b> "+val))
story += [PageBreak(),p("PROYECTOS SELECCIONADOS","S"),p("<b>Find My Pet.</b> Backend con Python, FastAPI y SQLAlchemy, persistencia SQLite e integración con Google Maps API. Código: https://github.com/joseconca/proyecto-final-DAW."),p("<b>Timeline: historia de la informática.</b> Juego web con Next.js, React, TypeScript, PostgreSQL y Prisma. Código: https://github.com/joseconca/proyecto-timeline."),p("<b>Gremio Expediciones.</b> RPG web en desarrollo con Next.js, TypeScript, PostgreSQL, Prisma y Zustand; pruebas para partes de la lógica de negocio y las API. Código: https://github.com/joseconca/gremio-expediciones."),p("FORMACIÓN ACADÉMICA","S"),p("<b>Ciclo Formativo de Grado Superior en Desarrollo de Aplicaciones Web</b> · IES El Rincón · Finalizado en 2025."),p("<b>Grado en Ingeniería Informática, especialidad en Tecnologías de la Información</b> · Universidad Politécnica de Valencia · En curso; TFG en desarrollo."),p("OTROS DATOS","S"),p("<b>Idiomas:</b> español y valenciano nativos; inglés avanzado en lectura y escritura, intermedio oral."),p("<b>Discapacidad reconocida:</b> 39%."),Spacer(4),p("Portafolio: https://joseconca.github.io · GitHub: https://github.com/joseconca")]
d.build(story,onFirstPage=footer,onLaterPages=footer)
