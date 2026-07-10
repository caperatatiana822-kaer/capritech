export default function TablaMortality() {
  return (
    <div className="flex justify-center py-10 px-6 bg-green-50 min-h-screen">
      <div className="w-full max-w-6xl bg-white shadow-lg rounded-2xl overflow-hidden">

        <div className="bg-green-700 text-white p-6">
          <h1 className="text-2xl font-bold">Tabla de Mortalidad</h1>
          <p className="text-green-100 mt-1">Registro de mortalidad de los caprinos</p>
        </div>

        <div className="p-6 overflow-x-auto">
          <table className="w-full border-collapse">

            <thead>
              <tr className="bg-green-100 text-green-800">
                <th className="p-3 text-left">Animal</th>
                <th className="p-3 text-left">Fecha</th>
                <th className="p-3 text-left">Estado de Producción</th>
                <th className="p-3 text-left">Diagnóstico</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b hover:bg-green-50 transition">
                <td className="p-3">Matilde</td>
                <td className="p-3">12/04/2026</td>
                <td className="p-3">Lactante</td>
                <td className="p-3">Muerte causada por infección</td>
              </tr>

              <tr className="border-b hover:bg-green-50 transition">
                <td className="p-3">María</td>
                <td className="p-3">15/04/2026</td>
                <td className="p-3">Lactante</td>
                <td className="p-3">Muerte causada por desnutrición</td>
              </tr>
            </tbody>

          </table>
        </div>

      </div>
    </div>
  );
}