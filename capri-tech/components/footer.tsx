export default function Footer(){
    const linkSections = [
        {
            title: "Navegación",
            links: ["Inicio", "Nosotros", "Contacto", "Proyectos", "Servicios"]
        },
        {
            title: "Ayuda",
            links: ["Soporte", "Términos y condiciones", "Política de privacidad", "Preguntas frecuentes"]
        },
        {
            title: "Síguenos",
            links: ["Instagram", "Facebook", "YouTube"]
        }
    ];

    return(
        <>
            <div className="px-6 md:px-16 lg:px-24 xl:px-32">
            <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-500/30 text-gray-500">
                
                <div>
                    {/* LOGO */}
                    <img 
                        className="w-28 md:w-32"
                        src="/logo2.jpg.png"  
                        alt="logo"
                    />

                    <p className="max-w-[410px] mt-6">
                        CapriTech es un proyecto enfocado en el desarrollo de soluciones tecnológicas, 
                        brindando herramientas innovadoras y funcionales para mejorar la experiencia digital.
                    </p>
                </div>

                <div className="flex flex-wrap justify-between w-full md:w-[45%] gap-5">
                    {linkSections.map((section, index) => (
                        <div key={index}>
                            <h3 className="font-semibold text-base text-gray-900 md:mb-5 mb-2">{section.title}</h3>
                            <ul className="text-sm space-y-1">
                                {section.links.map((link, i) => (
                                    <li key={i}>
                                        <a href="#" className="hover:underline transition">{link}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            <p className="py-4 text-center text-sm md:text-base text-gray-500/80">
                © 2026 CapriTech - Todos los derechos reservados.
            </p>
        </div>
        </>
    );
}