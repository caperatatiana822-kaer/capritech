export default function TablaWeight() {
  return (
    <div className="flex justify-center py-10 px-6 ">
      <div className="w-full max-w-6xl bg-white shadow-lg rounded-2xl overflow-hidden">

        <div className="bg-green-700 text-white p-6">
          <h1 className="text-2xl font-bold">Tabla de Pesaje</h1>
          <p className="text-green-100 mt-1">Registro de peso y seguimiento del crecimiento de los caprinos</p>
        </div>

        <div className="p-6 overflow-x-auto">
          <table className="w-full border-collapse">

            <thead>
              <tr className="bg-green-100 text-green-800">
                <th className="p-3 text-left">Animal</th>
                <th className="p-3 text-left">Fecha</th>
                <th className="p-3 text-left">Ganancia de Peso</th>
                <th className="p-3 text-left">Responsable</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b hover:bg-green-50 transition">
                <td className="p-3">Animal 2</td>
                <td className="p-3">04/04/2026</td>
                <td className="p-3">5 kg</td>
                <td className="p-3">Sebastián</td>
              </tr>

              <tr className="border-b hover:bg-green-50 transition">
                <td className="p-3">Animal 3</td>
                <td className="p-3">17/03/2026</td>
                <td className="p-3">7 kg</td>
                <td className="p-3">Tatiana</td>
              </tr>
            </tbody>

          </table>
        </div>

      </div>
    </div>
  );
}