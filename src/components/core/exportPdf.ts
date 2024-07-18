//  import { ICertificate } from '@/types'
import { jsPDF } from 'jspdf'

function upperCaseAll(word: string) {
  return word.toUpperCase()
}

// Incluye la fuente Poppins en base64
const poppinsRegular =
  'data:font/ttf;base64,AAEAAAARAQAABAAwRFNJRwAAAAEAAAApAAAA...' // Asegúrate de incluir la fuente completa en base64
const poppinsBold =
  'data:font/ttf;base64,AAEAAAARAQAABAAwRFNJRwAAAAEAAAApAAAA...'
// /src/types/index.ts
export interface ICertificate {
  // define los campos de la interfaz aquí
  'nombres y apellidos': string
  documento: string
  celular: string
  grupo: string
  curso: string
  // otros campos que tengas
}

export const exportPdf = async (certificate: ICertificate) => {
  const doc = new jsPDF({
    orientation: 'landscape',
    unit: 'mm',
    putOnlyUsedFonts: true,
  })

  // Agrega las fuentes Poppins al documento
  doc.addFileToVFS('Courgette-Regular.ttf', poppinsRegular)
  doc.addFileToVFS('Poppins-Bold.ttf', poppinsBold)
  // doc.addFont('Poppins-Regular.ttf', 'Poppins', 'normal')
  // doc.addFont('Poppins-Bold.ttf', 'Poppins', 'bold')

  const imageUrl = '/images/certificado.png'

  try {
    const imageResponse = await fetch(imageUrl)
    const imageBlob = await imageResponse.blob()
    const reader = new FileReader()

    reader.onload = function () {
      const base64Image = reader.result as string
      doc.addImage(base64Image, 'JPEG', 0, 0, 300, 220)
      doc.setFont('Courgette', 'normal')
      doc.setFontSize(32)
      const nombresYApellidos = certificate['nombres y apellidos'].toUpperCase()
      const textWidthNombres = doc.getTextWidth(nombresYApellidos)
      const xNombres = (doc.internal.pageSize.width - textWidthNombres) / 2

      doc.text(nombresYApellidos, xNombres, 95)
      doc.setFont('Poppins', 'bold')
      doc.setFontSize(16)

      const curso = upperCaseAll(certificate.curso)
      const textWidthCurso = doc.getTextWidth(curso)
      const xCurso = (doc.internal.pageSize.width - textWidthCurso) / 2

      doc.text(curso, xCurso, 120)
      doc.save(`${certificate['nombres y apellidos']}.pdf`)
    }

    reader.readAsDataURL(imageBlob)
  } catch (error) {
    console.error('Error al descargar la imagen:', error)
  }
}
