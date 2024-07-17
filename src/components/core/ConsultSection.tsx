import { useEffect, useState } from 'react'
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
  // const certificates = findCertificates(dni, data)
  const [textSearch, setTextSearch] = useState<string>('')
  const [certificates, setCertificates] = useState<ICertificate[] | null>(null)

  const getDniFromParams = () => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search)
      const dni = urlParams.get('dni')
      return dni
    }
  }

  useEffect(() => {
    const dni = getDniFromParams()
    if (dni) {
      setTextSearch(dni)
      onLoad()
    }
  }, [])

  //   const textSearch = document.getElementById('dni') as HTMLInputElement
  //   const value = textSearch.value
  async function onLoad() {
    // const form = document.getElementById('search-form')
    // const dni = (document.getElementById('dni') as HTMLInputElement).value

    const certificatesData = await fetch('/data.json')
    const data = await certificatesData.json()

    const certificates = findCertificates(textSearch, data)
    setCertificates(certificates)
    // return certificates
  }

  return (
    <>
      <section className="w-full lg:max-w-6xl bg-white lg:p-6 flex flex-col gap-5">
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
          <div className="flex items-center gap-2">
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
            <div className="mt-5 flex items-center gap-2">
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
        ) : null}
      </section>
    </>
  )
}
