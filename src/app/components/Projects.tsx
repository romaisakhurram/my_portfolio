import {StaticImageData} from "next/image";
import  Image  from "next/image";
import resume from "@/app/Images/resume.jpg"
import CurrencyConvertor from "@/app/Images/CurrencyConvertor.jpg"
import dynamicResume from "@/app/Images/dynamic resume.jpg"
import Website from "@/app/Images/Website.jpg"
import form from "@/app/Images/Form.jpg"
import  BlogWebsite from "@/app/Images/BlogWebsite.jpg"

type Idata ={
    id :number
    title :string
    desc : string
    Image : StaticImageData
    tags :string[]
}

const data : Idata[] = [
        {
            id : 1,
            title : "Static Resume",
            desc : "A Typescript based dynamic  resume built with HTML and CSS allowing to showcase their skills dynamically" ,
            Image: resume,
            tags:["HTML" ,"CSS" , "Typescript" ],
        },

        {
            id : 2,
            title : "Currency Convertor",
            desc : "A  simple HTML , CSS & Typescript powered tool for converting currencies with real time rates. " ,
            Image: CurrencyConvertor,
            tags:["HTML" ,"CSS" , "Typescript" ],
        },

        {
            id : 3,
            title : "Dynamic Resume",
            desc : "A Typescript based dynamic  resume built with HTML and CSS allowing to showcase their skills dynamically. " ,
            Image: dynamicResume,
            tags:["HTML" ,"CSS" , "Typescript" ],
        },

        {
            id : 4,
            title : "Restaurant Website",
            desc : "A simple website with HTML , CSS & Typescript for managing and organizing " ,
            Image: Website,
            tags:["HTML" ,"CSS" , "Typescript" ],
        },

        {
            id : 5,
            title : "Restaurant Website",
            desc : "A simple form with HTML & CSS for managing and organizing " ,
            Image: form,
            tags:["HTML" ,"CSS"],
        },

        {
            id : 6,
            title : "Restaurant Website",
            desc : "A simple website with Next.js, CSS & Tailwind for managing and organizing " ,
            Image: BlogWebsite,
            tags:["Next.js" , "CSS" , "Tailwind" ],
        },

    ];

export default function Projects ()  {      
    return (
        <div  id="Projects" className="flex flex-col items-center space-y-8 " data-aos="zoom-in-down">
            <div className="text-[50px] items-center"><u>Projects</u></div>
            
            <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
               {data.map ((Idata) => (
                    <div  key={Idata.id} className='border border-accent w-[300px] sm:w-[350px] flex flex-col items-center space-y-4 p-4 rounded-lg shadow-lg'>
                       <Image className="w-[300px] sm:w-[350px] h-auto"
                         src={Idata.Image}
                         alt ={Idata.title}
                         width={350}
                         height={350}
                        />

                       <div className="text-2xl font-extraligh">{Idata.title}</div>
                       <div>{Idata.desc}</div>
                        <div className="tags flex space-x-2">{Idata.tags.map((tag , index) =>(
                          <span key={index} className="bg-blue-200 px-2 rounded text-sm"> {tag}</span>
                          ))}
                        </div>
                    </div>
                ))}

            </div>

        </div>

    );
}