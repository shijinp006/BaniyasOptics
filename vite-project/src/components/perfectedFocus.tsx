
import bgImage from "../assets/PerfectedBgImage.webp"
import Logo from "../assets/logo.webp"
import glassImage from "../assets/glass4.webp"
import { motion } from "framer-motion"

export const PerfectedFocus = () => {
    return (<>
        <div
            className="relative flex flex-wrap items-center justify-center w-full min-h-screen py-5 "
            style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="flex items-center justify-center w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-7.5">
                <div className="flex flex-col justify-center w-full gap-3 ">
                    <div className="flex justify-center w-full lg:px-30 h-[198px] mt-5 flex-col  ">
                        <div className="flex items-center gap-3 w-full  h-[42px] ">
                            <div className="flex items-center justify-center w-[50px] h-8  ">
                                <img src={Logo} alt="logo" />
                            </div>
                            <div className="flex items-center justify-center h-4">
                                <h1 className="font-[limelight] font-normal text-base leading-none tracking-[0px] text-[#BFF9FF]">
                                    Baniyas Optics
                                </h1>

                            </div>
                        </div>
                        <motion.div className="flex items-center w-full h-[156px] "
                            initial={{ scale: 0.9, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: false, amount: 0.5 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}>
                            <h1 className="font-[playfair] font-medium text-[50px] leading-[60px]  lg:text-[70px] lg:leading-[78px] tracking-[0px] align-middle text-white">
                                Crafted Vision,<br />
                                Perfected Focus
                            </h1>

                        </motion.div>
                    </div>
                    <div className="hidden lg:flex absolute lg:top-0 items-center justify-between right-55 w-[90px] h-[180px] opacity-100 rounded-br-[99px] rounded-bl-[99px] bg-[#83B5AE]">
                        <p className="font-[playfair] text-center font-medium text-[33px] leading-[100%] tracking-[0px] align-middle text-white">20% OFF</p>
                    </div>

                    <div className="relative flex items-center justify-center w-full ">
                        <img src={glassImage} alt="Glass Image" className="absolute h-[350px]" />
                        {Array.from({ length: 3 }).map((_, index) => (
                            <div
                                key={index}
                                className="w-[120px] h-[300px] opacity-100 rounded-[45px] bg-linear-to-b from-[#ADEBD8] to-[#638C8D]"

                            ></div>
                        ))}


                    </div>
                    <div
                        className=" hidden lg:flex  absolute lg:bottom-0  items-center justify-between left-35 w-[90px] h-[180px] opacity-100 rounded-tr-[99px] rounded-tl-[99px] bg-[#83B5AE]"
                    >
                        <p className="font-[playfair] text-center font-medium text-[33px] leading-[100%] tracking-[0px] align-middle text-white">
                            20% OFF
                        </p>

                    </div>
                    <div className="relative flex items-center justify-center w-full">
                        <button className=" lg:ml-185 w-40 h-10 rounded-[48px] bg-[#153C37] px-6 py-2.5 opacity-100 cursor-pointer">
                            <p className="font-[satoshi] font-bold text-[18px] leading-[100%] tracking-[0px] align-middle text-white">
                                BUY 1 GET 1
                            </p>

                        </button>
                    </div>


                    <div className="flex items-center justify-center w-full h-15">
                        <button className="flex items-center justify-center w-[133px] h-10 bg-[#FFFFFF] rounded-xl cursor-pointer ">
                            <p className="font-[montserrat] font-medium text-[16px] leading-[100%] tracking-[0px] align-middle text-black">
                                Shop NOW
                            </p>

                        </button>
                    </div>



                </div>
            </div>
        </div>
    </>)
}