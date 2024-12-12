import Link from "next/link"
import React from "react"

interface ButtonProps {
  children: string
  variant?: 'solid' | 'outline' | 'link'
  className?: string
  disabled?:boolean
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  url?: string
}

export default function Button({children,variant,url="#",...props} : ButtonProps ) {

  const variantStyle : object= {
    solid     : 'px-8 bg-btnbg text-btn hover:text-btnhv hover:bg-btnbghv',
    outline   : 'px-8 border border-btnbg bg-transparent text-btnbg hover:border-btnbghv hover:text-btnhv hover:bg-btnbghv',
    link      : 'px-0 bg-transparent text-btnbg hover:text-btnbghv hover:bg-transparent relative px-0 rounded-none after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-black hover:after:bg-btnbghv after:transition after:duration-300 after:ease-in-out hover:after:translate-y-[-2px]',
  }

  const className = `py-2 rounded-full font-semibold focus:outline-none transition duration-300 ease-in-out text-base ${variantStyle[variant]}`

  return (
    <>
      { variant != 'link' ? <button {...props} className={className}>{children}</button>
      : <Link href={url} {...props} className={className}>{children}</Link>}
    </>
  )
}