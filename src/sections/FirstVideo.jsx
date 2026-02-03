import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const FirstVideo = () => {
  const videoRef = useRef(null);

  useGSAP(() => {
    gsap.set(".first-vd-wrapper", { marginTop:"-150vh", opacity: 0 });
    gsap.set(".info", { opacity: 0 });
gsap.set(videoRef.current, {filter: "blur(20px)", opacity: 0 });


    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".first-vd-wrapper",
        start: "top top",
        end: "+=200%",
        scrub: true,
        pin: true,
      },
    });

    tl.to(".hero-section", { delay: 0.5, opacity: 0, ease: "power1.inOut" });
    tl.to(".first-vd-wrapper", {
      opacity: 1,
      duration: 1,
      ease: "power1.inOut",
    });
    tl.to(".info",{opacity:1, duration: 3,ease:"power1.inOut",onComplete:()=>{gsap.to(".info",{opacity:0, ease:"power1.inOut"})}},"<")
    

    videoRef.current.onloadedmetadata = () => {
      tl.to(
        videoRef.current,
        {
          currentTime: videoRef.current.duration,
          duration: 3,
          ease: "power1.inOut",
          opacity:1,
          filter: "blur(0px)"
        },
        
      );
    };
  }, []);
  return (
    <section className="first-vd-wrapper">

        <div className="info absolute m-60 mr-40 flex flex-col gap-12 font-round-bold !font-extrabold  bg-gradient-to-r from-pink-400 via-red-400 to-orange-400 bg-clip-text text-transparent">
            <h1 className=" text-8xl">Vice City, USA.</h1>
            <h4 className="text-4xl">Jason and Lucia have always known the deck is stacked <br /> against them. But when an easy score goes wrong, they find <br /> themselves on the darkest side of the sunniest place in America, in <br /> the middle of a criminal conspiracy stretching <br /> across the state of Leonida — forced to rely on each other <br />more than ever if they want to make it out alive.</h4>
        </div>
      <div className="h-dvh">
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          src="/videos/output1.mp4"
          className="first-vd"
        ></video>
      </div>
    </section>
  );
};

export default FirstVideo;
