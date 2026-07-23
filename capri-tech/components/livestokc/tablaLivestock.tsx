export default function TablaLivestock() {
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
                <th className="p-3 text-left">Edad</th>
                <th className="p-3 text-left">Raza</th>
                <th className="p-3 text-left">Sexo</th>
                <th className="p-3 text-left">Etapa de Producción</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b hover:bg-green-50 transition">
                <td className="p-3">Animal 1</td>
                <td className="p-3">5</td>
                <td className="p-3">30</td>
                <td className="p-3">Boer</td>
                <td className="p-3">Macho</td>
                <td className="p-3">Carne</td>
              </tr>

              <tr className="border-b hover:bg-green-50 transition">
                <td className="p-3">Animal 2</td>
                <td className="p-3">3</td>
                <td className="p-3">30</td>
                <td className="p-3">Boer</td>
                <td className="p-3">Hembra</td>
                <td className="p-3">Lechera</td>
              </tr>
            </tbody>

          </table>
        </div>

      </div>
    </div>
  );
}