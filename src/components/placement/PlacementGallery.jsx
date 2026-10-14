"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { SiteImage } from "@/components/ui/SiteImage";

export function PlacementGallery({ learners, events }) {
  const [reducedMotion, setReducedMotion] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => setReducedMotion(mediaQuery.matches);

    updateMotionPreference();
    mediaQuery.addEventListener("change", updateMotionPreference);
    return () => mediaQuery.removeEventListener("change", updateMotionPreference);
  }, []);

  return (
    <section className="py-20 sm:py-24 bg-surface border-y border-line">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <header className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-text">
            Our placed learners
          </h2>
        </header>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {learners.map((learner) => (
            <article
              key={learner.id}
              className="overflow-hidden rounded-lg border border-line bg-bg"
            >
              <div className="relative aspect-[4/3]">
                <SiteImage
                  image={learner.image}
                  fill
                  className="h-full w-full object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="space-y-1 p-5">
                <h3 className="text-xl font-heading font-bold text-text">
                  {learner.name}
                </h3>
                <p className="text-base text-muted">{learner.role}</p>
                <p className="text-[17px] font-bold text-accent">
                  {learner.package}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14">
          <h3 className="mb-6 text-2xl sm:text-3xl font-heading font-bold text-text">
            Life at our placement drives
          </h3>
          <Swiper
            className="placement-gallery pb-12"
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={1.1}
            spaceBetween={24}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            loop
            autoplay={
              reducedMotion
                ? false
                : {
                    delay: 3500,
                    pauseOnMouseEnter: true,
                    disableOnInteraction: false,
                  }
            }
            pagination={{ clickable: true }}
            navigation={{
              prevEl: ".placement-gallery-prev",
              nextEl: ".placement-gallery-next",
            }}
          >
            {events.map((event) => (
              <SwiperSlide key={event.id}>
                <figure>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                    <SiteImage
                      image={event.image}
                      fill
                      className="h-full w-full object-cover"
                      sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <figcaption className="mt-3 text-base text-text">
                    {event.caption}
                  </figcaption>
                </figure>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="mt-4 flex justify-end gap-3">
            <button
              type="button"
              aria-label="Previous placement drive photo"
              className="placement-gallery-prev inline-flex h-11 w-11 items-center justify-center rounded-md border border-primary bg-primary text-on-primary transition-colors hover:bg-accent-hover"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Next placement drive photo"
              className="placement-gallery-next inline-flex h-11 w-11 items-center justify-center rounded-md border border-primary bg-primary text-on-primary transition-colors hover:bg-accent-hover"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
