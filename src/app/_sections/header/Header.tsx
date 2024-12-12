import Image from "next/image";
import Link from "next/link";



export default function Header(){

  return (
    <>
      <header className="container-full px-[15px] md:px-8 lg:px-20 h-[43px] flex items-center">
        <div className="grid lg:grid-cols-3 grid-cols-1 w-full">
          <Link href={'/'}>
            <Image className="w-24" loading="eager" src={"https://cdn.shopify.com/s/files/1/0651/3157/7585/files/logo_w_47ebb230-b0e0-43eb-a57e-482ed7e37ca5.png?v=1659521128"} width={260} height={47} alt="BRAND" />
            <Image className="w-24" loading="eager" src={"https://cdn.shopify.com/s/files/1/0651/3157/7585/files/logo_black-Unsen.svg?v=1658817149"} width={260} height={47} alt="BRAND" />
          </Link>
          <ul className="flex items-center justify-center p-0 m-0">
              {navbar.map(item => (
                <li key={item.id}>
                  <Link href={`/${item.url}`} className="text-xs uppercase px-3 py-2 font-bold"> { item.name } </Link>
                </li>
              ))}
          </ul>
          <div className="action flex items-center justify-end">

          </div>
        </div>
      </header>
    </>
  )
}

interface Nav{
  id: number
  name: string
  url?: string
  badge?: '' | 'New' | 'Hot' | 'Featured'
}

const navbar: Nav[] =[
  {
    id: 1,
    name: 'Shops',
    url: '#shops',

  },
  {
    id: 2,
    name: 'Collections',
    url: '#collections',

  },
  {
    id: 3,
    name: 'Blogs',
    url: '#blogs',
  },
]