import classNames from 'classnames'
import { useState } from 'react'
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'
import { NavAnchorClass } from '.'

const stepWrapper = 'absolute top-0 border-t-[1.5px] border-slate-100 left-0 w-full h-full overflow-hidden overflow-y-auto flex flex-col justify-between bg-white translate-x-full duration-200'

function NavList(nav) {
    const [openStepTwo, setOpenStepTwo] = useState(false)


    const openStepTwoHandler = () => setOpenStepTwo(true)
    const closeStepTwoHandler = () => setOpenStepTwo(false)


    const hasNavChildren = Array.isArray(nav?.Children) || nav?.hasChildren

    const NavLastStep = (child_nav) => {
        const hasChildNavChildren = Array.isArray(child_nav?.Children)
        const [openStepThree, setOpenStepThree] = useState(false)
        const openStepThreeHandler = () => setOpenStepThree(true)
        const closeStepThreeHandler = () => setOpenStepThree(false)

        const closeAllSteps = () => {
            closeStepThreeHandler()

            setTimeout(() => {
                closeStepTwoHandler()
            }, 150);
        }

        return (
            <>
                <li
                    style={{
                        order: child_nav?.order || 'unset'
                    }}
                >
                    <a
                        href={!hasChildNavChildren ? child_nav.url : undefined}
                        onClick={hasChildNavChildren ? openStepThreeHandler : undefined}
                        className={
                            classNames(NavAnchorClass, 'cursor-pointer hover:bg-slate-100')
                        }
                    >
                        {child_nav?.title}
                        {hasChildNavChildren && <BiChevronRight size={28} />}
                    </a>
                </li>

                {/* Menu Third Step --Start-- */}
                <div className={
                    classNames(stepWrapper, openStepThree && '!translate-x-0')
                }>
                    <div>
                        <div className="flex items-center justify-between px-5 py-4 font-termina-bold cursor-pointer hover:bg-slate-100" onClick={closeAllSteps}>
                            <p className="shrink-0"><BiChevronLeft size={28} /></p>
                            <p className="grow text-center">{nav?.title}</p>
                        </div>

                        {/* Go One Step Back --Start-- */}
                        <button className={classNames(NavAnchorClass, 'mt-2 block w-full cursor-pointer hover:bg-slate-100')} onClick={closeStepThreeHandler}>
                            <BiChevronLeft size={28} />
                            {child_nav?.title}
                        </button>
                        {/* Go One Step Back --End-- */}
                        <div>

                            {/* Third Step Nav Lists --Start-- */}
                            <div className="mt-5 mb-3.5">
                                <a href="#" className="font-aktivGroteskEx-regular px-10">Shop All</a>
                            </div>
                            <ul className="px-5 gap-y-3.5 grid grid-cols-1" >
                                {child_nav?.Children?.map((child_nav_item, _index) => (
                                    <li
                                        key={_index}
                                        style={{
                                            order: child_nav_item?.order || 'unset'
                                        }}
                                    >
                                        <a href={child_nav_item?.title} className='font-aktivGroteskEx-regular font-medium text-base text-black flex items-center gap-5 px-5'>
                                            <div
                                                className="w-10 h-10 rounded-full overflow-hidden bg-pink-200 shrink-0 duration-200" >
                                            </div>
                                            {child_nav_item?.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                            {/* Third Step Nav Lists --End-- */}
                        </div>
                    </div>
                </div>
                {/* Menu Third Step --End-- */}
            </>
        )
    }


    return (
        <>
            <li style={{
                order: nav?.order || 'unset'
            }}>
                <a
                    href={!hasNavChildren ? nav.url : undefined}
                    onClick={hasNavChildren ? openStepTwoHandler : undefined}
                    className={
                        classNames(NavAnchorClass, 'cursor-pointer hover:bg-slate-100')
                    }
                >
                    {nav?.title}
                    {hasNavChildren && <BiChevronRight size={25} />}
                </a>
            </li>

            {/* Menu Second Step --Start-- */}
            {hasNavChildren ?
                <div
                    className={
                        classNames(stepWrapper, openStepTwo && '!translate-x-0')
                    }
                >
                    <div>
                        <div className="flex items-center justify-between px-5 py-4 font-termina-bold relative cursor-pointer hover:bg-slate-100" onClick={closeStepTwoHandler}>
                            <p className="shrink-0 absolute top-1/2 left-5 -translate-y-1/2"><BiChevronLeft size={28} /></p>
                            <p className="grow text-center">{nav?.title}</p>
                        </div>

                        <div className="mt-2" >
                            <ul className="grid grid-cols-1">
                                {
                                    nav?.Children.map((child_nav, i) => {
                                        return (
                                            <NavLastStep key={i} {...child_nav} />
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>


                    {nav?.withImage && <div>
                        <a href="#">
                            <img src="/img/girl-hand.png" alt="girl-hand" className="w-full h-auto" />
                            <div className="flex items-center justify-between py-4 pb-6 px-5 font-termina-bold" >
                                <p>Buy 1 Get 1 Free on French Manicure</p>
                                <img src="/icons/large_arrow_right.svg" alt="large_arrow_right" className="w-[20px]" />
                            </div>
                        </a>
                    </div>}
                </div> : null}
            {/* Menu Second Step --End-- */}
        </>
    )
}

export default NavList
