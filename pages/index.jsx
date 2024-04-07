import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
     <div className="w-full h-screen bg-gray-800 pt-8 flex flex-col items-center gap-8">
        <h1 className="text-center text-[24px] font-bold text-white">Amazing Exchange Files</h1>
        <div className="justify-center flex w-full flex-col items-center gap-5">
           <div className="w-[90%] bg-white h-[60px] rounded-[5px] flex-row flex justify-between items-center pl-4 pr-4">
              <p className="text-[14px]">Amazing Exchange Admin</p>
              <div>
                <a download='amazingExAdmin.apk' href="./amazingExAdmin.apk"  className="bg-gray-800 flex justify-center items-center font-bold w-[100px] h-[40px] rounded-[5px] cursor-pointer text-white text-[12px] ">Download</a>
              </div>
           </div>

           <div className="w-[90%] bg-white h-[60px] rounded-[5px] flex-row flex justify-between items-center pl-4 pr-4">
              <p className="text-[14px]">Amazing Exchange App</p>
              <div>
                <a  className="bg-gray-800 opacity-[70%] flex justify-center items-center font-bold w-[100px] h-[40px] rounded-[5px] cursor-pointer text-white text-[12px] ">Soon...</a>
              </div>
           </div>
        </div>
     </div>
  );
}
