export default function TablaVacunacion() {
  return (
    <div className="flex justify-center py-10 px-6 ">
      <div className="w-full max-w-6xl bg-white shadow-lg rounded-2xl overflow-hidden">

        <div className="bg-green-700 text-white p-6">
          <h1 className="text-2xl font-bold">Tabla de Vacunación</h1>
          <p className="text-green-100 mt-1">Registro de vacunas aplicadas a los caprinos</p>
        </div>

        <div className="p-6 overflow-x-auto">
          <table className="w-full border-collapse">

            <thead>
              <tr className="bg-green-100 text-green-800">
                <th className="p-3 text-left">Animal</th>
                <th className="p-3 text-left">Fecha</th>
                <th className="p-3 text-left">Nombre de la Vacuna</th>
                <th className="p-3 text-left">Responsable</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b hover:bg-green-50 transition">
                <td className="p-3">Pepe</td>
                <td className="p-3">2024-06-01</td>
                <td className="p-3">Vacuna 1</td>
                <td className="p-3">Juan</td>
              </tr>

              <tr className="border-b hover:bg-green-50 transition">
                <td className="p-3">Pepe</td>
                <td className="p-3">2024-06-01</td>
                <td className="p-3">Vacuna 1</td>
                <td className="p-3">Juan</td>
              </tr>
            </tbody>

          </table>
        </div>

      </div>
    </div>
  );
}