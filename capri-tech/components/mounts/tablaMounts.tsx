export default function TablaMounts() {
  return (
    <div className="flex justify-center py-10 px-6 bg-green-50 min-h-screen">
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
                <th className="p-3 text-left">Nombre de la Hembra</th>
                <th className="p-3 text-left">Número de Monta</th>
                <th className="p-3 text-left">Posible Fecha de Parto</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b hover:bg-green-50 transition">
                <td className="p-3">12/05/2026</td>
                <td className="p-3">John</td>
                <td className="p-3">Luna</td>
                <td className="p-3">5</td>
                <td className="p-3">12/11/2026</td>
              </tr>

              <tr className="border-b hover:bg-green-50 transition">
                <td className="p-3">12/05/2026</td>
                <td className="p-3">John</td>
                <td className="p-3">Luna</td>
                <td className="p-3">5</td>
                <td className="p-3">12/11/2026</td>
              </tr>
            </tbody>

          </table>
        </div>

      </div>
    </div>
  );
}