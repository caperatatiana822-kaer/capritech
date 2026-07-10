import NavBar from "@/components/NavBar";
import Footer from "@/components/footer";
import Title from "@/components/title";

export default function Home() {
  return (
    <>
  <NavBar />  

  <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-gray-100 via-white to-gray-200">

    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-gray-800">
      Bienvenido a <span className="text-indigo-600">CapriTech</span>
    </h1>

    <div className="flex gap-6 mb-6 flex-wrap justify-center">
      <img 
        src="/cabra.jpg.jpeg"
        alt="Cabra"
        className="w-40 md:w-56 rounded-2xl shadow-xl hover:scale-105 transition duration-300"
      />
      <img 
        src="/cabra2.jpg.jpeg"
        alt="Cabra"
        className="w-40 md:w-56 rounded-2xl shadow-xl hover:scale-105 transition duration-300"
      />
    </div>
    <p className="max-w-2xl text-lg text-gray-600 leading-relaxed">
      <span className="font-semibold text-indigo-600">CapriTech</span> es una aplicación web desarrollada para optimizar la gestión de la información 
      en la unidad de caprinos del Centro Agropecuario La Granja SENA, en Espinal - Tolima. 
      El sistema permite registrar, organizar y consultar datos relacionados con los animales, 
      como alimentación, sanidad, nacimientos, producción y control del inventario, 
      facilitando procesos que actualmente se realizan de forma manual.
      Con esta solución se busca mejorar la eficiencia, 
      reducir errores y apoyar la toma de decisiones mediante el uso de herramientas tecnológicas accesibles y de fácil uso. 
      
    </p>

    <title/>

    <a href="/acercaUnidad">
  <button className="bg-blue-500 text-white px-6 py-2 rounded-full">
    Acerca de la unidad
  </button>
</a>

  </section>

  <Footer />
</>
  );
}
