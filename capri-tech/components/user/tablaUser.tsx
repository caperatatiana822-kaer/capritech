"use client"

import { useState, useEffect } from "react"

export default function TablaUsuario() {
  const [usuarios, setUsuarios] = useState<any[]>([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState("")

  useEffect(function cargarUsuarios() {
    async function obtenerUsuarios() {
      try {
        setCargando(true)
        setError("")
        
        const respuesta = await fetch("http://localhost:3001/api/user/usersAll")
        const datos = await respuesta.json()
        console.log("Respuesta USER:", datos)
        
        if (!respuesta.ok) {
          throw new Error(datos.message || "Error al cargar usuarios")
        }
        
        let listaUsuarios = []
        if (datos.data && Array.isArray(datos.data)) {
          listaUsuarios = datos.data
        } else if (Array.isArray(datos)) {
          listaUsuarios = datos
        } else {
          listaUsuarios = []
        }
        
        setUsuarios(listaUsuarios)
      } catch (error: any) {
        console.error("Error al cargar los usuarios:", error)
        setError(error.message || "No se pudieron cargar los usuarios")
        setUsuarios([])
      } finally {
        setCargando(false)
      }
    }
    obtenerUsuarios()
  }, [])

  return (
    <div className="flex justify-center py-10 px-6 ">
      <div className="w-full max-w-6xl bg-white shadow-lg rounded-2xl overflow-hidden">

        <div className="bg-green-700 text-white p-6">
          <h1 className="text-2xl font-bold">Tabla de Usuarios</h1>
          <p className="text-green-100 mt-1">Registro de usuarios del sistema</p>
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
                <th className="p-3 text-left">ID</th>
                <th className="p-3 text-left">Nombre</th>
                <th className="p-3 text-left">Email</th>
                <th className="p-3 text-left">Documento</th>
                <th className="p-3 text-left">Cargo</th>
                <th className="p-3 text-left">Estado</th>
              </tr>
            </thead>

            <tbody>
              {cargando && (
                <tr>
                  <td colSpan={6} className="p-6 text-center text-gray-500">
                    <div className="flex justify-center items-center space-x-2">
                      <svg className="animate-spin h-5 w-5 text-green-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Cargando usuarios...</span>
                    </div>
                  </td>
                </tr>
              )}

              {!cargando && !error && usuarios.length === 0 && (
                <tr>
                  <td colSpan={6} className="p-6 text-center text-gray-500">
                    Todavia no hay usuarios registrados.
                  </td>
                </tr>
              )}

              {!cargando && !error && usuarios.map(function renderFila(usuario: any, index: number) {
                return (
                  <tr key={usuario.id || index} className="border-b hover:bg-green-50 transition">
                    <td className="p-3 font-medium">{usuario.id}</td>
                    <td className="p-3">{usuario.name}</td>
                    <td className="p-3">{usuario.email}</td>
                    <td className="p-3">{usuario.documentId}</td>
                    <td className="p-3">{usuario.postJob}</td>
                    <td className="p-3">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        usuario.active 
                          ? "bg-green-100 text-green-800" 
                          : "bg-red-100 text-red-800"
                      }`}>
                        {usuario.active ? "Activo" : "Inactivo"}
                      </span>
                    </td>
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