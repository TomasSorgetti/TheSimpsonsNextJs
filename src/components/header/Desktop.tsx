"use client"
import Image from "next/image"
import bg1 from "../../assets/header/desktop/bg1.png"
import bg2 from "../../assets/header/desktop/bg2.png"
import Title from "../../assets/header/desktop/Title.png"
// right side
import Homer from "../../assets/header/desktop/Homero.png"
import Marge from "../../assets/header/desktop/Marge.png"
import Bart from "../../assets/header/desktop/Bart.png"
import Lisa from "../../assets/header/desktop/Lisa.png"
// left side
import HomerDad from "../../assets/header/desktop/PapaDeHomero.png"
import Otto from "../../assets/header/desktop/Otto.png"
import Rafa from "../../assets/header/desktop/Rafa.png"
import Milhouse from "../../assets/header/desktop/Milhouse.png"
import { useRef, useEffect, useState } from "react"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

// import {
//   motion,
//   useInView,
//   useAnimation,
//   useScroll,
//   useTransform,
// } from "framer-motion";

// function useParallax(value, distance) {
//   return useTransform(value, [1, 0], [-distance, 0]);
// }

const Desktop = () => {
    const [background, setBackground] = useState(20)
    const ref = useRef(null);
    const refbg1 = useRef(null);
    const refbg2 = useRef(null);
    const reftitle = useRef(null);
    const refhomer = useRef(null);
    const refmarge = useRef(null);
    const refbart = useRef(null);
    const reflisa = useRef(null);
    const refdad = useRef(null);
    const refotto = useRef(null);
    const refrafa = useRef(null);
    const refmilhouse = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.registerPlugin(ScrollTrigger);
            let tl = gsap.timeline({
                defaults: { duration: 1 },
                scrollTrigger: {
                    trigger: ref.current,
                    start: "top top",
                    end: "5000 bottom",
                    scrub: true,
                    pin: true,
                    onUpdate: (self) => {
                        setBackground(Math.ceil(self.progress * 100 +20))                   
                    }
                }
            })
            tl.to(
                refbg1.current,
                {
                    y:"-=200",
                },
                0
            )
            tl.to(
                reftitle.current,
                {
                    y:"+=50",
                    opacity: 10,
                    duration: 1
                },
                0
            )            
            // right side
            tl.to(
                refhomer.current,
                {
                    x:"+=600",
                },
                0
            )
            tl.to(
                refmarge.current,
                {
                    x:"+=900",
                },
                0
            )
            tl.to(
                refbart.current,
                {
                    x:"+=1000",
                },
                0
            )
            tl.to(
                reflisa.current,
                {
                    x:"+=1200",
                },
                0
            )
            // left side
            tl.to(
                refdad.current,
                {
                    x:"-=800",
                },
                0
            )
            tl.to(
                refotto.current,
                {
                    x:"-=1100",
                },
                0
            )
            tl.to(
                refrafa.current,
                {
                    x:"-=1200",
                },
                0
            )
            tl.to(
                refmilhouse.current,
                {
                    x:"-=1500",
                },
                0
            )
        })
        return () => ctx.revert()
    }, [])

  return (
      <div ref={ref} className="w-full relative h-[8000px] overflow-x-hidden pt-[60px]">
          <Image ref={refbg2} className="w-full absolute" src={bg2} alt="background" />
          <Image ref={refbg1} className="w-full absolute z-10" src={bg1} alt="background" />             
          <Image ref={reftitle} className="w-full absolute z-10 opacity-0" src={Title} alt="background" />
          {/* right side */}
          <Image ref={refhomer} className="w-full absolute z-40" src={Homer} alt="Homer"/>
          <Image ref={refmarge} className="w-full absolute z-30" src={Marge} alt="Marge"/>
          <Image ref={refbart} className="w-full absolute z-20" src={Bart} alt="Bart"/>
          <Image ref={reflisa} className="w-full absolute z-10" src={Lisa} alt="Lisa"/>
          {/* left side */}
          <Image ref={refdad} className="w-full absolute z-40" src={HomerDad} alt="Homer Dad"/>
          <Image ref={refotto} className="w-full absolute z-30" src={Otto} alt="Otto"/>
          <Image ref={refrafa} className="w-full absolute z-20" src={Rafa} alt="Rafa"/>
          <Image ref={refmilhouse} className="w-full absolute z-10" src={Milhouse} alt="Milhouse"/>
    </div>
  )
}

export default Desktop