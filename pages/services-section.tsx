import type { NextPage } from "next";
import { useCallback } from "react";

const ServicesSection: NextPage = () => {
  const onFrameButtonClick = useCallback(() => {
    window.open("/services");
  }, []);

  const onFrameButton1Click = useCallback(() => {
    window.open("/services");
  }, []);

  const onFrameButton2Click = useCallback(() => {
    window.open("/services");
  }, []);

  return (
    <div className="relative bg-white w-full flex flex-col items-start justify-start text-center text-53xl text-darkslategray-200 font-thicccboi">
      <img
        className="absolute w-[137.02px] h-[137.02px] z-[2] right-[50%] top-[200px] lg:w-[100px] lg:h-[100px] md:w-[90px] md:h-[90px] sm:absolute sm:z-[2] sm:right-[10px] sm:top-[50%] mq1280:w-[90px] mq1280:h-[90px] mq800:absolute mq800:z-[2] mq800:right-[50%] mq800:top-[50%] mq960:w-10 mq960:h-10"
        alt=""
        src="/bubble-18.svg"
      />
      <img
        className="absolute w-[92.01px] h-[92.01px] z-[2] right-[5%] top-[10%] sm:absolute sm:z-[2] sm:right-[10px] sm:top-[10%] mq1280:w-[52px]"
        alt=""
        src="/bubble-19.svg"
      />
      <img
        className="absolute w-[62.01px] h-[62.01px] z-[2] right-[15%] top-[30%] lg:absolute lg:z-[2] lg:right-[15%] lg:top-[300px] sm:absolute sm:z-[2] sm:right-[10px] sm:top-[300px] mq1280:w-8 mq1280:h-8 mq800:absolute mq800:z-[2] mq800:right-[15%] mq800:top-[40%]"
        alt=""
        src="/bubble-110.svg"
      />
      <img
        className="absolute w-[110.02px] h-[110.01px] z-[2] left-[15%] top-[30%] sm:absolute sm:z-[2] sm:left-[20px] sm:top-[30%] mq1280:w-[90px] mq1280:h-[90px] mq800:absolute mq800:z-[2] mq800:left-[15%] mq800:top-[50%] mq960:w-[65px] mq960:h-[65px]"
        alt=""
        src="/bubble-111.svg"
      />
      <img
        className="absolute w-[169.02px] h-[169.02px] z-[2] right-[10px] bottom-[60px] mq1280:w-[120px] mq1280:h-[120px] mq960:w-[90px] mq960:h-[90px]"
        alt=""
        src="/bubble-112.svg"
      />
      <img
        className="absolute w-[107.01px] h-[107.01px] z-[2] right-[25%] sm:absolute sm:z-[2] sm:right-[20px] sm:top-[50%] mq1280:w-20 mq1280:h-20 mq800:absolute mq800:z-[2] mq800:right-[30%]"
        alt=""
        src="/bubble-113.svg"
      />
      <img
        className="absolute w-[55.01px] h-[55.01px] z-[2] left-[15%] sm:absolute sm:z-[2] sm:left-[20px] mq1280:w-10 mq1280:h-10 mq960:w-[35px] mq960:h-[35px]"
        alt=""
        src="/bubble-114.svg"
      />
      <img
        className="absolute w-[110.02px] h-[110.01px] z-[2] left-[10px] bottom-[200px] mq1280:w-[90px] mq1280:h-[90px] mq960:w-[60px] mq960:h-[60px]"
        alt=""
        src="/bubble-111.svg"
      />
      <img
        className="absolute w-[85.01px] h-[85.01px] z-[11] left-[10px] top-[20%] mq1280:w-[70px] mq1280:h-[70px] mq960:w-[55px] mq960:h-[55px]"
        alt=""
        src="/bubble-115.svg"
      />
      <div className="self-stretch flex flex-col py-[30px] px-0 items-start justify-start z-[9] lg:gap-[50px]">
        <div className="self-stretch flex flex-row p-2.5 items-start justify-center">
          <p className="m-0 relative leading-[108.3%] uppercase font-bold lg:text-37xl md:text-17xl">
            OUR SERVICES
          </p>
        </div>
      </div>
      <div className="self-stretch flex flex-row pt-[200px] px-0 pb-[105px] items-end justify-center gap-[20px] z-[10] text-17xl lg:gap-[15px] lg:pt-[100px] lg:box-border md:gap-[10px] md:pt-[60px] md:box-border sm:self-stretch sm:w-auto sm:flex-col sm:gap-[100px] sm:items-center sm:justify-center mq800:flex-col mq800:gap-[100px] mq800:items-center mq800:justify-center">
        <div className="flex flex-col items-center justify-start relative gap-[20px]">
          <img
            className="absolute w-[267px] h-[300px] z-[11] mt-[-170px] mr-[-70px] lg:w-[180px] lg:h-[350px] lg:absolute lg:z-[11] lg:mt-[-170px] md:w-[150px] md:absolute md:z-[11] md:mt-[-170px] sm:absolute sm:z-[11] sm:mt-[-170px] sm:mr-[-30px] mq800:absolute mq800:z-[11] mq800:mt-[-170px] mq800:mr-0"
            alt=""
            src="/extra32.svg"
          />
          <div className="rounded-tl-[1000px] rounded-tr-[115px] rounded-b-[115px] bg-white shadow-[0px_0px_10px_rgba(0,_0,_0,_0.25)] w-[400px] overflow-hidden flex flex-col pt-0 px-0 pb-5 box-border items-start justify-start z-[1] lg:w-[300px] lg:pb-3.5 lg:box-border md:w-[250px] md:pb-3 md:box-border sm:rounded-t-[1000px] sm:rounded-b-[115px] mq1280:w-[280px] mq1012:w-60 mq800:rounded-t-[1000px] mq800:rounded-b-[115px]">
            <img
              className="self-stretch relative max-w-full overflow-hidden h-[343px] shrink-0 object-cover mt-[-40PX] lg:h-[270px] lg:mt-[-20px] md:h-[210px]"
              alt=""
              src="/yellow-3@2x.png"
            />
            <div className="self-stretch flex flex-col items-center justify-start gap-[10px] lg:self-stretch lg:w-auto lg:h-auto lg:gap-[15px] md:gap-[15px] md:pl-0 md:pr-0 md:box-border mq1280:gap-[5px]">
              <div className="self-stretch flex flex-row py-0 px-2.5 items-start justify-center">
                <p className="m-0 relative font-bold lg:text-11xl md:text-5xl">
                  DESIGN
                </p>
              </div>
              <div className="self-stretch h-[170px] flex flex-row py-0 px-[50px] box-border items-start justify-center text-3xl text-darkslategray-100 lg:h-[130px] lg:pl-[30px] lg:pr-[30px] lg:box-border md:self-stretch md:w-auto md:pl-2.5 md:pr-2.5 md:box-border mq1380:h-[100px] mq1280:pl-[50px] mq1280:pr-[50px] mq1280:box-border mq1012:h-[90px] mq1012:pl-10 mq1012:pr-10 mq1012:box-border">
                <p className="m-0 self-stretch flex-1 relative leading-[1.2] lg:text-lg lg:h-[130px] md:text-xs md:h-[100px] mq1380:text-base mq1280:text-sm mq1012:text-xs">{`We create custom illustrations, unique theme & color palettes, and provide expert website design services to elevate your online brand`}</p>
              </div>
              <button
                className="cursor-pointer [border:none] py-[18px] px-[26px] bg-sandybrown-100 rounded-smi overflow-hidden hidden flex-row items-start justify-start lg:py-3.5 lg:px-6 lg:box-border md:py-2.5 md:px-5 md:box-border"
                onClick={onFrameButtonClick}
              >
                <p className="m-0 relative text-xl font-bold font-thicccboi text-white text-center mix-blend-normal lg:text-base md:text-sm">
                  Learn More
                </p>
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start relative gap-[20px]">
          <img
            className="absolute w-[204.68px] h-[299.59px] z-[11] mt-[-180px] ml-[30px] lg:w-[150px] lg:absolute lg:z-[11] lg:mt-[-150px] md:w-[120px] sm:absolute sm:z-[11] sm:mt-[-150px] sm:ml-0 mq800:absolute mq800:z-[11] mq800:mt-[-140px] mq800:ml-0"
            alt=""
            src="/layer-81.svg"
          />
          <div className="rounded-t-[1000px] rounded-b-[210px] bg-white shadow-[0px_0px_10px_rgba(0,_0,_0,_0.25)] w-[400px] overflow-hidden flex flex-col pt-0 px-0 pb-5 box-border items-start justify-start gap-[20px] z-[1] lg:w-[300px] lg:gap-[20px] lg:pb-3.5 lg:box-border md:w-[250px] md:pb-3 md:box-border mq1280:w-[280px] mq1012:w-60">
            <img
              className="self-stretch relative max-w-full overflow-hidden h-[305px] shrink-0 object-cover lg:self-stretch lg:w-auto lg:flex-1 md:flex-1"
              alt=""
              src="/blue-2@2x.png"
            />
            <div className="self-stretch flex flex-col items-center justify-start gap-[10px] lg:self-stretch lg:w-auto lg:h-auto lg:gap-[15px] md:gap-[15px] md:pl-0 md:pr-0 md:box-border mq1280:gap-[5px]">
              <div className="self-stretch flex flex-row py-0 px-2.5 items-start justify-center">
                <p className="m-0 relative font-bold lg:text-11xl md:text-5xl">
                  DEVELOPMENT
                </p>
              </div>
              <div className="self-stretch h-[170px] flex flex-row py-0 px-[50px] box-border items-start justify-center text-3xl text-darkslategray-100 lg:h-[130px] lg:pl-[30px] lg:pr-[30px] lg:box-border md:pl-2.5 md:pr-2.5 md:box-border mq1380:h-[100px] mq1280:pl-[50px] mq1280:pr-[50px] mq1280:box-border mq1012:h-[90px] mq1012:pl-10 mq1012:pr-10 mq1012:box-border">
                <p className="m-0 self-stretch flex-1 relative leading-[1.2] lg:text-lg lg:h-[130px] md:text-xs md:h-[100px] mq1380:text-base mq1280:text-sm mq1012:text-xs">
                  Our team of experts specializes in creating fully functional
                  mobile-friendly web applications using latest and most
                  optimized technologies
                </p>
              </div>
              <button
                className="cursor-pointer [border:none] py-[18px] px-[26px] bg-lightskyblue rounded-smi overflow-hidden hidden flex-row items-start justify-start lg:py-3.5 lg:px-6 lg:box-border md:py-2.5 md:px-5 md:box-border"
                onClick={onFrameButton1Click}
              >
                <p className="m-0 relative text-xl font-bold font-thicccboi text-white text-center mix-blend-normal lg:text-base md:text-sm">
                  Learn More
                </p>
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start relative gap-[20px]">
          <img
            className="absolute w-[281px] h-[260.83px] z-[11] mt-[-150px] ml-[-50px] lg:w-[190px] lg:h-[350px] lg:absolute lg:z-[11] lg:mt-[-170px] md:w-40 md:absolute md:z-[11] md:mt-[-170px] sm:absolute sm:z-[11] sm:mt-[-170px] sm:ml-0 mq800:absolute mq800:z-[11] mq800:mt-[-150px] mq800:ml-0"
            alt=""
            src="/extra311.svg"
          />
          <div className="rounded-tl-[115px] rounded-tr-[1000px] rounded-b-[115px] bg-white shadow-[0px_0px_10px_rgba(0,_0,_0,_0.25)] w-[400px] overflow-hidden flex flex-col pt-0 px-0 pb-5 box-border items-start justify-start z-[1] lg:w-[300px] lg:pb-3.5 lg:box-border md:w-[250px] md:pb-3 md:box-border sm:rounded-t-[1000px] sm:rounded-b-[115px] mq1280:w-[280px] mq1012:w-60 mq800:rounded-t-[1000px] mq800:rounded-b-[115px]">
            <img
              className="self-stretch relative max-w-full overflow-hidden h-[343px] shrink-0 object-cover mt-[-40px] lg:h-[270px] lg:mt-[-20px] md:h-[210px]"
              alt=""
              src="/frame-60-1@2x.png"
            />
            <div className="self-stretch flex flex-col items-center justify-start gap-[10px] lg:self-stretch lg:w-auto lg:h-auto lg:gap-[15px] md:gap-[15px] md:pl-0 md:pr-0 md:box-border mq1280:gap-[5px]">
              <div className="self-stretch flex flex-row py-0 px-2.5 items-start justify-center">
                <p className="m-0 relative font-bold lg:text-11xl md:text-5xl">
                  SEO
                </p>
              </div>
              <div className="self-stretch h-[170px] flex flex-row py-0 px-[50px] box-border items-start justify-center text-3xl text-darkslategray-100 lg:h-[130px] lg:pl-[30px] lg:pr-[30px] lg:box-border md:pl-2.5 md:pr-2.5 md:box-border mq1380:h-[100px] mq1280:pl-[50px] mq1280:pr-[50px] mq1280:box-border mq1012:h-[90px] mq1012:pl-10 mq1012:pr-10 mq1012:box-border">
                <p className="m-0 self-stretch flex-1 relative leading-[1.2] lg:text-lg lg:h-[130px] md:text-xs md:h-[100px] mq1380:text-base mq1280:text-sm mq1012:text-xs">
                  We offer comprehensive on-page SEO services to help your
                  business rank higher in search results and attract more
                  qualified leads
                </p>
              </div>
              <button
                className="cursor-pointer [border:none] py-[18px] px-[26px] bg-teal-100 rounded-smi overflow-hidden hidden flex-row items-start justify-start lg:py-3.5 lg:px-6 lg:box-border md:py-2.5 md:px-5 md:box-border"
                onClick={onFrameButton2Click}
              >
                <p className="m-0 relative text-xl font-bold font-thicccboi text-white text-center mix-blend-normal lg:text-base md:text-sm">
                  Learn More
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
