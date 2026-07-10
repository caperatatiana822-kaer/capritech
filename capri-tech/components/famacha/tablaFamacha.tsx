export default function TablaFamacha() {
  return (
    <div className="flex justify-center py-10 px-6 bg-green-50 min-h-screen">
      <div className="w-full max-w-6xl bg-white shadow-lg rounded-2xl overflow-hidden">

        <div className="bg-green-700 text-white p-6">
          <h1 className="text-2xl font-bold">Tabla FAMACHA</h1>
          <p className="text-green-100 mt-1">Registro de resultados de pruebas FAMACHA</p>
        </div>

        <div className="p-6 overflow-x-auto">
          <table className="w-full border-collapse">

            <thead>
              <tr className="bg-green-100 text-green-800">
                <th className="p-3 text-left">Nombre del Animal</th>
                <th className="p-3 text-left">Chapeta</th>
                <th className="p-3 text-left">Resultado de la Prueba</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b hover:bg-green-50 transition">
                <td className="p-3">Matilde</td>
                <td className="p-3">123</td>
                <td className="p-3">Grado de anemia 12%</td>
              </tr>

              <tr className="border-b hover:bg-green-50 transition">
                <td className="p-3">Luna</td>
                <td className="p-3">456</td>
                <td className="p-3">Grado de anemia 0%</td>
              </tr>
            </tbody>

          </table>
        </div>

      </div>
    </div>
  );
}