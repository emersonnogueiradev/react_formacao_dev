'use client'
import Pagina from "@/components/Pagina";
import { useState } from "react";


export default function Page(){


    const [numero, setNumero] = useState(0)

    function incrementar(){
        setNumero(numero+1)
    }
    return(

        <div>
            <Pagina titulo="Com estado" subtitulo="Capítulo estado">

                <div className="flex flex-col">
                    <span>Valor</span>
                    <span>{numero}</span>

                    <button className="bg-blue-500 p-2" onClick={incrementar}>Incrementar</button>
                </div>


            </Pagina>
        </div>
    )
}