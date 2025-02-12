"use client";
import {
  ArrowIcon1,
  CalculatorIcon1,
  EditTaskIcons,
  FunnelIcon1,
  LanguageIcons1,
  ProgressIcon1,
  SuccessIcon1,
} from "@/assets/icons";
import Image from "next/image";
import coinIcon from "@/assets/icons/coin-icon-1.svg";
import { useState } from "react";
import { cn } from "@/utils/cn";
import parse from "html-react-parser";

const allTaskData = [
  {
    taskType: "science",
    title: "Science Lab Report",
    shortDescription: "Write a lab report for the ex...",
    progress: "incomplete",
    progressStatus: "pending",
    coinCount: 1,
    deadline: "2022-12-31",
    details:
      "<p>Write a 500-word essay on the topic of climate change. Your essay should include an introduction, three body paragraphs (discussing causes, effects, and solutions), and a conclusion.</p><ul><li>Use 12-point Times New Roman font</li><li>double-space your essay</li><li>Save your essay as a PDF or Word document</li></ul>",
  },
  {
    taskType: "write",
    title: "Write an Essay",
    shortDescription: "Write a 500-word essay .",
    progress: "incomplete",
    progressStatus: "satisfied",
    coinCount: 1,
    deadline: "2022-12-31",
    details:
      "<p>Write a 500-word essay on the topic of climate change. Your essay should include an introduction, three body paragraphs (discussing causes, effects, and solutions), and a conclusion.</p><ul><li>Use 12-point Times New Roman font</li><li>double-space your essay</li><li>Save your essay as a PDF or Word document</li></ul>",
  },
  {
    taskType: "math",
    title: "Math Problems",
    shortDescription: "Solve algebra problems 1–5",
    progress: "incomplete",
    progressStatus: "pending",
    coinCount: 3,
    deadline: "2022-12-31",
    details:
      "<p>Write a 500-word essay on the topic of climate change. Your essay should include an introduction, three body paragraphs (discussing causes, effects, and solutions), and a conclusion.</p><ul><li>Use 12-point Times New Roman font</li><li>double-space your essay</li><li>Save your essay as a PDF or Word document</li></ul>",
  },
  {
    taskType: "language",
    title: "Vocabulary Quiz",
    shortDescription: "Study and take the quiz.",
    progress: "incomplete",
    progressStatus: "unsatisfied",
    coinCount: 3,
    deadline: "2022-12-31",
    details:
      "<p>Write a 500-word essay on the topic of climate change. Your essay should include an introduction, three body paragraphs (discussing causes, effects, and solutions), and a conclusion.</p><ul><li>Use 12-point Times New Roman font</li><li>double-space your essay</li><li>Save your essay as a PDF or Word document</li></ul>",
  },
  {
    taskType: "science",
    title: "Science Lab Report",
    shortDescription: "Write a lab report for the ex...",
    progress: "incomplete",
    progressStatus: "pending",
    coinCount: 1,
    deadline: "2022-12-31",
    details:
      "<p>Write a 500-word essay on the topic of climate change. Your essay should include an introduction, three body paragraphs (discussing causes, effects, and solutions), and a conclusion.</p><ul><li>Use 12-point Times New Roman font</li><li>double-space your essay</li><li>Save your essay as a PDF or Word document</li></ul>",
  },
  {
    taskType: "write",
    title: "Write an Essay",
    shortDescription: "Write a 500-word essay .",
    progress: "incomplete",
    progressStatus: "satisfied",
    coinCount: 1,
    deadline: "2022-12-31",
    details:
      "<p>Write a 500-word essay on the topic of climate change. Your essay should include an introduction, three body paragraphs (discussing causes, effects, and solutions), and a conclusion.</p><ul><li>Use 12-point Times New Roman font</li><li>double-space your essay</li><li>Save your essay as a PDF or Word document</li></ul>",
  },
  {
    taskType: "math",
    title: "Math Problems",
    shortDescription: "Solve algebra problems 1–5",
    progress: "incomplete",
    progressStatus: "pending",
    coinCount: 3,
    deadline: "2022-12-31",
    details:
      "<p>Write a 500-word essay on the topic of climate change. Your essay should include an introduction, three body paragraphs (discussing causes, effects, and solutions), and a conclusion.</p><ul><li>Use 12-point Times New Roman font</li><li>double-space your essay</li><li>Save your essay as a PDF or Word document</li></ul>",
  },
  {
    taskType: "language",
    title: "Vocabulary Quiz",
    shortDescription: "Study and take the quiz.",
    progress: "completed",
    progressStatus: "satisfied",
    coinCount: 3,
    deadline: "2022-12-31",
    details:
      "<p>Write a 500-word essay on the topic of climate change. Your essay should include an introduction, three body paragraphs (discussing causes, effects, and solutions), and a conclusion.</p><ul><li>Use 12-point Times New Roman font</li><li>double-space your essay</li><li>Save your essay as a PDF or Word document</li></ul>",
  },
];
const TaskList: React.FC = () => {
  return (
    <div className="bg-[#13161D] p-6 rounded-2xl">
      <div className="flex items-center justify-between gap-2">
        <h6 className="text-lg font-medium leading-[130%]">Your Task</h6>
        <div className="flex items-center gap-2 text-[#999]">
          <button
            type="button"
            className="bg-none border-none inline-flex items-center gap-1.5 justify-center py-1 px-2"
          >
            <ArrowIcon1 className="stroke-[#999]" />
            <span>Filters</span>
          </button>
          <span className="h-6 w-[1px] bg-border"></span>
          <button
            type="button"
            className="bg-none border-none inline-flex items-center gap-1.5 justify-center py-1 px-2"
          >
            <span>All tasks</span>
            <ArrowIcon1 className="stroke-[#999]" />
          </button>
        </div>
      </div>
      <div className="space-y-4 mt-4">
        {allTaskData.map((task, idx) => (
          <TaskItem key={`task-${idx}`} itemData={task} />
        ))}
      </div>
    </div>
  );
};

const TaskItem: React.FC<{
  itemData: {
    taskType: string;
    title: string;
    shortDescription: string;
    progress: string;
    progressStatus: string;
    coinCount: number;
    deadline: string;
    details: string;
  };
}> = ({ itemData }) => {
  const [show, setShow] = useState(false);

  return (
    <div
      className={cn(
        "flex border gap-4 border-border rounded-lg p-4",
        show ? "items-start" : "items-center"
      )}
    >
      <div>
        {itemData?.taskType === "science" && <FunnelIcon1 />}
        {itemData?.taskType === "write" && <EditTaskIcons />}
        {itemData?.taskType === "math" && <CalculatorIcon1 />}
        {itemData?.taskType === "language" && <LanguageIcons1 />}
      </div>
      <div>
        <div className="flex items-center gap-2 min-w-[250px]">
          <div className="text-base font-medium leading-[160%]">
            {itemData.title}
          </div>
          <div>
            {itemData.progress === "incomplete" && <ProgressIcon1 />}
            {itemData.progress === "completed" && <SuccessIcon1 />}
          </div>
        </div>
        <div className="text-sm font-normal details leading-[160%]">
          {show ? (
            <>
              <div>{parse(itemData.details)}</div>
              <div className="text-center !mt-6">
                <button
                  type="button"
                  className="text-white border-none py-2 px-4 rounded-lg bg-accent inline-flex items-center justify-center text-sm font-normal leading-[160%]"
                >
                  Start the task
                </button>
              </div>
            </>
          ) : (
            itemData.shortDescription
          )}
        </div>
      </div>
      {!show && (
        <>
          <div className="flex items-center gap-2 text-sm font-light leading-[normal]">
            <Image src={coinIcon} width={20} height={28} alt="coin icon" />
            <span>{itemData.coinCount} coin</span>
          </div>
          <div className="text-[#999] text-center text-sm font-light leading-[normal]">
            {itemData.deadline}
          </div>
        </>
      )}
      <div className="ml-auto">
        {itemData.progress === "incomplete" ? (
          <button
            type="button"
            onClick={() => setShow((prev) => !prev)}
            className="border-none text-[#222] py-2 px-4 rounded-lg bg-white inline-flex items-center justify-center text-sm font-normal leading-[160%]"
          >
            Details
          </button>
        ) : (
          <button
            type="button"
            className="text-white border-none py-2 px-4 rounded-lg bg-accent inline-flex items-center justify-center text-sm font-normal leading-[160%]"
          >
            Completed
          </button>
        )}
      </div>
    </div>
  );
};

export default TaskList;
