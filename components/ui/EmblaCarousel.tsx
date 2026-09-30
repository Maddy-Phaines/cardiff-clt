"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState } from "react";
import "./EmblaCarousel.css";
export function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const [height, setHeight] = useState<number>();

  const goToPrev = () => emblaApi?.scrollPrev();
  const goToNext = () => emblaApi?.scrollNext();

  useEffect(() => {
    if (!emblaApi) return;

    const updateHeight = () => {
      const activeSlide = emblaApi.slideNodes()[emblaApi.selectedScrollSnap()];
      if (activeSlide) setHeight(activeSlide.offsetHeight);
    };

    updateHeight();
    emblaApi.on("select", updateHeight);
    emblaApi.on("reInit", updateHeight);

    return () => {
      emblaApi.off("select", updateHeight);
      emblaApi.off("reInit", updateHeight);
    };
  }, [emblaApi]);

  return (
    <section aria-labelledby="testimonials-heading" className="bg-[#f7f1ee]">
      <div className="py-16.25">
        <div className="px-2.5">
          <div className="flex flex-col mb-10">
            <div
              className="text-center text-[13px]
        font-semibold uppercase"
              aria-hidden="true"
            >
              testimonials
            </div>
            <h2
              id="testimonials-heading"
              className="text-[30px] md:text-[38px]
            lg:text-[42px] mt-3.75 mb-3.75
            text-center"
            >
              What people are saying
            </h2>
          </div>
          <div className="embla relative overflow-hidden">
            <div
              className="embla__viewport overflow-hidden transition-[height] duration-300 ease-out"
              style={height ? { height } : undefined}
              ref={emblaRef}
            >
              <div className="embla__container">
                <div className="embla__slide">
                  <div className="mx-3.75">
                    <div
                      className="max-w-3xl w-full mx-auto relative 
                    "
                    >
                      <div
                        className="flex flex-col 
                      items-center"
                      >
                        <Image
                          src="/images/participant-4-compressed.webp"
                          alt="Profile photo of Jill Lubienski"
                          width={70}
                          height={70}
                          priority
                          className="h-auto rounded-full mb-3.75
                        object-cover object-center"
                        />
                        <p
                          className="text-center text-[22px]
                      md:text-[24px] lg:text-[26px]"
                        >
                          Caroline has such a gentle, containing presence and
                          she encourages everyone to try the exercises to their
                          ability level with no judgement, promoting an
                          accepting and inclusive atmosphere.
                        </p>
                        <div className="mt-3.75 text-center">
                          <div className="text-[#221c34] text-[18px] my-2.5">
                            Jill Lubienski
                          </div>

                          <div className="text-[13px]">
                            Biodanza participant
                          </div>
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
                          src="/images/participant-3-compressed.webp"
                          alt="Profile photo of Wayne"
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
                          Caroline is very welcoming and puts you at ease. I
                          always feel happy and joyful in her classes and when I
                          go home I always have a smile on my face. I feel happy
                          on the outside and within too.
                        </p>
                        <div className="mt-[15px] text-center">
                          <div className="text-[#221c34] text-[18px] my-[10px]">
                            Wayne
                          </div>

                          <div className="text-[13px]">
                            Biodanza participant
                          </div>
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
                          src="/images/participant-5-compressed.webp"
                          alt="Profile photo of Alys"
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
                          She encourages everyone to listen to their own needs
                          in a non-judgmental space. She is a wonderful teacher
                          whose gentle presence is felt immediately upon arrival
                          and her classes are perfect for beginners and all
                          abilities.
                        </p>
                        <div className="mt-[15px] text-center">
                          <div className="text-[#221c34] text-[18px] my-[10px]">
                            Alys
                          </div>

                          <div className="text-[13px]">
                            Biodanza participant
                          </div>
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
                          src="/images/participant-2-compressed.webp"
                          alt="Profile photo of Nduka"
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
                          I always enjoy Caroline&apos;s Biodanza classes. She
                          is a wonderful facilitator who makes everyone feel
                          welcome and relaxed. I also love her music choices and
                          the way she gently guides the participants through her
                          sessions (which are always different). I always leave
                          her classes feeling uplifted. It is a great class for
                          beginners as well as those more experienced in
                          Biodanza, and I would say to anyone thinking about
                          trying Biodanza and attending Caroline&apos;s class to
                          definitely give it a go!
                        </p>
                        <div className="mt-[15px] text-center">
                          <div className="text-[#221c34] text-[18px] my-[10px]">
                            Nduka
                          </div>

                          <div className="text-[13px]">
                            Biodanza participant
                          </div>
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
                          src="/images/participant-1-compressed.webp"
                          alt="Profile photo of Maris"
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
                          Caroline is a wonderful teacher who holds a beautiful
                          nurturing space where you can play, explore and
                          discover the many joys and benefits of dancing
                          Biodanza. Her classes are lovely!
                        </p>
                        <div className="mt-[15px] text-center">
                          <div className="text-[#221c34] text-[18px] my-[10px]">
                            Maris
                          </div>

                          <div className="text-[13px]">
                            Biodanza participant
                          </div>
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
                   flex items-center shadow-md
                   p-4 pointer-events-auto cursor-pointer absolute
                  left-2 top-1/2 -translate-y-1/2"
                  onClick={goToPrev}
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft aria-hidden={true} />
                </button>

                <button
                  className="embla__next bg-white rounded-full
                   flex items-center shadow-md
                   p-4 pointer-events-auto cursor-pointer absolute
                  right-2 top-1/2 -translate-y-1/2"
                  onClick={goToNext}
                  aria-label="Next testimonial"
                >
                  <ChevronRight aria-hidden={true} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
