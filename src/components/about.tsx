import Image from "next/image"
import Fundo from "../assets/fundo.jpg"
import Fundo1 from "../assets/Rectangle8.jpg"
import Fundo2 from "../assets/Rectangle9.jpg"


export function About() {
    return (
        <section id="About" className="w-full bg-gray-900 py-20 md:py-32 ">
        <div className="mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 items-center">
            <div className="mx-auto items-center">
                <Image
                    alt=""
                    className="rounded-lg object-cover"
                    height={333}
                    src={Fundo1.src}
                    style={{
                    aspectRatio: "400/500",
                    objectFit: "cover",
                    }}
                    width={400}
                />
            </div>
            <div className="space-y-6 text-gray-50">
                <h2 className="text-2xl font-bold tracking-tight md:text-4xl">Sobre</h2>
                <div className="lg:pr-40 2xl:pr-60">
                  <p className="md:text-lg">
                  Lorem ipsum dolor sit amet consectetur. Sed vitae egestas risus in eleifend porttitor nam. Amet ut dictumst
                  commodo aliquam eget augue at mi. Commodo sollicitudin ultrices ut nulla venenatis quam at.
                  </p>
                  <p className="md:text-lg">
                  Lorem ipsum dolor sit amet consectetur. Sed vitae egestas risus in eleifend porttitor nam. Amet ut dictumst
                  commodo aliquam eget augue at mi. Commodo sollicitudin ultrices ut nulla venenatis quam at.
                  </p>
                </div>
            </div>
          </div>
        </div>
      </section>
    )
}