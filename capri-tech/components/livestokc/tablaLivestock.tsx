"use client"
import { useState, useEffect } from "react"

function formatearFecha(fechaISO: string) {
  if (!fechaISO) return "—"
  const fecha = new Date(fechaISO)
  return fecha.toLocaleDateString("es-CO")
}

export default function TablaLivestock() {
  const [animales, setAnimales] = useState([])
  const [cargando, setCargando] = useState(true)

  useEffect(function cargarAnimales() {
    async function obtenerAnimales() {
      try {
        const respuesta = await fetch("http://localhost:3001/api/livestock/livestockAll")
        const datos = await respuesta.json()
        setAnimales(datos.data)
      } catch (error) {
        console.error("Error al cargar los animales:", error)
      } finally {
        setCargando(false)
      }
    }
    obtenerAnimales()
  }, [])

  return (
    <div className="flex justify-center py-10 px-6 ">
      <div className="w-full max-w-6xl bg-white shadow-lg rounded-2xl overflow-hidden">

        <div className="bg-green-700 text-white p-6">
          <h1 className="text-2xl font-bold">Tabla de Inventario</h1>
          <p className="text-green-100 mt-1">Registro general de animales del inventario</p>
        </div>

        <div className="p-6 overflow-x-auto">
          <table className="w-full border-collapse">

            <thead>
              <tr className="bg-green-100 text-green-800">
                <th className="p-3 text-left">Nombre</th>
                <th className="p-3 text-left">Chapeta</th>
                <th className="p-3 text-left">Fecha de nacimiento</th>
                <th className="p-3 text-left">Raza</th>
                <th className="p-3 text-left">Sexo</th>
                <th className="p-3 text-left">Etapa de Producción</th>
                <th className="p-3 text-left">Observaciones</th>
              </tr>
            </thead>

            <tbody>
              {cargando && (
                <tr>
                  <td colSpan={7} className="p-6 text-center text-gray-500">
                    Cargando animales...
                  </td>
                </tr>
              )}

              {!cargando && animales.length === 0 && (
                <tr>
                  <td colSpan={7} className="p-6 text-center text-gray-500">
                    Todavía no hay animales registrados.
                  </td>
                </tr>
              )}

              {!cargando && animales.map(function renderFila(animal: any) {
                return (
                  <tr key={animal.id} className="border-b hover:bg-green-50 transition">
                    <td className="p-3">{animal.nombre}</td>
                    <td className="p-3">{animal.chapeta}</td>
                    <td className="p-3">{formatearFecha(animal.fechaNacimiento)}</td>
                    <td className="p-3">{animal.raza}</td>
                    <td className="p-3">{animal.sexo}</td>
                    <td className="p-3">{animal.etapaProduccion}</td>
                    <td className="p-3">{animal.observaciones || "—"}</td>
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