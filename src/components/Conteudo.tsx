import { requestToBodyStream } from "next/dist/server/body-streams";


interface ConteudoProps {
    children: any
}


export default function  Conteudo(props: ConteudoProps) {

    
        return (
            <div className={`flex items-start text-3xl bg-zinc-900 flex-1 p-4`}>
                {props.children}
                
            </div>
        )
}