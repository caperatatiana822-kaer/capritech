function FormCreacionFamacha() {
  return (
    <div className="flex justify-center py-10 px-6 bg-green-50 min-h-screen">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-2xl overflow-hidden">

        <div className="bg-green-700 text-white p-6">
          <h1 className="text-2xl font-bold">
            Formulario de Creación FAMACHA
          </h1>
          <p className="text-green-100 mt-1">Ingresa la información de la prueba FAMACHA</p>
        </div>

        <form className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Nombre del Animal</label>
            <input type="text" id="name" name="name" required
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-600"/>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Chapeta Animal</label>
            <input type="number" id="chapeta" name="chapeta" required
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-600"/>
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Resultado de la Prueba</label>
            <input type="text" id="resultado" name="resultado" required
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

export default FormCreacionFamacha;