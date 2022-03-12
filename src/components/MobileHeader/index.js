import classNames from "classnames"
import { useState } from "react"
import { useEffect } from "react"
import { useRef } from "react"
// import { BiChevronRight } from 'react-icons/bs'
import headerData from '../../data/header_test.json'
import NavList from "./NavList"
export const NavAnchorClass = 'flex items-center gap-3 font-termina-bold px-5 py-3.5 text-dark-gray hover:bg-slate-100'

function MobileHeader() {

    const [isOpenSidebar, setIsOpenSidebar] = useState(false)
    const [headerHeight, setHeaderHeight] = useState(0)
    const [windowHeight, setWindowHeight] = useState(0)
    const headerRef = useRef(null)

    const closeSidebarHandler = () => setIsOpenSidebar(false)

    useEffect(() => {
        setTimeout(() => {
            setHeaderHeight(headerRef.current.clientHeight);
            setWindowHeight(document.documentElement.clientHeight)
        }, 0);
    }, [headerRef])

    useEffect(() => {
        const shouldCloseSidebarOnOverlyClick = (e) => {
            if (e.target.id === 'sidebar_overly') closeSidebarHandler()
        }

        window.addEventListener('click', shouldCloseSidebarOnOverlyClick)

        return () => window.removeEventListener('click', shouldCloseSidebarOnOverlyClick)
    }, [])

    return (
        <>
            <header ref={headerRef} className="px-5 flex md:hidden items-center justify-between py-4 border-b border-slate-100" >
                {/* Hamburger Icon --Start-- */}
                <div onClick={() => setIsOpenSidebar(prev => !prev)} className="w-7">
                    {
                        isOpenSidebar ? <img src="/icons/close.svg" alt="close" />
                            : <img src="/icons/bars.svg" alt="bars" className="w-6" />
                    }
                </div>
                {/* Hamburger Icon --End-- */}

                {/* Logo --Start-- */}
                <div className="max-w-[55%] sm:w-[70%] shrink-0" >
                    <img src="/img/logo.png" alt="ColorStreet" />
                </div>
                {/* Logo --End-- */}

                {/* Cart Icon --Start-- */}
                <div>
                    <a href={headerData.headerNav.filter(e => e.title?.toLocaleLowerCase() === 'cart')[0]?.url}>
                        <img src="/icons/bag.svg" alt="Cart" />
                    </a>
                </div>
                {/* Cart Icon --End-- */}
            </header>

            {/* Mobile Sidebar Nav --Start-- */}
            <div
                className={
                    classNames(
                        "fixed left-0 w-full bg-black/10 z-50 md:hidden duration-200",
                        isOpenSidebar ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    )
                }
                id="sidebar_overly"
                style={{
                    top: headerHeight,
                    height: `${windowHeight - headerHeight}px`
                }}
            >

                {/* White Content Box --Start-- */}
                <div className={
                    classNames(
                        "w-[90%] h-full bg-white overflow-hidden overflow-y-auto flex flex-col justify-between relative duration-200",
                        isOpenSidebar ? 'translate-x-0' : '-translate-x-full'
                    )
                } >

                    {/* Sidebar Top Part --Start-- */}
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
                            <ul className="grid grid-cols-1">
                                {
                                    headerData.headerNav.filter(e => e?.endNav !== true).map((nav, index) => (
                                        <NavList {...nav} key={index} />
                                    ))
                                }
                            </ul>
                        </div>
                        {/* Nav list --End-- */}
                    </div>
                    {/* Sidebar Top Part --End-- */}

                    {/* Sidebar Bottom Part --Start-- */}
                    <div className="mt-10" >
                        <ul className="pb-8 grid grid-cols-1" >
                            {
                                headerData.headerNav.filter(e => e?.endNav && !e?.disableForMobile).map((nav, index) => (
                                    <li key={index} style={{ order: nav?.orderInMobile || nav?.order || 'unset' }}>
                                        {
                                            !nav?.isButton ? (
                                                <a href={nav?.url} className="flex items-center px-5 py-3 gap-4 font-aktivGroteskEx-regular">
                                                    {nav?.iconSrc && <img src={nav?.iconSrc} alt={nav?.title} className="-mt-1" />}
                                                    {nav?.title}
                                                </a>
                                            ) : (
                                                <div className="px-5 mt-4" >
                                                    <a href={nav?.url} className="px-5 text-center block py-4 bg-[#EFEEFF] hover:bg-[#B592FE] hover:text-white duration-100 font-termina-bold" >{nav?.title}</a>
                                                </div>
                                            )
                                        }

                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    {/* Sidebar Bottom Part --End-- */}

                </div>
                {/* White Content Box --End-- */}

            </div>
            {/* Mobile Sidebar Nav --End-- */}
        </>
    )
}

export default MobileHeader
