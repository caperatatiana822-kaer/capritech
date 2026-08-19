"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

function FormCreacionUsuario() {
  const router = useRouter()

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [documentId, setDocumentId] = useState("")
  const [postJob, setPostJob] = useState("")
  const [enviando, setEnviando] = useState(false)
  const [error, setError] = useState("")

  async function handleSubmit(evento: React.FormEvent) {
    evento.preventDefault()
    setEnviando(true)
    setError("")

    const nuevoUsuario = {
      name: name,
      email: email,
      password: password,
      documentId: documentId,
      postJob: postJob,
    }

    try {
      const respuesta = await fetch("http://localhost:3001/api/user/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(nuevoUsuario),
      })

      const datos = await respuesta.json()
      console.log("Respuesta del backend:", datos)

      if (!respuesta.ok) {
        const mensajeError = datos.message || "Error al registrar el usuario"
        const erroresDetalle = datos.errors ? datos.errors.map((e: any) => e.mensaje).join(", ") : ""
        throw new Error(erroresDetalle || mensajeError)
      }

      alert("Usuario registrado correctamente")
      router.push("/dashboard/user/table")

    } catch (error: any) {
      console.error("Error al registrar el usuario:", error)
      setError(error.message || "No se pudo registrar el usuario")
    } finally {
      setEnviando(false)
    }
  }

  return (
    <div className="flex justify-center py-10 px-6 ">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-2xl overflow-hidden">

        <div className="bg-green-700 text-white p-6">
          <h1 className="text-2xl font-bold">Formulario de Usuario</h1>
          <p className="text-green-100 mt-1">Ingresa la informacion del usuario</p>
        </div>

        {error && (
          <div className="bg-red-50 border-l-4 border-red-500 p-4 mx-6 mt-4">
            <p className="text-red-700 text-sm">{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Nombre *</label>
            <input 
              type="text" 
              required 
              value={name} 
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-600"
              placeholder="Nombre completo"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
            <input 
              type="email" 
              required 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-600"
              placeholder="correo@ejemplo.com"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Documento *</label>
            <input 
              type="text" 
              required 
              value={documentId} 
              onChange={(e) => setDocumentId(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-600"
              placeholder="Número de documento"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Contraseña *</label>
            <input 
              type="password" 
              required 
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-600"
              placeholder="Minimo 6 caracteres"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Cargo *</label>
            <select 
              required 
              value={postJob} 
              onChange={(e) => setPostJob(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-600"
            >
              <option value="">Selecciona un cargo</option>
              <option value="Administrador">Administrador</option>
              <option value="Instructor">Instructor</option>
              <option value="Aprendiz">Aprendiz</option>
              <option value="Gestor">Gestor</option>
              <option value="Veterinario">Veterinario</option>
              <option value="Pasante">Pasante</option>
            </select>
          </div>

          <div className="md:col-span-2 flex justify-end mt-4">
            <button 
              type="submit" 
              disabled={enviando}
              className="bg-green-700 hover:bg-green-800 text-white font-semibold px-8 py-3 rounded-lg shadow-md transition disabled:opacity-50"
            >
              {enviando ? "Registrando..." : "Registrar Usuario"}
            </button>
          </div>

        </form>

      </div>
    </div>
  );
}

export default FormCreacionUsuario;