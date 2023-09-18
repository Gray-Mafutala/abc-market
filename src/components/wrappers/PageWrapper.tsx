import React from "react";

type PageWrapperProps = {
  title: string;
  items: string;
  children: React.ReactNode;
};

const PageWrapper = ({ title, items, children }: PageWrapperProps) => {
  return (
    <main className="common-main-container-styles">
      {/* center inner wrapper */}
      <div className="centered-container flex flex-col gap-y-6">
        {/* header */}
        <header className="flex items-center gap-x-3">
          {/* title */}
          <h2 className="text-2xl mobileL:text-3xl text-slate-500 font-bold">
            {title}
          </h2>

          {/* items count */}
          <p className="text-sm font-semibold text-slate-400 whitespace-nowrap">
            {items}
          </p>
        </header>

        {/* body */}
        <div
          className="flex flex-col gap-6"
        >
          {children}
        </div>
      </div>
    </main>
  );
};

export default PageWrapper;
