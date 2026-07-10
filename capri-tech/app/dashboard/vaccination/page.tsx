import TablaVacunacion from "@/components/vaccination/tablaVaccination";
import FormCreacionVacunacion from "@/components/vaccination/formCreacion";

function Vacunacion() {
    return ( <>
        <FormCreacionVacunacion />
        <TablaVacunacion />
    </>
    );
}

export default Vacunacion;