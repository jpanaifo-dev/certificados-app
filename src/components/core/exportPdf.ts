//  import { ICertificate } from '@/types'
import { jsPDF } from 'jspdf'

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}
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
  console.log('Descargando certificado', certificate)
  const doc = new jsPDF({
    orientation: 'landscape',
    unit: 'mm',
  })

  const imageUrl = '/images/certificado.png'

  try {
    const imageResponse = await fetch(imageUrl)
    const imageBlob = await imageResponse.blob()
    const reader = new FileReader()

    reader.onload = function () {
      const base64Image = reader.result as string
      doc.addImage(base64Image, 'JPEG', 0, 0, 300, 220)
      doc.setFontSize(32)
      doc.text(`${certificate['nombres y apellidos']}`, 60, 95)
      doc.setFontSize(18)

      const curso = capitalizeFirstLetter(certificate.curso)
      doc.text(`${curso}`, 85, 120)

      doc.save(`${certificate['nombres y apellidos']}.pdf`)
    }

    reader.readAsDataURL(imageBlob)
  } catch (error) {
    console.error('Error al descargar la imagen:', error)
  }
}
