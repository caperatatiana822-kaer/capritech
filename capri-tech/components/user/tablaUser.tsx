export default function tablaUsuario() {
  return (
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Documento</th>
          <th>Correo</th>
          <th>Rol</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Camilo</td>
          <td>Betancourt</td>
          <td>123456789</td>
          <td>camilo@gmail.com</td>
          <td>Administrador</td>
        </tr>

        <tr>
          <td>Kelly</td>
          <td>Capera</td>
          <td>987654321</td>
          <td>kelly@gmail.com</td>
          <td>Instructor</td>
        </tr>
      </tbody>
    </table>
  );
}