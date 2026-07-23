export default function TablaMastitis() {
  return (
    <div className="flex justify-center py-10 px-6 ">
      <div className="w-full max-w-6xl bg-white shadow-lg rounded-2xl overflow-hidden">

        <div className="bg-green-700 text-white p-6">
          <h1 className="text-2xl font-bold">Tabla de Mastitis</h1>
          <p className="text-green-100 mt-1">Registro de diagnósticos y pruebas de mastitis</p>
        </div>

        <div className="p-6 overflow-x-auto">
          <table className="w-full border-collapse">

            <thead>
              <tr className="bg-green-100 text-green-800">
                <th className="p-3 text-left">Chapeta</th>
                <th className="p-3 text-left">Nombre Animal</th>
                <th className="p-3 text-left">Fecha</th>
                <th className="p-3 text-left">Resultado</th>
                <th className="p-3 text-left">Observaciones</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b hover:bg-green-50 transition">
                <td className="p-3">864</td>
                <td className="p-3">Animal 1</td>
                <td className="p-3">2023-10-01</td>
                <td className="p-3">Positivo</td>
                <td className="p-3">
                  Inflamación leve, sin cambios en la leche
                </td>
              </tr>

              <tr className="border-b hover:bg-green-50 transition">
                <td className="p-3">865</td>
                <td className="p-3">Animal 2</td>
                <td className="p-3">2023-10-02</td>
                <td className="p-3">Positivo</td>
                <td className="p-3">
                  Inflamación moderada, cambios en la leche
                </td>
              </tr>
            </tbody>

          </table>
        </div>

      </div>
    </div>
  );
}