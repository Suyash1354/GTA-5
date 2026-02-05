import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { Timeline } from 'gsap/gsap-core.js'
import React, { useRef } from 'react'

const SecondVideo = () => {

    const videoRef = useRef(null)

    useGSAP(()=>{

        gsap.set(".lucia",{marginTop:"-60vh", opacity:0})
      const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".lucia",
    start: "top top",
    end: "bottom top",
    scrub: 2,
    pin: true,
    markers: true,
  },
});

        tl.to(".lucia",{opacity:1, duration:1, ease:"power1.inOut"})
        
        videoRef.current.onloadedmetadata = ()=>{
             videoRef.current.currentTime = 0;

            tl.to(videoRef.current,{ currentTime: videoRef.current.duration, duration:3, ease:"power1.inOut"},"<")
        }
        

    },[])
  return (
<section className="lucia ">
      <div className="h-dvh">
        <video 
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          src="/videos/output2.mp4"
          className="size-full object-cover second-vd"
          style={{objectPosition:"80% 0%"}}
        />
      </div>
    </section>
  )
}

export default SecondVideo