"use client"

import { useState, useEffect } from "react"

export default function TablaFamacha() {
  const [registros, setRegistros] = useState<any[]>([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState("")

  useEffect(function cargarFamacha() {
    async function obtenerFamacha() {
      try {
        setCargando(true)
        setError("")
        
        const respuesta = await fetch("http://localhost:3001/api/famacha/famachaAll")
        const datos = await respuesta.json()
        console.log("Respuesta FAMACHA:", datos)
        
        if (!respuesta.ok) {
          throw new Error(datos.message || "Error al consultar registros FAMACHA")
        }
        
        // Extraer los datos correctamente
        let listaRegistros = []
        if (datos.data && Array.isArray(datos.data)) {
          listaRegistros = datos.data
        } else if (Array.isArray(datos)) {
          listaRegistros = datos
        } else {
          listaRegistros = []
        }
        
        setRegistros(listaRegistros)
      } catch (error: any) {
        console.error("Error al cargar los registros de FAMACHA:", error)
        setError(error.message || "No se pudieron cargar los registros")
        setRegistros([])
      } finally {
        setCargando(false)
      }
    }
    obtenerFamacha()
  }, [])

  // Función para obtener el texto descriptivo del resultado
  function getResultadoTexto(resultado: string) {
    const map: { [key: string]: string } = {
      '1': '1 - Rojo (sin anemia)',
      '2': '2 - Rojo rosado (sin anemia)',
      '3': '3 - Rosado (anemia leve)',
      '4': '4 - Rosado palido (anemia moderada)',
      '5': '5 - Blanco (anemia severa)'
    }
    return map[resultado] || resultado
  }

  // Función para obtener el color según el resultado
  function getResultadoColor(resultado: string) {
    const map: { [key: string]: string } = {
      '1': 'bg-red-600 text-white',
      '2': 'bg-red-400 text-white',
      '3': 'bg-pink-300 text-gray-800',
      '4': 'bg-pink-200 text-gray-800',
      '5': 'bg-gray-100 text-gray-800'
    }
    return map[resultado] || 'bg-gray-100'
  }

  return (
    <div className="flex justify-center py-10 px-6 ">
      <div className="w-full max-w-6xl bg-white shadow-lg rounded-2xl overflow-hidden">

        <div className="bg-green-700 text-white p-6">
          <h1 className="text-2xl font-bold">Tabla FAMACHA</h1>
          <p className="text-green-100 mt-1">Registro de resultados de pruebas FAMACHA</p>
        </div>

        <div className="p-6 overflow-x-auto">
          {error && (
            <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
              <p className="text-red-700 font-semibold">Error:</p>
              <p className="text-red-700 text-sm">{error}</p>
            </div>
          )}

          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-green-100 text-green-800">
                <th className="p-3 text-left">Chapeta</th>
                <th className="p-3 text-left">Responsable</th>
                <th className="p-3 text-left">Resultado</th>
                <th className="p-3 text-left">Observaciones</th>
              </tr>
            </thead>

            <tbody>
              {cargando && (
                <tr>
                  <td colSpan={4} className="p-6 text-center text-gray-500">
                    <div className="flex justify-center items-center space-x-2">
                      <svg className="animate-spin h-5 w-5 text-green-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Cargando registros...</span>
                    </div>
                  </td>
                </tr>
              )}

              {!cargando && !error && registros.length === 0 && (
                <tr>
                  <td colSpan={4} className="p-6 text-center text-gray-500">
                    Todavia no hay registros de FAMACHA.
                  </td>
                </tr>
              )}

              {!cargando && !error && registros.map(function renderFila(registro: any, index: number) {
                return (
                  <tr key={registro.id || index} className="border-b hover:bg-green-50 transition">
                    <td className="p-3 font-medium">{registro.chapeta}</td>
                    <td className="p-3">{registro.responsable}</td>
                    <td className="p-3">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getResultadoColor(registro.resultado)}`}>
                        {getResultadoTexto(registro.resultado)}
                      </span>
                    </td>
                    <td className="p-3 text-gray-600">{registro.observaciones || "—"}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}