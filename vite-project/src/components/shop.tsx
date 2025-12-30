import { Navbar } from "./Navbar"
import { Footer } from "./footer"
import bgImage from "../assets/whitebg2.webp"
import { categories } from "../shopDatas/shopCategories"
import { useEffect, useState } from "react"
import { filterItems } from "../shopDatas/filterItems"
import { ColorsList } from "../shopDatas/fliter"
import { PriceList } from "../shopDatas/fliter"
import { SortBy } from "../shopDatas/fliter"
import Icon from "../assets/downArrow.svg"
import { Card } from "../shopDatas/card"
import { cardData } from "../shopDatas/cardData"
import { NotFound } from "./404Notfound"

export const Shop = () => {
    const [selectedItem, setSelectedItem] = useState<number>(categories[0].id)
    const [selectedFilter, setSelectedFilter] = useState("")
    const [isOpen, setIsOpen] = useState(false)
    const [totalProducts, setTotalProducts] = useState<number>()
    const [isShowSortby, setIsShowSortby] = useState(false)
    const [filterData, setFilterData] = useState<any>([])
    const [CardData, setCardData] = useState<any>([])





    useEffect(() => {
        setCardData(cardData);
        setFilterData(cardData)
    }, [cardData]);

    useEffect(() => {
        setTotalProducts(filterData.length);
    }, [filterData]);



    const chooseFilter = (item: string) => {
        setSelectedFilter(item);
        setIsOpen(true);
    };


    const handleColorFilter = (color: string) => {

        const result = color === "All"
            ? [...CardData]
            : CardData.filter((card: any) => card.color === color);


        setFilterData(result);
    };

    const handlePriceFilter = (price: string) => {
        let result = [...CardData];

        if (price === "All") {
            result = [...CardData];
        }
        else if (price === "Under ₹500") {
            result = CardData.filter((card: any) => card.price < 500);
        }
        else if (price === "₹500 – ₹1,000") {
            result = CardData.filter(
                (card: any) => card.price >= 500 && card.price <= 1000
            );
        }
        else if (price === "₹1,000 – ₹2,000") {
            result = CardData.filter(
                (card: any) => card.price >= 1000 && card.price <= 2000
            );
        }
        else if (price === "₹2,000 – ₹5,000") {
            result = CardData.filter(
                (card: any) => card.price > 1000 && card.price <= 2000
            );
        }
        else if (price === "Above ₹5,000") {
            result = CardData.filter((card: any) => card.price > 2000);
        }

        setFilterData(result);
    };

    const handleSort = (value: string) => {
        let result = [...CardData];
        console.log(value);


        if (value === "lowToHigh") {
            result.sort((a, b) => a.price - b.price);
        } else if (value === "highToLow") {
            result.sort((a, b) => b.price - a.price);
        } else {
            result = [...CardData];
        }

        setFilterData(result);
    };

    const handleFilterbyCategory = (value: string) => {
        let result = [...CardData];


        if (value.toLowerCase() === "all") {
            result = [...CardData];
        } else {
            result = CardData.filter(
                (item: any) => item.category.toLowerCase() === value.toLowerCase()
            );
        }



        setFilterData(result);
    };


    return (<>
        <div className="flex flex-col w-full min-h-screen lg:justify-center lg:items-center ">
            <Navbar />

            <div className="flex w-full min-h-screen py-10 lg:justify-center lg:items-center"
                style={{
                    backgroundImage: `url(${bgImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}>
                <div className="flex w-full px-2 mx-auto lg:items-center lg:justify-center md:px-6 lg:px-6 max-w-7xl">
                    <div className="flex flex-col w-full gap-4 lg:justify-center ">
                        <div className="flex flex-col w-full gap-4 lg:pl-4 lg:justify-center">
                            <div className="flex lg:items-center lg:justify-around w-full lg:w-[360px] h-12 rounded-xl bg-[#FFFFFF]">
                                {categories.map((category: any) => (
                                    <div key={category.id} className="flex w-[90px] h-[47px] items-center justify-center">
                                        <div
                                            className="flex items-center justify-center w-7 h-[47px] relative cursor-pointer"
                                            onClick={() => setSelectedItem(category.id)}
                                        >
                                            <ul>
                                                <li
                                                    className={`font-[montserrat] text-xs lg:text-[14px] leading-6 tracking-[0.15px] text-center  flex items-center justify-center  ${selectedItem === category.id ? "font-bold text-[#007E8C]" : "font-medium text-[#49454F] "
                                                        }`}
                                                    onClick={() => handleFilterbyCategory(category.name)}
                                                >
                                                    {category.name}
                                                </li>
                                            </ul>


                                            {selectedItem === category.id && (
                                                <div className="absolute bottom-0 w-6 h-[3px] bg-[#007E8C] rounded-t-[100px]"></div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="flex  items-center w-full h-[29px]">
                                <div className="flex items-center px-4 lg:px-0 w-[139px] h-[29px]">
                                    <p
                                        className="font-montserrat font-bold text-xs lg:text-[16px] leading-[120%] tracking-[-0.02em] text-[#C80000]"
                                    >
                                        Reset Filters
                                    </p>

                                </div>
                            </div>

                            <div className="relative flex flex-row w-full h-8 lg:items-center lg:justify-between">
                                <div className="flex items-center justify-center gap-6 lg:justify-start lg:gap-0 w-full lg:w-[510px] h-8">

                                    <div className="hidden lg:flex items-center w-[57px] h-[29px]">
                                        <p className="font-[montserrat] font-semibold text-xs lg:text-[16px] leading-[120%] tracking-[-0.02em] text-[#A4A4A4]">
                                            Filter
                                        </p>
                                    </div>

                                    <div className="flex items-center lg:gap-0 gap-6 w-[200px] lg:w-[380px] h-8">
                                        {filterItems.map((item) => (
                                            <div
                                                key={item.id}
                                                className="relative flex items-center justify-center w-[118px] h-8 lg:gap-2.5"
                                            >
                                                <p className="text-[#000000] font-bold text-xs lg:text-[14px]">
                                                    {item.name}
                                                </p>

                                                <img
                                                    src={item.icon}
                                                    alt={item.name}
                                                    className="w-4 cursor-pointer lg:w-5"
                                                    onClick={() => chooseFilter(item.name)}
                                                />

                                                {/* ✅ DROPDOWN UNDER EACH ITEM */}
                                                {selectedFilter === item.name && isOpen && (
                                                    <div
                                                        className="absolute left-0 z-50 mt-2 origin-top top-full animate-dropdown"
                                                    >
                                                        {item.name === "Colour" && <ColorsList Open={setIsOpen} filter={handleColorFilter} />}
                                                        {item.name === "Price" && <PriceList Open={setIsOpen} filter={handlePriceFilter} />}

                                                    </div>
                                                )}

                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex items-center justify-center lg:w-[376px] h-8 ">
                                    <div className=" relative flex items-center lg:w-[125px] h-[29px]">
                                        <div className="flex items-center justify-center w-[70px] h-[29px]">
                                            <p className="text-[#000000] font-bold text-xs lg:text-[14px]"

                                            >
                                                Sort By
                                            </p>
                                        </div>
                                        <img src={Icon} alt="Arrow Icon" className="w-4 cursor-pointer lg:w-5" onClick={() => setIsShowSortby(true)} />
                                        {isShowSortby && (
                                            <div className="absolute right-0 z-50 mt-2 top-full">
                                                <SortBy Open={setIsShowSortby} filter={handleSort} />
                                            </div>
                                        )}
                                    </div>



                                    <div className="hidden lg:flex items-center justify-center w-[163px] h-[29px]">
                                        <p className="font-heading font-semibold text-xs lg:text-base leading-[120%] tracking-[-0.02em] text-[#A4A4A4]">
                                            Total Products
                                        </p>
                                    </div>

                                    <div className="hidden lg:flex items-center  w-10 h-[29px]">
                                        <p className="font-heading font-semibold text-xs lg:text-base leading-[120%] tracking-[-0.02em] text-[#333333]">
                                            {totalProducts}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {totalProducts === 0 ? (
                            <div className="flex items-center justify-center w-full py-10">
                                <NotFound />
                            </div>
                        ) : (

                            <div className="flex gap-2 px-2 overflow-x-auto lg:gap-4 lg:grid lg:grid-cols-5 lg:place-items-center lg:overflow-hidden">
                                {filterData.map((item: any) => (
                                    <Card key={item.id} item={item} />
                                ))}

                            </div>)}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    </>)
}