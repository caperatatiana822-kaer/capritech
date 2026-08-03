"use client"

import { useEffect, useState } from "react"

function formatearFecha(fechaISO:string){
  if(!fechaISO) return "—"
  return new Date(fechaISO).toLocaleDateString("es-CO")
}

export default function TablaMounts(){
  const [montas,setMontas]=useState<any[]>([])
  const [cargando,setCargando]=useState(true)

  useEffect(()=>{
    async function cargar(){
      try{
        const res=await fetch("http://localhost:3001/api/mounts/mountsAll")
        const json=await res.json()
        setMontas(json.data||[])
      }catch(e){
        console.error("Error al cargar montas:",e)
      }finally{
        setCargando(false)
      }
    }
    cargar()
  },[])

  return(
    <div className="flex justify-center py-10 px-6 ">
      <div className="w-full max-w-6xl bg-white shadow-lg rounded-2xl overflow-hidden">
        <div className="bg-green-700 text-white p-6">
          <h1 className="text-2xl font-bold">Tabla de Montas</h1>
          <p className="text-green-100 mt-1">Registro de montas y seguimiento reproductivo</p>
        </div>

        <div className="p-6 overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-green-100 text-green-800">
                <th className="p-3 text-left">Fecha de Monta</th>
                <th className="p-3 text-left">Nombre del Macho</th>
                <th className="p-3 text-left">Raza del Macho</th>
                <th className="p-3 text-left">Chapeta del Macho</th>
                <th className="p-3 text-left">Nombre de la Hembra</th>
                <th className="p-3 text-left">Raza de la Hembra</th>
                <th className="p-3 text-left">Chapeta de la Hembra</th>
                <th className="p-3 text-left">Número de Monta</th>
                <th className="p-3 text-left">Posible Fecha de Parto</th>
              </tr>
            </thead>
            <tbody>
              {cargando && <tr><td colSpan={9} className="p-6 text-center text-gray-500">Cargando montas...</td></tr>}
              {!cargando && montas.length===0 && <tr><td colSpan={9} className="p-6 text-center text-gray-500">Todavía no hay montas registradas.</td></tr>}
              {!cargando && montas.map((item:any)=>(
                <tr key={item.id} className="border-b hover:bg-green-50 transition">
                  <td className="p-3">{formatearFecha(item.fechaMonta)}</td>
                  <td className="p-3">{item.nombreMacho}</td>
                  <td className="p-3">{item.razaMacho}</td>
                  <td className="p-3">{item.chapetaMacho}</td>
                  <td className="p-3">{item.nombreHembra}</td>
                  <td className="p-3">{item.razaHembra}</td>
                  <td className="p-3">{item.chapetaHembra}</td>
                  <td className="p-3">{item.numeroMonta}</td>
                  <td className="p-3">{formatearFecha(item.posibleFechaParto)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}