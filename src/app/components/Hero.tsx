import Header from "@/app/components/Header"


export default function Hero () {
    return (
       <div id="hero" className='min-h-screen bg-no-repeat bg-cover'
          style={{ backgroundSize:"40%" , backgroundPosition:"left 100px top 150px"}} >
         <Header/> 
           <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
              <div className='hidden lg:block'></div>
                <div className='text-[80px] sm:text-[100px] font-bold leading-tight flex justify-right items-center'>
                    <div>
                        <p  data-aos="zoom-in-down">I'm</p>
                        <p  data-aos="zoom-in-down">Romaisa</p>
                        <p  data-aos="zoom-in-down">Khurram</p>
                    </div>
                </div>
            </div>
        </div>
    );
}