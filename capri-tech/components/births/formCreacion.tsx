"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"

function FormCreacionNacimiento() {
  const router = useRouter()

  const [chapeta, setChapeta] = useState("")
  const [nombreAnimal, setNombreAnimal] = useState("")
  const [fechaNacimiento, setFechaNacimiento] = useState("")
  const [raza, setRaza] = useState("")
  const [sexo, setSexo] = useState("Macho")
  const [pesoNacer, setPesoNacer] = useState("")
  const [fichaMadre, setFichaMadre] = useState("")
  const [fichaPadre, setFichaPadre] = useState("")
  const [enviando, setEnviando] = useState(false)
  const [error, setError] = useState("")
  const [erroresDetallados, setErroresDetallados] = useState<string[]>([])

  async function handleSubmit(evento: React.FormEvent) {
    evento.preventDefault()
    setEnviando(true)
    setError("")
    setErroresDetallados([])

    // Validaciones básicas en el frontend
    const validaciones = []
    if (!chapeta) validaciones.push("La chapeta es obligatoria")
    if (!nombreAnimal) validaciones.push("El nombre es obligatorio")
    if (!fechaNacimiento) validaciones.push("La fecha de nacimiento es obligatoria")
    if (!raza) validaciones.push("La raza es obligatoria")
    if (!pesoNacer) validaciones.push("El peso al nacer es obligatorio")
    if (!fichaMadre) validaciones.push("La chapeta de la madre es obligatoria")
    if (!fichaPadre) validaciones.push("La chapeta del padre es obligatoria")

    if (validaciones.length > 0) {
      setErroresDetallados(validaciones)
      setEnviando(false)
      return
    }

    // Mapeo correcto de campos para el backend
    const nuevoNacimiento = {
      chapeta: parseInt(chapeta),
      nombre: nombreAnimal,
      fechaNacimiento: fechaNacimiento,
      raza: raza,
      sexo: sexo,
      pesoNacimiento: parseFloat(pesoNacer),
      chapetaMadre: parseInt(fichaMadre),
      chapetaPadre: parseInt(fichaPadre),
    }

    console.log("Datos a enviar:", nuevoNacimiento)

    try {
      const respuesta = await fetch("http://localhost:3001/api/births/births", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(nuevoNacimiento),
      })

      const datos = await respuesta.json()
      console.log("Respuesta completa del backend:", datos)

      if (!respuesta.ok) {
        // Manejar diferentes tipos de errores del backend
        let mensajeError = "Error al registrar el nacimiento"
        
        if (datos.message) {
          mensajeError = datos.message
        }
        
        // Si hay errores detallados, mostrarlos
        if (datos.errors && Array.isArray(datos.errors)) {
          const erroresMensajes = datos.errors.map((e: any) => e.mensaje || e.message || JSON.stringify(e))
          setErroresDetallados(erroresMensajes)
          throw new Error(mensajeError)
        }
        
        throw new Error(mensajeError)
      }

      // Si todo fue exitoso
      alert("Nacimiento registrado correctamente")
      router.push("/dashboard/births/table")

    } catch (error: any) {
      console.error("Error al registrar el nacimiento:", error)
      setError(error.message || "No se pudo registrar el nacimiento")
      
      // Si no hay errores detallados, crear uno genérico
      if (erroresDetallados.length === 0) {
        setErroresDetallados([error.message || "Error desconocido al registrar el nacimiento"])
      }
    } finally {
      setEnviando(false)
    }
  }

  return (
    <div className="flex justify-center py-10 px-6 min-h-screen">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-2xl overflow-hidden">

        <div className="bg-green-700 text-white p-6">
          <h1 className="text-2xl font-bold">Formulario de creación de nacimientos</h1>
          <p className="text-green-100 mt-1">Ingresa la información del nuevo caprino</p>
        </div>

        {/* Mostrar errores generales */}
        {error && (
          <div className="bg-red-50 border-l-4 border-red-500 p-4 mx-6 mt-4">
            <p className="text-red-700 font-semibold">Error:</p>
            <p className="text-red-700 text-sm">{error}</p>
          </div>
        )}

        {/* Mostrar errores detallados */}
        {erroresDetallados.length > 0 && (
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mx-6 mt-4">
            <p className="text-yellow-700 font-semibold">Detalles del error:</p>
            <ul className="list-disc list-inside text-sm text-yellow-700 mt-1">
              {erroresDetallados.map((err, index) => (
                <li key={index}>{err}</li>
              ))}
            </ul>
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Chapeta *</label>
            <input 
              type="number" 
              value={chapeta} 
              onChange={(e) => setChapeta(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-600"/>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Nombre *</label>
            <input 
              type="text" 
              value={nombreAnimal} 
              onChange={(e) => setNombreAnimal(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-600"/>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Fecha de Nacimiento *</label>
            <input 
              type="date" 
              value={fechaNacimiento} 
              onChange={(e) => setFechaNacimiento(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-600"/>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Raza *</label>
            <input 
              type="text" 
              value={raza} 
              onChange={(e) => setRaza(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-600"/>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Sexo *</label>
            <select 
              value={sexo} 
              onChange={(e) => setSexo(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-600">
              <option value="Macho">Macho</option>
              <option value="Hembra">Hembra</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Peso al Nacer (Kg) *</label>
            <input 
              type="number" 
              step="0.01"
              value={pesoNacer} 
              onChange={(e) => setPesoNacer(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-600"/>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Chapeta Madre *</label>
            <input 
              type="number" 
              value={fichaMadre} 
              onChange={(e) => setFichaMadre(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-600"/>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Chapeta Padre *</label>
            <input 
              type="number" 
              value={fichaPadre} 
              onChange={(e) => setFichaPadre(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-600"/>
          </div>

          <div className="md:col-span-2 flex justify-end mt-4">
            <button 
              type="submit" 
              disabled={enviando}
              className="bg-green-700 hover:bg-green-800 text-white font-semibold px-8 py-3 rounded-lg shadow-md transition disabled:opacity-50">
              {enviando ? "Registrando..." : "Registrar Nacimiento"}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}

export default FormCreacionNacimiento;