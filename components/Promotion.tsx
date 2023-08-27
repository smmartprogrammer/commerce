import Image from "next/image";
import promo1 from "@/public/promo1.webp";
import promo2 from "@/public/promo2.webp";
import promo3 from "@/public/promo3.webp";

const Promotion = () => {
  return (
    <div className="">
      <div className="mt-19 text-center  space-y-1 md:py-9 md:px-32">
        <p className="text-blue-700 flex justify-center font-semibold text-sm   tracking-wider  ">
          PROMOTIONS
        </p>
        <h1 className="py-5 flex justify-center text-gray-800 text-3xl tracking-wider font-bold">
          Our Promotions Events
        </h1>
      </div>

      {/* right */}
      <div className="mt-0 flex flex-wrap  py-0 md:py-0 md:px-32">
        <div className=" flex-1 flex flex-col ">
          <div className="w-auto mx-5 h-52 bg-[#D6D6D8] inline-flex ">
            <div className="max-w-[13rem] py-8 pl-8">
              <h4 className="text-3xl font-bold">GET UPTO 60%</h4>
              <p className="font-normal text-base tracking-wider">
                For the summer season
              </p>
            </div>
            <Image src={promo1} alt="" className=""/>

          </div>

          <div className="my-4 mx-5 w-auto h-52 bg-[#212121] ">
            {" "}
            <h1 className="text-white pt-12 font-bold text-4xl tracking-wide flex justify-center ">
              GET 30% OFF
            </h1>
            <h3 className="text-white text-sm  pt-4 font-medium flex justify-center tracking-wide ">
              USE PROMO CODE
            </h3>
            <div className="flex justify-center py-1 ">
              <button className="flex justify-center  bg-[#474747] text-white px-12 py-1 text-lg font-medium tracking-widest rounded-lg  ">
                DINEWEEKENDSALE
              </button>{" "}
            </div>
          </div>
        </div>

        {/* left */}
        <div className="md:flex-1 md:flex md:flex-row flex-col md:h-[430px] w-full row-span-2 h-full   ">
          <div className="mx-2 bg-[#EFE1C7]   ">
            <div className="p-4 py-5 ">
              <p className="text-lg font-normal">Flex Sweatshirts </p>
              <p className="text-lg font-normal ">
                <del>$100.00</del>
                &nbsp;&nbsp;&nbsp;
                <b>
                  <ins className="no-underline">$75.00</ins>
                </b>
              </p>
            </div>{" "}
            <div className="w-64">
            <Image src={promo2} width={1000} height={1000} alt="" />
            </div>
          </div>
          <div className=" mx-2 bg-[#D7D7D9] mt-3 ">
            <div className="p-4 py-5 ">
              <p className="text-lg font-normal">Flex Push Button Bomber </p>
              <p className="text-lg font-normal ">
                <del>$225.00</del>
                &nbsp;&nbsp;&nbsp;
                <b>
                  <ins className="no-underline">$190.00</ins>
                </b>
              </p>
            </div>{" "}
            <div className="w-64">
            <Image src={promo3} width={1000} height={1000}  alt="" />
            </div>

          </div>
        </div>
      </div>
    </div>

  );
};

export default Promotion;
