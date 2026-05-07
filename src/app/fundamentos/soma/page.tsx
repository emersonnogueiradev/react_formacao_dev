"use client"
import Pagina from "@/components/Pagina"

export default function Page(){

    const nome: string = "João"

    const idade: number = 9

    function executar(){
        console.log("O botão foi pressionado")
    }
    return (

        <Pagina titulo="HOJE" subtitulo="AQUI">
                <div>

                    <h1>{nome}</h1>
                    <h2>{idade}</h2>
                    <div>{idade*3}</div>


                    <button onClick={executar} className="bg-blue-500 rounded-md p-4 cursor-pointer" >Teste</button>
                </div>

        </Pagina>
    )
}





