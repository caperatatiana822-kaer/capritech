"use client";
import { useEffect } from "react";

function ResponsiblePage(){
    //primero llama la funcion fetch para traer la informacion
    useEffect(() => {
        const fetchUser = async () => {
            alert("hola")
            const response = await fetch("http://localhost:3000/api/livestock/livestockAll")
            let resJson =response.json()
            console.log(resJson)
        }
        fetchUser();

    })
}
import TablaLivestock from "@/components/livestokc/tablaLivestock";

function TablaInventarioPage() {
    return ( <TablaLivestock /> 
    );
}

export default TablaInventarioPage;