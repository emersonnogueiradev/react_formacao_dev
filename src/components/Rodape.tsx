export default function Rodape(props: any){
    return (
        <div className={`flex justify-between items-center h-16 text-base px-10 bg-zinc-900 border-t border-zinc-800 text-zinc-500`}>
            

            <div className="">
                {props.saudacao}
            </div>

            <div className="">
                {props.autor}
            </div>
        </div>
    )

}




