'use client'
import Pagina from "@/components/Pagina";
export default function Page(){

    let numero = 0

    function incremetar(){
        numero += 1
        console.log(numero)
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