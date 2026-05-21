'use client'

import Pagina from "@/components/Pagina";
import { use, useState } from "react";


export default function Page(){
    const [valor1, setvalor1] = useState(0)

    const [valor2,setvalor2] = useState(1)


    function alterarvalor1(e:any){

        setvalor1(Number(e.target.value))

    }

    function alterarvalor2(e:any){

        setvalor2(Number(e.target.value))
    }    


    return(


        <Pagina titulo="Calculadora" subtitulo="Capitulo estado">
        <div className="flex flex-col gap-10">
            <div className="flex gap-5">

                <input className="campo" type="number"  value={valor1} onChange={alterarvalor1}/>

                <input className="campo" type="number" value={valor2} onChange={alterarvalor2}/>



            </div>

            <div className="flex flex-col gap-4">
                Resultado

                <span>{valor1+valor2}</span>
            </div>
            
        </div>

        </Pagina>
    )
}