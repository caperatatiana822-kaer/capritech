import NavBar from "@/components/NavBar";
import Footer from "@/components/footer";

export default function Nosotros() {
  return (
    <>
      <NavBar />  
      <section className="min-h-screen px-6 md:px-16 py-20 bg-gray-50 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Sobre Nosotros
            </h1>   
            <p className="max-w-2xl mx-auto text-gray-600 text-lg">
                Somos estudiantes de análisis y desarrollo de software. 
                Este proyecto hace parte de nuestro proceso de aprendizaje, donde estamos
                poniendo en práctica lo que hemos aprendido en clase. 

            </p>
            <div className="mt-12 grid md:grid-cols-3 gap-8">
                <div className="p-6 bg-white rounded-2xl shadow-md">
                    <h3 className="font-semibold text-xl mb-2">¿Qué estamos haciendo?</h3>
                    <p
                    className="text-gray-500">Aprendiendo a crear aplicaciones y mejorar nuestras habilidades en programación.</p>
                </div>
                <div className="p-6 bg-white rounded-2xl shadow-md">
                    <h3 className="font-semibold text-xl mb-2">¿Qué queremos lograr?</h3>
                    <p
                    className="text-gray-500">Terminar nuestro proyecto funcionando correctamente y seguir mejorando como desarrolladores.</p>
                </div>
                <div className="p-6 bg-white rounded-2xl shadow-md">
                    <h3 className="font-semibold text-xl mb-2">¿Cómo trabajamos?</h3>
                    <p 
                    className="text-gray-500">Trabajamos en equipo, aprendiendo de los errores y apoyándonos entre nosotros.</p>
                </div>
            </div>
    
            <div className="mt-20">
                <h2 className="text-3xl font-bold text-gray-800 mb-10">
                Equipo de desarrollo
                </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">

            <div className="text-center">
                <img src="/tatiana.jpeg" 
                className="w-32 h-32 object-cover rounded-full mx-auto shadow-md hover:scale-105 transition"/>
                <p className="mt-3 font-semibold">Kelly Tatiana Capera Montiel</p>
                <p className="text-sm text-gray-500">Gerente de proyecto</p>
            </div>

            <div className="text-center">
                <img src="/andres.jpeg"
                className="w-32 h-32 object-cover rounded-full mx-auto shadow-md hover:scale-105 transition"/>
                <p className="mt-3 font-semibold">Johan Andres Diaz Ospina</p>
                <p className="text-sm text-gray-500">Analista y desarrollador</p>
            </div>

            <div className="text-center">
                <img src="/camilo.jpeg"
                className="w-32 h-32 object-cover rounded-full mx-auto shadow-md hover:scale-105 transition"/>
                <p className="mt-3 font-semibold">Camilo Andres Betancourt Buitrago</p>
                <p className="text-sm text-gray-500">Analista y desarrollador</p>
            </div>

            <div className="text-center">
                <img src="/sebastian.jpeg"
                className="w-32 h-32 object-cover rounded-full mx-auto shadow-md hover:scale-105 transition"/>
                <p className="mt-3 font-semibold">Jhoan Sebastian Cabezas Ruiz</p>
                <p className="text-sm text-gray-500">Analista y desarrollador</p>
            </div>
        </div>

        <div className="mt-20">
            <h2 className="text-3xl font-bold text-gray-800 mb-10">
                Instructores tecnicos 
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
                <div className="text-center">
                <img src=""
                className="w-32 h-32 object-cover rounded-full mx-auto shadow-md hover:scale-105 transition"/>
                <p className="mt-3 font-semibold">Myriam Janeth Gonzales Reyes</p>
                <p className="text-sm text-gray-500">Ing. software, especialista en base de datos</p>
            </div>
            <div className="text-center">
                <img src=""
                className="w-32 h-32 object-cover rounded-full mx-auto shadow-md hover:scale-105 transition"/>
                <p className="mt-3 font-semibold">Euclidez Norbey Basto Ortiz</p>
                <p className="text-sm text-gray-500">Ing. de sistemas</p>
            </div>
            <div className="text-center">
                <img src=""
                className="w-32 h-32 object-cover rounded-full mx-auto shadow-md hover:scale-105 transition"/>
                <p className="mt-3 font-semibold">Sandra Consuelo Forero</p>
                <p className="text-sm text-gray-500">Medico Veterinario y Zootecnista. instructora a cargo de la unidad</p>
            </div>
            <div className="text-center">
                <img src=""
                className="w-32 h-32 object-cover rounded-full mx-auto shadow-md hover:scale-105 transition"/>
                <p className="mt-3 font-semibold">Jorge Eliecer Andrade</p>
                <p className="text-sm text-gray-500">ing. informático</p>
            </div>
            </div>
        </div>
            </div>
     </section>  
        <Footer/>                        
    </>
  );
}
