export default function TablaAlimentacion() {
  return (
    <div className="flex justify-center py-10 px-6 ">
      <div className="w-full max-w-6xl bg-white shadow-lg rounded-2xl overflow-hidden">

        <div className="bg-green-700 text-white p-6">
          <h1 className="text-2xl font-bold">Tabla de Alimentación</h1>
          <p className="text-green-100 mt-1">Registro de alimentación de los caprinos</p>
        </div>

        <div className="p-6 overflow-x-auto">
          <table className="w-full border-collapse">

            <thead>
              <tr className="bg-green-100 text-green-800">
                <th className="p-3 text-left">Fecha</th>
                <th className="p-3 text-left">Responsable</th>
                <th className="p-3 text-left">Alimento</th>
                <th className="p-3 text-left">Cantidad</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b hover:bg-green-50 transition">
                <td className="p-3">12/03/2025</td>
                <td className="p-3">Juan Pérez</td>
                <td className="p-3">Concentrado</td>
                <td className="p-3">2 kg</td>
              </tr>

              <tr className="border-b hover:bg-green-50 transition">
                <td className="p-3">24/05/2026</td>
                <td className="p-3">María García</td>
                <td className="p-3">Concentrado</td>
                <td className="p-3">3 kg</td>
              </tr>
            </tbody>

          </table>
        </div>

      </div>
    </div>
  );
}