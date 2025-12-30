

import type { CardItem } from "../shopDatas/cardData";

type CardProps = {
    item: CardItem;
};

export const Card = ({ item }: CardProps) => {


    const { title, icon, glassId, price, oldPrice, image } = item;



    return (<>

        <div className="flex flex-col justify-center items-center gap-4 px-4 w-full  lg:w-57  h-[375px] border border-[#D9D9D9] bg-[#FFFFFF] rounded-[9px] shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
            <div className="flex items-center justify-center w-full  h-[247px]"

            >
                <img src={image} alt="" className="h-full rounded-sm" />
            </div>
            <div className="flex flex-col justify-center h-20 px-2 w-52">
                <div className="flex items-center w-52 h-[22px]">
                    <p className="font-normal text-[13px] leading-[140%] tracking-normal text-[#1E1E1E]">
                        {title}
                    </p>

                </div>
                <div className="flex items-center gap-2 w-[135px] h-[22px] ">
                    <div className="flex items-center h-[22px]  ">
                        <img src={icon} alt="Icon" className="w-3" />
                    </div>
                    <div className="flex items-center w-[31px] h-[22px]" >
                        <p className="font-['montserrat'] font-semibold text-[13px] leading-[140%] line-through text-[#757575]">
                            {oldPrice}
                        </p>

                    </div>
                    <div className="flex items-center w-[74px] h-[22px]  gap-2">
                        <div className="flex items-center justify-center  h-[22px] ">
                            <img src={icon} alt="Icon" className="w-3" />
                        </div>
                        <div className="flex items-center w-[52px] h-[22px] ">
                            <p className="font-['montserrat'] font-semibold text-[13px] leading-[140%] tracking-normal text-[#1E1E1E]">
                                {price}
                            </p>

                        </div>
                    </div>
                </div>
                <div className="flex items-center w-full h-5">
                    <div className="flex items-center  w-[50px] h-5">
                        <p className="font-normal text-xs leading-[140%] tracking-normal text-[#757575]">
                            {glassId}
                        </p>

                    </div>
                </div>
            </div>
        </div>
    </>)
}