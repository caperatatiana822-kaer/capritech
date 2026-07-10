import TablaResponsables from "@/components/responsible/tablaResponsible";
import FormCreacionResponsable from "@/components/responsible/formCreacion";

function Responsible() {
    return ( <>
        <FormCreacionResponsable />
        <TablaResponsables />
    </>
    );
}

export default Responsible;