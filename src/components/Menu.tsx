import MenuItem from "./MenuItem";

import { MdHome } from "react-icons/md";

import { GrConfigure } from "react-icons/gr";
import { SiApachenetbeanside } from "react-icons/si";


export default function Menu(){

    return(
        <div className="flex flex-col justify-start  text-3xl w-72 p-2 gap-2">

            <span className="text-sm text-zinc-500  pl-3 pt-4">Estado</span>
            <MenuItem icone = {<MdHome/>} texto="Componente com Estado" url="/estado/comestado"/>

            <MenuItem icone = {<MdHome/>} texto="Componente sem Estado" url="/estado/semestado"/>


            <span className="text-sm text-zinc-500  pl-3 pt-4">Fundamentos</span>
            <MenuItem icone = {<MdHome/>} texto="Pagina #1" url="/fundamentos/pagina"/>
            <MenuItem icone= {<GrConfigure/>}texto="Pagina #2" url="/fundamentos/soma"/>


            <span className="text-sm text-zinc-500  pl-3 pt-4">Componentes</span>
            <MenuItem icone = {<SiApachenetbeanside />} texto="Pagina #3" url="/componente/titulo"/>
            <MenuItem icone = {<SiApachenetbeanside />} texto="Pagina #4" url="/componente/basico"/>

        </div>
    )
}