import classNames from 'classnames'
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'
import { NavAnchorClass } from '.'
import { stepWrapper } from './NavList'
function NavLastStep(child_nav) {
    const hasChildNavChildren = Array.isArray(child_nav?.Children)
    const { closeAllSteps, closeStepThreeHandler, openStepThreeHandler, openStepThree, nav } = child_nav
    return (
        <>
            <li>
                <a
                    href={!hasChildNavChildren ? child_nav.url : undefined}
                    onClick={hasChildNavChildren ? openStepThreeHandler : undefined}
                    className={NavAnchorClass}
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
                    <div className="flex items-center justify-between px-5 py-4 font-termina-bold" onClick={closeAllSteps}>
                        <p className="shrink-0"><BiChevronLeft size={28} /></p>
                        <p className="grow text-center">{nav?.title}</p>
                    </div>

                    {/* Go One Step Back --Start-- */}
                    <button className={classNames(NavAnchorClass, 'mt-2 block w-full')} onClick={closeStepThreeHandler}>
                        <BiChevronLeft size={28} />
                        {child_nav?.title}
                    </button>
                    {/* Go One Step Back --End-- */}
                    <div>

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
            </div>
            {/* Menu Third Step --End-- */}
        </>
    )
}

export default NavLastStep
