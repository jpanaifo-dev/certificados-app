import type { ICertificate } from '@/types'

interface Props {
  certificates: ICertificate[]
}

function generateAvatar(name: string) {
  const [firstName, lastName] = name.split(' ')
  return `${firstName.charAt(0)}${lastName.charAt(0)}`
}

export const Table = (props: Props) => {
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
                <div className="text-sm text-gray-900 uppercase">{certificate.curso}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="text-sm text-gray-900">
                  {certificate.grupo}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <a
                  href="#"
                  target="_blank"
                  className="text-indigo-600 hover:text-indigo-900"
                >
                  Descargar
                </a>
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
    </>
  )
}
