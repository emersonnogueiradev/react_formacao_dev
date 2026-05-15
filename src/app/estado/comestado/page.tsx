'use client'
import Pagina from "@/components/Pagina";
import { useState } from "react";
export default function Page(){

    let [numero,alterarNumero] = useState(0)



    function incremetar(){
        alterarNumero(++numero)
    }

    return(
        <Pagina titulo="Sem Estado" subtitulo="Sem estado">

            <div className="flex flex-col">
                <div>
                    <span>Valor:</span>
                    <span>{numero}</span>
                
                </div>
                <button onClick={incremetar} className="bg-blue-500 p-2">Incremenar</button>
            </div>
        </Pagina>
    )
}