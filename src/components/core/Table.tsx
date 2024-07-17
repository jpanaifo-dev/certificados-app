import type { ICertificate } from '@/types'
import { useState } from 'react'

interface Props {
  certificates: ICertificate[]
}

function generateAvatar(name: string) {
  const [firstName, lastName] = name.split(' ')
  return `${firstName.charAt(0)}${lastName.charAt(0)}`
}

export const Table = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  const { certificates } = props

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
                  onClick={() => setIsOpen(true)}
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
      />
    </>
  )
}

interface IModalCertificate {
  isOpen: boolean
  onClose: () => void
}

const ModalCertificate = (props: IModalCertificate) => {
  const { isOpen, onClose } = props

  const className = isOpen
    ? 'fixed inset-0 z-50 overflow-y-auto bg-gray-900 bg-opacity-50'
    : 'hidden'

  return (
    <section className={className}>
      <div className="relative p-4 mx-auto mt-10 bg-white w-96 rounded-lg">
        <header className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Certificado</h2>
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
          <p className="text-sm text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatem, quod doloremque, quas, quidem nemo quae voluptate
            perspiciatis tempore exercitationem.
          </p>
        </div>
      </div>
    </section>
  )
}
