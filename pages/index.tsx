import type { NextPage } from "next";
import { useCallback, useEffect } from "react";
import { TextField, Button } from "@mui/material";

const Khatam: NextPage = () => {
  const onFrameContainer1Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='desktopHero']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onHome1Click = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='servicesSectionContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onFrameContainer3Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='processSection']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onHome2Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='processSection']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onFrameContainer4Click = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='portfolioSection']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onButtonClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='frameContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onFrameContainer7Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='desktopHero']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onHome5Click = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='servicesSectionContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onFrameContainer9Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='processSection']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onHome6Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='processSection']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onFrameContainer10Click = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='portfolioSection']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const onFrameButtonClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='frameContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onFrameButton1Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='frameContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onFrameButton2Click = useCallback(() => {
    window.open("/services");
  }, []);

  const onFrameButton3Click = useCallback(() => {
    window.open("/services");
  }, []);

  const onFrameButton4Click = useCallback(() => {
    window.open("/services");
  }, []);

  const onFrameContainer79Click = useCallback(() => {
    window.open("https://thedou.co/");
  }, []);

  const onFrameContainer86Click = useCallback(() => {
    window.open("http://bluepriint.in/");
  }, []);

  const onFrameContainer94Click = useCallback(() => {
    window.open("https://goseen.in/");
  }, []);

  const onFrameContainer101Click = useCallback(() => {
    window.open("https://drbaldevbatra.com/");
  }, []);

  const onHomepageClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='navbar']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onOurServicesClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='servicesSectionContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onTheProcess1Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='processSection']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onFrameContainer118Click = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='portfolioSection']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onProjectsClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='portfolioSection']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onContactUsClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='frameContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className="relative w-full flex flex-col items-start justify-start text-left text-17xl text-black font-thicccboi">
      <header
        className="self-stretch bg-white h-[100px] flex flex-row py-5 px-20 box-border items-start justify-between z-[100] sticky lg:h-20 lg:gap-[0px] lg:py-5 lg:px-[60px] lg:box-border lg:sticky md:h-[60px] md:py-2.5 md:pr-0 md:pl-10 md:box-border md:sticky sm:py-2.5 sm:pr-0 sm:pl-2.5 sm:box-border"
        data-scroll-to="navbar"
      >
        <img
          className="relative w-[150px] h-[49px] sm:h-10"
          alt=""
          src="/logo.svg"
        />
        <div className="flex flex-row items-start justify-center gap-[30px]">
          <a className="[text-decoration:none] flex flex-row items-center justify-start gap-[30px] md:hidden">
            <div
              className="flex flex-row p-2.5 items-center justify-center cursor-pointer"
              onClick={onFrameContainer1Click}
            >
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-5xl font-bold font-thicccboi text-darkslategray-200 text-center inline-block hover:text-darkslategray-200 lg:text-xl lg:hover:text-darkslategray-200 md:text-base mq1380:text-xl mq1280:text-lg mq1012:text-base">
                Home
              </button>
            </div>
            <div className="flex flex-row p-2.5 items-center justify-center">
              <button
                className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-5xl font-bold font-thicccboi text-darkslategray-200 text-center inline-block lg:text-xl lg:hover:text-darkslategray-200 md:text-lg mq1380:text-xl mq1280:text-lg mq1012:text-base"
                onClick={onHome1Click}
              >
                Our Services
              </button>
            </div>
            <div
              className="flex flex-row p-2.5 items-center justify-center cursor-pointer"
              onClick={onFrameContainer3Click}
            >
              <button
                className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-5xl font-bold font-thicccboi text-darkslategray-200 text-center inline-block lg:text-xl lg:hover:text-darkslategray-200 md:text-lg mq1380:text-xl mq1280:text-lg mq1012:text-base"
                onClick={onHome2Click}
              >
                The Process
              </button>
            </div>
            <div
              className="flex flex-row p-2.5 items-center justify-center cursor-pointer"
              onClick={onFrameContainer4Click}
            >
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-5xl font-bold font-thicccboi text-darkslategray-200 text-center inline-block lg:text-xl lg:hover:text-darkslategray-200 md:text-lg mq1380:text-xl mq1280:text-lg mq1012:text-base">
                Our Portfolio
              </button>
            </div>
            <button
              className="cursor-pointer [border:none] py-[15px] px-7 bg-darkslategray-200 rounded-96xl flex flex-row items-center justify-center lg:pt-3 lg:pb-3 lg:box-border mq1280:py-3.5 mq1280:px-6 mq1280:box-border mq1012:py-2.5 mq1012:px-5 mq1012:box-border"
              onClick={onButtonClick}
            >
              <h1 className="m-0 relative text-5xl font-bold font-thicccboi text-white text-center lg:text-xl md:text-base mq1380:text-xl mq1280:text-lg mq1012:text-base">
                Let’s Talk
              </h1>
            </button>
          </a>
          <div className="hidden flex-col py-2.5 pr-0 pl-2.5 items-end justify-center gap-[10px] md:flex md:hover:animate-[.5s_ease_0s_1_normal_none_fade-in] md:hover:opacity-[1] sm:z-[100]">
            <div className="flex flex-col items-start justify-start md:pl-5 md:pr-10 md:box-border sm:pr-5 sm:box-border">
              <img
                className="relative w-[28.66px] h-[18.24px] sm:h-4"
                alt=""
                src="/vector.svg"
              />
            </div>
            <div className="rounded-t-none rounded-br-none rounded-bl-xl bg-white overflow-hidden hidden flex-col py-[30px] px-[50px] items-center justify-start gap-[28px] md:bg-white md:gap-[20px] sm:w-[200px] sm:h-[350px] sm:gap-[20px] sm:pt-5 sm:px-2.5 sm:pb-2.5 sm:box-border">
              <div
                className="flex flex-row p-2.5 items-center justify-center cursor-pointer"
                onClick={onFrameContainer7Click}
              >
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-5xl font-bold font-thicccboi text-darkslategray-200 text-center inline-block lg:text-xl lg:hover:text-crimson md:text-base md:hover:text-darkslategray-200 sm:hover:text-darkslategray-200 mq1380:text-xl mq1280:text-lg mq1012:text-base mq800:hover:text-darkslategray-200">
                  Home
                </button>
              </div>
              <div className="flex flex-row p-2.5 items-center justify-center">
                <button
                  className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-5xl font-bold font-thicccboi text-darkslategray-200 text-center inline-block lg:text-xl lg:hover:text-crimson md:text-lg md:hover:text-darkslategray-200 sm:hover:text-darkslategray-200 mq1380:text-xl mq1280:text-lg mq1012:text-base"
                  onClick={onHome5Click}
                >
                  Our Services
                </button>
              </div>
              <div
                className="flex flex-row p-2.5 items-center justify-center cursor-pointer"
                onClick={onFrameContainer9Click}
              >
                <button
                  className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-5xl font-bold font-thicccboi text-darkslategray-200 text-center inline-block lg:text-xl lg:hover:text-crimson md:text-lg md:hover:text-darkslategray-200 sm:hover:text-darkslategray-200 mq1380:text-xl mq1280:text-lg mq1012:text-base"
                  onClick={onHome6Click}
                >
                  The Process
                </button>
              </div>
              <div
                className="flex flex-row p-2.5 items-center justify-center cursor-pointer"
                onClick={onFrameContainer10Click}
              >
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-5xl font-bold font-thicccboi text-darkslategray-200 text-center inline-block lg:text-xl lg:hover:text-crimson md:text-lg md:hover:text-darkslategray-200 sm:hover:text-darkslategray-200 mq1380:text-xl mq1280:text-lg mq1012:text-base">
                  Our Portfolio
                </button>
              </div>
              <button className="cursor-pointer [border:none] py-[15px] px-7 bg-darkslategray-200 rounded-96xl flex flex-row items-center justify-center lg:pt-3 lg:pb-3 lg:box-border mq1280:py-3.5 mq1280:px-6 mq1280:box-border mq1012:py-2.5 mq1012:px-5 mq1012:box-border">
                <h1 className="m-0 relative text-5xl font-bold font-thicccboi text-white text-center lg:text-xl md:text-base mq1380:text-xl mq1280:text-lg mq1012:text-base">
                  Let’s Talk
                </h1>
              </button>
            </div>
          </div>
        </div>
      </header>
      <nav
        className="self-stretch bg-white h-[980px] flex flex-col items-start justify-start sticky z-[50] lg:h-[750px] md:h-[500px] sm:hidden mq1536:h-[750px] mq1380:h-[720px] mq1280:h-[650px] mq1012:h-[585px] mq840:h-[500px] mq800:hidden"
        data-scroll-to="desktopHero"
      >
        <section className="self-stretch flex flex-col items-start justify-start relative gap-[20px] z-[0] text-left text-29xl text-orangered font-thicccboi lg:h-auto lg:gap-[20px] mq1280:gap-[18px] mq1012:gap-[15px]">
          <div className="self-stretch flex flex-row py-0 pr-[400px] pl-0 items-center justify-start relative gap-[20px] z-[0] lg:pr-[300px] lg:box-border md:pr-[250px] md:box-border">
            <img
              className="flex-1 relative rounded-tl-none rounded-tr-xl rounded-br-xl rounded-bl-none max-w-full overflow-hidden h-[300px] object-cover z-[0] lg:h-[230px] lg:rounded-tl-none lg:rounded-tr-[15px] lg:rounded-br-[15px] lg:rounded-bl-none md:h-[150px] md:rounded-tl-none md:rounded-tr-[10px] md:rounded-br-[10px] md:rounded-bl-none mq1380:h-[220px] mq1280:h-[200px] mq1012:h-[180px] mq840:h-[150px]"
              alt=""
              src="/rectangle-161@2x.png"
            />
            <div className="w-[460px] h-[300px] flex flex-col pt-5 pb-0 pr-0 pl-20 box-border items-start justify-start gap-[18px] absolute left-[0] top-[0] z-[1] lg:w-[100px] lg:h-[230px] lg:gap-[10px] lg:items-start lg:justify-start lg:pl-20 lg:pt-5 lg:box-border md:w-[180px] md:h-20 md:gap-[5px] md:pl-2.5 md:pt-[30px] md:box-border mq1700:w-[400px] mq1536:w-[380px] mq1536:pl-[60px] mq1536:box-border mq1380:w-[350px] mq1380:h-[220px] mq1380:pl-[60px] mq1380:box-border mq1280:w-[300px] mq1280:h-[200px] mq1280:pl-[60px] mq1280:box-border mq1012:w-[280px] mq1012:h-[180px] mq840:w-[180px] mq840:h-[150px] mq840:pl-10 mq840:pt-2.5 mq840:box-border mq840:absolute mq840:right-[0] mq960:w-[250px] mq960:pl-10 mq960:box-border">
              <div className="self-stretch h-[55px] flex flex-row items-start justify-start gap-[15px] mix-blend-color-burn lg:h-[50px] lg:gap-[0px] md:h-[35px]">
                <p className="m-0 relative inline-block w-14 h-[55px] shrink-0 mix-blend-normal lg:text-17xl md:text-5xl md:w-10">
                  01
                </p>
                <p className="m-0 flex-1 relative font-light inline-block h-[55px] mix-blend-normal lg:text-17xl md:text-5xl md:h-5">
                  <span className="block">Creativity</span>
                </p>
              </div>
              <p className="m-0 self-stretch relative text-3xl mix-blend-luminosity leading-[1.2] lg:text-lg lg:h-[100px] md:text-xs mq1380:text-base mq1280:text-sm mq1012:text-xs mq840:text-xs mq840:leading-[1.2]">
                Creativity is at the heart of what we do at Third R. Our web
                design specialists use their expertise and imagination to craft
                custom websites that reflect your unique brand and captivate
                your audience.
              </p>
            </div>
            <div className="absolute w-[146px] h-[210px] overflow-hidden shrink-0 right-[400px] z-[2] lg:h-[180px] lg:absolute lg:right-[300px] md:w-[120px] md:h-[120px] md:absolute md:right-[250px] mq1280:w-[120px] mq1280:h-[150px] mq1012:w-[100px] mq1012:h-[120px]">
              <img
                className="absolute top-[0px] left-[0px] w-[200px] h-[200px] [&.animate]:animate-[40s_linear_0s_infinite_normal_forwards_rotate-center] opacity-[1] lg:w-[180px] lg:h-[180px] md:w-[180px] md:h-[120px] mq1280:w-[150px] mq1280:h-[150px] mq1012:h-[120px]"
                alt=""
                src="/frame-217.svg"
                data-animate-on-scroll
              />
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-end gap-[20px] z-[1] text-5xl text-gray-400 lg:gap-[10px] mq1280:gap-[18px] mq1012:gap-[15px]">
            <div className="flex-1 flex flex-row items-start justify-end gap-[15px] mq1280:gap-[18px]">
              <div className="self-stretch flex-1 flex flex-col py-0 pr-5 pl-20 items-start justify-start gap-[32px] lg:gap-[28px] lg:pl-[60px] lg:box-border md:gap-[24px] md:pl-10 md:box-border mq1380:pr-[15px] mq1380:box-border mq1280:pr-0 mq1280:box-border">
                <h1 className="m-0 self-stretch relative text-[inherit] font-bold font-inherit lg:text-5xl md:text-xl">
                  Elevating brands with Inspiring Websites That Convert
                </h1>
                <p className="m-0 self-stretch relative text-3xl text-darkslategray-400 leading-[1.2] lg:text-lg md:text-sm">{`We strive for excellence in everything we do, from crafting custom graphics & websites that drive results, to providing exceptional customer service, our team goes above and beyond to exceed your expectations`}</p>
              </div>
              <img
                className="flex-1 rounded-[20px] max-w-full overflow-hidden h-[620px] object-cover lg:h-[480px] lg:items-start lg:justify-start lg:rounded-[15px] md:h-[310px] md:rounded-[10px] mq1380:h-[460px] mq1280:h-[418px] mq1012:h-[375px] mq840:h-[315px]"
                alt=""
                src="/frame-74@2x.png"
              />
            </div>
            <div className="flex-1 h-[620px] flex flex-col items-center justify-start relative gap-[20px] text-29xl text-turquoise lg:h-[480px] lg:gap-[20px] md:h-[310px] mq1380:h-[460px] mq1280:h-[418px] mq1280:gap-[18px] mq1012:h-[375px] mq1012:gap-[15px] mq840:h-80">
              <img
                className="self-stretch relative rounded-tl-xl rounded-tr-none rounded-br-none rounded-bl-xl max-w-full overflow-hidden h-[300px] shrink-0 object-cover z-[0] lg:h-[230px] lg:rounded-tl-[14px] lg:rounded-tr-none lg:rounded-br-none lg:rounded-bl-[14px] md:h-[150px] md:rounded-tl-[10px] md:rounded-tr-none md:rounded-br-none md:rounded-bl-[10px] mq1380:h-[220px] mq1280:h-[200px] mq1012:h-[180px] mq840:h-[150px]"
                alt=""
                src="/rectangle-19@2x.png"
              />
              <img
                className="self-stretch relative rounded-tl-[20px] rounded-tr-none rounded-br-none rounded-bl-[20px] max-w-full overflow-hidden h-[300px] shrink-0 object-cover z-[1] lg:h-[230px] lg:rounded-tl-[14px] lg:rounded-tr-none lg:rounded-br-none lg:rounded-bl-[14px] md:h-[150px] md:rounded-tl-[10px] md:rounded-tr-none md:rounded-br-none md:rounded-bl-[10px] mq1380:h-[220px] mq1280:h-[200px] mq1012:h-[180px] mq840:h-[150px]"
                alt=""
                src="/rectangle-20@2x.png"
              />
              <div className="w-[362px] h-[300px] flex flex-col pt-10 pb-0 pr-20 pl-0 box-border items-end justify-start gap-[18px] absolute top-[0] right-[0] z-[2] text-paleturquoise lg:w-[350px] lg:h-[230px] lg:gap-[10px] lg:pt-[50px] lg:pr-[60px] lg:box-border md:w-[200px] md:h-[150px] md:gap-[0px] md:items-end md:justify-center md:pt-0 md:pr-10 md:box-border mq1536:pt-10 mq1536:box-border mq1380:w-[300px] mq1380:h-[220px] mq1280:w-[250px] mq1280:h-[200px] mq1280:pt-5 mq1280:box-border mq1012:w-[220px] mq1012:h-[180px] mq1012:gap-[10px] mq1012:pt-5 mq1012:pr-10 mq1012:box-border mq840:w-[181px] mq840:h-[150px] mq840:gap-[0px] mq840:pt-0 mq840:pr-20 mq840:box-border mq960:gap-[0px] mq960:pt-0 mq960:pr-10 mq960:box-border">
                <div className="self-stretch h-[55px] flex flex-row items-start justify-start gap-[7px] mix-blend-color-burn">
                  <p className="m-0 relative mix-blend-overlay lg:text-17xl md:text-5xl">
                    02
                  </p>
                  <p className="m-0 relative font-light mix-blend-overlay lg:text-17xl md:text-5xl">
                    Speed
                  </p>
                </div>
                <p className="m-0 self-stretch relative text-3xl mix-blend-color-burn leading-[1.2] lg:text-lg md:text-xs mq1380:text-base mq1280:text-sm mq1012:text-xs mq840:text-[11px] mq960:text-xs">
                  We prioritize speed and efficiency in our work, ensuring
                  timely delivery of high-quality websites to our clients.
                </p>
              </div>
              <div className="w-[362px] h-[300px] flex flex-col pt-0 pb-[50px] pr-20 pl-0 box-border items-center justify-end opacity-[0.3] absolute right-[0] bottom-[0] z-[3] text-3xl lg:w-[350px] lg:h-[230px] lg:gap-[0px] lg:items-center lg:justify-end lg:pt-0 lg:pr-[60px] lg:pb-[30px] lg:box-border md:w-[200px] md:h-[150px] md:items-center md:justify-end md:pr-10 md:pb-0 md:box-border mq1700:pb-10 mq1700:box-border mq1536:h-[220px] mq1536:pb-[25px] mq1536:box-border mq1380:w-[300px] mq1380:h-[220px] mq1380:pb-[25px] mq1380:box-border mq1280:w-[250px] mq1280:h-[200px] mq1280:pb-[30px] mq1280:box-border mq1012:w-[220px] mq1012:h-[180px] mq1012:pr-10 mq1012:pb-[30px] mq1012:box-border mq840:w-[180px] mq840:h-[150px]">
                <p className="m-0 self-stretch relative mix-blend-overlay leading-[1.2] lg:text-lg md:text-xs mq1380:text-base mq1280:text-sm mq1012:text-xs mq840:text-xs">
                  We're committed to driving growth for your business. Our
                  custom websites are designed to not only look great, but also
                  to drive results and help your business re ach new heights
                </p>
              </div>
              <div className="w-[311px] h-[300px] flex flex-col pt-0 pb-[30px] pr-0 pl-20 box-border items-start justify-end absolute left-[0] bottom-[0] z-[4] lg:h-[230px] lg:flex-col lg:items-start lg:justify-end lg:pl-[60px] lg:pb-5 lg:box-border md:items-start md:justify-end md:pl-10 md:pb-[25px] md:box-border mq1536:pb-5 mq1536:box-border mq1380:h-[220px] mq1280:h-[200px] mq1012:h-[180px] mq840:h-[150px]">
                <div className="flex flex-row items-center justify-start gap-[16px] lg:flex-row">
                  <p className="m-0 relative mix-blend-overlay lg:text-17xl md:text-5xl">
                    03
                  </p>
                  <p className="m-0 relative font-light mix-blend-overlay lg:text-17xl md:text-5xl">
                    Growth
                  </p>
                </div>
              </div>
            </div>
          </div>
          <img
            className="absolute my-0 mx-[!important] h-[66.24%] w-[41.28%] top-[11.1%] right-[26.98%] bottom-[22.66%] left-[31.74%] max-w-full overflow-hidden max-h-full mt-[-20px] z-[2] md:mt-[-10px]"
            alt=""
            src="/bears.svg"
          />
        </section>
        <section className="self-stretch flex flex-col items-start justify-start gap-[20px] absolute z-[1] text-left text-17xl text-gray-200 font-thicccboi lg:gap-[20px] mq1280:gap-[18px] mq1012:gap-[15px]">
          <div className="self-stretch flex flex-row py-0 pr-[400px] pl-0 items-start justify-start lg:pr-[300px] lg:box-border md:pr-[250px] md:box-border">
            <img
              className="flex-1 relative rounded-tl-none rounded-tr-xl rounded-br-xl rounded-bl-none max-w-full overflow-hidden h-[300px] object-cover [outline:20px_solid_#ffffff] lg:h-[230px] lg:rounded-none lg:[outline:20px_solid_#ffffff] md:h-[150px] md:[outline:10px_solid_#ffffff] mq1380:h-[220px] mq1280:h-[200px] mq1280:[outline:18px_solid_#ffffff] mq1012:h-[180px] mq1012:[outline:15px_solid_#ffffff] mq840:h-[150px]"
              alt=""
              src="/rectangle-1612@2x.png"
            />
          </div>
          <div className="self-stretch flex flex-row items-start justify-end gap-[20px] lg:gap-[20px] mq1280:gap-[18px]">
            <div className="flex-1 flex flex-row items-start justify-start gap-[20px] md:gap-[0px] mq1280:gap-[18px] mq1012:gap-[20px]">
              <div className="self-stretch flex-1 bg-white flex flex-col py-0 pr-5 pl-20 items-start justify-start gap-[32px] lg:gap-[28px] lg:pl-[60px] lg:pr-5 lg:box-border md:flex-1 md:gap-[10px] md:pl-10 md:pr-2.5 md:box-border mq1380:items-start mq1380:justify-start mq1380:pr-[15px] mq1380:box-border mq1280:gap-[20px] mq1280:items-start mq1280:justify-start mq1280:pr-0 mq1280:box-border mq1012:gap-[15px] mq960:pr-2.5 mq960:box-border">
                <h1 className="m-0 self-stretch relative text-[inherit] font-bold font-inherit leading-[1.2] lg:text-5xl md:text-xl">
                  Elevating brands with Inspiring Websites That Convert
                </h1>
                <p className="m-0 self-stretch relative text-3xl text-darkslategray-100 leading-[1.2] lg:text-lg md:text-sm mq1380:text-base mq1280:text-sm mq1012:text-xs">{`We strive for excellence in everything we do, from crafting custom graphics & websites that drive results, to providing exceptional customer service, our team goes above and beyond to exceed your expectations`}</p>
                <button
                  className="cursor-pointer [border:none] py-[18px] px-[26px] bg-gray-300 self-stretch rounded-smi overflow-hidden flex flex-row items-center justify-center lg:pl-6 lg:pr-6 lg:box-border md:pl-5 md:pr-5 md:box-border"
                  onClick={onFrameButtonClick}
                >
                  <h1 className="m-0 relative text-3xl font-bold font-thicccboi text-white text-left lg:text-lg md:text-sm">
                    Let’s Talk
                  </h1>
                </button>
              </div>
              <img
                className="flex-1 rounded-xl max-w-full overflow-hidden h-[620px] object-cover [outline:_20px_solid_#ffffff] lg:h-[480px] lg:items-start lg:justify-start lg:[outline:20px_solid_#ffffff] lg:rounded-[14px] md:h-[310px] md:[outline:10px_solid_#ffffff] md:rounded-3xs mq1380:h-[460px] mq1280:h-[418px] mq1280:[outline:_18px_solid_#ffffff] mq1280:rounded-xl mq1012:h-[375px] mq1012:[outline:_15px_solid_#ffffff] mq1012:rounded-xl mq840:h-[315px]"
                alt=""
                src="/frame-741@2x.png"
              />
            </div>
            <div className="flex-1 h-[565px] flex flex-col items-center justify-start gap-[20px] lg:h-[480px] lg:gap-[20px] md:h-[310px] mq1380:h-[460px] mq1280:h-[418px] mq1280:gap-[18px] mq1012:h-[375px] mq1012:gap-[15px] mq840:h-80">
              <img
                className="self-stretch relative rounded-tl-[21px] rounded-tr-none rounded-br-none rounded-bl-xl max-w-full overflow-hidden h-[300px] shrink-0 object-cover [outline:20px_solid_#ffffff] lg:h-[230px] lg:[outline:20px_solid_#ffffff] lg:rounded-tl-[14px] lg:rounded-tr-[px] lg:rounded-br-none lg:rounded-bl-[px] md:h-[150px] md:[outline:10px_solid_#ffffff] md:rounded-tl-[10px] md:rounded-tr-none md:rounded-br-none md:rounded-bl-[10px] mq1380:h-[220px] mq1280:h-[200px] mq1280:[outline:18px_solid_#ffffff] mq1012:h-[180px] mq1012:[outline:15px_solid_#ffffff] mq840:h-[150px]"
                alt=""
                src="/rectangle-191@2x.png"
              />
              <img
                className="self-stretch relative rounded-tl-3xs rounded-tr-none rounded-br-none rounded-bl-3xs max-w-full overflow-hidden h-[300px] shrink-0 object-cover [outline:20px_solid_#ffffff] lg:h-[230px] lg:[outline:20px_solid_#ffffff] lg:rounded-tl-[14px] lg:rounded-tr-none lg:rounded-br-none lg:rounded-bl-[14px] md:h-[150px] md:[outline:10px_solid_#ffffff] mq1380:h-[220px] mq1280:h-[200px] mq1280:[outline:18px_solid_#ffffff] mq1280:rounded-tl-3xs mq1280:rounded-tr-none mq1280:rounded-br-none mq1280:rounded-bl-3xs mq1012:h-[180px] mq1012:[outline:15px_solid_#ffffff] mq1012:rounded-tl-3xs mq1012:rounded-tr-none mq1012:rounded-br-none mq1012:rounded-bl-3xs mq840:h-[150px]"
                alt=""
                src="/rectangle-201@2x.png"
              />
            </div>
          </div>
        </section>
      </nav>
      <div className="self-stretch bg-white hidden flex-row items-start justify-center text-9xl md:hidden sm:flex sm:self-stretch sm:w-auto mq800:flex">
        <div className="flex-1 bg-white overflow-hidden flex flex-col py-[17px] px-0 items-center justify-start gap-[26px]">
          <div className="self-stretch flex flex-col items-center justify-start gap-[32px] text-gray-200 sm:pl-2.5 sm:pr-0 sm:box-border">
            <div className="flex flex-col items-start justify-start gap-[16px]">
              <b className="relative inline-block w-80 sm:text-left">
                Elevating brands with Inspiring Websites that Convert
              </b>
              <div className="w-80 flex flex-row items-center justify-start text-[17px] text-darkslategray-100">
                <div className="flex-1 relative">{`We strive for excellence in everything we do, from crafting custom graphics & websites that drive results, to providing exceptional customer service, our team goes above and beyond to exceed your expectations`}</div>
              </div>
            </div>
            <button
              className="cursor-pointer [border:none] py-3 px-6 bg-gray-300 rounded-xl w-80 overflow-hidden flex flex-row box-border items-center justify-center"
              onClick={onFrameButton1Click}
            >
              <b className="relative text-base font-thicccboi text-white text-left">
                Let’s Talk
              </b>
            </button>
          </div>
          <div className="self-stretch flex flex-col py-0 pr-5 pl-0 items-start justify-start sm:self-stretch sm:w-auto">
            <div className="self-stretch rounded-tl-none rounded-tr-mini rounded-br-mini rounded-bl-none bg-skyblue-100 h-[120px] overflow-hidden shrink-0 flex flex-row py-0 pr-0 pl-5 box-border items-center justify-between sm:self-stretch sm:w-auto sm:h-[110px]">
              <div className="w-[136px] flex flex-row items-center justify-between">
                <div className="relative font-semibold mix-blend-overlay">
                  01
                </div>
                <div className="relative font-medium mix-blend-overlay">
                  Speed
                </div>
              </div>
              <img
                className="relative w-[155.98px] h-[120px] overflow-hidden shrink-0 sm:h-[110px] sm:mr-[-10px]"
                alt=""
                src="/n-1.svg"
              />
            </div>
          </div>
          <div className="self-stretch flex flex-col py-0 pr-0 pl-5 items-start justify-end sm:self-stretch sm:w-auto">
            <div className="self-stretch rounded-tl-mini rounded-tr-none rounded-br-none rounded-bl-mini bg-sandybrown-100 overflow-hidden flex flex-row py-0 pr-5 pl-0 items-center justify-between sm:self-stretch sm:w-auto sm:h-[110px]">
              <img
                className="relative w-[170.1px] h-[110px] overflow-hidden shrink-0 sm:h-[110px] sm:ml-[-10px]"
                alt=""
                src="/bearr-1.svg"
              />
              <div className="flex flex-row items-center justify-start gap-[16px]">
                <div className="relative font-semibold mix-blend-overlay">
                  02
                </div>
                <div className="relative font-medium mix-blend-overlay">
                  Growth
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col py-0 pr-5 pl-0 items-start justify-start text-white sm:self-stretch sm:w-auto">
            <div className="self-stretch rounded-tl-none rounded-tr-mini rounded-br-mini rounded-bl-none bg-teal-300 overflow-hidden flex flex-row py-0 pr-0 pl-5 items-center justify-between sm:self-stretch sm:w-auto sm:h-[110px]">
              <div className="flex flex-row items-center justify-start gap-[16px]">
                <div className="relative font-semibold mix-blend-overlay">
                  03
                </div>
                <div className="relative font-medium mix-blend-overlay">
                  Creativity
                </div>
              </div>
              <img
                className="relative w-[110px] h-[110px] overflow-hidden shrink-0"
                alt=""
                src="/m-n-2-1.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch bg-white flex flex-col  px-0 items-start justify-start lg:pt-5 lg:pb-5 lg:box-border md:pt-2.5 md:pb-2.5 md:box-border  sm:box-border">
        <div className="self-stretch relative text-white text-5xl flex bg-salmon-100 h-14 overflow-hidden shrink-0 lg:h-[50px] md:h-10 sm:h-[35px]">
          <div className="relative flex ">
            <div className="sm:pt-0 md:pt-1.5 lg:pt-1.5 animate-marquee whitespace-nowrap">
              <span className=" mx-4"></span>
              Custom Illustrations & Graphics ⠀★
              <span className="mx-4 ">Website Development ⠀★</span>
              <span className="mx-4 ">UI/UX Design ⠀★</span>
              <span className="mx-4 ">Wordpress ⠀★</span>
              <span className="mx-4 ">SEO ⠀★</span>
              <span className="mx-4 ">Growth ⠀★</span>
            </div>
            <div className="sm:pt-0 md:pt-1.5 lg:pt-1.5 absolute animate-marquee2 whitespace-nowrap">
              <span className="mx-4"></span>
              Custom Illustrations & Graphics ⠀★
              <span className="mx-4">Website Development ⠀★</span>
              <span className="mx-4">UI/UX Design ⠀★</span>
              <span className="mx-4">Wordpress ⠀★</span>
              <span className="mx-4">SEO ⠀★</span>
              <span className="mx-4">Growth ⠀★</span>
            </div>
          </div>
        </div>
      </div>
      <div
        className="self-stretch bg-white flex flex-col items-start justify-start relative text-center text-53xl text-darkslategray-200"
        data-scroll-to="servicesSectionContainer"
      >
        <img
          className="absolute w-[137.02px] h-[137.02px] z-[2] right-[50%] top-[200px] lg:w-[100px] lg:h-[100px] md:w-[90px] md:h-[90px] sm:absolute sm:z-[2] sm:right-[10px] sm:top-[50%] mq1280:w-[90px] mq1280:h-[90px] mq800:absolute mq800:z-[2] mq800:right-[50%] mq800:top-[50%] mq960:w-10 mq960:h-10"
          alt=""
          src="/bubble-1.svg"
        />
        <img
          className="absolute w-[92.01px] h-[92.01px] z-[2] right-[5%] top-[10%] sm:absolute sm:z-[2] sm:right-[10px] sm:top-[10%] mq1280:w-[52px]"
          alt=""
          src="/bubble-11.svg"
        />
        <img
          className="absolute w-[62.01px] h-[62.01px] z-[2] right-[15%] top-[30%] lg:absolute lg:z-[2] lg:right-[15%] lg:top-[300px] sm:absolute sm:z-[2] sm:right-[10px] sm:top-[300px] mq1280:w-8 mq1280:h-8 mq800:absolute mq800:z-[2] mq800:right-[15%] mq800:top-[40%]"
          alt=""
          src="/bubble-12.svg"
        />
        <img
          className="absolute w-[110.01px] h-[110.01px] z-[2] left-[15%] top-[30%] sm:absolute sm:z-[2] sm:left-[20px] sm:top-[30%] mq1280:w-[90px] mq1280:h-[90px] mq800:absolute mq800:z-[2] mq800:left-[15%] mq800:top-[50%] mq960:w-[65px] mq960:h-[65px]"
          alt=""
          src="/bubble-13.svg"
        />
        <img
          className="absolute w-[169.02px] h-[169.02px] z-[2] right-[10px] bottom-[60px] mq1280:w-[120px] mq1280:h-[120px] mq960:w-[90px] mq960:h-[90px]"
          alt=""
          src="/bubble-14.svg"
        />
        <img
          className="absolute w-[107.01px] h-[107.01px] z-[2] right-[25%] sm:absolute sm:z-[2] sm:right-[20px] sm:top-[50%] mq1280:w-20 mq1280:h-20 mq800:absolute mq800:z-[2] mq800:right-[30%]"
          alt=""
          src="/bubble-15.svg"
        />
        <img
          className="absolute w-[55.01px] h-[55.01px] z-[2] left-[15%] sm:absolute sm:z-[2] sm:left-[20px] mq1280:w-10 mq1280:h-10 mq960:w-[35px] mq960:h-[35px]"
          alt=""
          src="/bubble-16.svg"
        />
        <img
          className="absolute w-[110.01px] h-[110.01px] z-[2] left-[10px] bottom-[200px] mq1280:w-[90px] mq1280:h-[90px] mq960:w-[60px] mq960:h-[60px]"
          alt=""
          src="/bubble-13.svg"
        />
        <img
          className="absolute w-[85.01px] h-[85.01px] z-[11] left-[10px] top-[20%] mq1280:w-[70px] mq1280:h-[70px] mq960:w-[55px] mq960:h-[55px]"
          alt=""
          src="/bubble-17.svg"
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
              src="/extra3.svg"
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
                  onClick={onFrameButton2Click}
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
              src="/layer-8.svg"
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
                  onClick={onFrameButton3Click}
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
              src="/extra31.svg"
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
                  onClick={onFrameButton4Click}
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
      <div className="self-stretch bg-white overflow-hidden flex flex-col py-[95px] px-[134px] items-center justify-center gap-[50px] text-lg text-darkslategray-200 lg:pt-[55px] lg:pb-[75px] lg:box-border md:gap-[20px] md:pt-2.5 md:pb-10 md:box-border sm:pt-0 sm:box-border mq1280:pt-10 mq1280:box-border">
        <div className="flex flex-row items-center justify-start gap-[50px] md:gap-[20px] sm:self-stretch sm:w-auto sm:h-auto mq22:flex-col">
          <div className="rounded-xl bg-aliceblue flex flex-row py-5 px-10 items-center justify-start gap-[20px] md:py-2.5 md:px-[30px] md:box-border sm:flex-1 sm:h-auto sm:gap-[5px] sm:py-5 sm:px-2.5 sm:box-border">
            <img
              className="relative w-[213px] h-[213px] sm:w-[100px] sm:h-[100px] mq1012:w-[150px]"
              alt=""
              src="/group-92.svg"
            />
            <div className="flex flex-row p-2.5 items-start justify-start sm:flex-1 sm:h-auto">
              <div className="relative leading-[108.3%] font-medium inline-block w-[275px] shrink-0 lg:text-lg sm:text-left sm:flex-1 sm:self-stretch sm:h-auto mq1380:text-base mq1280:text-sm mq1280:w-40 mq1012:text-xs">
                Whether it's WordPress or fully hardcoded solutions, we deliver
                tailored websites that showcase your unique brand and meet your
                specific requirements.
              </div>
            </div>
          </div>
          <div className="rounded-xl bg-blanchedalmond flex flex-row py-5 px-10 items-center justify-start gap-[20px] md:py-2.5 md:px-[30px] md:box-border sm:flex-1 sm:h-auto sm:gap-[5px] sm:py-5 sm:px-2.5 sm:box-border">
            <div className="flex flex-row p-2.5 items-start justify-start sm:flex-1 sm:h-auto">
              <div className="relative leading-[108.3%] font-medium inline-block w-[275px] shrink-0 lg:text-lg sm:text-left sm:flex-1 sm:self-stretch sm:h-auto mq1380:text-base mq1280:text-sm mq1280:w-40 mq1012:text-xs">
                Create unique graphics and illustrations that reflect your brand
                and create a memorable identity that capture the essence of your
                brand, helping you stand out from others in your industry.
              </div>
            </div>
            <img
              className="relative w-[213px] h-[213px] sm:w-[100px] sm:h-[100px] mq1012:w-[150px]"
              alt=""
              src="/group-93.svg"
            />
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[50px] md:gap-[20px] mq22:flex-col">
          <div className="rounded-xl bg-powderblue flex flex-row py-5 px-10 items-center justify-start gap-[20px] md:py-2.5 md:px-[30px] md:box-border sm:gap-[5px] sm:py-5 sm:px-2.5 sm:box-border">
            <img
              className="relative w-[213px] h-[213px] sm:w-[100px] sm:h-[100px] mq1012:w-[150px]"
              alt=""
              src="/group-94.svg"
            />
            <div className="flex flex-row p-2.5 items-start justify-start sm:flex-1 sm:h-auto">
              <div className="relative leading-[108.3%] font-medium inline-block w-[275px] shrink-0 lg:text-lg sm:text-left sm:flex-1 sm:self-stretch sm:h-auto mq1380:text-base mq1280:text-sm mq1280:w-40 mq1012:text-xs">
                We implements effective SEO strategies to improve your website's
                search engine rankings, drive organic traffic, and enhance your
                online presence.
              </div>
            </div>
          </div>
          <div className="rounded-xl bg-mistyrose flex flex-row py-5 px-10 items-center justify-start gap-[20px] md:py-2.5 md:px-[30px] md:box-border sm:gap-[5px] sm:py-5 sm:px-2.5 sm:box-border">
            <div className="flex flex-row p-2.5 items-start justify-start sm:flex-1 sm:h-auto">
              <div className="relative leading-[108.3%] font-medium inline-block w-[275px] shrink-0 lg:text-lg sm:text-left sm:flex-1 sm:self-stretch sm:h-auto mq1380:text-base mq1280:text-sm mq1280:w-40 mq1012:text-xs">
                We ensure a seamless and successful website launch, utilizing
                our expertise to optimize performance, enhance user experience,
                and maximize visibility.
              </div>
            </div>
            <img
              className="relative w-[213px] h-[213px] sm:w-[100px] sm:h-[100px] mq1012:w-[150px]"
              alt=""
              src="/group-95.svg"
            />
          </div>
        </div>
      </div>
      <div
        className="self-stretch bg-white overflow-hidden flex flex-col items-center justify-start gap-[20px] text-white lg:h-[1000px] md:h-[900px] sm:self-stretch sm:w-auto sm:h-[1100px] mq1012:h-auto"
        id="process"
        data-scroll-to="processSection"
      >
        <div className="self-stretch bg-white flex flex-col py-[30px] px-0 items-start justify-start text-center text-53xl text-darkslategray-200 lg:gap-[50px]">
          <div className="self-stretch flex flex-row p-2.5 items-start justify-center">
            <p className="m-0 relative leading-[108.3%] uppercase font-bold lg:text-37xl md:text-17xl">
              The Process
            </p>
          </div>
        </div>
        <div className="self-stretch flex flex-row py-0 px-20 items-start justify-center gap-[40px] md:flex-col md:gap-[20px] sm:flex-col sm:gap-[10px] mq800:pl-10 mq800:pr-10 mq800:box-border">
          <div className="flex-1 rounded-xl bg-teal-200 h-[220px] flex flex-col py-[18px] px-[35px] box-border items-center justify-center lg:h-[200px] md:flex-[unset] md:self-stretch sm:flex-[unset] sm:h-[200px] sm:flex-col sm:gap-[0px] sm:self-stretch mq350small:h-60 mq350small:gap-[0px] mq350small:pt-[30px] mq350small:pb-[30px] mq350small:box-border mq1280:h-[180px] mq1012:h-40">
            <div className="flex flex-row items-center justify-center gap-[24px] sm:self-stretch sm:w-auto sm:flex-1 sm:flex-col sm:gap-[5px] mq1280:self-stretch mq1280:w-auto">
              <div className="flex flex-col p-2.5 items-start justify-start sm:flex-1 sm:h-auto">
                <b className="relative leading-[108.3%] uppercase lg:text-11xl md:text-5xl sm:text-center sm:self-stretch sm:w-auto sm:flex-1">
                  Research
                </b>
              </div>
              <div className="flex flex-row p-2.5 items-start justify-start text-3xl sm:w-auto sm:self-stretch sm:h-auto">
                <div className="relative leading-[108.3%] font-medium inline-block w-[275px] shrink-0 lg:text-lg sm:text-center sm:flex-1 sm:self-stretch sm:h-auto mq1380:text-base mq1280:text-sm mq1280:w-40 mq1012:text-xs">
                  We prioritize understanding your business needs to create a
                  customized plan that exceeds your expectations.
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 rounded-xl bg-sandybrown-200 h-[220px] flex flex-col py-[18px] px-[35px] box-border items-center justify-center lg:h-[200px] md:flex-[unset] md:self-stretch sm:flex-[unset] sm:flex-col sm:self-stretch mq350small:h-60 mq1280:h-[180px] mq1012:h-40">
            <div className="flex flex-row items-center justify-center gap-[24px] sm:self-stretch sm:w-auto sm:flex-1 sm:flex-col sm:gap-[5px] mq1280:self-stretch mq1280:w-auto">
              <div className="flex flex-col p-2.5 items-start justify-start sm:flex-1">
                <b className="relative leading-[108.3%] uppercase lg:text-11xl md:text-5xl sm:text-center sm:self-stretch sm:w-auto">
                  Design
                </b>
              </div>
              <div className="flex flex-row p-2.5 items-start justify-start text-lg sm:w-auto sm:self-stretch sm:h-auto">
                <div className="relative leading-[108.3%] font-medium inline-block w-[275px] shrink-0 lg:text-lg sm:text-center sm:flex-1 sm:self-stretch sm:h-auto mq1380:text-base mq1280:text-sm mq1280:w-40 mq1012:text-xs">
                  Our team of experienced designers conducts thorough research
                  and delivers a visually appealing, user-friendly design that
                  aligns with your brand identity
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className="self-stretch max-w-full overflow-hidden max-h-full object-cover lg:h-auto"
          alt=""
          src="/bas-1@2x.png"
        />
        <div className="self-stretch flex flex-row py-0 px-20 items-start justify-center gap-[40px] md:flex-col md:gap-[20px] sm:h-auto sm:flex-col sm:gap-[10px] mq800:pl-10 mq800:pr-10 mq800:box-border">
          <div className="flex-1 rounded-xl bg-salmon-200 h-[220px] flex flex-col py-[18px] px-[35px] box-border items-center justify-center lg:h-[200px] md:flex-[unset] md:self-stretch sm:flex-[unset] sm:h-auto sm:flex-col sm:self-stretch mq350small:h-60 mq1280:h-[180px] mq1012:h-40">
            <div className="flex flex-row items-center justify-center gap-[24px] sm:self-stretch sm:w-auto sm:flex-1 sm:flex-col sm:gap-[5px] mq1280:self-stretch mq1280:w-auto">
              <div className="flex flex-col p-2.5 items-start justify-start sm:flex-1">
                <b className="relative leading-[108.3%] uppercase lg:text-11xl md:text-7xl sm:text-center sm:self-stretch sm:w-auto">
                  <p className="m-0">{`Checks & `}</p>
                  <p className="m-0">feedback</p>
                </b>
              </div>
              <div className="flex flex-row p-2.5 items-start justify-start text-lg sm:w-auto sm:self-stretch sm:h-auto">
                <div className="relative leading-[108.3%] font-medium inline-block w-[275px] shrink-0 lg:text-lg sm:text-center sm:flex-1 sm:self-stretch sm:h-auto mq1380:text-base mq1280:text-sm mq1280:w-40 mq1012:text-xs">
                  Final checks and testing is done along with your feedbacks and
                  revisions suggestions before the launch
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 rounded-xl bg-skyblue-200 h-[220px] flex flex-col py-[18px] px-[35px] box-border items-center justify-center lg:h-[200px] md:flex-[unset] md:self-stretch sm:flex-[unset] sm:h-auto sm:flex-col sm:self-stretch mq350small:h-[250px] mq350small:gap-[0px] mq350small:pt-[30px] mq350small:pb-[18px] mq350small:box-border mq1280:h-[180px] mq1012:h-40">
            <div className="flex flex-row items-center justify-center gap-[24px] sm:self-stretch sm:w-auto sm:h-auto sm:flex-col sm:gap-[5px] mq1280:self-stretch mq1280:w-auto">
              <div className="flex flex-col p-2.5 items-start justify-start sm:flex-1">
                <b className="relative leading-[108.3%] uppercase lg:text-11xl md:text-7xl sm:text-center sm:self-stretch sm:w-auto">
                  <p className="m-0">{`Develop &`}</p>
                  <p className="m-0">design</p>
                </b>
              </div>
              <div className="flex flex-row p-2.5 items-start justify-start text-lg sm:w-auto sm:self-stretch sm:h-auto">
                <div className="relative leading-[108.3%] font-medium inline-block w-[275px] shrink-0 lg:text-lg sm:text-center sm:flex-1 sm:self-stretch sm:h-auto mq1380:text-base mq1280:text-sm mq1280:w-40 mq1012:text-xs">
                  We use the latest technology and best practices to develop
                  your website, optimizing it for fast loading, responsiveness,
                  and SEO
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="self-stretch bg-white flex flex-col py-[35px] px-0 items-center justify-start gap-[78px] text-center text-white lg:gap-[68px] lg:items-center lg:justify-start lg:pl-0 lg:pr-0 lg:box-border md:gap-[58px] sm:self-stretch sm:w-auto sm:pl-5 sm:pr-5 sm:box-border"
        data-scroll-to="portfolioSection"
      >
        <div className="self-stretch bg-white flex flex-col py-[30px] px-0 items-start justify-start text-53xl text-darkslategray-200 lg:gap-[50px]">
          <div className="self-stretch flex flex-row p-2.5 items-start justify-center">
            <p className="m-0 relative leading-[108.3%] uppercase font-bold lg:text-37xl md:text-17xl">
              Our Portfolio
            </p>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-center gap-[78px] lg:gap-[40px] md:gap-[30px] sm:self-stretch sm:w-auto sm:flex-col sm:gap-[50px] sm:items-center sm:justify-center sm:pl-0 sm:pr-0 sm:box-border mq800:flex-col mq800:gap-[50px] mq800:items-center mq800:justify-center">
          <div
            className="w-[495px] flex flex-col items-center justify-start cursor-pointer lg:w-[450px] md:w-[400px] sm:w-[300px] mq1536:w-[430px] mq1380:w-[400px] mq1280:w-[350px] mq1012:w-[300px]"
            onClick={onFrameContainer79Click}
          >
            <div className="self-stretch rounded-t-xl rounded-b-none h-[300px] overflow-hidden shrink-0 flex flex-col py-[21px] px-0 box-border items-end justify-start bg-[url(/frame-544@3x.png)] bg-cover bg-no-repeat bg-[top] border-[4px] border-solid border-black lg:w-[430px] lg:h-[280px] lg:pl-0 lg:pr-0 lg:box-border md:w-[400px] md:h-[250px] sm:w-[350px] mq1380:w-[400px] mq1380:h-60 mq1280:w-[350px] mq1280:h-[220px] mq1012:w-[300px] mq1012:h-[190px]">
              <div className="rounded-tl-xl rounded-tr-none rounded-br-none rounded-bl-xl bg-sandybrown-100 shadow-[0px_0px_10px_#fea94f] w-[161px] overflow-hidden flex flex-col py-1.5 px-3.5 box-border items-start justify-start lg:w-[140px] md:w-[120px] md:py-1 md:pr-2.5 md:pl-3 md:box-border">
                <div className="self-stretch flex flex-row items-start justify-between">
                  <img
                    className="relative rounded-12xs-5 w-[17px] h-[19px] lg:w-3.5 md:w-3"
                    alt=""
                    src="/star-11.svg"
                  />
                  <img
                    className="relative rounded-12xs-5 w-[17px] h-[19px] lg:w-3.5 md:w-3"
                    alt=""
                    src="/star-11.svg"
                  />
                  <img
                    className="relative rounded-12xs-5 w-[17px] h-[19px] lg:w-3.5 md:w-3"
                    alt=""
                    src="/star-11.svg"
                  />
                  <img
                    className="relative rounded-12xs-5 w-[17px] h-[19px] lg:w-3.5 md:w-3"
                    alt=""
                    src="/star-11.svg"
                  />
                  <img
                    className="relative rounded-12xs-5 w-[17px] h-[19px] lg:w-3.5 md:w-3"
                    alt=""
                    src="/star-11.svg"
                  />
                </div>
              </div>
            </div>
            <main className="self-stretch rounded-t-none rounded-b-xl bg-navajowhite flex flex-col py-0 px-[41px] items-start justify-start text-center text-17xl text-white font-thicccboi">
              <div className="self-stretch rounded-xl bg-sandybrown-100 shadow-[0px_4px_9px_#fea94f] overflow-hidden flex flex-col py-[50px] px-20 items-center justify-center mt-[-50px] mb-[-20px] lg:pl-10 lg:pr-10 lg:box-border lg:mt-[-40px] lg:mb-[-20px] md:pt-[50px] md:pb-[50px] md:box-border md:mt-[-30px] md:mb-[-20px] sm:py-[30px] sm:pr-10 sm:pl-[30px] sm:box-border mq1012:py-[30px] mq1012:px-2.5 mq1012:box-border">
                <div className="self-stretch flex flex-row p-2.5 items-center justify-center">
                  <p className="m-0 flex-1 relative font-bold lg:text-11xl md:text-5xl mq1536:text-11xl mq1380:text-11xl mq1280:text-11xl mq960:text-5xl">
                    The Dou
                  </p>
                </div>
                <div className="flex flex-row p-2.5 items-center justify-center text-3xl">
                  <p className="m-0 relative font-semibold inline-block w-[233px] shrink-0 leading-[1.2] lg:text-lg md:text-lg mq1380:text-base mq1380:leading-[1.2] mq1280:text-sm mq1012:text-xs">
                    <span className="block">We made Custom</span>
                    <span className="block">{`Themed full stack `}</span>
                    <span className="block">{`E-Commerce `}</span>
                    <span className="block">Website for a bakery</span>
                    <span className="block">{`company `}</span>
                    <span className="block">{` `}</span>
                  </p>
                </div>
              </div>
            </main>
          </div>
          <div
            className="w-[495px] flex flex-col items-center justify-start cursor-pointer lg:w-[450px] md:w-[400px] sm:w-[300px] mq1536:w-[430px] mq1380:w-[400px] mq1280:w-[350px] mq1012:w-[300px]"
            onClick={onFrameContainer86Click}
          >
            <div className="self-stretch rounded-t-xl rounded-b-none h-[300px] overflow-hidden shrink-0 flex flex-col pt-[21px] px-0 pb-[3px] box-border items-end justify-start bg-[url(/frame-5411@3x.png)] bg-cover bg-no-repeat bg-[top] border-[4px] border-solid border-black lg:w-[430px] lg:h-[280px] lg:pl-0 lg:pr-0 lg:box-border md:w-[400px] md:h-[250px] sm:w-[350px] mq1380:w-[400px] mq1380:h-60 mq1280:w-[350px] mq1280:h-[220px] mq1012:w-[300px] mq1012:h-[190px]">
              <div className="rounded-tl-xl rounded-tr-none rounded-br-none rounded-bl-xl bg-skyblue-100 shadow-[0px_0px_10px_#88d3f5] w-[161px] overflow-hidden flex flex-col py-1.5 px-3.5 box-border items-start justify-start lg:w-[140px] md:w-[120px] md:py-1 md:pr-2.5 md:pl-3 md:box-border">
                <div className="self-stretch flex flex-row items-start justify-between">
                  <img
                    className="relative rounded-12xs-5 w-[17px] h-[19px] lg:w-3.5 md:w-3"
                    alt=""
                    src="/star-11.svg"
                  />
                  <img
                    className="relative rounded-12xs-5 w-[17px] h-[19px] lg:w-3.5 md:w-3"
                    alt=""
                    src="/star-11.svg"
                  />
                  <img
                    className="relative rounded-12xs-5 w-[17px] h-[19px] lg:w-3.5 md:w-3"
                    alt=""
                    src="/star-11.svg"
                  />
                  <img
                    className="relative rounded-12xs-5 w-[17px] h-[19px] lg:w-3.5 md:w-3"
                    alt=""
                    src="/star-11.svg"
                  />
                  <img
                    className="relative rounded-12xs-5 w-[17px] h-[19px] lg:w-3.5 md:w-3"
                    alt=""
                    src="/star-11.svg"
                  />
                </div>
              </div>
            </div>
            <div className="self-stretch rounded-t-none rounded-b-xl bg-lightblue flex flex-col py-0 px-[41px] items-start justify-start">
              <div className="self-stretch rounded-xl bg-skyblue-100 shadow-[0px_4px_9px_#88d3f5] overflow-hidden flex flex-col py-[50px] px-20 items-center justify-center mt-[-50px] mb-[-20px] lg:pl-10 lg:pr-10 lg:box-border lg:mt-[-40px] lg:mb-[-20px] md:pt-[50px] md:pb-[50px] md:box-border md:mt-[-30px] md:mb-[-20px] sm:py-[30px] sm:pr-10 sm:pl-[30px] sm:box-border mq1012:py-[30px] mq1012:px-2.5 mq1012:box-border">
                <div className="self-stretch flex flex-row p-2.5 items-center justify-center">
                  <p className="m-0 flex-1 relative font-bold lg:text-11xl md:text-5xl mq1536:text-11xl mq1380:text-11xl mq1280:text-11xl mq960:text-5xl">
                    BluePriint
                  </p>
                </div>
                <div className="self-stretch flex flex-row p-2.5 items-center justify-center text-3xl">
                  <p className="m-0 flex-1 relative font-semibold leading-[1.2] lg:text-lg md:text-lg mq1380:text-base mq1380:leading-[1.2] mq1280:text-sm mq1012:text-xs">
                    <span className="block">We did complete</span>
                    <span className="block">{`Branding & Custom`}</span>
                    <span className="block">handmade Graphics</span>
                    <span className="block">makeover for the</span>
                    <span className="block">{`Portfolio Website `}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-center gap-[78px] lg:gap-[40px] md:gap-[30px] sm:self-stretch sm:w-auto sm:flex-col sm:gap-[50px] sm:items-center sm:justify-center sm:pl-0 sm:pr-0 sm:box-border mq800:flex-col mq800:gap-[50px] mq800:items-center mq800:justify-center">
          <div
            className="w-[495px] flex flex-col items-center justify-start cursor-pointer lg:w-[450px] md:w-[400px] sm:w-[300px] mq1536:w-[430px] mq1380:w-[400px] mq1280:w-[350px] mq1012:w-[300px]"
            onClick={onFrameContainer94Click}
          >
            <div className="self-stretch rounded-t-xl rounded-b-none h-[300px] overflow-hidden shrink-0 flex flex-col py-[21px] px-0 box-border items-end justify-start bg-[url(/frame-5421@3x.png)] bg-cover bg-no-repeat bg-[top] border-[4px] border-solid border-black lg:w-[430px] lg:h-[280px] lg:pl-0 lg:pr-0 lg:box-border md:w-[400px] md:h-[250px] sm:w-[350px] mq1380:w-[400px] mq1380:h-60 mq1280:w-[350px] mq1280:h-[220px] mq1012:w-[300px] mq1012:h-[190px]">
              <div className="rounded-tl-xl rounded-tr-none rounded-br-none rounded-bl-xl bg-teal-100 shadow-[0px_0px_10px_#0b8082] w-[161px] overflow-hidden flex flex-col py-1.5 px-3.5 box-border items-start justify-start lg:w-[140px] md:w-[120px] md:py-1 md:pr-2.5 md:pl-3 md:box-border">
                <div className="self-stretch flex flex-row items-start justify-between">
                  <img
                    className="relative rounded-12xs-5 w-[17px] h-[19px] lg:w-3.5 md:w-3"
                    alt=""
                    src="/star-11.svg"
                  />
                  <img
                    className="relative rounded-12xs-5 w-[17px] h-[19px] lg:w-3.5 md:w-3"
                    alt=""
                    src="/star-11.svg"
                  />
                  <img
                    className="relative rounded-12xs-5 w-[17px] h-[19px] lg:w-3.5 md:w-3"
                    alt=""
                    src="/star-11.svg"
                  />
                  <img
                    className="relative rounded-12xs-5 w-[17px] h-[19px] lg:w-3.5 md:w-3"
                    alt=""
                    src="/star-11.svg"
                  />
                  <img
                    className="relative rounded-12xs-5 w-[17px] h-[19px] lg:w-3.5 md:w-3"
                    alt=""
                    src="/star-11.svg"
                  />
                </div>
              </div>
            </div>
            <div className="self-stretch rounded-t-none rounded-b-xl bg-cadetblue flex flex-col py-0 px-[41px] items-start justify-start">
              <div className="self-stretch rounded-xl bg-teal-100 shadow-[0px_4px_9px_#0b8082] overflow-hidden flex flex-col py-[50px] px-20 items-center justify-center mt-[-50px] mb-[-20px] lg:pl-10 lg:pr-10 lg:box-border lg:mt-[-40px] lg:mb-[-20px] md:pt-[50px] md:pb-[50px] md:box-border md:mt-[-30px] md:mb-[-20px] sm:py-[30px] sm:pr-10 sm:pl-[30px] sm:box-border mq1012:py-[30px] mq1012:px-2.5 mq1012:box-border">
                <div className="self-stretch flex flex-row p-2.5 items-center justify-center">
                  <p className="m-0 flex-1 relative font-bold lg:text-11xl md:text-5xl mq1536:text-11xl mq1380:text-11xl mq1280:text-11xl mq960:text-5xl">
                    Goseen
                  </p>
                </div>
                <div className="self-stretch flex flex-row p-2.5 items-center justify-center text-3xl">
                  <p className="m-0 flex-1 relative font-semibold leading-[1.2] lg:text-lg md:text-lg mq1380:text-base mq1380:leading-[1.2] mq1280:text-sm mq1012:text-xs">
                    <span className="block">We made a</span>
                    <span className="block">dynamic web agency</span>
                    <span className="block">website for marketing</span>
                    <span className="block">solutions based in</span>
                    <span className="block">Delhi. Unlock your</span>
                    <span className="block">potential</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="w-[495px] flex flex-col items-center justify-start cursor-pointer lg:w-[450px] md:w-[400px] sm:w-[300px] mq1536:w-[430px] mq1380:w-[400px] mq1280:w-[350px] mq1012:w-[300px]"
            onClick={onFrameContainer101Click}
          >
            <div className="self-stretch rounded-t-xl rounded-b-none h-[300px] overflow-hidden shrink-0 flex flex-col py-[21px] px-0 box-border items-end justify-start bg-[url(/frame-5431@3x.png)] bg-cover bg-no-repeat bg-[top] border-[4px] border-solid border-black lg:w-[430px] lg:h-[280px] lg:pl-0 lg:pr-0 lg:box-border md:w-[400px] md:h-[250px] sm:w-[350px] mq1380:w-[400px] mq1380:h-60 mq1280:w-[350px] mq1280:h-[220px] mq1012:w-[300px] mq1012:h-[190px]">
              <div className="rounded-tl-xl rounded-tr-none rounded-br-none rounded-bl-xl bg-salmon-100 shadow-[0px_0px_10px_#fe715f] w-[161px] overflow-hidden flex flex-col py-1.5 px-3.5 box-border items-start justify-start lg:w-[140px] md:w-[120px] md:py-1 md:pr-2.5 md:pl-3 md:box-border">
                <div className="self-stretch flex flex-row items-start justify-between">
                  <img
                    className="relative rounded-12xs-5 w-[17px] h-[19px] lg:w-3.5 md:w-3"
                    alt=""
                    src="/star-11.svg"
                  />
                  <img
                    className="relative rounded-12xs-5 w-[17px] h-[19px] lg:w-3.5 md:w-3"
                    alt=""
                    src="/star-11.svg"
                  />
                  <img
                    className="relative rounded-12xs-5 w-[17px] h-[19px] lg:w-3.5 md:w-3"
                    alt=""
                    src="/star-11.svg"
                  />
                  <img
                    className="relative rounded-12xs-5 w-[17px] h-[19px] lg:w-3.5 md:w-3"
                    alt=""
                    src="/star-11.svg"
                  />
                  <img
                    className="relative rounded-12xs-5 w-[17px] h-[19px] lg:w-3.5 md:w-3"
                    alt=""
                    src="/star-11.svg"
                  />
                </div>
              </div>
            </div>
            <div className="self-stretch rounded-t-none rounded-b-xl bg-lightpink flex flex-col py-0 px-[41px] items-start justify-start">
              <div className="self-stretch rounded-xl bg-salmon-100 shadow-[0px_4px_9px_#fe715f] overflow-hidden flex flex-col py-[50px] px-20 items-center justify-center mt-[-50px] mb-[-20px] lg:pl-10 lg:pr-10 lg:box-border lg:mt-[-40px] lg:mb-[-20px] md:pt-[50px] md:pb-[50px] md:box-border md:mt-[-30px] md:mb-[-20px] sm:py-[30px] sm:pr-10 sm:pl-[30px] sm:box-border mq1012:py-[30px] mq1012:px-2.5 mq1012:box-border">
                <div className="self-stretch flex flex-row p-2.5 items-center justify-center">
                  <p className="m-0 flex-1 relative font-bold lg:text-11xl md:text-5xl mq1536:text-11xl mq1380:text-11xl mq1280:text-11xl mq960:text-5xl">
                    Dr. Baldev
                  </p>
                </div>
                <div className="self-stretch flex flex-row p-2.5 items-center justify-center text-3xl">
                  <p className="m-0 flex-1 relative font-semibold leading-[1.2] lg:text-lg md:text-lg mq1380:text-base mq1380:leading-[1.2] mq1280:text-sm mq1012:text-xs">
                    <span className="block">We made a website</span>
                    <span className="block">for a distinguished</span>
                    <span className="block">healthcare educator</span>
                    <span className="block">with an influential</span>
                    <span className="block">operations</span>
                    <span className="block">background.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="self-stretch bg-white overflow-hidden flex flex-col pt-[120px] pb-[300px] pr-[199px] pl-[197px] items-start justify-start lg:pb-[250px] lg:box-border md:pl-20 md:pr-20 md:pb-[200px] md:box-border sm:pl-0 sm:pr-0 sm:pb-[110px] sm:box-border mq1280:pl-[100px] mq1280:pr-[100px] mq1280:box-border mq800:pl-[50px] mq800:pr-[50px] mq800:box-border mq480:pl-5 mq480:pr-5 mq480:box-border"
        data-scroll-to="frameContainer"
      >
        <div className="self-stretch rounded-xl shadow-[0px_0px_6px_rgba(0,_0,_0,_0.25)] overflow-hidden flex flex-row items-start justify-start border-[3px] border-solid border-black mq1012:flex-col mq480:box-border mq480:border-[2px] mq480:border-solid mq480:border-black">
          <div className="self-stretch flex-1 overflow-hidden flex flex-col p-2.5 items-center justify-center bg-[url(/frame-2081@3x.png)] bg-cover bg-no-repeat bg-[top] mq1012:flex-[unset] mq1012:self-stretch">
            <div className="rounded-xl bg-gray-600 w-[250px] h-[250px] flex flex-col p-5 box-border items-center justify-center gap-[16px] sm:w-[200px] sm:h-[200px]">
              <img
                className="relative w-[100px] h-[100px] sm:w-[70px] sm:h-[70px]"
                alt=""
                src="/group-5.svg"
              />
              <b className="relative lg:text-11xl">Let’s Talk</b>
            </div>
          </div>
          <form
            className="self-stretch flex-1 overflow-hidden flex flex-col pt-[100px] px-10 pb-[70px] items-center justify-center gap-[20px] lg:pt-[50px] lg:pb-5 lg:box-border md:gap-[15px] md:pt-[50px] md:pb-0 md:box-border sm:gap-[10px] sm:pl-10 sm:pt-0 sm:pb-0 sm:box-border mq1380:pt-[50px] mq1380:pb-[50px] mq1380:box-border mq1280:pb-5 mq1280:box-border mq1012:flex-col mq1012:pl-[50px] mq1012:pr-[50px] mq1012:box-border mq1012:flex-[unset] mq1012:self-stretch mq800:pt-[30px] mq800:pb-[30px] mq800:box-border mq480:gap-[10px] mq480:pt-[30px] mq480:px-[30px] mq480:pb-[5px] mq480:box-border"
            action={"https://fabform.io/f/lSxBPxn"}
            method="post"
            id="contact_form"
          >
            <TextField
              className="[border:none] bg-[transparent] self-stretch"
              color="primary"
              variant="outlined"
              type="text"
              name="Name"
              id="input_name"
              label="Name"
              placeholder="e.g. John Doe"
              size="medium"
              margin="none"
              required
            />
            <TextField
              className="[border:none] bg-[transparent] self-stretch"
              color="primary"
              variant="outlined"
              type="text"
              name="Country"
              id="input_country"
              label="Country"
              placeholder="e.g. United States"
              size="medium"
              margin="none"
              required
            />
            <TextField
              className="[border:none] bg-[transparent] self-stretch"
              color="primary"
              variant="outlined"
              type="email"
              name="Email"
              id="input_email"
              label="Email"
              placeholder="e.g. example@example.com"
              size="medium"
              margin="none"
              required
            />
            <TextField
              className="[border:none] bg-[transparent] self-stretch"
              color="primary"
              variant="outlined"
              type="tel"
              name="Phone"
              id="input_phone"
              label="Phone"
              placeholder="e.g. (555) 123-4567"
              size="medium"
              margin="none"
            />
            <TextField
              className="self-stretch"
              color="primary"
              variant="outlined"
              multiline
              rows={5}
              name="Message"
              id="input_message"
              label="Message"
              placeholder="Tell something about your company and what you are looking for"
              margin="none"
            />
            <button
              className="self-stretch h-10 bg-black mb-4 text-white font-thicccboi rounded"
              name="Submit_buton"
              id="Submit_buton"
              color="secondary"
              onClick={() => alert("Thanks!! We will contact you soon")}
            >
              Submit
            </button>
          </form>
          {/* <form action="https://fabform.io/f/6nyi6xc" method="post">
  <label for="firstName">First Name</label>
  <input name="firstName" type="text" required>
  <label for="lastName">Last Name</label>
  <input name="lastName" type="text" required>
  <label for="email">Email</label>
  <input name="email" type="email" required>
  <button className="button is-link" type="submit">Test</button>
</form> */}
        </div>
      </div>
      <footer className="self-stretch bg-black flex flex-col py-[15px] px-20 items-center justify-center gap-[30px] text-center text-53xl text-white font-thicccboi lg:h-[350px] lg:pl-[60px] lg:pr-[60px] lg:box-border md:h-80 md:pl-10 md:pr-10 md:box-border sm:h-auto sm:pl-5 sm:pr-5 sm:box-border">
        <div className="self-stretch rounded-xl bg-gray-500 h-[300px] overflow-hidden shrink-0 flex flex-row py-[60px] px-[69px] box-border items-center justify-center mt-[-200px] lg:pl-[50px] lg:pr-[50px] lg:box-border md:h-[280px] md:py-[50px] md:px-10 md:box-border sm:h-[200px] sm:py-2.5 sm:px-[30px] sm:box-border sm:mt-[-80px]">
          <b className="flex-1 relative leading-[1.2] lg:text-[52px] md:text-[42px] sm:text-5xl">
            Ready to grow your business ? we welcome you at Third R
          </b>
        </div>
        <div className="self-stretch flex flex-row py-0 px-5 items-center justify-between text-3xl sm:flex sm:flex-col sm:gap-[0px] sm:items-center sm:justify-center">
          <div className="flex flex-col items-start justify-start gap-[10px] text-left text-17xl">
            <div className="self-stretch flex flex-row items-center justify-start gap-[16px]">
              <img
                className="relative w-[70px] h-[70px] sm:w-[70px] sm:h-[70px]"
                alt=""
                src="/group-51.svg"
              />
              <b className="relative lg:text-11xl">Third R</b>
            </div>
            {/* Social Media Footer */}
            <div className="self-stretch flex flex-row items-start justify-between">
              {/* <button className="cursor-pointer [border:none] p-[3px] bg-[transparent] overflow-hidden flex flex-row items-start justify-start">
                <img
                  className="relative w-[30px] h-[30px] lg:w-5 lg:h-5 mq1280:w-5 mq1280:h-5 mq1012:w-5 mq1012:h-5"
                  alt=""
                  src="/vector11.svg"
                />
              </button> */}
              <button className="cursor-pointer [border:none] p-[3px] bg-[transparent] overflow-hidden flex flex-row items-start justify-start">
                <a
                  href="https://twitter.com/third_r23"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="relative w-[30px] h-[30px] lg:w-5 lg:h-5"
                    alt=""
                    src="/vector4.svg"
                  />
                </a>
              </button>
              <button className="cursor-pointer [border:none] p-[3px] bg-[transparent] overflow-hidden flex flex-row items-start justify-start">
                <a
                  href="https://www.linkedin.com/company/third-r"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="relative w-[30px] h-[30px] lg:w-5 lg:h-5"
                    alt=""
                    src="/vector21.svg"
                  />
                </a>
              </button>
              <button className="cursor-pointer [border:none] p-[3px] bg-[transparent] overflow-hidden flex flex-row items-start justify-start">
                <a
                  href="https://www.fiverr.com/thirdr_in/develop-full-stack-websites-using-mern-reactjs-nextjs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="relative w-[30px] h-[30px] lg:w-5 lg:h-5"
                    alt=""
                    src="/vector3.svg"
                  />
                </a>
              </button>
            </div>
          </div>
          <div className="self-stretch flex flex-col py-4 px-0 items-start justify-start gap-[10px] sm:gap-[0px] sm:items-center sm:justify-center sm:pt-0 sm:pb-0 sm:box-border">
            <button className="cursor-pointer [border:none] p-2.5 bg-[transparent] self-stretch flex flex-row items-start justify-start sm:items-center sm:justify-center">
              <button
                className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-3xl font-bold font-thicccboi text-white text-center inline-block lg:text-lg sm:text-base mq1380:text-base mq1280:text-sm mq1012:text-xs"
                onClick={onHomepageClick}
              >
                Homepage
              </button>
            </button>
            <button className="cursor-pointer [border:none] p-2.5 bg-[transparent] self-stretch flex flex-row items-start justify-start sm:items-center sm:justify-center">
              <a
                className="relative text-3xl font-bold font-thicccboi text-white text-center [text-decoration:none] cursor-pointer lg:text-lg sm:text-base mq1380:text-base mq1280:text-sm mq1012:text-xs"
                onClick={onOurServicesClick}
              >
                Our services
              </a>
            </button>
          </div>
          <div className="self-stretch flex flex-col py-4 px-0 items-start justify-start gap-[10px] sm:gap-[0px] sm:items-center sm:justify-center sm:pt-0 sm:pb-0 sm:box-border">
            <button className="cursor-pointer [border:none] p-2.5 bg-[transparent] self-stretch flex flex-row items-start justify-start sm:items-center sm:justify-center">
              <a
                className="relative text-3xl font-bold font-thicccboi text-white text-center [text-decoration:none] cursor-pointer lg:text-lg sm:text-base mq1380:text-base mq1280:text-sm mq1012:text-xs"
                onClick={onTheProcess1Click}
              >
                The Process
              </a>
            </button>
            <div
              className="self-stretch flex flex-row p-2.5 items-start justify-start cursor-pointer sm:items-center sm:justify-center"
              onClick={onFrameContainer118Click}
            >
              <a
                className="relative font-bold text-[inherit] [text-decoration:none] cursor-pointer lg:text-lg sm:text-base mq1380:text-base mq1280:text-sm mq1012:text-xs"
                onClick={onProjectsClick}
              >
                Projects
              </a>
            </div>
          </div>
          <div className="self-stretch flex flex-col py-4 px-0 items-start justify-start sm:items-center sm:justify-center sm:pt-0 sm:pb-0 sm:box-border">
            <div className="flex flex-row p-2.5 items-start justify-start">
              <a
                className="relative font-bold text-[inherit] [text-decoration:none] cursor-pointer lg:text-lg sm:text-base mq1380:text-base mq1280:text-sm mq1012:text-xs"
                onClick={onContactUsClick}
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Khatam;
