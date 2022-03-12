{/* Menu Third Step --Start-- */ }
<div>
    <div className="flex items-center justify-between px-5 py-4 font-termina-bold">
        <p className="shrink-0"><BiChevronLeft size={28} /></p>
        <p className="grow text-center">Shop</p>
    </div>

    <div className="mt-2" >
        {/* Go One Step Back --Start-- */}
        <button className={NavAnchorClass}>
            <BiChevronLeft size={28} />
            Categories
        </button>
        {/* Go One Step Back --End-- */}

        {/* Third Step Nav Lists --Start-- */}
        <ul className="px-5 space-y-3.5 mt-5" >
            <li>
                <a href="#" className="font-aktivGroteskEx-regular px-5">Shop All</a>
            </li>
            {[...new Array(15).keys()].map(e => (
                <li>
                    <a href="#" className='font-aktivGroteskEx-regular font-medium text-base text-black flex items-center gap-5 px-5'>
                        <div
                            className="w-10 h-10 rounded-full overflow-hidden bg-pink-200 shrink-0 duration-200" >
                        </div>
                        Lorem, ipsum dolor.
                    </a>
                </li>
            ))}
        </ul>
        {/* Third Step Nav Lists --End-- */}
    </div>
</div>
{/* Menu Third Step --End-- */ }