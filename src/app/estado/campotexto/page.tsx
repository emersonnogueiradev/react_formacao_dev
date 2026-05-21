'use client'

import Pagina from "@/components/Pagina";
import { useState } from "react";


export default function PaginaCampoTexto(){

    const [valor, setValor] = useState('Inicial')

    function alterarvalor(e:any){

        setValor(e.target.value)


    }

    return(
        <Pagina titulo="Campo Texto" subtitulo="Capitulo Estado">

            <div className="flex items-center gap-5">

                <input type="text" className="campo" value={valor} onChange={alterarvalor}/>



                {valor}

            </div>
        </Pagina>
    )
}