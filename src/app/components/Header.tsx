
export default function Header () {
    return (
       <div className='container pt-8'>
        <div className='flex justify-between items-center'>
            <div className="text-x1 font-medium">Romaisa</div>
               <ul className="gap-10 lg:gap-16 hidden md:flex">
                 <li className="menulink"><a href="#hero">Home</a></li>
                 <li className="menulink"><a href="#About">About </a></li>
                 <li className="menulink"><a href="#Projects">Projects</a></li>
                 <li className="menulink"><a href="#Contact">Contact</a></li>
                </ul>
        </div>

       </div>
    );
}