import { stats } from "../trustPillarsItems/items";
import { motion } from "framer-motion";
import { statImages } from "../trustPillarsItems/images";
import bgImage from "../assets/whitebg2.webp"

export const TrustPiller = () => {
    return (<>
        <div
            className="flex flex-wrap items-center justify-center w-full min-h-screen py-20 "
            style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: "cover",      // object-cover equivalent
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="flex flex-wrap items-center justify-center w-full px-4 mx-auto max-w-7xl md-px-6 lg:px-6">
                <div className="flex flex-col flex-wrap items-center w-full lg:gap-6">
                    <motion.div className="flex items-center justify-center w-full h-12 lg:mt-8 "
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: false, amount: 0.5 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}>
                        <h1 className="myfont font-bold text-[20px] text-center leading-[1.6] lg:leading-12 tracking-wide lg:tracking-[0%] lg:text-[37px] text-[#183051]">Trust Pillar: Eyewear For Those Who Define Tomorrow</h1>

                    </motion.div>
                    <div className="flex items-center  px-1 w-full h-full lg:h-[170px] mt-8   ">
                        <div className="flex lg:flex-row flex-col items-center justify-between w-full  lg:h-[120px] ">
                            {stats.map((stat, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col items-center justify-center gap-3 lg:w-[280px] lg:h-[75px] "
                                >
                                    <div className="flex items-center justify-center ">
                                        <h1 className=" font-medium lg:text-[17px] leading-[30.6px] tracking-[0px] text-center align-middle text-[#007E8C]">
                                            {stat.value}
                                        </h1>
                                    </div>
                                    <div className="flex items-center justify-center ">
                                        <h1 className="font-[montserrat] font-bold lg:text-2xl leading-[45px] tracking-normal text-center align-middle text-[#333333]">
                                            {stat.label}
                                        </h1>
                                    </div>
                                    <div className="w-[200px] border-b border-black md:border-b-0"></div>

                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex items-center justify-center w-full h-[140px]  px-3 relative overflow-hidden mt-5 lg:mt-0 ">

                        <motion.div
                            className="absolute z-40 flex items-center space-x-8"
                            animate={{ x: [0, "-50%"] }}
                            transition={{
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 20,
                                ease: "linear",
                            }}
                        >
                            {/* original content */}
                            {statImages.map((src, idx) => (
                                <img
                                    key={`first-${idx}`}
                                    src={src}
                                    className="w-[120px] h-[120px] object-contain opacity-70"
                                    alt=""
                                />
                            ))}

                            {/* duplicate content (this prevents ending) */}
                            {statImages.map((src, idx) => (
                                <img
                                    key={`second-${idx}`}
                                    src={src}
                                    className="w-[120px] h-[120px] object-contain opacity-70"
                                    alt=""
                                />
                            ))}
                        </motion.div>



                        <div className="flex items-center justify-center h-[110px] w-full lg:w-[378px] rounded-3xl px-5 bg-linear-to-r from-[#A2F7FF] to-[#a3b7e7] relative z-10">

                        </div>
                    </div>
                    <div className="flex items-center justify-between w-[200px]  lg:w-[338px] h-[104px]">
                        <button className="flex font-[montserrat] font-bold items-center justify-center w-full border border-[#007E8C] rounded-2xl h-14 cursor-pointer hover:bg-[#007E8C] hover:text-white transition-all duration-300 text-[#007E8C]">
                            <p>See All Brands</p>
                        </button>
                    </div>
                </div>
            </div>
        </div >
    </>)
} 