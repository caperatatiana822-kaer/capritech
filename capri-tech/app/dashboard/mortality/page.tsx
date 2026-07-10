import TablaMortality from "@/components/mortality/tablaMortality";
import FormCreacionMortality from "@/components/mortality/formCreacion";

function Mortality() {
    return ( <>
        <FormCreacionMortality />
        <TablaMortality />
    </>
    );
}

export default Mortality;