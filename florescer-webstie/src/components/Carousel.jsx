import { ChevronLeft, ChevronRight } from "react-feather";
import { useState } from "react";
import { useEffect } from "react";

export default function Carousel ({children: slides, autoSlide = false, autoSlideInterval = 7000})
{

    const [curr, setCurr] = useState(0)
    const prev = () => setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1))
    const next = () => setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1))

    const [touchStart, setTouchStart] = useState(null)
    const [touchEnd, setTouchEnd] = useState(null)

    const minSwipeDistance = 50 

    const onTouchStart = (e) => {
        setTouchEnd(null) 
        setTouchStart(e.targetTouches[0].clientX) // Pega a posição X do toque
    }

    const onTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX) // Atualiza a posição X enquanto arrasta
    }

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return
        
        const distance = touchStart - touchEnd
        const isLeftSwipe = distance > minSwipeDistance
        const isRightSwipe = distance < -minSwipeDistance

        if (isLeftSwipe) {
            next() // Arrastou para esquerda -> Próximo slide
        } 
        if (isRightSwipe) {
            prev() // Arrastou para direita -> Slide anterior
        }
    }

    useEffect(() => {
        if (!autoSlide) return
        const slideInterval = setInterval(next, autoSlideInterval)
        return () => clearInterval(slideInterval)
    }, [autoSlide, autoSlideInterval, next])

    return (
        <div 
            className="overflow-hidden h-full w-full relative"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
        >
            <div 
                className="flex h-full w-full transition-transform ease-out duration-750"
                style={{ transform: `translateX(-${curr * 100}%)` }}
            > 
                {slides}
            </div>

            <div className="absolute inset-0 flex items-center justify-between p-2
                tablet:p-6 laptop:p-8 grande:p-12">
                <button onClick={prev} className="p-1 rounded-full shadow bg-white/50 text-zinc-700 hover:bg-white hover:text-zinc-900 hover:cursor-pointer transition-all duration-
                    tablet:scale-140 laptop:scale-160 note:scale-180 4k:scale-200 grande:scale-240">
                    <ChevronLeft size={25} />
                </button>
                <button onClick={next} className="p-1 rounded-full shadow bg-white/50 text-zinc-700 hover:bg-white hover:text-zinc-900 hover:cursor-pointer transition-all duration-
                    tablet:scale-140 laptop:scale-160 note:scale-180 4k:scale-200 grande:scale-240" >
                    <ChevronRight size={25}/>
                </button>
            </div>

            <div className="absolute bottom-8 right-0 left-0 tablet:scale-120 laptop:bottom-10 laptop:scale-140 note:bottom-12 note:scale-160 4k:scale-180 grande:bottom-16 grande:scale-220">
                <div className="flex items-center justify-center gap-2">
                    {slides.map((_, i) => (
                        <div 
                            key={i}
                            className={`
                                transition-all w-3 h-3 rounded-full
                                ${curr === i ? "bg-white scale-145" : "bg-white/50"}
                            `}
                        />
                    ))}
                </div>

            </div>

        </div>
    )
}