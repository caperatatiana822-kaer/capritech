"use client"

import { useState, useEffect } from "react"

function formatearFecha(fechaISO: string) {
  if (!fechaISO) return "—"
  const fecha = new Date(fechaISO)
  return fecha.toLocaleDateString("es-CO")
}

function formatearMoneda(valor: number) {
  if (valor === null || valor === undefined) return "—"
  return new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP", maximumFractionDigits: 0 }).format(valor)
}

export default function TablaProduction() {
  const [produccion, setProduccion] = useState([])
  const [cargando, setCargando] = useState(true)

  useEffect(function cargarProduccion() {
    async function obtenerProduccion() {
      try {
        const respuesta = await fetch("http://localhost:3001/api/production/productionAll")
        const datos = await respuesta.json()
        setProduccion(datos.data)
      } catch (error) {
        console.error("Error al cargar la producción:", error)
      } finally {
        setCargando(false)
      }
    }

    obtenerProduccion()
  }, [])

  return (
    <div className="flex justify-center py-10 px-6 ">
      <div className="w-full max-w-7xl bg-white shadow-lg rounded-2xl overflow-hidden">

        <div className="bg-green-700 text-white p-6">
          <h1 className="text-2xl font-bold">Tabla de Producción</h1>
          <p className="text-green-100 mt-1">Registro de producción y control de productos</p>
        </div>

        <div className="p-6 overflow-x-auto">
          <table className="w-full border-collapse">

            <thead>
              <tr className="bg-green-100 text-green-800">
                <th className="p-3 text-left">Tipo</th>
                <th className="p-3 text-left">Fecha</th>
                <th className="p-3 text-left">Descripción</th>
                <th className="p-3 text-left">Unidad</th>
                <th className="p-3 text-left">Cantidad</th>
                <th className="p-3 text-left">Valor Unitario</th>
                <th className="p-3 text-left">Valor Total</th>
                <th className="p-3 text-left">Fecha Vencimiento</th>
                <th className="p-3 text-left">Centro de Costo</th>
                <th className="p-3 text-left">Quien Traslada</th>
                <th className="p-3 text-left">Quien Recibe</th>
                <th className="p-3 text-left">Instructor Técnico</th>
                <th className="p-3 text-left">Observaciones</th>
              </tr>
            </thead>

            <tbody>
              {cargando && (
                <tr>
                  <td colSpan={13} className="p-6 text-center text-gray-500">
                    Cargando producción...
                  </td>
                </tr>
              )}

              {!cargando && produccion.length === 0 && (
                <tr>
                  <td colSpan={13} className="p-6 text-center text-gray-500">
                    Todavía no hay producción registrada.
                  </td>
                </tr>
              )}

              {!cargando && produccion.map(function renderFila(item: any) {
                return (
                  <tr key={item.id} className="border-b hover:bg-green-50 transition">
                    <td className="p-3 capitalize">{item.productionType}</td>
                    <td className="p-3">{formatearFecha(item.fecha)}</td>
                    <td className="p-3">{item.descripcionElemento}</td>
                    <td className="p-3">{item.unidadMedida}</td>
                    <td className="p-3">{item.cantidad}</td>
                    <td className="p-3">{formatearMoneda(item.valorUnitario)}</td>
                    <td className="p-3">{formatearMoneda(item.valorTotal)}</td>
                    <td className="p-3">{formatearFecha(item.fechaVencimiento)}</td>
                    <td className="p-3">{item.centroCosto}</td>
                    <td className="p-3">{item.nombreTraslada}</td>
                    <td className="p-3">{item.nombreRecibe}</td>
                    <td className="p-3">{item.instructorTecnico}</td>
                    <td className="p-3">{item.observaciones || "—"}</td>
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