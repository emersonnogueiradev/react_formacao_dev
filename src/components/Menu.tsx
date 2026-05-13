import MenuItem from "./MenuItem";

import { MdHome } from "react-icons/md";

import { GrConfigure } from "react-icons/gr";
import { SiApachenetbeanside } from "react-icons/si";


export default function Menu(){

    return(
        <div className="flex flex-col justify-start items-center text-3xl w-39 p-2 gap-2">

            <MenuItem icone = {<MdHome/>} texto="Pagina #1" url="/fundamentos/pagina"/>
            <MenuItem icone= {<GrConfigure/>}texto="Pagina #2" url="/fundamentos/soma" />
            <MenuItem icone = {<SiApachenetbeanside />} texto="Pagina #3" url="/componente/titulo"/>
            <MenuItem icone = {<SiApachenetbeanside />} texto="Pagina #4" url="/componente/basico"/>

        </div>
    )
}