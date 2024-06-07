import Team1 from "../assets/nathan.jpg"
import Link from "next/link";
import CustomImage from './custom-image';
import { JSX, SVGProps } from "react";

function FacebookIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function MessageCircleIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    </svg>
  );
}

export default function Team() {
  return (
    <section id="Contat" className="bg-[#080B16] flex justify-center w-full py-12 md:py-24 lg:py-32 text-gray-50">
      <div className="sm:px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Nossa Equipe</h2>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 py-12">
            <div className="transition-transform duration-300 ease-in-out hover:-translate-y-2 ">
              <div className="p-4">
                <CustomImage
                  src={Team1.src}
                  alt="Team Member 1"
                  width={318}
                  height={354}
                  className="object-cover w-full h-full rounded-xl"
                />
              </div>
              <div className="flex justify-between items-center">
                <div className="p-4 flex justify-center">
                  <h3 className="font-bold text-xl">Nathan</h3>
                </div>
                <div className="flex justify-center space-x-4 p-4">
                  <Link href="#" className="text-gray-500  dark:hover:text-gray-50" prefetch={false}>
                    <InstagramIcon className="h-5 w-5 text-gray-500 hover:text-gray-50" />
                    <span className="sr-only">Instagram</span>
                  </Link>
                  <Link href="#" className="text-gray-500 hover:text-gray-50" prefetch={false}>
                    <FacebookIcon className="h-5 w-5 text-gray-500 hover:text-gray-50" />
                    <span className="sr-only">Facebook</span>
                  </Link>
                  <Link href="#" className="text-gray-500 hover:text-gray-50" prefetch={false}>
                    <MessageCircleIcon className="h-5 w-5 text-gray-500 hover:text-gray-50" />
                    <span className="sr-only">Facebook</span>
                  </Link>
                </div>
              </div> 
            </div>
            <div className="transition-transform duration-300 ease-in-out hover:-translate-y-2 ">
              <div className="p-4">
                <CustomImage
                  src={Team1.src}
                  alt="Team Member 1"
                  width={318}
                  height={354}
                  className="object-cover w-full h-full rounded-xl"
                />
              </div>
              <div className="flex justify-between items-center">
                <div className="p-4 flex justify-center">
                  <h3 className="font-bold text-xl">Jane Doe</h3>
                </div>
                <div className="flex justify-center space-x-4 p-4">
                  <Link href="#" className="text-gray-500  dark:hover:text-gray-50" prefetch={false}>
                    <InstagramIcon className="h-5 w-5 text-gray-500 hover:text-gray-50" />
                    <span className="sr-only">Instagram</span>
                  </Link>
                  <Link href="#" className="text-gray-500 hover:text-gray-50" prefetch={false}>
                    <FacebookIcon className="h-5 w-5 text-gray-500 hover:text-gray-50" />
                    <span className="sr-only">Facebook</span>
                  </Link>
                  <Link href="#" className="text-gray-500 hover:text-gray-50" prefetch={false}>
                    <MessageCircleIcon className="h-5 w-5 text-gray-500 hover:text-gray-50" />
                    <span className="sr-only">Facebook</span>
                  </Link>
                </div>
              </div> 
            </div>
            <div className="transition-transform duration-300 ease-in-out hover:-translate-y-2 ">
              <div className="p-4">
                <CustomImage
                  src={Team1.src}
                  alt="Team Member 1"
                  width={318}
                  height={354}
                  className="object-cover w-full h-full rounded-xl"
                />
              </div>
              <div className="flex justify-between items-center">
                <div className="p-4 flex justify-center">
                  <h3 className="font-bold text-xl">Jane Doe</h3>
                </div>
                <div className="flex justify-center space-x-4 p-4">
                  <Link href="#" className="text-gray-500  dark:hover:text-gray-50" prefetch={false}>
                    <InstagramIcon className="h-5 w-5 text-gray-500 hover:text-gray-50" />
                    <span className="sr-only">Instagram</span>
                  </Link>
                  <Link href="#" className="text-gray-500 hover:text-gray-50" prefetch={false}>
                    <FacebookIcon className="h-5 w-5 text-gray-500 hover:text-gray-50" />
                    <span className="sr-only">Facebook</span>
                  </Link>
                  <Link href="#" className="text-gray-500 hover:text-gray-50" prefetch={false}>
                    <MessageCircleIcon className="h-5 w-5 text-gray-500 hover:text-gray-50" />
                    <span className="sr-only">Facebook</span>
                  </Link>
                </div>
              </div> 
            </div>
        </div>
      </div>
    </section>
  );
}
