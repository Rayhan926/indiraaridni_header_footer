{/* Menu Second Step --Start-- */ }
 <div>
 <div className="flex items-center justify-between px-5 py-4 font-termina-bold">
     <p className="shrink-0"><BiChevronLeft size={28} /></p>
     <p className="grow text-center">Shop</p>
 </div>

 <div className="mt-2" >
     <ul>
         {
             [...new Array(3).keys()].map(e => (
                 <li key={e}>
                     <a href="#" className={NavAnchorClass}>
                         Categories
                         <BiChevronRight size={28} />
                     </a>
                 </li>
             ))
         }
     </ul>
 </div>
</div>


<div>
<a href="#">
    <img src="/img/girl-hand.png" alt="girl-hand" className="w-full h-auto" />
    <div className="flex items-center justify-between py-4 pb-6 px-5 font-termina-bold" >
        <p>Buy 1 Get 1 Free on French Manicure</p>
        <img src="/icons/large_arrow_right.svg" alt="large_arrow_right" className="w-[20px]" />
    </div>
</a>
</div>
{/* Menu Second Step --End-- */ }