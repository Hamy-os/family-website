import Link from 'next/link'
const Navbar = () => {
    return ( 
        <div>
            {/*TODO: Add js to the menu to make it render only on mobile in other words make it responsive*/}
            <div className="navbar mb-2 shadow-lg rounded-box">
            <div className="px-2 mx-2 navbar-start">
                <span className="text-lg font-bold">
                    <Link href="/">
                    Alisic Family
                    </Link>
                </span>
            </div> 
            <div className="hidden px-2 mx-2 navbar-center lg:flex">
                <div className="flex items-stretch">
                <Link href="/hamza">
                    <a className="btn btn-ghost btn-sm rounded-btn">
                        Hamza
                    </a> 
                </Link>
                <Link href="/esma">
                    <a className="btn btn-ghost btn-sm rounded-btn">
                        Esma
                    </a> 
                </Link>
                <Link href="/halima">
                    <a className="btn btn-ghost btn-sm rounded-btn">
                        Halima
                    </a> 
                </Link>
                <Link href="/tahira">
                    <a className="btn btn-ghost btn-sm rounded-btn">
                        Tahira
                    </a> 
                </Link>
                <Link href="/haris">
                    <a className="btn btn-ghost btn-sm rounded-btn">
                        Haris
                    </a> 
                </Link>


                </div>
            </div> 
            <div className="navbar-end">
                <button className="btn btn-square btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">           
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>               
                </svg>
                </button>
            </div>
            </div>

        </div>
     );
}
 
export default Navbar;