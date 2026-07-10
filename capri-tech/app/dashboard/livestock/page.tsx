import TablaLivestock from "@/components/livestokc/tablaLivestock";
import FormCreacionLivestock from "@/components/livestokc/formCreacion";       

function Livestock() {
    return ( <>
        <FormCreacionLivestock />
        <TablaLivestock />
    </>
    );
};

export default Livestock;