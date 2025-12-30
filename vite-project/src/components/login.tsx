import { Link } from "react-router-dom";


export const LoginPage = () => {
    return (
        <div className="flex items-center justify-center w-full min-h-screen p-4 bg-linear-to-br from-teal-800 to-teal-400">
            <div className="flex flex-col w-full max-w-lg gap-6 p-8 shadow-2xl bg-zinc-900/95 rounded-2xl">
                <div className="text-center">
                    <h1 className="text-3xl font-semibold text-white">Login</h1>
                    <p className="mt-1 text-sm text-zinc-200">Hey there! Just pop in your login info.</p>
                </div>

                <div className="flex flex-col gap-4 p-6 bg-white shadow-md rounded-xl">
                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-medium text-zinc-700">Email</label>
                        <input
                            type="email"
                            placeholder="Enter Your Email address"
                            className="w-full px-3 py-2 border rounded-lg outline-none border-zinc-300 focus:border-teal-500"
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-medium text-zinc-700">Password</label>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            className="w-full px-3 py-2 border rounded-lg outline-none border-zinc-300 focus:border-teal-500"
                        />
                    </div>

                    <Link to="/home"><button className="w-full py-2 font-medium text-white transition bg-teal-500 rounded-lg shadow cursor-pointer hover:bg-teal-600">
                        Login
                    </button></Link>

                    <button className="text-xs text-center text-zinc-600 hover:underline">Forgot password?</button>
                </div>

                <div className="grid grid-cols-3 gap-3">
                    {/* Facebook */}
                    <button className="rounded-xl shadow cursor-pointer bg-white py-2 font-medium flex items-center justify-center gap-2 hover:scale-[1.02] transition">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 fill-[#1877F2]"><path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.463.099 2.794.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.764v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.407 24 24 23.407 24 22.674V1.326C24 .593 23.407 0 22.675 0z" /></svg>
                        <span className="text-zinc-800">Facebook</span>
                    </button>


                    {/* Google */}
                    <button className="rounded-xl shadow cursor-pointer bg-white py-2 font-medium flex items-center justify-center gap-2 border hover:scale-[1.02] transition">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 533.5 544.3" className="w-5 h-5"><path fill="#4285F4" d="M533.5 278.4c0-17.4-1.6-34-4.6-50.2H272v95.1h147.5c-6.4 34.7-25.7 64.1-54.8 83.7v69.4h88.7c52 47.9 82.1 118.6 82.1 198.8z" /><path fill="#34A853" d="M272 544.3c73.9 0 135.8-24.5 181.1-66.3l-88.7-69.4c-24.7 16.6-56.5 26.3-92.4 26.3-71 0-131.1-47.9-152.6-112.3H28.2v70.7C74.6 486.7 164.9 544.3 272 544.3z" /><path fill="#FBBC05" d="M119.4 322.6c-5.6-16.6-8.8-34.4-8.8-52.6s3.2-36 8.8-52.6V146.7H28.2C10.1 183.4 0 224.4 0 267.7s10.1 84.3 28.2 121l91.2-66.1z" /><path fill="#EA4335" d="M272 107.7c40.2 0 76.2 13.8 104.7 40.8l78.4-78.4C407.8 24.5 345.9 0 272 0 164.9 0 74.6 57.6 28.2 146.7l91.2 70.7C140.9 155.6 201 107.7 272 107.7z" /></svg>
                        <span className="text-zinc-800">Google</span>
                    </button>


                    {/* Apple */}
                    <button className="rounded-xl cursor-pointer shadow bg-black py-2 font-medium flex items-center justify-center gap-2 hover:scale-[1.02] transition">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 fill-white"><path d="M16.365 1.43c0 1.14-.417 2.09-1.252 2.86-.835.76-1.843 1.2-3.025 1.3-.03-.12-.046-.28-.046-.47 0-1.09.4-2.02 1.2-2.78.8-.77 1.787-1.18 2.96-1.24.1.12.163.22.163.33zm4.32 16.35c-.33.77-.72 1.48-1.18 2.12-.62.88-1.13 1.49-1.53 1.83-.61.57-1.27.86-2 .86-.5 0-1.1-.15-1.82-.46-.72-.31-1.38-.46-1.98-.46-.63 0-1.32.15-2.07.46-.75.31-1.36.47-1.83.47-.7 0-1.37-.28-2-.85-.44-.38-.97-1.02-1.6-1.91-.69-.98-1.26-2.12-1.7-3.41-.47-1.39-.7-2.73-.7-4.02 0-1.48.32-2.76.96-3.84.5-.86 1.17-1.54 2-2.03.83-.49 1.73-.74 2.7-.76.53 0 1.23.17 2.07.52.85.35 1.4.53 1.66.53.18 0 .77-.2 1.77-.6.95-.37 1.75-.53 2.4-.5 1.78.14 3.13.85 4.03 2.12-1.6.97-2.4 2.33-2.4 4.08 0 1.36.5 2.49 1.5 3.38.45.43.96.77 1.52 1.02-.12.34-.27.72-.44 1.13z" /></svg>
                        <span className="text-white">Apple</span>
                    </button>
                </div>

                <p className="text-sm text-center text-zinc-200">
                    <span className="font-semibold text-teal-300">New User?</span> Click here to create your account!
                </p>
            </div>
        </div>
    );
}
