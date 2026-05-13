import Link from "next/link";
import { FaReact } from "react-icons/fa";

export default function Logo(){
    return(
    
        <Link href= "/" className="flex items-center px-5 text-3xl font-black h-16 gap-2.5 bg-purple-700">
            <span><FaReact size={30}/></span>
            <span className="text-2xl">React</span>
        
        </Link>

    )
}