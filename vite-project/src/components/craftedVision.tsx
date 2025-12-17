
import { CraftedVisionData } from "../craftedVisonDatas/craftedVisionData"
import bgImage from "../assets/whitebg2.webp"
import { motion } from "framer-motion";
export const CraftedVision = () => {
    return (<>
        <div className="flex flex-wrap items-center justify-center w-full min-h-screen py-10 "
            style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: "cover",      // same as object-cover
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}>
            <div className="flex flex-wrap items-center justify-center w-full px-4 mx-auto md:px-6 lg:px-6 max-w-7xl">
                <div className="flex flex-col items-center justify-center w-full">
                    <div className="flex flex-col justify-center w-full gap-4 lg:px-18 lg:h-36 ">
                        < motion.div className="flex items-center lg:w-[341px] lg:h-6"
                            initial={{ scale: 0.9, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: false, amount: 0.5 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}>
                            <h2 className="font-[montserrat] font-medium text-[14px] lg:text-[20px] leading-[100%] text-[#183051] align-middle">
                                What we do: Baniyas Optics
                            </h2>

                        </motion.div>
                        <motion.div className="flex items-center lg:w-[615px] lg:h-24"
                            initial={{ scale: 0.9, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: false, amount: 0.5 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <h1 className="myfont font-bold text-[18px] lg:text-[44px] leading-[100%] text-[#183051] align-middle">
                                Precision-Crafted Vision Enhancement
                            </h1>

                        </motion.div>
                    </div>

                    {/*Card Section*/}

                    <div className="grid w-full grid-cols-1 gap-3 mt-4 lg:grid-cols-2 lg:px-18">
                        {CraftedVisionData.map((item) => (
                            <div
                                key={item.id}
                                className="flex items-end px-2 lg:px-6 w-full lg:w-[524px] h-[400px] lg:h-[590px] bg-white rounded-2xl "
                                style={{ backgroundImage: `url(${item.image})`, backgroundSize: "cover", backgroundPosition: "center" }}
                            >
                                <div className="flex justify-center w-full h-[220px] flex-col ">


                                    <div className="flex items-center w-full lg:w-[476px] lg:h-8">
                                        <h2 className=" font-bold text-[14px] lg:text-[22px] leading-[100%] text-white align-middle">
                                            {item.title}
                                        </h2>
                                    </div>


                                    <div className="flex items-center w-full lg:w-[476px] h-[92px]">
                                        <p className="font-[montserrat] font-normal text-[14px] lg:text-[18px] lg:leading-[23px] text-white">
                                            {item.description}
                                        </p>
                                    </div>


                                    <div className="flex items-center justify-end w-full lg:w-[476px] gap-2 lg:h-6">
                                        <button className="flex items-center justify-center w-[77px] h-6 cursor-pointer">
                                            <p className=" font-bold text-[14px] leading-6 text-[#007E8C]">
                                                {item.linkText}
                                            </p>
                                        </button>

                                        <img src={item.svg} alt="arrow" className="w-6 h-6 cursor-pointer" />
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    </>)
}