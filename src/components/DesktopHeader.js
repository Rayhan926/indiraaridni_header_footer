import classNames from 'classnames'
import headerData from '../data/header_test.json'

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
                                                                <a href={child_nav_item?.url} className='font-aktivGroteskEx-regular font-medium text-base text-black flex items-center gap-5'>
                                                                    <div
                                                                        className="w-10 h-10 rounded-full overflow-hidden bg-pink-200 shrink-0 duration-200" >
                                                                    </div>
                                                                    {child_nav_item?.title}
                                                                </a>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>

                                            ))}
                                        </div>
                                        {nav?.withImage && <div className="flex justify-end" >
                                            <img src="/img/girl-hand.png" alt="girl-hand" className="w-full h-auto" />
                                        </div>}
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


