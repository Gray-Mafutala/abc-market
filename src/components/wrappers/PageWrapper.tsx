import React from "react";

type PageWrapperProps = {
  title: string;
  items: string;
  children: React.ReactNode;
};

const PageWrapper = ({ title, items, children }: PageWrapperProps) => {
  return (
    <main className="px-4 pt-8 pb-32 bg-slate-50">
      {/* center inner wrapper */}
      <div className="centered-container flex flex-col gap-y-6">
        {/* header */}
        <header className="flex items-center gap-x-3">
          {/* title */}
          <h2
            className="text-2xl mobileL:text-3xl text-slate-500 font-bold"
          >
            {title}
          </h2>

          {/*  */}
          <p className="text-sm font-semibold text-slate-400 whitespace-nowrap">
            {items}
          </p>
        </header>

        {/* body  */}
        {children}
      </div>
    </main>
  );
};

export default PageWrapper;
