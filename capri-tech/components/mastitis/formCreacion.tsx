function FormCreationMastitis() {
  return (
    <div className="flex justify-center py-10 px-6 bg-green-50 min-h-screen">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-2xl overflow-hidden">

        <div className="bg-green-700 text-white p-6">
          <h1 className="text-2xl font-bold">Formulario de Mastitis</h1>
          <p className="text-green-100 mt-1">Ingresa la información del diagnóstico de mastitis</p>
        </div>

        <form className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Chapeta</label>
            <input type="text" id="chapeta" name="chapeta" required
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-600"/>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Nombre Animal</label>
            <input type="text" id="name" name="name" required
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-600"/>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Fecha</label>
            <input type="date" id="fecha" name="fecha" required
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-600"/>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Resultado</label>
            <input type="text" id="resultado" name="resultado" required
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-600"/>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Observaciones</label>
            <input type="text" id="observaciones" name="observaciones" required
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-600"/>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Responsable</label>
            <input type="text" id="responsable" name="responsable" required
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-600"/>
          </div>

          <div className="md:col-span-2 flex justify-end mt-4">
            <button type="submit"
              className="bg-green-700 hover:bg-green-800 text-white font-semibold px-8 py-3 rounded-lg shadow-md transition">
              Guardar Registro
            </button>
          </div>

        </form>

      </div>
    </div>
  );
}

export default FormCreationMastitis;