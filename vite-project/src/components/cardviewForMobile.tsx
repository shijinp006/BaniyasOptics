import React, { useState } from "react";
import leftArrow from "../assets/leftArrow.svg";
import rightArrow from "../assets/rightArrow.svg";
import { LandingPageDetails } from "../landingaPageDetails/landingpageDetails";

export const MobileCarousel: React.FC = () => {
    const [index, setIndex] = useState(0);
    const totalItems = LandingPageDetails.length;

    const handleNext = () => setIndex(prev => (prev === totalItems - 1 ? 0 : prev + 1));
    const handlePrev = () => setIndex(prev => (prev === 0 ? totalItems - 1 : prev - 1));

    return (




        <div className="relative grid w-full grid-cols-3 overflow-hidden lg:hidden">
            <button
                onClick={handlePrev}
                className="absolute z-40 p-3 -translate-y-1/2 shadow-lg bg-opacity-70 left-2 top-1/2 hover:bg-opacity-90 active:bg-opacity-100 focus:outline-none"
            >
                <img src={leftArrow} alt="Previous" />
            </button>

            {/* Right Arrow */}
            <button
                onClick={handleNext}
                className="absolute z-40 p-3 -translate-y-1/2 shadow-lg bg-opacity-70 right-2 top-1/2 hover:bg-opacity-90 active:bg-opacity-100 focus:outline-none"
            >
                <img src={rightArrow} alt="Next" />
            </button>
            <div
                className="flex items-center justify-between w-full transition-transform duration-500 "
                style={{
                    transform: `translateX(-${index * 100}%)`,
                    width: `${totalItems * 100}%`,
                }}
            >
                {LandingPageDetails.map(({ name, description, image }, i) => (
                    <div
                        key={i}
                        className="flex justify-center w-full px-4 shrink-0"
                    >
                        <div className="w-full max-w-sm overflow-hidden bg-white shadow-xl rounded-xl">
                            {/* Card Label */}
                            <div className="w-full py-2 text-center font-[montserrat] font-bold text-[#007E8C] bg-[#BFF9FF] rounded-t-[20px] text-base">
                                {name}
                            </div>

                            {/* Image */}
                            <div className="relative w-full h-64 overflow-hidden">
                                <img
                                    src={image}
                                    alt={name}
                                    className="object-cover w-full h-full"
                                />
                                <div className="absolute bottom-0 w-full  px-4 py-3 text-lg font-medium font-[montserrat] text-center text-white bg-opacity-50">
                                    {description}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>


    );
};
