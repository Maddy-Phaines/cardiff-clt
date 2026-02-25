import { useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import "./EmblaCarousel.css";
export function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  const goToPrev = () => emblaApi?.scrollPrev();
  const goToNext = () => emblaApi?.scrollNext();

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.plugins().autoplay?.play();
  }, [emblaApi]);

  return (
    <div className="bg-[#f7f1ee]">
      <div className="py-[65px]">
        <div className="px-[10px]">
          <div className="flex flex-col mb-[40px]">
            <div
              className="text-center text-[#e6836c] text-[13px] 
        font-semibold uppercase"
            >
              testimonials
            </div>
            <h2
              className="text-[30px] md:text-[38px] 
            lg:text-[42px] mt-[15px] mb-[15px] 
            text-center"
            >
              What people are saying
            </h2>
          </div>
          <div className="embla relative">
            <div className="embla__viewport" ref={emblaRef}>
              <div className="embla__container">
                <div className="embla__slide">
                  <div className="mx-[15px]">
                    <div
                      className="max-w-3xl w-full mx-auto relative 
                    "
                    >
                      <div
                        className="flex flex-col 
                      items-center"
                      >
                        <Image
                          src="/images/profile2W.jpg"
                          alt="Biodanza group session"
                          width={70}
                          height={70}
                          priority
                          className="h-auto rounded-full mb-[15px] 
                        object-cover object-center"
                        />
                        <p
                          className="text-center text-[22px] 
                      md:text-[24px] lg:text-[26px]"
                        >
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Quam corrupti soluta doloribus voluptatibus.
                        </p>
                        <div className="mt-[15px] text-center">
                          <div className="text-[#221c34] text-[18px] my-[10px]">
                            Full Name
                          </div>

                          <div className="text-[13px]">Biodanza Customer</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="embla__slide">
                  <div className="mx-[15px]">
                    <div
                      className="max-w-3xl w-full mx-auto relative 
                    "
                    >
                      <div
                        className="flex flex-col 
                      items-center"
                      >
                        <Image
                          src="/images/profile2W.jpg"
                          alt="Biodanza group session"
                          width={70}
                          height={70}
                          priority
                          className="h-auto rounded-full mb-[15px] 
                        object-cover object-center"
                        />
                        <p
                          className="text-center text-[22px] 
                      md:text-[24px] lg:text-[26px]"
                        >
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Quam corrupti soluta doloribus voluptatibus.
                        </p>
                        <div className="mt-[15px] text-center">
                          <div className="text-[#221c34] text-[18px] my-[10px]">
                            Full Name
                          </div>

                          <div className="text-[13px]">Biodanza Customer</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="embla__slide">
                  <div className="mx-[15px]">
                    <div
                      className="max-w-3xl w-full mx-auto relative 
                    "
                    >
                      <div
                        className="flex flex-col 
                      items-center"
                      >
                        <Image
                          src="/images/profile2W.jpg"
                          alt="Biodanza group session"
                          width={70}
                          height={70}
                          priority
                          className="h-auto rounded-full mb-[15px] 
                        object-cover object-center"
                        />
                        <p
                          className="text-center text-[22px] 
                      md:text-[24px] lg:text-[26px]"
                        >
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Quam corrupti soluta doloribus voluptatibus.
                        </p>
                        <div className="mt-[15px] text-center">
                          <div className="text-[#221c34] text-[18px] my-[10px]">
                            Full Name
                          </div>

                          <div className="text-[13px]">Biodanza Customer</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 flex justify-center">
              <div className="relative w-full max-w-3xl">
                <button
                  className="embla__prev bg-white rounded-full
                   flex items-center
                   p-4 pointer-events-auto cursor-pointer absolute 
                  -left-12 top-1/2 -translate-y-1/2"
                  onClick={goToPrev}
                >
                  <ChevronLeft />
                </button>

                <button
                  className="embla__next bg-white rounded-full
                   flex items-center
                   p-4 pointer-events-auto cursor-pointer absolute 
                  -right-12 top-1/2 -translate-y-1/2"
                  onClick={goToNext}
                >
                  <ChevronRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
