import { Phone } from "lucide-react";
import { Contacts } from "../contactUSdetails/contactUsdetails"
import bgImage from "../assets/whitebg2.webp"
import glassImage from "../assets/ContactUsGlassImage.webp"
import phoneIcon from "../assets/phoneIcon.svg"
import smsIcon from "../assets/messageIcons.svg"
import locationIcon from "../assets/loaction.svg"
import blueRound from "../assets/blueRound.svg"
import lightBlueround from "../assets/lightblueRound.svg"
import { Icons } from "../iconsArray/iconsArray";
import { ContactForm } from "./contactUsFrom";
import { motion } from "framer-motion";

export const ContactUS = () => {
    return (<>
        <div
            className="flex flex-wrap items-center justify-center w-full min-h-screen py-10"
            style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: "cover",      // same as object-cover
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="flex items-center justify-center w-full mx-auto max-w-7xl px-4 md:px-6 lg:px-7.5">
                <div className="z-10 flex flex-col items-center justify-center w-full gap-8">
                    < motion.div className="flex items-center justify-center w-full h-[98px] gap-4 flex-col"
                       initial={{ scale: 0.9, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: false, amount: 0.5 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}>
                        <h1 className="w-[219px] h-[60px] text-[35px] leading-10 myfont font-medium capitalize text-[#343B55] opacity-100 ">
                            Contact Us
                        </h1>
                        <p className="w-full h-[22px] text-center font-[montserrat] font-normal text-xs lg:text-[16px] leading-[100%] tracking-[0px] text-[#757575] opacity-100">
                            Let's perfect your vision together. Our optical team responds in 17 hours average
                        </p>

                    </motion.div>
                    <div className="grid w-full grid-cols-1 gap-3 px-18 lg:grid-cols-4 place-items-center">
                        {Contacts.map((item) => (
                            <div
                                key={item.id}
                                className="w-[260px] h-[200px] bg-[#03727e1a] border border-[#FFFFFF] rounded-2xl shadow-sm flex flex-col items-center justify-center text-center p-6 z-20"
                            >
                                <p className="text-[#343B55] text-[12px] leading-6  font-medium">
                                    {item.addressLine1}<br />
                                    {item.addressLine2}<br />
                                    {item.addressLine3}
                                </p>

                                <div className="flex items-center gap-2 mt-4">
                                    <Phone className="w-3 h-5 text-[#12878A]" />
                                    <span className="text-[#12878A] font-bold text-[10px] font-[montserrat]">
                                        {item.phone}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="  relative flex items-center justify-center  w-full h-[136px]  ">
                        <img src={glassImage} alt="Glass Image" className="absolute w-full lg:w-[580px] lg:h-[300px] " />
                        <div className="flex items-center justify-between w-full">
                            <p className="font-[inconsolata] font-black text-[25px]  lg:text-[130px] leading-[100%] tracking-[6px] lg:tracking-[10px] text-center text-[#D7D7D2]">
                                BANIYAS
                            </p>
                            <p className="font-[inconsolata] font-black text-[25px]  lg:text-[130px] leading-[100%] tracking-[6px] lg:tracking-[10px] text-center text-[#D7D7D2]">
                                OPTICS
                            </p>

                        </div>



                    </div>
                    <div className="flex items-center justify-center w-full lg:px-15 ">

                        <div className="flex items-center justify-center w-full gap-3 p-6 bg-white rounded-xl">
                            <div className=" relative hidden lg:flex flex-col  p-6  w-full lg:w-[700px]  h-[600px] bg-[#007E8C] rounded-[10px] gap-3 ">
                                <div className="flex items-center w-full h-[34px]">
                                    <p className="myfont  text-[24px] leading-[100%] tracking-[0] text-white">
                                        Contact Information
                                    </p>

                                </div>
                                <div className="flex items-center w-full h-[22px]">
                                    <p className="font-[montserrat] font-normal text-[16px] leading-[100%] tracking-[0px] text-[#C9C9C9]">
                                        Say something to start a live chat!
                                    </p>

                                </div>

                                <div className="flex flex-col justify-center w-full h-[162px] gap-8 mt-25 ">
                                    <div className="flex items-center justify-between w-[158px] h-6 ">
                                        <img src={phoneIcon} alt="Phone Icon" />
                                        <div className="flex items-center justify-center w-[109px] h-5">
                                            <p className=" text-[15px] leading-[100%] tracking-[0px] text-[#F1F1F1]">
                                                +973 1234 5678
                                            </p>

                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between w-[235px] h-6 ">
                                        <img src={smsIcon} alt="sms Icon" />
                                        <div className="flex items-center justify-center w-[186px] h-5 ">
                                            <p className=" font-normal text-[15px] leading-[100%] tracking-[0px] text-[#F1F1F1]">
                                                optical@baniyasoptics.com
                                            </p>

                                        </div>
                                    </div>
                                    <div className="flex items-start gap-7 w-full h-[60px]  ">
                                        <img src={locationIcon} alt="Location Icon" />
                                        <div className="flex items-center  w-full h-[60px] ">
                                            <p className=" font-normal text-[16px] leading-5.5 tracking-[0px] text-[#F1F1F1]">
                                                Baniyas Optics,<br />
                                                Abu Shagarah,<br />
                                                Sharjah, UAE
                                            </p>


                                        </div>
                                    </div>
                                </div>

                                <img src={blueRound} alt="blueRound" className="absolute bottom-0 right-0 " />
                                <img src={lightBlueround} alt="lightBlue Round" className="absolute bottom-13 right-20 " />

                                <div className="flex items-center justify-between w-[138px] h-[30px] mt-40">
                                    {Icons.map((item) => (
                                        <div
                                            key={item.id}
                                            className="flex items-center justify-center w-[30px] h-[30px] rounded-full bg-[#BFF9FF] cursor-pointer"
                                        >
                                            <img src={item.icon} alt="" />
                                        </div>
                                    ))}
                                </div>


                            </div>
                            <div className="flex flex-col items-center justify-center w-full">
                                <ContactForm />
                                <div className="flex items-center justify-center w-full px-2 lg:justify-end ">
                                    <button className="w-[214px] h-14 bg-[#00B1C6] rounded-2xl opacity-100 cursor-pointer" >
                                        <p className="font-[montserrat] font-bold text-[14.75px] leading-6 text-center align-middle text-[#F1F1F1]">
                                            Send Message
                                        </p>


                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}