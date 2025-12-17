
import { glassesData } from "../glassesDatas/glassesData";
import { MapPin } from "lucide-react";
import { Phone } from "lucide-react";
import { motion } from "framer-motion";


export const AddsPage = () => {
    return (
        <div className="flex flex-wrap items-center justify-center w-full min-h-screen   bg-linear-to-r  
            from-[#B5E6F5] 
            via-[#D3F3E8] 
            to-[#F4E9B2] ">
            <div className="flex flex-wrap items-center justify-center w-full px-4 mx-auto md:px-6 lg:px-6 max-w-7xl">


                <div
                    className="flex flex-col items-center justify-center w-full min-h-screen px-6 py-10 lg:flex-row lg:px-16"
                >

                    < motion.div className="flex flex-col justify-center w-full gap-6 px-4 "
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: false, amount: 0.5 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}>
                        <h4 className="text-[#1E2E3E] font-semibold text-lg  ">
                            BANIYAS <span className="font-light"><br />OPTICS</span>
                        </h4>

                        <h1 className="text-3xl lg:text-6xl font-bold text-[#1E2E3E] ">
                            YOUR VISION, <br />
                            OUR <br />CRAFTSMANSHIP
                        </h1>

                        <button className="bg-black text-white w-[170px] px-6 py-2 rounded-lg text-[14px] lg:text-[18px] font-medium cursor-pointer">
                            WE PROVIDE
                        </button>

                        <div className="grid grid-cols-1 lg:grid-cols-2 w-full lg:w-[400px] gap-2 text-[14px] lg:text-lg text-[#1E2E3E] font-medium ">
                            <ul className="space-y-2">
                                <li>• CONTACT LENS</li>
                                <li>• ACCESSORIES</li>
                            </ul>
                            <ul className="space-y-2">
                                <li>• GLASSES LENSES</li>
                                <li>• GLASSES FRAMES</li>
                            </ul>
                        </div>


                        <div className="bg-[#6D8691] text-white h-[90px] flex flex-col p-3  justify-center rounded-xl w-full lg:w-[400px] mt-4 shadow-md">
                            <p className="font-semibold text-[16px]">More Info :</p>
                            <div className="flex flex-wrap items-center gap-3 mt-2 ">
                                <span className="flex items-center gap-2 text-[14px]">
                                    <span className="flex items-center justify-center p-1 bg-white rounded-full">
                                        <Phone className="w-3.5 h-3.5 text-gray-700" />
                                    </span>
                                    +973 1234 5678
                                </span>
                                <span className="flex items-center gap-2 text-[14px]">
                                    <MapPin className="w-4.5 h-4.5 bg-white rounded-full text-gray-600" />
                                    Abu Shagarah, Sharjah, UAE
                                </span>

                            </div>
                        </div>
                    </motion.div>


                    <div className=" hidden lg:flex relative mt-10 lg:mt-0  flex-col  lg:h-[600px] w-full  items-center  ">
                        {glassesData.map((glass, index) => (
                            <img
                                key={index}
                                src={glass.src}
                                alt={glass.alt}
                                className="w-64 lg:absolute drop-shadow-xl"
                                style={{
                                    top: glass.top,
                                    right: glass.right,
                                    width: `${glass.width}`,
                                    height: glass.height,
                                }}
                            />
                        ))}
                    </div>
                </div>


            </div>
        </div>
    );
};

