import Progress from "@/components/Progress";
import TaskList from "@/components/TaskList";
import Image from "next/image";
import bgImage from "@/assets/images/bg-image.png";
import coinImage2 from "@/assets/icons/coin-icon-2.svg";

const HomePage: React.FC = () => {
  return (
    <main className="container mx-auto py-9 px-2">
      <div>
        <h3 className="text-accent text-2xl font-medium leading-[130%]">
          Welcome Liam,
        </h3>
        <p className="text-lg font-normal leading-[160%]">
          Ready to complete your tasks?
        </p>
      </div>
      <div className="mt-4 flex gap-6">
        <div className="md:w-[60%] w-full">
          <TaskList />
        </div>
        <div className="md:w-[40%] space-y-6 w-full">
          <Progress />
          <div className="w-[503px] h-[183px] shrink-0 py-3 px-10 [background:linear-gradient(144deg,#28272F_9.13%,#040404_62.89%)] shadow-[0px_0px_5px_0px_#0B0E14] rounded-2xl border border-solid border-[rgba(255,255,255,0.30)]">
            <div className="text-lg font-medium leading-[130%]">Timer</div>
            <div className="text-8xl font-normal flex items-center justify-center gap-1 leading-[normal]">
              <div>11</div>
              <div>:</div>
              <div>59</div>
              <div>:</div>
              <div>50</div>
            </div>
          </div>
          <div className="w-full p-6 overflow-hidden rounded-2xl relative">
            <div className="flex gap-2 items-center">
              <Image src={coinImage2} width={32} height={37} alt="coin image" />
              <div className="text-center text-2xl font-bold leading-[130%]">
                24
              </div>
              <div className="ml-auto text-base font-normal leading-[160%]">
                Points history
              </div>
            </div>
            <div className="max-w-[270px] my-16 text-center w-full mx-auto">
              <div className="text-base font-normal leading-[160%] mb-5">
                Challenge yourself with puzzles, races, and fun rewards!
              </div>
              <button
                className="inline-flex items-start gap-2.5 [background:radial-gradient(107.08%_85.59%_at_86.3%_87.5%,rgba(0,0,0,0.23)_0%,rgba(0,0,0,0.00)_86.18%),radial-gradient(83.94%_83.94%_at_26.39%_20.83%,rgba(255,255,255,0.41)_0%,rgba(255,255,255,0.00)_69.79%,rgba(255,255,255,0.00)_100%),#021D4F] shadow-[-3px_-4px_7px_0px_rgba(255,255,255,0.15)_inset,4px_38px_62px_0px_rgba(0,0,0,0.50)] px-6 py-2.5 rounded-lg text-[rgba(255,255,255,0.90)] [text-shadow:1px_1px_1px_rgba(0,0,0,0.25)] [font-family:Poppins] text-lg font-medium leading-[160%]"
                type="button"
              >
                Play now
              </button>
            </div>
            <Image
              className="w-full h-full object-cover object-center absolute inset-0 z-[-1]"
              src={bgImage}
              width={500}
              height={330}
              alt="banner image"
            />
            <div className="absolute inset-0 z-[-1] bg-[rgba(0,0,0,0.50)]"></div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
