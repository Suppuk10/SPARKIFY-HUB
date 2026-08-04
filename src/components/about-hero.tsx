import Image from "next/image";
import Link from "next/link";

import { AnimatePresence } from "framer-motion";
import FadeUp from "@/animation/fade-up";
import FadeRight from "@/animation/fade-right";

export default function AboutHero() {
  return (
    <div className="mx-auto mt-0 flex max-w-7xl flex-col items-center gap-6 px-6 pt-20 text-center sm:px-14 md:mt-20 md:px-20 lg:mt-0 lg:flex-row lg:text-left">
      <div className="w-full sm:w-1/2 md:w-2/3 lg:inline-block lg:h-full lg:w-1/2">
        <AnimatePresence>
          <FadeUp key="hero-image" duration={0.6}>
            <div className="mx-auto w-full max-w-[520px] overflow-hidden rounded-[2rem] border border-zinc-200/70 bg-zinc-100 shadow-lg dark:border-zinc-800 dark:bg-zinc-900 xl:max-w-[620px]">
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                className="h-auto w-full object-cover"
                aria-label="Hero profile video"
              >
                <source src="/images/heroProfile.webm" type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </div>
          </FadeUp>
        </AnimatePresence>
      </div>
      <div className="sm:1/2 mt-10 w-full lg:w-1/2">
        <AnimatePresence>
          <FadeUp key="title-greeting" duration={0.6}>
            <h1 className="text-6xl font-bold text-accent sm:text-7xl md:text-6xl lg:text-5xl xl:text-7xl">
              Hi, We are Sparkify Hub
            </h1>
          </FadeUp>
          <FadeUp key="description-1" duration={0.6} delay={0.2}>
            <p className="mt-8 text-base font-medium text-zinc-900 dark:text-zinc-300 sm:text-lg md:text-lg">
              Sparkify Hub is a modern digital marketing agency helping
              businesses scale with branding, performance marketing, websites
              and creative strategy. We combine creativity with technology to
              build brands that people remember.
            </p>
          </FadeUp>
          <FadeUp key="description-2" duration={0.6} delay={0.4}>
            <p className="mt-8 text-base font-medium text-zinc-900 dark:text-zinc-300 sm:text-lg md:text-lg">
              Explore our latest{" "}
              <Link href="/projects" className="underline underline-offset-4">
                <span className="text-accent">projects</span>
              </Link>{" "}
              showcasing our expertise in digital marketing, website
              development, creative design, social media growth, SEO
              optimization, and brand-building solutions that help businesses
              succeed online.
            </p>
          </FadeUp>
          <FadeRight
            key="hero-location"
            duration={0.6}
            delay={0.8}
            className="mr-0 mt-8 flex items-center justify-center gap-4 lg:mr-8 lg:justify-end"
          >
            <div className="relative flex w-12 gap-4 overflow-hidden rounded-md">
              <Image
                className="-z-10 h-full w-full bg-cover bg-no-repeat"
                alt="Indian flag"
                src="https://flagcdn.com/in.svg"
                width={15}
                height={15}
              />
            </div>
            <span className="text-lg font-medium text-foreground">
              Bihar, India
            </span>
          </FadeRight>
        </AnimatePresence>
      </div>
    </div>
  );
}
