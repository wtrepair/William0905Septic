import type { NextPage } from "next";

export type SectionType = {
  className?: string;
};

const TypesSection: NextPage<SectionType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch bg-white flex flex-row items-start justify-end font-work-sans flex-wrap content-start px-10 box-border py-10 max-w-full shrink-0 text-left text-45xl text-dark-blue font-heading-1 mq750:pb-5 mq750:box-border ${className}`}
    >
      <div className="w-[1360px] flex flex-row items-start justify-center flex-wrap content-start max-w-full">
        <div className="flex-1 flex flex-row items-center justify-center flex-wrap content-center gap-x-[108px] gap-y-[106px] max-w-full mq450:gap-[26px] mq750:gap-[53px]">
          <img
            className="w-[600px] object-cover max-w-full"
            loading="lazy"
            alt=""
            src="/types1.png"
          />
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[37px] min-w-[335px] max-w-full mq750:gap-[18px]">
          <h1
            className="m-0 self-stretch relative text-inherit leading-[60px] font-bold font-[inherit] mq450:text-19xl mq450:leading-[36px] mq1050:text-32xl mq1050:leading-[48px]"
            data-scroll-to="service"
          >
            <p className="m-0">{`Why are septic systems important?`}</p>
          </h1>
          <div className="self-stretch flex flex-col items-start justify-start text-justify text-xl text-gray font-body-body-2-30-space">
            <div className="self-stretch relative leading-[26px]">{`There are five classes of systems identified by the Ontario
                Building Code to deal with waste, but most aren’t applicable for
                everyday family living. Classes 1, 2, 3 and 5 have very specific
                and limited uses. Most rural homes, cottages, and businesses use
                a Class 4 septic system that disperses the effluent into soil.
              </div>`}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TypesSection;
