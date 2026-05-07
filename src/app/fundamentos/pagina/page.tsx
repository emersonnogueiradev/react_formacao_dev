import Cabecalho from "@/components/Cabecalho";
import Conteudo from "@/components/Conteudo";
import Rodape from "@/components/Rodape";
import Menu from "@/components/Menu";
import Pagina from "@/components/Pagina";
export default function Page(){


    return (

        <Pagina titulo="HOJE" subtitulo="AQUI">
                    <ul className="list-disc p-4">
                        <li>Isabele Pio dos Santos</li>
                        <li>Emerson da Costa Nogueira</li>
                        <li>Sarah Da Costa Paula</li>
                    </ul>

        </Pagina>

    )
}