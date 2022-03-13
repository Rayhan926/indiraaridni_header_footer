import classNames from 'classnames'
import headerData from '../data/header_test.json'
import { ImArrowRight2 } from 'react-icons/im'
const CenterNavClass = 'border-b-2 border-transparent hover:border-dark-gray py-6 block'
function DesktopHeader() {
    return (
        <header className="px-14 items-center justify-between border-slate-100 border-b relative hidden md:flex" >
            {/* Logo --Start-- */}
            <div>
                <a href="/">
                    <img src="/img/logo.png" alt="ColorStreet" />
                </a>
            </div>
            {/* Logo --End-- */}

            {/* Center Nav --Start-- */}
            <div>
                <ul className="font-termina-bold flex items-center gap-16 text-dark-gray" >
                    {
                        headerData.headerNav.filter(e => e?.endNav !== true).map((nav, index) => (
                            <li
                                key={index}
                                className={classNames(
                                    'group'
                                )}
                                style={{ order: nav?.order || 'unset' }}
                            >
                                <a className={classNames(CenterNavClass)} href={nav?.url}>
                                    {nav?.title}
                                </a>

                                {/* Dropdown Nav --Start-- */}
                                {nav?.hasChildren ? <div className="absolute top-[calc(100%+1px)] left-0 w-full px-14 opacity-0 pointer-events-none translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto duration-200 cursor-default bg-white border-b border-slate-100 shadow-md shadow-slate-100">
                                    <div className={
                                        classNames(
                                            'py-12',
                                            nav?.withImage && 'grid grid-cols-[65%,auto] '
                                        )
                                    }>
                                        <div className="gap-y-10 grid"
                                            style={{
                                                gridTemplateColumns: typeof nav?.column === 'number' ? `repeat(${nav?.column}, 1fr)` : nav?.column
                                            }}
                                        >
                                            {nav?.Children?.map((child_nav, i) => (
                                                <div
                                                    key={i}
                                                    style={{
                                                        // width: child_nav?.columnWidth || (100 / nav?.column) + '%',
                                                        order: child_nav?.order || 'unset'
                                                    }}
                                                >
                                                    <h3 className="font-termina-bold text-dark-gray" >
                                                        <a href={child_nav?.url}>{child_nav?.title}</a>
                                                        <a href="#" className="font-bookmania-regularItalic ml-2.5">Shop All</a>
                                                    </h3>
                                                    <ul
                                                        key={i}
                                                        className="mt-5 gap-y-4 gap-x-5 grid"
                                                        style={{
                                                            gridTemplateColumns: typeof child_nav?.column === 'number' ? `repeat(${child_nav?.column}, 1fr)` : child_nav?.column
                                                        }}
                                                    >
                                                        {Array.isArray(child_nav?.Children) && child_nav?.Children.map((child_nav_item, child_nav_key) => (
                                                            <li
                                                                key={child_nav_key}
                                                                style={{
                                                                    order: child_nav_item?.order || 'unset'
                                                                }}
                                                            >
                                                                <a href={child_nav_item?.url} className='font-aktivGroteskEx-regular font-medium text-base text-black flex items-center gap-5 desktop_child_nav_link'>
                                                                    <div
                                                                        className="w-10 h-10 rounded-full overflow-hidden bg-pink-200 shrink-0 duration-200" >
                                                                    </div>
                                                                    <span className="duration-150">{child_nav_item?.title}</span>
                                                                </a>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>

                                            ))}
                                        </div>
                                        {nav?.withImage &&
                                            <a href='#' className="flex justify-end relative overflow-hidden submenu_side_img_wrapper" >
                                                <img src="/img/girl-hand.png" alt="girl-hand" className="w-full h-auto submenu_side_img duration-[2s]" />
                                                <div className="absolute bottom-3 left-0 px-6 flex items-center gap-5 uppercase text-white">
                                                    Buy 1 Get 1 Free on French Manicure

                                                    <svg xmlns="http://www.w3.org/2000/svg" width="17.613" height="12.121" viewBox="0 0 17.613 12.121">
                                                        <g id="Group_2" data-name="Group 2" transform="translate(0.75 1.06)">
                                                            <path id="Line_Copy_2" data-name="Line Copy 2" d="M0,.186H14.872" transform="translate(0 4.778)" fill="none" stroke="#fff" strokeLinecap="square" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth="1.5" />
                                                            <path id="Line_Copy_3" data-name="Line Copy 3" d="M0,5.205,4.969,0,10,5.205" transform="translate(15.78 0) rotate(90)" fill="none" stroke="#fff" strokeLinecap="square" strokeMiterlimit={10} strokeWidth="1.5" />
                                                        </g>
                                                    </svg>
                                                </div>
                                            </a>
                                        }
                                    </div>
                                </div> : null}
                                {/* Dropdown Nav --End-- */}
                            </li>
                        ))
                    }
                </ul>
            </div>
            {/* Center Nav --End-- */}

            {/* End Nav Icons --Start-- */}
            <div>
                <ul className="font-termina-bold flex items-center gap-7" >
                    {
                        headerData.headerNav.filter(e => e?.endNav).map((nav, index) => (
                            <li key={index} style={{ order: nav?.order || 'unset' }}>
                                {
                                    !nav?.isButton ? (
                                        <a href={nav?.url} className="text-dark-gray">
                                            {
                                                nav?.iconSrc ?
                                                    <img src={nav?.iconSrc} alt={nav?.title} /> :
                                                    nav?.title
                                            }
                                        </a>
                                    ) : (
                                        <a href={nav?.url} className="px-9 py-4 bg-[#EFEEFF] hover:bg-[#B592FE] hover:text-white duration-100" >{nav?.title}</a>
                                    )
                                }

                            </li>
                        ))
                    }
                </ul>
            </div>
            {/* End Nav Icons --End-- */}

        </header>
    )
}

export default DesktopHeader


