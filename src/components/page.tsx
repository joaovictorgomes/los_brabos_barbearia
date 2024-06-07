import Image from "next/image"
import Fundo from "../assets/fundo.jpg"

export function Page(){
    return (
        <section className="relative h-[50vh] md:h-[80vh]">
            <div className="absolute inset-0 overflow-hidden">
                {/* Imagem de fundo */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0">
                        <Image
                            src={Fundo.src}
                            alt="Imagem de fundo"
                            layout="fill" 
                            objectFit="cover" 
                        />
                    </div>
                </div>
                {/* Conteúdo sobreposto */}
                <div className="relative -top-2 sm:-top-0 md:-top-6 lg:-top-5 xl:-top-5 z-10 px-4 flex flex-col items-center justify-center h-full space-y-3  text-white text-center">
                <h1 className="text-md sm:text-2xl md:text-3xl lg:text-3xl 2xl:text-5xl font-bold">ESTILO É UM REFLEXO DA SUA ATITUDE E <br /> SUA PERSONALIDADE</h1>
                <p className="text-xs sm:text-sm md:text-xl">
                    Hórario de funcionamento: 09:00 às 18:00
                </p>
                <p className="text-xs md:text-base">Atendemos por ordem de chegada.</p>
                </div>
            </div>
        </section>


      
    )
}