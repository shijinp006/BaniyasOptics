import { CuratedData } from "../curateddata/curateddata"
import bgImage from "../assets/whitebg2.webp"
import { motion } from "framer-motion";

export const Curated = () => {

    return (<>
        <div className="flex flex-wrap w-full min-h-screen py-10 bg-gray-500 lg:items-center lg:justify-center"
            style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: "cover",      // same as object-cover
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}>
            <div className="flex lg:items-center lg:justify-center w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-7.5 ">
                <div className="flex flex-col w-full gap-8 lg:items-center lg:justify-center ">
                    <div className="flex  flex-wrap items-center justify-center gap-4 w-full lg:h-[95px] ">
                        <motion.div className="flex items-center justify-center w-full h-[59px]"
                            initial={{ scale: 0.9, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: false, amount: 0.5 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}>
                            <h1 className=" myfont font-normal text-[25px] lg:text-[40px] leading-[100%] tracking-[0px] text-center text-[#121212]">
                                CURATED COLLECTIONS
                            </h1>

                        </motion.div>
                        <div className="flex items-end justify-center w-full lg:h-5">
                            <p className="font-[montserrat] font-semibold text-[14px] lg:text-[16px] leading-[100%] tracking-[0px] text-center text-[#000000]">
                                Precision engineering for everyday elegance
                            </p>

                        </div>
                    </div>
                    <div className="flex items-center justify-around w-full lg:w-[504px] lg:h-[101px] bg-[#F5F5F5] rounded-[20px] p-2 lg:p-0 mt-8 ">
                        <button className="flex items-center justify-center w-[156px] h-[73px] rounded-[20px] bg-[#F5F5F5]  shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-white cursor-pointer">
                            <p className="text-[#007E8C] font-[montserrat] font-semibold text-[20px]">
                                Men
                            </p>
                        </button>
                        <button className="flex items-center justify-center w-[156px] h-[73px] rounded-[20px]   border border-[#888888] cursor-pointer">
                            <p className="text-[#8E8E8E] font-[montserrat] font-semibold text-[20px]">
                                Women
                            </p>
                        </button>
                        <button className="flex items-center justify-center w-[156px] h-[73px] rounded-[20px] cursor-pointer">
                            <p className="text-[#8E8E8E] font-[montserrat] font-semibold text-[20px]">
                                Kids
                            </p>
                        </button>
                    </div>
                    <div className="flex  flex-wrap items-center justify-center w-full lg:h-[400px] gap-6 lg:px-1 ">
                        {CuratedData.map((item, index) => (
                            <div
                                key={item.id}
                                className={`flex flex-col  items-center justify-center w-full h-[400px] lg:w-[220px] lg:h-[329px]  bg-[#FFFFFF] border border-[#D9D9D9] rounded-2xl gap-6 cursor-pointer  transition-transform duration-500 ease-out will-change-transform  ${index === 0
                                    ? "lg:hover:scale-110"
                                    : index === 1
                                        ? "lg:hover:scale-115"
                                        : index === 2
                                            ? "lg:hover:scale-120"
                                            : index === 3
                                                ? "lg:hover:scale-110"
                                                : "lg:hover:scale-105"
                                    }`}
                            >
                                {/* IMAGE BOX */}
                                <div className={`flex items-center justify-center w-[300px] h-[200px] lg:w-[195px] lg:h-[205px] rounded-lg`}
                                    style={{
                                        backgroundImage: `url(${item.image})`,
                                        backgroundSize: "cover",    // behaves like object-cover
                                        backgroundRepeat: "no-repeat",
                                        backgroundPosition: "center",
                                    }}
                                >

                                </div>


                                <div className="flex flex-col justify-center w-[173px] h-[83px] gap-2">


                                    <div className="flex items-center w-full h-[19px]">
                                        <p className="font-body font-normal text-[13.33px] leading-[140%] tracking-[0px] text-[#1E1E1E]">
                                            {item.title}
                                        </p>
                                    </div>


                                    <div className="flex items-center w-[57px] h-[19px]">
                                        <p className="font-body font-semibold text-[13.33px] leading-[140%] tracking-[0px] text-[#1E1E1E]">
                                            {item.price}
                                        </p>
                                    </div>


                                    <div className="flex items-center w-[173px] h-8">
                                        <p className="font-body font-normal text-[11.67px] leading-[140%] tracking-[0px] text-[#757575]">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button className="flex items-center justify-center bg-[#00B1C6] rounded-2xl  w-full lg:w-[300px] h-14 cursor-pointer">
                        <p
                            className="font-[montserrat] font-bold text-[14px] leading-6 tracking-[0%] text-center align-middle text-[#F1F1F1]"
                        >
                            Try Something Special
                        </p>

                    </button>

                </div>
            </div>
        </div>
    </>)
}