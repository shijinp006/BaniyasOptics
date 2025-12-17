import { useState } from "react";
import { ReviewDatas } from "../reviewDatas/reviewDatas";
import { HiArrowSmallLeft } from "react-icons/hi2";
import { HiArrowSmallRight } from "react-icons/hi2";
import bgImage from "../assets/whitebg2.webp"
import { motion } from "framer-motion";
export const ReviewsFromCustomer = () => {
    const [page, setPage] = useState(0); // pagination state
    const [activeArrow, setActiveArrow] = useState(""); // 

    const itemsPerPage = 2; // 4 items per page

    const nextPage = () => {
        if ((page + 1) * itemsPerPage < ReviewDatas.length) {
            setPage(page + 1);
            setActiveArrow("next");

        }
    };

    const prevPage = () => {
        if (page > 0) {
            setPage(page - 1);
            setActiveArrow("prev");

        }
    };

    return (
        <>
            <div className="flex flex-wrap items-center justify-center w-full min-h-screen py-10 "
                style={{
                    backgroundImage: `url(${bgImage})`,
                    backgroundSize: "cover",      // same as object-cover
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}>
                <div className="flex flex-col items-center justify-center w-full">
                    <div className="flex flex-col items-center justify-center w-full h-[98px] gap-4 "
                    >
                        <motion.div className="flex items-center justify-center w-full lg:w-[584px] h-[60px]"
                            initial={{ scale: 0.9, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: false, amount: 0.5 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}>
                            <h2 className="myfont font-bold text-[22px] lg:text-[35px] lg:leading-[35px] tracking-[0] capitalize text-[#343B55]">
                                reviews from our customers
                            </h2>
                        </motion.div>
                        <div className="flex items-end justify-center w-full h-[22px] px-2 lg:px-0">
                            <p className="font-[montserrat] font-normal text-[12px] lg:text-[16px] leading-[100%] tracking-[0] text-center text-[#757575]">
                                CareerPathNow has got more than 100k positive ratings from our users around the world.
                            </p>
                        </div>
                    </div>

                    {/* Top Reviews */}
                    <div
                        className="flex items-center justify-around   flex-row w-full h-[230px] mt-8 overflow-auto gap-6  "
                        style={{
                            WebkitOverflowScrolling: "touch",
                            scrollbarWidth: "none",
                        }}
                    >
                        {[...ReviewDatas]
                            .slice(page * itemsPerPage, (page + 1) * itemsPerPage * 2)
                            .map((item, index) => (
                                <div
                                    key={`${item.id}-${index}`}
                                    className="flex flex-col items-center px-4 lg:px-2 lg:justify-center w-full lg:w-[400px] h-[230px] gap-8 bg-white shadow-md rounded-2xl marquee-inner "
                                >
                                    <div className="flex items-center justify-between w-[175px] h-[70px] gap-4">
                                        <div
                                            className="flex items-center justify-center w-[70px] h-[70px] rounded-full bg-center bg-no-repeat bg-cover"
                                            style={{ backgroundImage: `url('${item.image}')` }}
                                        ></div>

                                        <div className="flex justify-center w-[100px] h-[50px] flex-col">
                                            <div className="flex items-center w-full h-[26px]">
                                                <p className="font-[poppins] font-bold text-[12px] leading-[26px] text-[#343B55]">
                                                    {item.name}
                                                </p>
                                            </div>
                                            <div className="flex items-center w-full h-6">
                                                <p className="font-[poppins] font-normal text-[10px] leading-6 text-[#12141D]">
                                                    {item.location}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-center w-full lg:w-[336px] h-[72px]">
                                        <p className="font-[poppins] font-normal text-[12px] leading-5 text-center text-[#757575] line-clamp-3">
                                            {item.message}
                                        </p>
                                    </div>
                                </div>
                            ))}
                    </div>

                    < div
                        className="flex items-center justify-between  flex-row w-full h-[230px] mt-8  gap-6 overflow-auto  "
                        style={{
                            WebkitOverflowScrolling: "touch",
                            scrollbarWidth: "none",
                            
                        }}
                            
                        
                    >
                        {[...ReviewDatas]
                            .reverse()
                            .slice(page * itemsPerPage, (page + 1) * itemsPerPage * 2)
                            .map((item, index) => (
                                < div
                          
                                    key={`${item.id}-${index}`}
                                    className="flex flex-col items-center px-4 lg:px-2 lg:justify-center w-full lg:w-full h-[230px] gap-8 bg-white shadow-md rounded-2xl marquee-reverse   "
                                >
                                    <div className="flex items-center justify-between w-[175px] h-[70px] gap-4 ">
                                        <div
                                            className="flex items-center justify-center w-[70px] h-[70px] rounded-full bg-center bg-no-repeat bg-cover"
                                            style={{ backgroundImage: `url('${item.image}')` }}
                                        ></div>

                                        <div className="flex justify-center w-[100px] h-[50px] flex-col">
                                            <div className="flex items-center w-full h-[26px]">
                                                <p className="font-[poppins] font-bold text-[12px] leading-[26px] text-[#343B55]">
                                                    {item.name}
                                                </p>
                                            </div>
                                            <div className="flex items-center w-full h-6">
                                                <p className="font-[poppins] font-normal text-[10px] leading-6 text-[#12141D]">
                                                    {item.location}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-center w-full lg:w-[336px] h-[72px]">
                                        <p className="font-[poppins] font-normal text-[13px] leading-5 text-center text-[#757575] line-clamp-3">
                                            {item.message}
                                        </p>
                                    </div>
                                </div>
                            ))}
                    </div>


                    {/* Pagination Arrows */}
                    <div className="flex items-center justify-center w-full mt-8">
                        <div className="flex items-center justify-center gap-4 w-[108px] h-[49px]">
                            <HiArrowSmallLeft
                                onClick={prevPage}
                                className={`w-6 h-6 cursor-pointer rounded 
          ${activeArrow === "prev" ? "bg-[#007E8C] text-white" : ""}
      `}
                            />
                            <HiArrowSmallRight
                                onClick={nextPage}
                                className={`w-6 h-6 cursor-pointer rounded
          ${activeArrow === "next" ? "bg-[#007E8C] text-white" : ""}
     `}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
