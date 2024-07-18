//  import { ICertificate } from '@/types'
import { jsPDF } from 'jspdf'
import { font } from './fonts/Poppins-Bold-normal'
import { font as fontCourgette } from './fonts/Courgette-Regular-normal'

function upperCaseAll(word: string) {
  return word.toUpperCase()
}

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

  // Agrega la fuente Poppins al documento
  doc.addFileToVFS('Poppins-Bold.ttf', font)
  doc.addFont('Poppins-Bold.ttf', 'Poppins', 'bold')
  doc.addFileToVFS('Courgette-Regular.ttf', fontCourgette)
  doc.addFont('Courgette-Regular.ttf', 'Courgette', 'normal')

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
