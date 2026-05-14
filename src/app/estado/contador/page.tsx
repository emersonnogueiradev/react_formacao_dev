'use client'
import Pagina from "@/components/Pagina";
import {useState } from "react";
import { GoNumber } from "react-icons/go";


export default function Page(){


    const [numero, setNumero] = useState(0)
    const [delta, setDelta] = useState(1)
    function incrementar(){
        setNumero(numero+delta)
    }

    function decrementar(){
        setNumero(numero-delta)
    }    




    function incrementarDelta(){
        setDelta(delta+1)
    }

    function decrementarDelta(){
        setDelta(delta-1)
    }   
    return(

            <Pagina titulo="Com estado" subtitulo="Capítulo estado">

                <div className="flex flex-col justify-center items-center w-full h-full">
                    <span>Valor</span>
                    <span className="">{numero}</span>

                    <button className="bg-blue-500 p-2 rounded-3xl m-2 w-12 h-12" onClick={incrementar}><GoNumber /></button>
                    <button className="bg-red-500 p-2 rounded-3xl m-2 w-12 h-12" onClick={decrementar}>-</button>
                    <div className="flex gap-4">
                        <button className="bg-blue-500 p-2 rounded-3xl m-2 w-12 h-12" onClick={incrementarDelta}><GoNumber /></button>
                        <span>{delta}</span>
                        <button className="bg-red-500 p-2 rounded-3xl m-2 w-9 h-9" onClick={decrementarDelta}>-</button>               
                    </div>

                </div>



            </Pagina>
        
    )
}