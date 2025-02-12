import Image from "next/image";
import polygonImage from "@/assets/icons/polygon-1.svg";
import { ArrowIcon1 } from "@/assets/icons";

const Progress: React.FC = () => {
  return (
    <div className="p-6 bg-[#1E222A] rounded-2xl">
      <div className="flex items-center gap-2">
        <div className="relative size-10">
          <Image
            className="absolute z-[1] left-0 top-0 size-full"
            src={polygonImage}
            width={40}
            height={40}
            alt="bg image"
          />
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 z-[2] -translate-y-1/2 w-[7px] text-foreground text-center text-2xl  font-medium leading-[160%]">
            1
          </span>
        </div>
        <div className="text-lg font-medium leading-[130%]">Child progress</div>
        <button
          type="button"
          className="bg-none ml-auto text-[#999] border-none inline-flex items-center gap-1.5 justify-center py-1 px-2"
        >
          <span>Weekly</span>
          <ArrowIcon1 className="stroke-[#999]" />
        </button>
      </div>
      <div className="mt-8">
        <div className="flex items-center gap-2 justify-between">
          <div className="text-2xl font-normal leading-[160%]">
            Task Completed
          </div>
          <div className="text-center text-4xl font-semibold leading-[130%]">
            81%
          </div>
        </div>
        <div className="w-full mt-2 h-[14px] rounded-full bg-foreground"></div>
      </div>
    </div>
  );
};

export default Progress;
