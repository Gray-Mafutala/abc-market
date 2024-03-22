import React from "react";

import { RiEmotionSadFill } from "react-icons/ri";

type NoProductFoundProps = {
  children: React.ReactNode;
};
const NoProductFound = ({ children }: NoProductFoundProps) => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-y-2">
        <RiEmotionSadFill className="text-8xl text-slate-300" />

        <p className="text-lg text-slate-400 font-medium tracking-wide text-center">
          Sorry, following your search, no article was found.
        </p>
      </div>

      <p className="text-lg font-medium text-slate-500 mt-16 mb-5">
        Maybe you'll like these articles :
      </p>
      {/* suggest items to display */}
      {children}
    </div>
  );
};

export default NoProductFound;
