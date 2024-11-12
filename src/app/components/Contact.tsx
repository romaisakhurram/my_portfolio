import { CiMail } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";

export default function () {
    return (
        <div id="Contact" className="pt-32 container" >
            <div className="grid md:grid-cols-2 gap-10">
                <div className="space-y-8">
                    <h2 className="text-[30px]" data-aos="zoom-in-down">Get in Touch</h2>
                    <p className="text-gray-600 text-[20px] pt-2" data-aos="zoom-in-down">
                        Drop me a line give me a call or send me a message by submitting the form.
                    </p>
                    <div className="flex gpa-3 items-center" data-aos="zoom-in-down">
                        <CiMail  size={30}/> romaisa123@gmail.com
                    </div>
                    <div className="flex gpa-3 items-center" data-aos="zoom-in-down">
                        <BsTelephone  size={30}/> (123) 456 123 987
                    </div>

                </div>
                <div className="fspace-y-8">
                    <div className="flex flex-col gap-1" data-aos="zoom-in-down">
                       <label htmlFor="name">Name</label>
                       <input type="text" className="h-[40px] bg-transparent border border-accent"
                       id="name"/>
                    </div>
                    <div className="flex flex-col gap-1" data-aos="zoom-in-down">
                       <label htmlFor="Email">Email</label>
                       <input type="text" className="h-[40px] bg-transparent border border-accent"
                       id="Email"/>
                    </div>
                    <div className="flex flex-col gap-1" data-aos="zoom-in-down">
                       <label htmlFor="Message">Message</label>
                       <textarea className="bg-transparent border border-accent"
                       id="Message" rows={6}></textarea>
                    </div>
                    <br />
                    <button id="button"className="bg-accent p-2 px-6 " data-aos="zoom-in-down">Submit</button>

                </div>

            </div>

        </div>
    )
}