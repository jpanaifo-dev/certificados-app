import { useState } from 'react'
import type { ICertificate } from '@/types'
import { exportPdf } from './exportPdf.ts'

interface Props {
  certificates: ICertificate[]
}

function generateAvatar(name: string) {
  const [firstName, lastName] = name.split(' ')
  return `${firstName.charAt(0)}${lastName.charAt(0)}`
}

export const Table = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  const [data, setData] = useState<ICertificate | null>(null)

  const { certificates } = props

  const handleDownload = async (certificate: ICertificate) => {
    await exportPdf(certificate)
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200 shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Nombres y Apellidos
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Curso
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Grupo
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Descargar
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {certificates?.map((certificate) => (
            <tr key={certificate.documento}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center gap-2">
                  <div className="flex-shrink-0 h-10 w-10">
                    <span className="h-10 w-10 bg-gray-200 flex items-center justify-center rounded-full">
                      {generateAvatar(certificate['nombres y apellidos'])}
                    </span>
                  </div>
                  <div className="text-sm font-medium text-gray-900">
                    {certificate['nombres y apellidos']}
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900 uppercase">
                  {certificate.curso}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="text-sm text-gray-900">
                  {certificate.grupo}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {/* <a
                  href="#"
                  target="_blank"
                  className="text-indigo-600 hover:text-indigo-900"
                >
                  Descargar
                </a> */}
                <button
                  onClick={() => handleDownload(certificate)}
                  className="text-indigo-600 hover:text-indigo-900"
                >
                  Descargar
                </button>
              </td>
            </tr>
          ))}
          {certificates.length === 0 && (
            <tr>
              <td
                className="px-6 py-4 whitespace-nowrap"
                colSpan={4}
              >
                <div className="text-sm text-gray-900 text-center p-6 flex flex-col gap-2 justify-center items-center">
                  <img
                    alt="File searching"
                    src="/svg/no-data.svg"
                    className="w-72"
                  />
                  <p>No se encontraron certificados</p>
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

// interface IModalCertificate {
//   isOpen: boolean
//   onClose: () => void
//   data: ICertificate
// }

// const ModalCertificate = (props: IModalCertificate) => {
//   const { isOpen, onClose, data } = props

//   const className = isOpen
//     ? 'fixed inset-0 z-50 overflow-y-auto bg-gray-900 bg-opacity-50 transition-opacity duration-300 ease-in-out'
//     : 'hidden'

//   return (
//     <section className={className}>
//       <div className="relative p-4 mx-auto mt-10 bg-white w-full max-w-6xl rounded-lg">
//         <header className="flex items-center justify-between">
//           <div className="w-full flex flex-col gap-2">
//             <h2 className="text-lg font-medium text-gray-700">
//               Visualización de certificado
//             </h2>
//             <hr />
//           </div>
//           <button
//             className="text-gray-500 hover:text-gray-700"
//             onClick={onClose}
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             </svg>
//           </button>
//         </header>
//         <div className="p-4">
//           <PdfView userdata={data} />
//         </div>
//       </div>
//     </section>
//   )
// }
