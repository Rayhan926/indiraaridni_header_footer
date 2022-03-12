{/* Sidebar Top Part --Start-- */ }
<div>
    {/* Search Bar --Start-- */}
    <form className="relative" >
        <input
            type="text"
            className="w-full block px-5 py-4 pr-14 outline-none font-aktivGroteskEx-regular text-base placeholder:text-black bg-[#F7F6FF] border-y border-[#CEB8FD]"
            placeholder="Search"
        />
        <button type="submit" className="absolute top-0 right-0 h-full aspect-square grid place-items-center">
            <img src="/icons/search.svg" alt="" />
        </button>
    </form>
    {/* Search Bar --End-- */}


    {/* Nav list --Start-- */}
    <div className="mt-5" >
        <ul>
            {
                [...new Array(3).keys()].map(e => (
                    <li key={e}>
                        <a href="#" className={NavAnchorClass}>
                            Shop
                            <BsChevronRight />
                        </a>
                    </li>
                ))
            }
        </ul>
    </div>
    {/* Nav list --End-- */}
</div>
{/* Sidebar Top Part --End-- */ }

{/* Sidebar Bottom Part --Start-- */ }
<div className="mt-10" >
    <ul className="pb-8" >
        {
            [...new Array(3).keys()].map(e => (
                <li>
                    <a href="#" className="flex items-center px-5 py-3 gap-4 font-aktivGroteskEx-regular">
                        <img src="/icons/account.svg" alt="Login" className="-mt-1" />
                        Login
                    </a>
                </li>
            ))
        }
        <li className="px-5 mt-4">
            <a href='#' className="px-5 text-center block py-4 bg-[#EFEEFF] hover:bg-[#B592FE] hover:text-white duration-100 font-termina-bold" >Your Styles</a>
        </li>
    </ul>
</div>
{/* Sidebar Bottom Part --End-- */ }