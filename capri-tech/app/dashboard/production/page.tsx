import TablaProduccion from "@/components/production/tablaProduction";
import FormCreacionProduction from "@/components/production/formCreacion";

function Produccion() {
    return ( <>
        <FormCreacionProduction />
        <TablaProduccion />
    </>
    );
}

export default Produccion;