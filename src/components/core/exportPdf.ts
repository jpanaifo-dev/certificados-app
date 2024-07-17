import { ICertificate } from '@/types'
import { jsPDF } from 'jspdf'

// Default export is a4 paper, portrait, using millimeters for units
const doc = new jsPDF({
  orientation: 'landscape',
})
doc.addImage('/images/certificado', 'JPEG', 15, 40, 180, 180)

doc.save('certificado.pdf')

// crea una funcion que reciba un barametro y lugo exporta el pdf

export const exportPdf = (certificate: ICertificate) => {
  const doc = new jsPDF({
    orientation: 'landscape',
  })
  doc.addImage('/images/certificado', 'JPEG', 15, 40, 180, 180)
  doc.text(
    `Nombres y Apellidos: ${certificate['nombres y apellidos']}`,
    15,
    230
  )
  doc.text(`Curso: ${certificate.curso}`, 15, 240)
  doc.text(`Grupo: ${certificate.grupo}`, 15, 250)
  doc.save('certificado.pdf')
}
