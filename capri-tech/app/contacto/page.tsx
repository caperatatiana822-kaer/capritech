import NavBar from "@/components/NavBar";
import Footer from "@/components/footer";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <>
      <NavBar/>

      <section className="px-6 py-16 bg-gradient-to-b from-gray-100 to-white">
        
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Contáctanos
        </h2>

        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          <form className="bg-white shadow-2xl rounded-2xl p-8 flex flex-col gap-5">

            <h3 className="text-2xl font-semibold text-gray-800">
              Envíanos un mensaje
            </h3>

            <input 
              type="text" 
              placeholder="Nombre completo"
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"/>

            <input 
              type="email" 
              placeholder="Correo electrónico"
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"/>

            <input 
              type="text" 
              placeholder="Asunto"
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"/>

            <textarea 
              placeholder="Escribe tu mensaje..."
              className="p-3 border border-gray-300 rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-indigo-400"></textarea>

            <button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition">
              Enviar mensaje
            </button>

          </form>

          <div className="bg-gray-50 rounded-2xl p-8 shadow-lg space-y-4">

            <h3 className="text-2xl font-semibold text-gray-800">
              Información de contacto
            </h3>

            <p><strong>Correo:</strong> capritech@gmail.com</p>
            <p><strong>Teléfono:</strong> +57 300 000 0000</p>
            <p><strong>Ubicación:</strong> SENA Centro Agropecuario La Granja, Espinal - Tolima</p>
            <div className="mt-6">
              <h4 className="text-xl font-semibold mb-3">contactanos en nuestras redes</h4>

              <div className="flex flex-col gap-3">

                <a href="#" className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition">
                  <FaFacebook size={20} />
                  <span>CapriTech Oficial</span>
                </a>

                <a href="#" className="flex items-center gap-3 text-gray-700 hover:text-pink-500 transition">
                  <FaInstagram size={20} />
                  <span>@capritech</span>
                </a>

                <a 
                  href="https://wa.me/573000000000" 
                  target="_blank"
                  className="flex items-center gap-3 text-gray-700 hover:text-green-500 transition"
>
                  <FaWhatsapp size={20} />
                  <span>+57 300 000 0000</span>
                </a>

              </div>
            </div>
            <iframe
              src="https://www.google.com/maps?q=SENA%20Centro%20Agropecuario%20La%20Granja%20Espinal%20Tolima&output=embed"
              className="w-full h-56 rounded-xl mt-4"></iframe>

          </div>

        </div>
      </section>

      <Footer/>
      <a 
      href="https://wa.me/573000000000" 
      target="_blank"
      className="fixed bottom-5 right-5 bg-green-500 p-4 rounded-full shadow-lg hover:scale-110 transition flex items-center justify-center">
      <FaWhatsapp size={28} className="text-white" />
      </a>
    </>
  );
}