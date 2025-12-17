import { useState } from "react";

export const ContactForm = () => {
    const subjects = [
        { id: 1, label: "General" },
        { id: 2, label: "Business Enquiry" },
        { id: 3, label: "Wholesale Enquiry" },
        { id: 4, label: "Brand Enquiry" },
    ];

    const [selected, setSelected] = useState(1);

    return (
        <div className="w-full max-w-3xl p-4 mx-auto space-y-10">


            <div className="grid grid-cols-1 gap-10 md:grid-cols-2">

                <div className="flex flex-col gap-1">
                    <label className="font-[montserrat] font-medium text-[12px] leading-5 tracking-[0] text-[#8D8D8D]">First Name</label>

                    <input
                        type="text"
                        className="border-b border-[#C8C8C8] focus:outline-none py-1"
                        placeholder=""
                    />
                </div>


                <div className="flex flex-col gap-1">
                    <label className="font-[montserrat] font-medium text-[12px] leading-5 tracking-[0] text-[#000000]">Last Name</label>
                    <input
                        type="text"
                        className="border-b border-[#C8C8C8] focus:outline-none py-1 font-[poppins] font-medium text-[12px] leading-5 tracking-[0] text-[#8D8D8D] "
                        defaultValue="Doe"
                    />
                </div>
            </div>


            <div className="grid grid-cols-1 gap-10 md:grid-cols-2">

                <div className="flex flex-col gap-1">
                    <label className="font-[montserrat] font-medium text-[12px] leading-5 tracking-[0] text-[#8D8D8D]">Email</label>
                    <input
                        type="email"
                        className="border-b border-[#C8C8C8] focus:outline-none py-1"
                    />
                </div>


                <div className="relative flex flex-col gap-1">
                    <label className="font-[montserrat] font-medium text-[12px] leading-5 tracking-[0] text-[#000000]">Phone Number</label>
                    <input
                        type="text"
                        defaultValue="+971 050123456"
                        className="border-b border-[#C8C8C8] focus:outline-none py-1 pr-8 font-[montserrat] font-medium text-[14px] leading-5 tracking-[0] text-[#000000]"
                    />

                </div>
            </div>


            <div className="space-y-4">
                <p className="font-[poppins] font-semibold text-[14px] leading-5 tracking-[0] text-black">Select Subject?</p>
                <div className="flex flex-col flex-wrap w-full gap-6 lg:items-center lg:flex-row ">
                    {subjects.map((sub) => (
                        <label
                            key={sub.id}
                            className="flex items-center  cursor-pointer font-[montserrat] font-normal text-[12px] leading-5 text-[#007E8C] gap-2"
                        >

                            <input
                                type="radio"
                                name="subject"
                                value={sub.id}
                                checked={selected === sub.id}
                                onChange={() => setSelected(sub.id)}
                                className="hidden"
                            />

                            <span
                                className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center ${selected === sub.id
                                    ? "bg-[#00C2D8] border-[#00C2D8]"
                                    : "border-[#C8F8FF]"}`}
                            >
                                {selected === sub.id && (
                                    <svg
                                        className="w-2 h-2 text-white"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                )}
                            </span>
                            <span
                                className={`text-[12px] font-[montserrat] font-normal leading-5 "
                                    }`}
                            >
                                {sub.label}
                            </span>
                        </label>
                    ))}
                </div>
            </div>


            <div className="flex flex-col gap-1">
                <label className="font-[poppins] font-medium text-[12px] leading-5 text-[#8D8D8D]">Message</label>
                <textarea
                    rows={3}
                    placeholder="Write your message.."
                    className="border-b border-[#C8C8C8] focus:outline-none py-2 resize-none font-[montserrat] font-medium text-[14px] leading-5 text-[#8D8D8D]"
                ></textarea>
            </div>
        </div>
    );
}
