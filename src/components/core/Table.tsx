import { useState } from 'react'
import type { ICertificate } from '@/types'
import { PdfView } from '../react'

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

  const handleOpen = (certificate: ICertificate) => {
    setIsOpen(true)
    setData(certificate)
  }

  return (
    <>
      <table className="min-w-full divide-y divide-gray-200">
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
            <tr key={certificate.id}>
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
                  className="text-indigo-600 hover:text-indigo-900"
                  onClick={() => {
                    handleOpen(certificate)
                  }}
                >
                  Ver certificado
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
                <div className="text-sm text-gray-900 text-center p-6">
                  No se encontraron certificados
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <ModalCertificate
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        data={data as ICertificate}
      />
    </>
  )
}

interface IModalCertificate {
  isOpen: boolean
  onClose: () => void
  data: ICertificate
}

const ModalCertificate = (props: IModalCertificate) => {
  const { isOpen, onClose, data } = props

  const className = isOpen
    ? 'fixed inset-0 z-50 overflow-y-auto bg-gray-900 bg-opacity-50 transition-opacity duration-300 ease-in-out'
    : 'hidden'

  return (
    <section className={className}>
      <div className="relative p-4 mx-auto mt-10 bg-white w-full max-w-6xl rounded-lg">
        <header className="flex items-center justify-between">
          <div className="w-full flex flex-col gap-2">
            <h2 className="text-lg font-medium text-gray-700">
              Visualización de certificado
            </h2>
            <hr />
          </div>
          <button
            className="text-gray-500 hover:text-gray-700"
            onClick={onClose}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </header>
        <div className="p-4">
          {/* <p className="text-sm text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatem, quod doloremque, quas, quidem nemo quae voluptate
            perspiciatis tempore exercitationem.
          </p> */}
          {/* <PdfGenerator>
            <div className="p-4 bg-gray-100 mb-4">
              <h1 className="text-3xl font-semibold text-center">
                Certificado
              </h1>
              <p className="text-lg text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </PdfGenerator> */}
          <PdfView userdata={data} />
        </div>
      </div>
    </section>
  )
}
