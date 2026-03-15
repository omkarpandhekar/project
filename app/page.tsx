/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";

const photos = [
  {
    src: "/1.jpeg",
    className: "top-4 left-[6%]",
    rotation: "-8deg",
    variant: "slow",
  },
  {
    src: "/2.jpeg",
    className: "top-[18%] right-[4%]",
    rotation: "5deg",
    variant: "medium",
  },
  {
    src: "/3.jpeg",
    className: "bottom-[10%] left-[12%]",
    rotation: "2deg",
    variant: "fast",
  },
  {
    src: "/4.jpeg",
    className: "bottom-[6%] right-[8%]",
    rotation: "-5deg",
    variant: "medium",
  },
  {
    src: "/5.jpeg",
    className: "top-[40%] left-[4%]",
    rotation: "-3deg",
    variant: "slow",
  },
  {
    src: "/6.jpeg",
    className: "top-[36%] right-[2%]",
    rotation: "7deg",
    variant: "slow",
  },
  {
    src: "/7.jpeg",
    className: "top-[8%] left-[28%]",
    rotation: "4deg",
    variant: "medium",
  },
  {
    src: "/8.jpeg",
    className: "bottom-[18%] left-[30%]",
    rotation: "-6deg",
    variant: "fast",
  },
  {
    src: "/9.jpeg",
    className: "bottom-[20%] right-[26%]",
    rotation: "-2deg",
    variant: "medium",
  },
  {
    src: "/10.jpeg",
    className: "top-[26%] left-[22%]",
    rotation: "3deg",
    variant: "slow",
  },
  {
    src: "/11.jpeg",
    className: "bottom-[22%] right-[16%]",
    rotation: "-4deg",
    variant: "medium",
  },
  {
    src: "/12.jpeg",
    className: "top-[64%] left-[10%]",
    rotation: "6deg",
    variant: "slow",
  },
  {
    src: "/13.jpeg",
    className: "top-[62%] right-[6%]",
    rotation: "-7deg",
    variant: "fast",
  },
  {
    src: "/14.jpeg",
    className: "top-[14%] left-[46%]",
    rotation: "-1deg",
    variant: "medium",
  },
  {
    src: "/15.jpeg",
    className: "bottom-[14%] right-[46%]",
    rotation: "2deg",
    variant: "slow",
  },
  {
    src: "/16.jpeg",
    className: "top-[46%] left-[18%]",
    rotation: "-5deg",
    variant: "medium",
  },
  {
    src: "/17.jpeg",
    className: "top-[48%] right-[20%]",
    rotation: "5deg",
    variant: "fast",
  },
  {
    src: "/18.jpeg",
    className: "top-[10%] right-[32%]",
    rotation: "-6deg",
    variant: "slow",
  },
  {
    src: "/19.jpeg",
    className: "bottom-[12%] left-[34%]",
    rotation: "4deg",
    variant: "medium",
  },
  {
    src: "/20.jpeg",
    className: "top-[34%] left-[50%]",
    rotation: "1deg",
    variant: "slow",
  },
  {
    src: "/21.jpeg",
    className: "bottom-[34%] right-[50%]",
    rotation: "-3deg",
    variant: "medium",
  },
] as const;

export default function Home() {
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-gradient-to-br from-pink-100 via-rose-100 to-red-100 px-4">
      {/* Floating photo background */}
      <div className="photo-wall">
        {photos.map((photo, index) => {
          const animationClass =
            photo.variant === "fast"
              ? "animate-float-fast"
              : photo.variant === "medium"
                ? "animate-float-medium"
                : "animate-float-slow";

          const delaySeconds = (index % 7) * 0.8;

          return (
            <div
              key={photo.src}
              className={`photo-card ${photo.className} ${animationClass}`}
              style={
                {
                  "--rotate-base": photo.rotation,
                  animationDelay: `${delaySeconds}s`,
                } as React.CSSProperties
              }
            >
              <img
                src={photo.src}
                alt=""
                loading={index === 0 ? "eager" : "lazy"}
              />
            </div>
          );
        })}
      </div>

      <main className="relative z-10 w-full max-w-xl rounded-3xl bg-white/90 p-8 shadow-2xl backdrop-blur">
        {/* Sorry Screen */}
        <section className="flex flex-col items-center gap-6 text-center">
          <h1 className="text-4xl font-bold text-rose-600">
            I&apos;m really, really sorry
          </h1>
          <p className="text-lg text-zinc-700">
            I know I hurt you, and I regret it from the bottom of my heart. Will
            you please forgive me?
          </p>

          <p className="text-base text-zinc-500">
            Khrch sorry manju pn mala rahavl jat nahi ye, aani mi kahich delete
            nahi kelay tula baghaych te sagl bgh. Aani msg bgh fakt insta varche
            baki bolu nko pn msg bghun seen karun sodun det jaa. Please sodun
            nko jau mala🥺.
          </p>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
            {/* YES → Will you marry me page (simple client navigation) */}
            <button
              onClick={() => {
                // simple client-side navigation to /marry
                window.location.href = "/marry";
              }}
              className="rounded-full bg-rose-600 px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-lg transition hover:bg-rose-700 hover:shadow-xl"
            >
              Yes, I forgive you
            </button>

            {/* NO → keep saying please please */}
            <button
              onClick={() => {
                alert(
                  "Please please... 🥺\nMain haath jod ke keh raha hoon, please maaf kar do.",
                );
              }}
              className="rounded-full border border-rose-200 bg-white px-8 py-3 text-sm font-semibold uppercase tracking-wide text-rose-600 shadow-sm transition hover:border-rose-400 hover:bg-rose-50"
            >
              No
            </button>
          </div>

          <p className="mt-6 text-sm text-zinc-400">
            Pleaseeeeeeeeeeeeeeeee Manju !
          </p>
        </section>
      </main>
    </div>
  );
}
