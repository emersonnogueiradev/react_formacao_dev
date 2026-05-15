import AreaLateral from "./AreaLateral";
import Cabecalho from "./Cabecalho";
import Conteudo from "./Conteudo";
import Rodape from "./Rodape";

interface PaginaProps{
    titulo: string
    subtitulo: string
    children: any
}


export default function Pagina(props:PaginaProps){
    return(
        <div className={`flex h-screen  bg-black text-white`}>
                <AreaLateral/>
            <div className="flex flex-col w-full">
                <Cabecalho titulo={props.titulo} subtitulo = {props.subtitulo} className = "h-16 bg-zinc-800"/>
                <Conteudo>{props.children}</Conteudo>
                <Rodape saudacao="Feito com amor" autor = "Todos direitos reservador por Emerson Nogueira"/>
            </div>
        </div>
    )
}

