import Link from "next/link";
import { JSX } from "react";

interface IconProps{
  children:JSX.Element
  url?:string

}

export default function Icon({children,url="#"}:IconProps){
  return (
    <>
      <Link href={url} className="inline-flex hover:text-linkHover hover:translate-y-[-2px] transition duration-200 ease-in-out px-2">{children}</Link>
    </>
  )
}