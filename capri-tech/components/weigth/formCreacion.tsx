function FormCreationWeight() {
  return (
    <div className="flex justify-center py-10 px-6 ">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-2xl overflow-hidden">

        <div className="bg-green-700 text-white p-6">
          <h1 className="text-2xl font-bold">Formulario de Pesaje</h1>
          <p className="text-green-100 mt-1">Ingresa la información del pesaje realizado</p>
        </div>

        <form className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Chapeta del Animal</label>
            <select id="animal" name="animal" required
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-600">
              <option value="">Selecciona una chapeta</option>
              {/* Estas opciones van a venir de tu backend, del listado de animales */}
              <option value="5">5</option>
              <option value="3">3</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Fecha de Pesaje</label>
            <input type="date" id="fecha" name="fecha" required
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-600"/>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Ganancia de Peso</label>
            <div className="relative">
              <input type="number" id="peso" name="peso" step="0.1" min="0" required
                className="w-full border border-gray-300 rounded-lg p-3 pr-12 focus:outline-none focus:ring-2 focus:ring-green-600"/>
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm font-medium text-gray-500">
                kg
              </span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Responsable</label>
            <input type="text" id="responsable" name="responsable" required
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-600"/>
          </div>

          <div className="md:col-span-2 flex justify-end mt-4">
            <button type="submit"
              className="bg-green-700 hover:bg-green-800 text-white font-semibold px-8 py-3 rounded-lg shadow-md transition">
              Registrar Pesaje
            </button>
          </div>

        </form>

      </div>
    </div>
  );
}

export default FormCreationWeight;