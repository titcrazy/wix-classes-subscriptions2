import './footer.css';
import Image from 'next/image';
import ScrollIntoView from '@app/components/ScrollIntoView/ScrollIntoView';
import Link from 'next/link';
import testIds from '@app/utils/test-ids';

const FooterNote = () => (
  <div className="text-sm font-open-sans-condensed text-gray-c1 float-right">
    <span>©2035 BY JOEY DIXON </span>
    <span>Powered and secured by </span>
    <span>
      <a
        className="underline"
        href="https://wix.com/?utm_campaign=vir_created_with"
        target="_blank"
        rel="noreferrer noopener"
      >
        Wix
      </a>
    </span>
  </div>
);

const Footer = () => (
  <footer
    className="w-full m-h-10 bg-[#0b6f78] flex parallax-background"
    data-testid={testIds.LAYOUT.FOOTER}
  >
    <div className="w-full flex overflow-hidden">
      <div className="lg:-mt-20 mx-1 opacity-50 -mt-10">
        <Image
          src="/common/infinite.png"
          width={1400}
          height={1400}
          alt="share image"
        />
      </div>
      <div className="pt-5">
        <div className=" border-yellow-300 w-full mx-auto my-auto float-right">
          <p className="uppercase mb-5 xl:text-2xl lg:tracking-[.2em] text-xl w-full mx-auto tracking-[.1em]">
            “Take my hand, take my whole life too. For I can’t help falling in
            love with you.”
          </p>
          <h2 className="uppercase float-right mb-5 xl:text-2xl xl:tracking-[.1em] mr-7 text-xl">
            – Elvis Presley
          </h2>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
