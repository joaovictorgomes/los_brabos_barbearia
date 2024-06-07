
import React from "react";

import CustomImage from './custom-image';

import Link from "next/link"
import Fundo1 from "../assets/fundo.jpg"


  function ExternalLinkIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M15 3h6v6" />
        <path d="M10 14 21 3" />
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      </svg>
    )
  }

export default function Unit() {
  return (
    <div id="Location" className="w-full">
      <section className="w-full py-12 md:py-24 lg:py-32 flex justify-center">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Nossa Unidade</h1>
              <p className="mt-4 max-w-[600px] text-black md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Conheça nossa unidade, localizada em uma região estratégica para atender melhor nossos clientes. Venha
                nos visitar e descubra o que temos a oferecer.
              </p>
            </div>
            
            <div className="rounded-lg overflow-hidden">
              <Link href="#" target="_blank" prefetch={false}>
                <CustomImage
                  src={Fundo1.src}
                  alt="Mapa da unidade"
                  width={800}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </Link>
            </div>
          </div>
                <div className="mt-4 flex lg:justify-end">
                <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                >
                <ExternalLinkIcon className="h-4 w-4" />
                Abrir no Google Maps
                </a>
                </div>
        </div>
      </section>
    </div>
  )
}