import Pagina from "@/components/Pagina";
import { TbBrandReactNative } from "react-icons/tb";

export default function Home() {
  return (

    <Pagina titulo="Fundamentos React" subtitulo="Bem vindo ao mundo react">

      <div className="flex flex-col justify-center items-center w-full h-full text-zinc-500 ">
        <TbBrandReactNative size={200} />
        <span className="font-black">Curso fundamentos de react</span>
        <span className="text-sm">Aqui você vai aprender fundamentos da biblioteca react</span>

      </div>

    </Pagina>
  );
}
