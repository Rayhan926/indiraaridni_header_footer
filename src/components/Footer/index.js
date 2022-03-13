import footerData from '../../data/footer_text.json'
function Footer() {
    const footerNav = footerData.footerNav
    const newsletterBox = footerNav.filter(e => e.key === 'newsletter')[0]

    const NewsLetterBox = () => {
        return (
            <div>
                <h6 className="font-termina-bold text-xs text-white tracking-[2px] mb-[25px]">Get the latest from Color Street in your inbox!</h6>

                <div>
                    <form className="space-y-2.5">
                        <input type="text" placeholder="Email address" className="font-bookmania-regular py-3 px-5 bg-white w-full outline-none" />
                        <input type="submit" value="Subscribe" className="py-3 px-5 bg-[#B592FE] w-full outline-none text-white font-termina-bold tracking-[2px] cursor-pointer" />
                    </form>
                </div>
            </div>
        )
    }
    return (
        <footer>

            {/* Social --Start-- */}
            <div className="w-full bg-[#B592FE] flex flex-col justify-center items-center h-[233px]" >
                <h2 className="font-aktivGroteskEx-bold text-[30px] text-center md:text-[44px] mb-3 text-white">
                    {footerNav.filter(e => e.key === 'hashtagSection')[0]?.title}
                </h2>
                <div className="flex items-center gap-[43px]">
                    <a href="https://www.instagram.com/colorstreet/" target="_blank">
                        <img src="/icons/Instagram.svg" alt="Instagram" />
                    </a>
                    <a href="https://twitter.com/colorstreet#xd_co_f=ZDAzODhjMGMtZGQ4Ny00ZmQ5LThhMWUtZDNkOGQzMTZkNWY5~" target="_blank">
                        <img src="/icons/Twitter.svg" alt="Twitter" />
                    </a>
                    <a href="https://www.facebook.com/becolorstreet#xd_co_f=ZDAzODhjMGMtZGQ4Ny00ZmQ5LThhMWUtZDNkOGQzMTZkNWY5~" target="_blank">
                        <img src="/icons/Facebook.svg" alt="Facebook" />
                    </a>
                    <a href="https://www.pinterest.com/becolorstreet/" target="_blank">
                        <img src="/icons/Pinterest.svg" alt="Pinterest" />
                    </a>
                    <a href="https://www.youtube.com/channel/UC43ZM4V0jDaDmuLraQjd4gw/featured" target="_blank">
                        <img src="/icons/Youtube.svg" alt="Youtube" />
                    </a>
                </div>
            </div>
            {/* Social --End-- */}

            {/* Gallery --Start-- */}
            <div className="flex flex-nowrapmd:grid md:grid-cols-5 overflow-auto">
                <img className="w-[85%] md:w-full h-auto" src="/img/gallery_1.jpg" alt="gallery_1" />
                <img className="w-[85%] md:w-full h-auto" src="/img/gallery_2.jpg" alt="gallery_2" />
                <img className="w-[85%] md:w-full h-auto" src="/img/gallery_3.jpg" alt="gallery_3" />
                <img className="w-[85%] md:w-full h-auto" src="/img/gallery_4.jpg" alt="gallery_4" />
                <img className="w-[85%] md:w-full h-auto" src="/img/gallery_5.jpg" alt="gallery_5" />
            </div>
            {/* Gallery --End-- */}

            {/* Footer Nav Links --Start-- */}
            <div className="py-[50px] bg-[#652C90]">
                <div className="container px-5 mx-auto">
                    <div className="md:hidden mb-14">
                        <NewsLetterBox />
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-14 md:gap-6">
                        {footerNav.filter(e => e.key === 'nav').map((nav, index) => (
                            <div
                                key={index}
                                style={{
                                    order: nav?.order || 'unset'
                                }}>
                                <h6 className="font-termina-bold text-xs text-white tracking-[2px] mb-[15px]">
                                    <a href={nav?.url}>{nav.title}</a>
                                </h6>
                                <ul
                                    className="grid gap-[12px]"
                                    style={{
                                        gridTemplateColumns: typeof nav?.column === 'number' ? `repeat(${nav?.column}, 1fr)` : nav?.column
                                    }}
                                >
                                    {nav.Children.map((child_nav, i) => (
                                        <li
                                            key={i}
                                            style={{
                                                order: child_nav?.order || 'unset'
                                            }}
                                        >
                                            <a href={child_nav?.url} className="font-bookmania-regular text-sm md:text-base text-white hover:underline">{child_nav.title}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}

                        <div className="hidden md:block" style={{
                            order: newsletterBox?.order || 'unset'
                        }}>
                            <NewsLetterBox />
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer Nav Links --End-- */}
        </footer>
    )
}

export default Footer
