import Corte1 from "../assets/cort1.png"
import Corte2 from "../assets/cort2.png"
import Corte3 from "../assets/cort3.png"
import Corte4 from "../assets/cort2.png"
import Corte5 from "../assets/cort2.png"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "./ui/carousel"

export default function Component() {
    return (
        <section id="Services" className="flex justify-center w-full py-12 md:py-24">
            <div className="sm:px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Serviços</h2>
                    </div>
                </div>
                <Carousel>
                    <div className="md:flex items-center">
                        <div className="hidden md:block">
                            <CarouselPrevious />
                        </div>
                            <CarouselContent>
                            <CarouselItem className="sm:basis-1/2 lg:basis-1/4">
                                    <div className="grid grid-cols-1 gap-6 py-12 px-4">
                                        <div className="transition-transform duration-300 ease-in-out hover:-translate-y-2 shadow-md rounded-lg">
                                            <img
                                                src={Corte3.src}
                                                alt="Corte 1"
                                                className="object-cover w-full h-auto rounded-t-lg"
                                            />
                                            <div className="p-4 flex justify-between items-center">
                                                <h3 className="text-xl font-bold">Corte 3</h3>
                                                <p className="h-6 p-2 flex items-center rounded-md bg-black text-gray-50">R$24.99</p>
                                            </div>
                                        </div>
                                    </div>
                                </CarouselItem>
                                <CarouselItem className="sm:basis-1/2 lg:basis-1/4">
                                    <div className="grid grid-cols-1 gap-6 py-12 px-4">
                                        <div className="transition-transform duration-300 ease-in-out hover:-translate-y-2 shadow-md rounded-lg">
                                            <img
                                                src={Corte3.src}
                                                alt="Corte 2"
                                                className="object-cover w-full h-auto rounded-t-lg"
                                            />
                                            <div className="p-4 flex justify-between items-center">
                                                <h3 className="text-xl font-bold">Corte 3</h3>
                                                <p className="h-6 p-2 flex items-center rounded-md bg-black text-gray-50">R$24.99</p>
                                            </div>
                                        </div>
                                    </div>
                                </CarouselItem>
                                <CarouselItem className="sm:basis-1/2 lg:basis-1/4">
                                    <div className="grid grid-cols-1 gap-6 py-12 px-4">
                                        <div className="transition-transform duration-300 ease-in-out hover:-translate-y-2 shadow-md rounded-lg">
                                            <img
                                                src={Corte3.src}
                                                alt="Corte 3"
                                                className="object-cover w-full h-auto rounded-t-lg"
                                            />
                                            <div className="p-4 flex justify-between items-center">
                                                <h3 className="text-xl font-bold">Corte 3</h3>
                                                <p className="h-6 p-2 flex items-center rounded-md bg-black text-gray-50">R$24.99</p>
                                            </div>
                                        </div>
                                    </div>
                                </CarouselItem>
                                <CarouselItem className="sm:basis-1/2 lg:basis-1/4">
                                    <div className="grid grid-cols-1 gap-6 py-12 px-4">
                                        <div className="transition-transform duration-300 ease-in-out hover:-translate-y-2 shadow-md rounded-lg">
                                            <img
                                                src={Corte3.src}
                                                alt="Corte 4"
                                                className="object-cover w-full h-auto rounded-t-lg"
                                            />
                                            <div className="p-4 flex justify-between items-center">
                                                <h3 className="text-xl font-bold">Corte 3</h3>
                                                <p className="h-6 p-2 flex items-center rounded-md bg-black text-gray-50">R$24.99</p>
                                            </div>
                                        </div>
                                    </div>
                                </CarouselItem>
                                <CarouselItem className="sm:basis-1/2 lg:basis-1/4">
                                    <div className="grid grid-cols-1 gap-6 py-12 px-4">
                                        <div className="transition-transform duration-300 ease-in-out hover:-translate-y-2 shadow-md rounded-lg">
                                            <img
                                                src={Corte3.src}
                                                alt="Corte 5"
                                                className="object-cover w-full h-auto rounded-t-lg"
                                            />
                                            <div className="p-4 flex justify-between items-center">
                                                <h3 className="text-xl font-bold">Corte 3</h3>
                                                <p className="h-6 p-2 flex items-center rounded-md bg-black text-gray-50">R$24.99</p>
                                            </div>
                                        </div>
                                    </div>
                                </CarouselItem>
                                <CarouselItem className="sm:basis-1/2 lg:basis-1/4">
                                    <div className="grid grid-cols-1 gap-6 py-12 px-4">
                                        <div className="transition-transform duration-300 ease-in-out hover:-translate-y-2 shadow-md rounded-lg">
                                            <img
                                                src={Corte3.src}
                                                alt="Corte 6"
                                                className="object-cover w-full h-auto rounded-t-lg"
                                            />
                                            <div className="p-4 flex justify-between items-center">
                                                <h3 className="text-xl font-bold">Corte 3</h3>
                                                <p className="h-6 p-2 flex items-center rounded-md bg-black text-gray-50">R$24.99</p>
                                            </div>
                                        </div>
                                    </div>
                                </CarouselItem>
                            </CarouselContent>
                        <div className="hidden md:block">
                            <CarouselNext />
                        </div>
                        <div className="flex justify-center md:hidden">
                            <CarouselPrevious />
                            <CarouselNext />
                        </div>
                    </div>
                </Carousel>
            </div>
        </section>
    )
}
