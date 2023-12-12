'use client';

import './page.css';
import Image from 'next/image';
import {
  GalleryItem,
  galleryItems,
} from '@app/model/gallery/fitness-instructor';
import ScrollIntoView from '@app/components/ScrollIntoView/ScrollIntoView';
import testIds from '@app/utils/test-ids';
import { Amatic_SC } from 'next/font/google';
import CountUpTimer from 'app/components/Timer/CountUpTimer.js';
import App from 'app/components/TimelineData/TimelineApp';
import { max } from 'date-fns';
import VerticalTimelineComponent from 'app/components/VerticalTimeline/Timeline.jsx';
import 'app/components/VerticalTimeline/style.css';
import React, { useEffect, useRef } from 'react';

const ShadowIntoLight = Amatic_SC({
  weight: '400',
  subsets: ['latin'],
});

const TrainingOptionSelection = ({
  text,
  className,
  bgImageSrc,
  href,
}: {
  text: string;
  bgImageSrc: string;
  href: string;
  className?: string;
}) => (
  <a
    className={`flex-1 aspect-[4/3] relative flex justify-center ${className}`}
    href={href}
  >
    <div className={`absolute-full bg-cover ${bgImageSrc}`}></div>
    <div className="absolute-full h-full opacity-0 hover:opacity-50 bg-highlight"></div>
    <div className="flex align-middle justify-center flex-col gap-5 h-full w-full max-w-[490px]">
      <h3 className="z-10 uppercase text-3xl tracking-[.3em]">{text}</h3>
      <div className="mx-auto">
        <Image
          className="hover:brightness-0 hover:invert rotate-270"
          width={50}
          height={50}
          alt={`select ${text}`}
          src="/common/arrow-circle.png"
        />
      </div>
    </div>
  </a>
);

const AchievementItem = ({
  title,
  tagline,
}: {
  title: string;
  tagline: string;
}) => (
  <li>
    <h4 className="title mb-5">{title}</h4>
    <div className="mb-5 bg-black h-px w-28"></div>
    <p className="text-xl sm:text-2xl">{tagline}</p>
  </li>
);

const GalleryItem = ({
  item: { title, tagline, imgSrc, id },
}: {
  item: GalleryItem;
}) => (
  <li className="aspect-video relative">
    <Image src={imgSrc} alt={title} fill />
    <div className="absolute-full opacity-0 hover:opacity-70 bg-white p-8 flex flex-col justify-between text-black">
      <div className="text-center">
        <h4 className="text-2xl pt-4 pb-2">{title}</h4>
        <p className="font-open-sans-condensed">{tagline}</p>
      </div>
      <div className="flex justify-between">
        <a href="/#" className="cursor-pointer">
          <Image
            src="/common/like.svg"
            height={24}
            width={24}
            alt="like image"
          />
        </a>
        <a href="/#" className="cursor-pointer">
          <Image
            src="/common/share.svg"
            height={24}
            width={24}
            alt="share image"
          />
        </a>
      </div>
    </div>
  </li>
);

export default function Home() {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const timeline = timelineRef.current;

      if (timeline) {
        // Handle bounce-in for elements with class 'is-hidden'
        const hiddenElements = timeline.getElementsByClassName('is-hidden');

        for (const element of hiddenElements) {
          const rect = (element as HTMLElement).getBoundingClientRect();
          const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

          if (isVisible) {
            (element as HTMLElement).classList.remove('is-hidden');
            (element as HTMLElement).classList.add('bounce-in');
          }
        }

        // Handle bounce-in for icons in elements with class 'vertical-timeline-element--no-children'
        const noChildrenElements = timeline.getElementsByClassName(
          'vertical-timeline-element vertical-timeline-element--no-children'
        );

        for (const element of noChildrenElements) {
          const rect = (element as HTMLElement).getBoundingClientRect();
          const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

          if (isVisible) {
            const icon = element.querySelector(
              '.vertical-timeline-element-icon'
            );
            if (icon) {
              (icon as HTMLElement).classList.add('bounce-in');
            }

            // Check if the element has class 'vertical-timeline-element-content'
            const content = element.querySelector(
              '.vertical-timeline-element-content'
            );
            if (content) {
              (content as HTMLElement).classList.remove('bounce-in');
              (content as HTMLElement).classList.add('is-hidden');
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div
        className="text-center min-h-screen bg-cover bg-center bg-[url('/home/image.jpg')] bg-opacity-75 parallax-background"
        data-testid={testIds.HOME_PAGE.HEADER}
      >
        <section className="py-[355px]">
          <h1 style={ShadowIntoLight.style} className="tracking-[.1em]">
            This is the story about us
          </h1>
          <div className="pt-7">
            <div className="tracking-[.1em] text-3xl uppercase font-open-sans-condensed">
              happy anniversary bby ❤️
            </div>
          </div>

          <div className="">
            <CountUpTimer />
          </div>
        </section>
      </div>

      <ScrollIntoView hashName="#lettertou" offset="-90px" />
      <div className="flex">
        <div className="bg-[#94746e] parallax-background w-1/2 flex justify-center">
          <div className="max-w-md py-16">
            <h2 className="title mx-10">A MESSAGE TO MY LITTLE PRINCESS</h2>
            <p className="mx-10 pt-7 font-open-sans-condensed text-lg text-stone-300">
              Hey,
              <br />
              <br />
              It’s funny how 6 whole months have passed by in a blink of an eye.
              But the last couple of months have been the most beautiful time of
              my life.
              <br />
              <br />
              We had a fair share of memories during these wonderful time, from
              your that happiest of memories like your birthday or graduation,
              or the lowest point in our relationship such as our fights and
              arguements, but us still loving each other after all those
              occasions, happier than ever, just shown that we are meant to be
              an unbreakable bond. I know the neext few upcoming months will be
              hard for us because of it&apos;s the start of our long-distance
              journey. But I know it will work out because I know that I have
              found the one since the first time I met you, the one who will
              always be here with me, till the end of time :&lt;
              <br />
              <br />
              I&apos;m really lucky to have known a gorgeous, loving, and
              generous person like you, and my life has been so much better
              since the day we are together. You&apos;ve changed me from someone
              who always show his pessimistic side, to someone who loves his
              life and always smiles more often than not.
              <br />
              <br />
              You deserve to be treated much better than what you have been
              through, and I&apos;m willing to do anything in my all efforts so
              that you can receive all the loving that you deserves.
              <br />
              <br />
              Saying thank you is not enough to express how much I appreciate
              what you have done to me. I love everything about you because, for
              me, you are the most beautiful person, not only from the outside
              but also from the inside.
              <br />
              <br />
              I know we don&apos;t have a lot of time left, but I hope that our
              last 2 months together before long-distance will be the most
              memorable moments of our life.
              <br />
              <br />
              I hope that you like this gift during our 6th month anniversary, I
              just wanna say that I will always spend as much time and effort
              into this relationship as possible just to see you smile and
              happy, just like how I am willing to spend all my committments to
              this project for you.
              <br />
              <br />
              Thank you for loving me, for showing all the cares and supports
              that I have never received before, but most importantly, thank you
              for coming into my life. I love you more than love itself and my
              life wouldn&apos;t mean anything without the presence of you.
              <br />
              <br />
              Love ❤️,
              <br />
              Tung
            </p>
          </div>
        </div>
        <div className="w-2/3 bg-[url('/home/OurPic4.jpg')] bg-no-repeat bg-cover bg-center"></div>
      </div>

      <ScrollIntoView hashName="#timeline" offset="-90px" />
      <div className="flex min-h-fill bg-[url('/home/OurPic.jpg')] parallax-background">
        <div className="bg-black bg-opacity-50 w-full min-h-fill">
          <div ref={timelineRef} className="h-fill">
            <VerticalTimelineComponent />
          </div>
        </div>
      </div>
    </div>
  );
}
