import { CircleDollarSign } from "lucide-react";

const promptData = [
  {
    question: "How to Implement Linked List in JavaScript, Python and Java",
    tag: "code",
  },
  {
    question: "Help me Find latest trend",
    tag: "Trends",
  },
  {
    question: "create a study plan how to complete DSA in 6 months ",
    tag: "writing",
  },
  {
    question: "Find hotels for a New Year’s trip to San Francisco",
    tag: "travel",
  },
];

export const Prompts = () => {
  return (
    <div className="container flex max-w-5xl gap-5 justify-center">
      {promptData.map((item) => (
        <div
          className=" w-56 h-56 p-4 flex flex-col justify-between rounded-xl bg-zinc-800/90 hover:bg-zinc-700 cursor-pointer"
          key={item.question}
        >
          <h3 className="text-sm line-clamp-3 leading-6">{item.question}</h3>
          <div className="flex justify-end p-1">
            <CircleDollarSign className="w-10 h-10 rounded-full bg-black p-1.5" />
          </div>
        </div>
      ))}
    </div>
  );
};
