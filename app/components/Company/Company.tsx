import Image from "next/image";
import React from "react";
import CompanyImg from "@/public/images/customer.png";

const Company = () => {
  return (
    <div className="pt-[6rem] pb-[3rem]">
      <h1 className="mb-[1.5rem] font-bold text-[22px] text-center md:text-[30px] text-[#02073e]">
        Company who also worked with us
      </h1>
      <p className="w-[90%] sm:w-[85%] md:w-[75%] lg:w-[65%] xl:w-[55%] mx-auto text-[17px] text-center text-gray-950 opacity-80">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam nisi
        placeat porro reiciendis excepturi suscipit neque hic eius. Totam, nisi
        sunt expedita doloremque pariatur nulla temporibus. Dolorum modi minus
        natus.
      </p>
      <p className="text-center mt-[1.7rem] text-[15px] font-[500] cursor-pointer text-blue-600">
        Explore Details
      </p>
      <div className="mt-[2rem] text-center w-[80%] mx-auto">
        <Image src={CompanyImg} alt="" />
      </div>
    </div>
  );
};

export default Company;
