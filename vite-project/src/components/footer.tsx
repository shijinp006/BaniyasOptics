
import Logo from "../assets/logo.webp"
import { footerData } from "../footerDatas/footerDatas"
import { footerPolicies } from "../footerDatas/footerDatas"
import { footerIcons } from "../footerDatas/footerIcons"
export const Footer = () => {
    return (<>
        <footer className="flex items-center justify-center w-full min-h-screen bg-[#222222] mt-8 lg:mt-0 lg:py-10 ">
            <div className="flex flex-col items-center justify-center w-full px-4 mx-auto max-w-7xl md:px-6 lg:px-7.5">

                <div className="flex flex-col w-full lg:justify-between lg:flex-row lg:px-25 lg:mt-6 ">
                    <div className=" flex  flex-col w-full lg:w-[424px] lg:h-[425px] lg:gap-0 gap-4 ">
                        <div className="flex items-center w-full h-[87px] gap-4 ">
                            <img src={Logo} alt="logo" className="w-[65px] h-[45px]" />
                            <div className="flex items-center  w-[198px] h-[25px]">
                                <h1 className=" font-[limelight] lg:text-[16px] leading-none text-[#F1F1F1]">
                                    Baniyas Optics
                                </h1>
                            </div>
                        </div>

                        <div className="flex  w-full lg:h-[296px] flex-col lg:gap-0 gap-4">
                            <div className="flex items-center w-full h-24 text-start">
                                <p className="font-[montserrat] font-normal text-[18px] lg:text-[22px] leading-[30.87px] text-[#FDF7EF] align-middle">
                                    Be the first to hear<br />
                                    about AL Baniyas Optics updates
                                </p>

                            </div>
                            <div className="flex items-center w-full h-[84px] ">
                                <input type="text" placeholder="Enter your email" className="w-[200px] font-[inter] text-[14px] px-4 h-16 bg-[#FFFFFF1A] rounded-l-md  opacity-100 text-white placeholder:text-[#DADADA] outline-none" />
                                <button className="w-28 h-16 bg-[#FFFFFF] font-bold font-[inter] text-[12px] text-[#007E8C] rounded-r-[20px] opacity-100 cursor-pointer">
                                    Subscribe
                                </button>

                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end  flex-row w-full lg:w-[328px] lg:h-[292px] mt-8 lg:mt-0 ">
                        <div className="flex flex-col justify-center w-full  h-[292px] ">
                            <p className="font-['Space_Mono'] font-normal text-[12px] leading-[22.51px] tracking-[0px] align-middle uppercase text-[#696969]">CONNECT</p>

                            <div className="flex flex-col w-full h-[246px] gap-2 ">
                                {footerData.map(item => (
                                    <div className="flex items-center h-[30px] ">
                                        <p
                                            key={item.id}
                                            className="font-[montserrat] font-normal text-[16px] leading-[28.8px] tracking-[0px] align-middle text-[#FDF7EF]"
                                        >
                                            {item.label}
                                        </p>
                                    </div>

                                ))}
                            </div>
                        </div>
                        <div className="flex flex-col items-end w-[49px] h-[197px] ">
                            <div className="flex flex-col items-center justify-center gap-4">
                                {footerIcons.map(item => (
                                    <img
                                        key={item.id}
                                        src={item.icon}
                                        alt="social-icon"
                                        className="w-[49px] h-10 cursor-pointer"
                                    />
                                ))}
                            </div>

                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-full max-h-[147px]">
                    <div className="flex flex-col gap-1 w-full items-center justify-center h-[29px]">
                        <p className="font-[montserrat] font-medium lg:text-[22px] leading-[100%] tracking-[0px] text-center align-middle text-[#909090]">
                            Made by Sacrosys Technologies.
                        </p>
                        <div className="w-full border-b border-[#A0A0A0]"></div>


                    </div>
                    <div className=" hidden lg:flex items-center justify-center w-full lg:h-[117px]">
                        <div className="flex items-center justify-between w-full h-7">
                            {footerPolicies.map(item => (
                                <p
                                    key={item.id}
                                    className="font-[montserrat] font-normal text-[14px] text-[#A0A0A0]"
                                >
                                    {item.label}
                                </p>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </footer>
    </>)
}