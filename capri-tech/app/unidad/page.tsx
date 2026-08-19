import NavBar from "@/components/NavBar";
import Footer from "@/components/footer";

export default function Unidad() {
  return (
    <>
      <NavBar />

<section className="relative h-[70vh] flex items-end px-6 md:px-12 pt-6">
  <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
    <img
      src="/unidad2.jpeg"
      alt="Unidad de caprinos"
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
    <div className="relative z-10 h-full flex items-end px-8 md:px-16 pb-12 text-left">
      <div>
        <p className="text-green-400 font-semibold tracking-widest uppercase mb-2">
          Centro Agropecuario La Granja SENA Regional-Tolima
        </p>
        <h1 className="text-4xl md:text-6xl font-extrabold text-white max-w-2xl">
          Unidad de Caprinos
        </h1>
      </div>
    </div>
  </div>
</section>

      <section className="bg-white py-16 px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              ¿Dónde estamos?
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              Ubicada en el <span className="font-semibold text-green-700">KM5 vía Espinal - Ibagué</span>, 
              junto a las unidades de ganadería y porcinos, la unidad de caprinos 
              está a cargo de la instructora técnica <span className="font-semibold text-green-700">Sandra Consuelo Forero</span>, 
              médica veterinaria zootecnista, encargada del manejo y control de los animales.
            </p>
          </div>
          <img
            src="/unidad.jpg.jpeg"
            alt="Cabra unidad caprina"
            className="rounded-3xl shadow-2xl w-full h-80 object-cover"
          />
        </div>
      </section>
 
<section className="bg-gray-100 py-16 px-6">
  <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
    <div className="bg-white rounded-2xl shadow-lg border-t-4 border-green-700 p-6 text-center hover:-translate-y-1 transition duration-300">
      <p className="text-4xl font-extrabold text-green-700">37</p>
      <p className="text-gray-600 text-sm mt-1">Semovientes</p>
    </div>
    <div className="bg-white rounded-2xl shadow-lg border-t-4 border-green-700 p-6 text-center hover:-translate-y-1 transition duration-300">
      <p className="text-4xl font-extrabold text-green-700">16</p>
      <p className="text-gray-600 text-sm mt-1">Cabras alpinas</p>
    </div>
    <div className="bg-white rounded-2xl shadow-lg border-t-4 border-green-700 p-6 text-center hover:-translate-y-1 transition duration-300">
      <p className="text-4xl font-extrabold text-green-700">9</p>
      <p className="text-gray-600 text-sm mt-1">Cabras bóer</p>
    </div>
    <div className="bg-white rounded-2xl shadow-lg border-t-4 border-green-700 p-6 text-center hover:-translate-y-1 transition duration-300">
      <p className="text-4xl font-extrabold text-green-700">4</p>
      <p className="text-gray-600 text-sm mt-1">Machos reproductores</p>
    </div>
  </div>
</section>
    

      <Footer />
    </>
  );
}