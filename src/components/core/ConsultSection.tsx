import { useState } from 'react'
import { ButtonClear } from './ButtonClear'
import { ButtonSearch } from './ButtonSearch'
import { Table } from './Table'
import type { ICertificate } from '@/types'

function findCertificates(dni: string, data: ICertificate[]): ICertificate[] {
  return data.filter(
    (certificate: ICertificate) => certificate.documento === dni
  )
}

export const ConsultSection = () => {
  const [textSearch, setTextSearch] = useState<string>('')
  const [certificates, setCertificates] = useState<ICertificate[] | null>(null)

  async function onLoad() {
    const certificatesData = await fetch('/data.json')
    const data = await certificatesData.json()

    const certificates = findCertificates(textSearch, data)
    setCertificates(certificates)
  }

  return (
    <>
      <section className="w-full lg:max-w-6xl bg-white p-4 lg:p-6 flex flex-col gap-5">
        <div>
          <h2 className="font-medium text-2xl">
            Ingrese la información solicitada para descargar su certificado.
          </h2>
        </div>
        <div
          id="search-form"
          className=""
          //   onload="onLoad"
        >
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-2">
            <div className="w-full">
              <label className="block text-sm font-medium text-gray-700">
                Nombre
              </label>
              <input
                type="text"
                name="dni"
                id="dni"
                value={textSearch}
                onChange={(e) => setTextSearch(e.target.value)}
                // autocomplete="name"
                className="border border-gray-300 rounded-md w-full p-2"
                placeholder="Ingrese tu número de DNI"
                // minlength="7"
                required
              />
            </div>
            <div className="sm:mt-5 flex sm:items-center gap-2 w-full sm:w-auto">
              <ButtonSearch
                type="button"
                onClick={() => {
                  onLoad()
                }}
              />
              {textSearch !== '' && (
                <ButtonClear
                  type="button"
                  onClick={() => {
                    setTextSearch('')
                    setCertificates(null)
                  }}
                />
              )}
            </div>
          </div>
        </div>
        {textSearch !== '' && certificates ? (
          <>
            <div>
              <h2 className="font-medium text-2xl">Certificados disponibles</h2>
            </div>
            <Table certificates={certificates} />
          </>
        ) : (
          <div className="text-sm text-gray-900 text-center p-6 flex flex-col gap-2 justify-center items-center">
            <img
              alt="File searching"
              src="/svg/file-searching.svg"
              className="w-72"
            />
            <p>
              Ingrese su número de DNI y haga clic en buscar para obtener sus
              certificados.
            </p>
          </div>
        )}
      </section>
    </>
  )
}
