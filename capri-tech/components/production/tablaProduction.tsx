export default function TablaProduction() {
  return (
    <div className="flex justify-center py-10 px-6 ">
      <div className="w-full max-w-7xl bg-white shadow-lg rounded-2xl overflow-hidden">

        <div className="bg-green-700 text-white p-6">
          <h1 className="text-2xl font-bold">Tabla de Producción</h1>
          <p className="text-green-100 mt-1">Registro de producción y control de productos</p>
        </div>

        <div className="p-6 overflow-x-auto">
          <table className="w-full border-collapse">

            <thead>
              <tr className="bg-green-100 text-green-800">
                <th className="p-3 text-left">Fecha</th>
                <th className="p-3 text-left">Descripción</th>
                <th className="p-3 text-left">Unidad</th>
                <th className="p-3 text-left">Cantidad</th>
                <th className="p-3 text-left">Valor Unitario</th>
                <th className="p-3 text-left">Valor Total</th>
                <th className="p-3 text-left">Fecha Vencimiento</th>
                <th className="p-3 text-left">Centro de Costo</th>
                <th className="p-3 text-left">Quien Traslada</th>
                <th className="p-3 text-left">Quien Recibe</th>
                <th className="p-3 text-left">Instructor Técnico</th>
                <th className="p-3 text-left">Observaciones</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b hover:bg-green-50 transition">
                <td className="p-3">12/05/2026</td>
                <td className="p-3">Leche de cabra</td>
                <td className="p-3">Litros</td>
                <td className="p-3">20 L</td>
                <td className="p-3">$2.000</td>
                <td className="p-3">$20.000</td>
                <td className="p-3">15/05/2026</td>
                <td className="p-3">Ninguno</td>
                <td className="p-3">Jhon</td>
                <td className="p-3">Carlos</td>
                <td className="p-3">Sandra</td>
                <td className="p-3">Ninguna</td>
              </tr>

              <tr className="border-b hover:bg-green-50 transition">
                <td className="p-3">12/05/2026</td>
                <td className="p-3">Leche de cabra</td>
                <td className="p-3">Litros</td>
                <td className="p-3">20 L</td>
                <td className="p-3">$2.000</td>
                <td className="p-3">$20.000</td>
                <td className="p-3">15/05/2026</td>
                <td className="p-3">Ninguno</td>
                <td className="p-3">Jhon</td>
                <td className="p-3">Carlos</td>
                <td className="p-3">Sandra</td>
                <td className="p-3">Ninguna</td>
              </tr>
            </tbody>

          </table>
        </div>

      </div>
    </div>
  );
}