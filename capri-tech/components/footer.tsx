export default function Footer(){
    const linkSections = [
        {
            title: "Navegación",
            links: ["Inicio", "Nosotros", "Contacto", "ingresar"]
        },
        {
            title: "Módulos",
            links: ["Inventario", "Alimentación", "Pesaje", "Producción lechera", "montas", "Gestión de usuarios", "nacimientos", "responsables", "sanidad", "mortalidad" ]
        },
        {
            title: "Información",
            links: ["Centro Agropecuario La Granja",
            "SENA Regional Tolima",
            "Unidad caprina"]
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
                        src="/logo1.jpg.png"  
                        alt="logo"
                    />

                        <p className="max-w-[410px] mt-6">
    CapriTech es un sistema de información desarrollado para apoyar la gestión de la unidad caprina del Centro Agropecuario La Granja - SENA. Su propósito es facilitar el registro, consulta y administración de la información de los animales y de los procesos realizados en la unidad.
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
               © 2026 CapriTech | Centro Agropecuario La Granja SENA.
            </p>
        </div>
        </>
    );
}