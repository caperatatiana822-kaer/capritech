export default function TablaResponsables() {
  return (
    <div className="flex justify-center py-10 px-6 ">
      <div className="w-full max-w-6xl bg-white shadow-lg rounded-2xl overflow-hidden">

        <div className="bg-green-700 text-white p-6">
          <h1 className="text-2xl font-bold">Tabla de Responsables</h1>
          <p className="text-green-100 mt-1">Registro de responsables vinculados al sistema</p>
        </div>

        <div className="p-6 overflow-x-auto">
          <table className="w-full border-collapse">

            <thead>
              <tr className="bg-green-100 text-green-800">
                <th className="p-3 text-left">Nombre</th>
                <th className="p-3 text-left">Documento</th>
                <th className="p-3 text-left">Tipo de Responsable</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b hover:bg-green-50 transition">
                <td className="p-3">Andrés</td>
                <td className="p-3">CC 1111111</td>
                <td className="p-3">SENA Empresa</td>
              </tr>

              <tr className="border-b hover:bg-green-50 transition">
                <td className="p-3">Camilo</td>
                <td className="p-3">CC 45385</td>
                <td className="p-3">Pasante</td>
              </tr>
            </tbody>

          </table>
        </div>

      </div>
    </div>
  );
}