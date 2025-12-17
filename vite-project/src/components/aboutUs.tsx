import AboutUsbg from "../assets/Aboutus.webp"
import bgImage from "../assets/whitebg2.webp"
import { motion } from "framer-motion";

export const AboutUs = () => {
    return (<>
        <div className="flex flex-wrap items-center justify-center w-full min-h-screen py-10 lg:h-screen lg:py-0"
            style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: "cover",      // same as object-cover
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}>
            <div className="flex flex-wrap items-center justify-center w-full px-4 mx-auto max-w-7xl md:px-6 lg:px-6">
                <div className="flex flex-col flex-wrap items-center justify-center w-full gap-4 lg:flex-row">
                    <div className=" flex items-end justify-center w-full h-[400px] lg:w-[580px] lg:h-[560px] rounded-2xl "
                        style={{
                            backgroundImage: `url(${AboutUsbg})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                        }}>
                        <div className="flex items-center justify-center w-full px-1 pb-2 ">
                            <p className="font-[montserrat] font-normal text-[10px] leading-[100%] tracking-[0%] text-black/56 ">
                                Titanium veins under Sicilian sun. Featherweight geometry resisting entropy. These are not lenses – they're optical armor for retinal voyeurs. Curve. Shield. Transcend
                            </p>

                        </div>
                    </div>
                    <div className="flex flex-col justify-center w-full lg:w-[600px] lg:h-[280px] gap-4 ">
                        <div className="flex flex-col items-center w-full gap-3 ">
                            <motion.div className="flex items-center w-full"
                                initial={{ scale: 0.9, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: false, amount: 0.5 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}>
                                <h1 className="myfont font-bold  text-3xl  lg:text-[44px] leading-[100%] tracking-[0%] text-[#183051] align-middle">
                                    About us
                                </h1>

                            </motion.div>
                            <div className="flex flex-col justify-center w-full">
                                <h2 className="font-[montserrat] font-bold text-[14px] leading-6 tracking-[0%] text-[#4A4A4A] align-middle">
                                    Crafting Vision, Honoring Heritage
                                </h2>
                                <p className="font-[montserrat] font-normal text-[12px] lg:text-[14px] leading-6 tracking-[0%] text-[#4A4A4A] align-middle ">
                                    At Baniyas Optics, we believe eyewear is more than an accessory — it’s an extension of your identity. Founded in Bahrain, we fuse Middle Eastern craftsmanship with cutting-edge optical technology to create frames that offer uncompromised clarity, comfort, and style.
                                </p>
                            </div>


                        </div>

                        <button className="flex items-center justify-center lg:w-[300px] h-[50px] rounded-2xl bg-[#00B1C6] cursor-pointer ">
                            <p className="font-[montserrat] font-bold text-xs text-white">View Full Story</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </>)
}