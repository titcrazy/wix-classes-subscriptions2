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

      <ScrollIntoView hashName="#about" offset="-90px" />
      <div className="min-h-screen bg-[url('/home/fitness-background-2.jpg')] parallax-background">
        <div style={{ width: '100%', height: '500px' }}>{/* <App /> */}</div>

        <div className="max-w-full-content mx-auto box-content pt-2">
          <div className="max-w-[400px] pt-10 pb-2">
            <h2 className="uppercase text-7xl leading-tight py-7">
              Meet The Coach
            </h2>

            <section className="mt-5">
              <ul aria-label="Social Bar" className="flex gap-2 invert -ml-3">
                <li>
                  <a
                    href="http://www.facebook.com/wix"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      width={43}
                      height={43}
                      alt="Facebook"
                      src="https://static.wixstatic.com/media/0fdef751204647a3bbd7eaa2827ed4f9.png"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="http://www.twitter.com/wix"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      width={43}
                      height={43}
                      src="https://static.wixstatic.com/media/c7d035ba85f6486680c2facedecdcf4d.png"
                      alt="Twitter"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com/wix/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      width={43}
                      height={43}
                      src="https://static.wixstatic.com/media/01c3aff52f2a4dffa526d7a9843d46ea.png"
                      alt="Instagram"
                    />
                  </a>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>

      <ScrollIntoView hashName="#studio" offset="-90px" />
      <div className="flex">
        <div className="bg-[#94746e] parallax-background w-1/2 flex justify-center">
          <div className="max-w-md py-16">
            <h2 className="title tracking-widest">
              A MESSAGE TO MY LITTLE PRINCESS
            </h2>
            <div className="pt-7 font-open-sans-condensed text-lg text-stone-300">
              {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in quam non justo dapibus rhoncus eu at magna. Nulla non sapien pulvinar, hendrerit lacus sed, semper nisi. Aenean metus arcu, laoreet vel magna ac, lobortis iaculis mi. Cras suscipit accumsan blandit. Sed gravida enim at est efficitur blandit a non ligula. Duis purus lorem, consectetur eu consequat nec, viverra sed urna. Curabitur et pretium ex, posuere gravida enim. Donec commodo arcu leo, a mattis nunc viverra vel. Duis id finibus sem. Nulla hendrerit nibh quis mauris tincidunt sodales. Sed pellentesque risus sed nibh eleifend efficitur. In eu dictum magna, eget elementum ipsum. Nullam quam nisi, aliquam vel nisi sit amet, ornare sollicitudin ex.

Ut elementum neque justo, eu vehicula enim iaculis nec. Donec nec nisi interdum lacus scelerisque sagittis at non justo. Duis sollicitudin lacus eget turpis dignissim aliquet. Sed consequat arcu non malesuada rutrum. Morbi vestibulum dolor malesuada velit sollicitudin, eget egestas libero vehicula. Ut in dui magna. Sed id turpis eget erat congue mollis. Duis rutrum scelerisque diam sed tincidunt. Nulla sem metus, vestibulum non suscipit sit amet, egestas vestibulum metus. Aenean eget sem justo.

Nam euismod ligula id arcu ultricies faucibus. Aliquam vel tincidunt ex, ut tempor quam. Nunc rutrum mi eu nunc tempus facilisis. Mauris finibus sodales nibh, quis porttitor arcu lobortis id. Etiam posuere enim elit, ac scelerisque ex consectetur sit amet. Vivamus congue elementum velit, sed accumsan augue interdum et. Integer at tellus id arcu tincidunt porta.

Pellentesque sodales viverra neque a maximus. In pulvinar in augue in consectetur. In quis nulla justo. Curabitur eu lacus velit. Fusce rutrum sollicitudin nunc. Etiam nec nisi pharetra, vulputate velit at, molestie sapien. Vestibulum scelerisque lorem in tempus commodo. Etiam vitae vulputate ipsum. Maecenas sed elit eget lectus sodales cursus vel at erat. Sed iaculis nunc magna, sit amet tincidunt augue eleifend eget. Fusce leo libero, posuere eu placerat eget, cursus a ante. Etiam congue lacus a ligula pellentesque, vitae accumsan libero ultrices. Morbi dapibus ullamcorper tortor, quis egestas mauris vulputate quis. In rhoncus a odio a venenatis.

Vivamus fringilla dolor dolor, vitae elementum nisl facilisis nec. Nam nec quam maximus, porta diam a, tempus libero. Donec mollis vitae tortor in elementum. Ut dignissim, arcu ut fermentum commodo, urna est suscipit lectus, volutpat interdum est elit sollicitudin nisl. Mauris et laoreet nisl. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis dictum, velit vel ullamcorper porta, nulla massa feugiat lacus, vel ornare ante nulla eu mi. Pellentesque tristique tempus tellus vel accumsan. In egestas massa feugiat tortor rutrum, malesuada ultricies ante dapibus. Curabitur lobortis, quam nec pellentesque ultrices, velit tellus rhoncus odio, sed semper ante lacus sed justo.`}
            </div>
          </div>
        </div>

        <div className="w-1/2 bg-[url('/home/OurPic4.jpg')] bg-cover bg-center"></div>
      </div>
    </div>
  );
}
