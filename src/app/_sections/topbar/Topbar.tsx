import Social from "@/app/_components/Social/Social";
import Link from "next/link";

export default function Topbar(){
  return (
    <>
    <div className="container-full px-[15px] md:px-8 lg:px-20 h-[43px] flex items-center bg-black text-white">
      <div className="grid grid-cols-1 md:grid-cols-3 w-full">
        <Social className="social hidden md:flex m-0 p-0 items-center" />
        <div className="flex items-center justify-center">
          <p className="text text-xs text-white">
            10% off your next order, use code : <Link href="#" className="text-red-500 underline">10OFF</Link>
          </p>
        </div>
      </div>
    </div>
    </>
  )
}