import { useState } from 'react'
import { ButtonSearch } from './ButtonSearch'
import { Table } from './Table'
import data from '@/utils/json/data.json'

interface ICertificate {
  id: number
  tema: string
  curso: string
  categoria: string
  dni: string
  fecha: string
  nombres: string
  apellidos: string
}

function findCertificates(dni: string, data: ICertificate[]): ICertificate[] {
  return data.filter((certificate: ICertificate) => certificate.dni === dni)
}

export const ConsultSection = () => {
  // const certificates = findCertificates(dni, data)
  const [certificates, setCertificates] = useState<ICertificate[]>([])
  function onLoad() {
    // const form = document.getElementById('search-form')
    const dni = (document.getElementById('dni') as HTMLInputElement).value

    const certificates = findCertificates(dni, data.certificados)
    setCertificates(certificates)
    // return certificates
  }

  return (
    <>
      <section className="w-full max-w-6xl bg-white p-6 flex flex-col gap-5">
        <div>
          <h2 className="font-medium text-2xl">
            Ingrese la información solicitada para descargar su certificado.
          </h2>
        </div>
        <form
          id="search-form"
          className="container"
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
                // autocomplete="name"
                className="border border-gray-300 rounded-md w-full p-2"
                placeholder="Ingrese tu número de DNI"
                // minlength="7"
                required
              />
            </div>
            <div className="mt-5">
              <ButtonSearch
                type="button"
                onClick={() => {
                  onLoad()
                }}
              />
            </div>
          </div>
        </form>
        <div>
          <h2 className="font-medium text-2xl">Certificados disponibles</h2>
        </div>
        <Table certificates={certificates} />
      </section>
    </>
  )
}
