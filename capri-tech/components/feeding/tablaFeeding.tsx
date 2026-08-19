"use client"

import { useState, useEffect } from "react"

function formatearFecha(fechaISO: string) {
  if (!fechaISO) return "—"
  try {
    const fecha = new Date(fechaISO)
    return fecha.toLocaleDateString("es-CO")
  } catch {
    return "—"
  }
}

export default function TablaAlimentacion() {
  const [alimentaciones, setAlimentaciones] = useState<any[]>([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState("")

  useEffect(function cargarAlimentaciones() {
    async function obtenerAlimentaciones() {
      try {
        setCargando(true)
        setError("")
        
        const respuesta = await fetch("http://localhost:3001/api/feeding/feedingsAll")
        const datos = await respuesta.json()
        console.log("Respuesta FEEDING:", datos)
        
        if (!respuesta.ok) {
          throw new Error(datos.message || "Error al cargar alimentaciones")
        }
        
        let listaAlimentaciones = []
        if (datos.data && Array.isArray(datos.data)) {
          listaAlimentaciones = datos.data
        } else if (Array.isArray(datos)) {
          listaAlimentaciones = datos
        } else {
          listaAlimentaciones = []
        }
        
        setAlimentaciones(listaAlimentaciones)
      } catch (error: any) {
        console.error("Error al cargar la alimentacion:", error)
        setError(error.message || "No se pudieron cargar las alimentaciones")
        setAlimentaciones([])
      } finally {
        setCargando(false)
      }
    }
    obtenerAlimentaciones()
  }, [])

  return (
    <div className="flex justify-center py-10 px-6 ">
      <div className="w-full max-w-6xl bg-white shadow-lg rounded-2xl overflow-hidden">

        <div className="bg-green-700 text-white p-6">
          <h1 className="text-2xl font-bold">Tabla de Alimentacion</h1>
          <p className="text-green-100 mt-1">Registro de alimentacion de los caprinos</p>
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
                <th className="p-3 text-left">Fecha</th>
                <th className="p-3 text-left">Hora</th>
                <th className="p-3 text-left">Responsable</th>
                <th className="p-3 text-left">Alimento</th>
                <th className="p-3 text-left">Cantidad (Kg)</th>
              </tr>
            </thead>

            <tbody>
              {cargando && (
                <tr>
                  <td colSpan={5} className="p-6 text-center text-gray-500">
                    <div className="flex justify-center items-center space-x-2">
                      <svg className="animate-spin h-5 w-5 text-green-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Cargando alimentacion...</span>
                    </div>
                  </td>
                </tr>
              )}

              {!cargando && !error && alimentaciones.length === 0 && (
                <tr>
                  <td colSpan={5} className="p-6 text-center text-gray-500">
                    Todavia no hay alimentacion registrada.
                  </td>
                </tr>
              )}

              {!cargando && !error && alimentaciones.map(function renderFila(item: any, index: number) {
                return (
                  <tr key={item.id || index} className="border-b hover:bg-green-50 transition">
                    <td className="p-3">{formatearFecha(item.fecha)}</td>
                    <td className="p-3">{item.hora}</td>
                    <td className="p-3">{item.responsable}</td>
                    <td className="p-3">{item.alimento}</td>
                    <td className="p-3 font-medium">{item.cantidad} Kg</td>
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