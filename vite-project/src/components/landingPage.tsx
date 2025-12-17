import image1 from "../assets/black bg.webp"
import image2 from "../assets/redColorimage.webp"
import smallImage1 from "../assets/image1.webp"
import smallImage2 from "../assets/image2.webp"
import smallImage3 from "../assets/image3.webp"
import { LandingPageDetails } from "../landingaPageDetails/landingpageDetails"
import leftArrow from "../assets/leftArrow.svg"
import rightArrow from "../assets/rightArrow.svg"
import { useState } from "react"
import { MobileCarousel } from "./cardviewForMobile"
import { motion } from "framer-motion";

export const LandingPage = () => {
    const [index, setIndex] = useState(0);
    const handleNext = () => {
        setIndex(prev =>
            prev === LandingPageDetails.length - 1 ? 0 : prev + 1
        );
    };

    const handlePrev = () => {
        setIndex(prev =>
            prev === 0 ? LandingPageDetails.length - 1 : prev - 1
        );
    };
    return (<>
        <div className="flex lg:items-center lg:justify-center w-full min-h-screen lg:py-25 py-10  bg-[radial-gradient(circle,#787878_10%,#121212_80%)] relative flex-wrap ">
            <div className="flex flex-wrap w-full px-4 mx-auto lg:justify-center lg:items-center max-w-7xl md:px-6 lg:px-6 ">
                <div className="flex flex-col flex-wrap w-full lg:justify-center lg:items-center gap-15">
                    <div className="flex items-center justify-center relative w-full lg:w-[938px] lg:h-[380px]  ">
                        <div
                            className="w-35 h-[200px] lg:w-[244px] lg:h-[305px] rounded-[22px] absolute left-7 lg:left-6 top-16 border"
                            style={{
                                backgroundImage: `url(${image1})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                                transform: "rotate(-29deg)",
                            }}
                        ></div>
                        <motion.div
                            className=" myfont flex items-center justify-center w-full lg:w-[830px] h-[270px] z-60 px-4"
                            initial={{ scale: 0.9, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: false, amount: 0.5 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <h1 
                            style={{
                                fontWeight:700
                            }}
                            className="myfont text-[32px] lg:text-[80px] lg:leading-[100%] tracking-[2px]  text-center text-white">
                                <span className="outline-text text-[32px] lg:text-[80px]">
                                    Yo<span
                                        className="bg-clip-text text-transparent text-[32px] lg:text-[80px] bg-[linear-gradient(69deg,transparent_56%,white_10%)]"
                                    >
                                        u
                                    </span>




                                </span>
                                r Ideal Filter{" "}
                                <span className="outline-text text-[32px] lg:text-[80px]">
                                    for
                                </span>{" "}
                                <span className=" bg-clip-text text-transparent text-[32px] lg:text-[80px] bg-[linear-gradient(60deg,transparent_30%,white_10%)] outline-text">a</span>n Endles<span className=" bg-clip-text text-transparent text-[32px] lg:text-[80px] bg-[linear-gradient(-50deg,transparent_30%,white_10%)] outline-text">s</span><br />
                                <span className=" bg-clip-text text-transparent text-[32px] lg:text-[80px] bg-[linear-gradient(77deg,transparent_34%,white_10%)] outline-text">S</span>ummer<span className=" bg-clip-text text-transparent text-[32px] lg:text-[80px] bg-[linear-gradient(-93deg,transparent_50%,white_10%)] outline-text">!</span>
                            </h1>
                        </motion.div>
                      

                        <div
                            className=" w-35 h-[200px] lg:w-[244px] lg:h-[300px] rounded-[22px] absolute right-7 lg:right-6 top-18 overflow-hidden"
                            style={{
                                backgroundImage: `url(${image2})`,
                                backgroundSize: "100% 100%",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                                transform: "rotate(29deg)",
                            }}
                        ></div>

                    </div>
                    <div className="flex flex-col items-center justify-center w-full lg:justify-between lg:flex-row lg:px-20 ">
                        <div className="flex  flex-col lg:w-[281px] h-[181px] gap-8">
                            <h1 className="font-[montserrat]  font-bold text-[41px] leading-[100%] tracking-[0] align-middle text-white">
                                Trendy Collection
                            </h1>
                            <div className="flex items-center">
                                <div className="relative flex w-full">
                                    <img
                                        src={smallImage1}
                                        alt="image1"
                                        className="w-[60px] h-[60px] rounded-full  "
                                    />
                                    <img
                                        src={smallImage2}
                                        alt="image2"
                                        className="w-[60px] h-[60px] rounded-full  -ml-4 z-10"
                                    />
                                    <img
                                        src={smallImage3}
                                        alt="image3"
                                        className="w-[60px] h-[60px] rounded-full  -ml-4 z-20"
                                    />
                                </div>
                                <div>
                                    <p className="font-[montserrat] font-bold text-[16px] leading-[100%] tracking-[0] align-middle text-white">
                                        Connect Our Experts
                                    </p>
                                </div>

                            </div>
                        </div>
                        <div className="relative lg:w-[680px] lg:h-[220px] overflow-hidden  hidden lg:block  ">

                            <img
                                src={leftArrow}
                                alt="left Arrow"
                                onClick={handlePrev}
                                className="absolute left-0 z-10 cursor-pointer top-28"
                            />
                            <img
                                src={rightArrow}
                                alt="right Arrow"
                                onClick={handleNext}
                                className="absolute right-0 z-10 cursor-pointer top-28"
                            />
                            <div
                                className="flex transition-transform duration-500"
                                style={{
                                    transform: `translateX(-${index * (100 / 3)}%)`,
                                    width: `${LandingPageDetails.length * (100 / 3)}%`
                                }}
                            >
                                <div className="grid  grid-cols-3 place-items-center w-full lg:h-[220px]">
                                    {LandingPageDetails.map(({ name, description, image }: any) => (
                                        <div key={name} className="flex flex-col items-center ">

                                            <div className="w-full py-1 font-[montserrat] font-medium text-center text-[#007E8C] bg-[#BFF9FF] rounded-t-[20px]">
                                                {name}
                                            </div>

                                            <div
                                                className="flex items-end pb-3 w-48 h-[190px]  rounded-b-[14px] overflow-hidden text-white font-sans bg-cover bg-center"
                                                style={{ backgroundImage: `url(${image})` }}
                                            >
                                                <div className="w-full text-lg font-medium text-center font-[montserrat]">
                                                    {description}
                                                </div>
                                            </div>

                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="block lg:hidden">
                            <MobileCarousel />
                        </div>
                    </div>
                    <div className="absolute bottom-0 items-end justify-center hidden w-full gap-3 lg:flex">
                        <div className="w-10 h-14 bg-[#00E5FF] rounded-t-xl transition-all duration-300  cursor-pointer"></div>
                        {[...Array(3)].map((_, index) => (
                            <div
                                key={index}
                                className="w-10 h-7 bg-[#00E5FF80] rounded-t-xl transition-all duration-300 hover:h-14 hover:bg-[#00E5FF] cursor-pointer"
                            ></div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    </>)
}