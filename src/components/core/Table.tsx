export interface ICertificate {
  id: number
  tema: string
  curso: string
  categoria: string
  dni: string
  fecha: string
  nombres: string
  apellidos: string
}

interface Props {
  certificates: ICertificate[]
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
              Nombre
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
              Fecha
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
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10">
                    <img
                      className="h-10 w-10 rounded-full"
                      src="https://randomuser.me/api/portraits"
                      alt=""
                    />
                  </div>
                  <div className="text-sm font-medium text-gray-900">
                    {certificate.nombres} {certificate.apellidos}
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{certificate.curso}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="text-sm text-gray-900">
                  {certificate.fecha}
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
