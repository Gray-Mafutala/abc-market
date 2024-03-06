import React from "react";

type PageWrapperProps = {
  title: string;
  labelForItemsCount: string;
  itemsCount: number;
  bodyContentStyles?: string;
  children: React.ReactNode;
  btnClearItems?: React.ReactNode | undefined;
};

const UserItemsPageWrapper = ({
  title,
  labelForItemsCount,
  itemsCount,
  bodyContentStyles = "",
  children,
  btnClearItems = undefined,
}: PageWrapperProps) => {
  return (
    <main className="common-main-container-styles">
      {/* center inner wrapper */}
      <div className="centered-container flex flex-col gap-y-6">
        {/* header - title and btn to delete all items if it's allowed */}
        <header
          className="relative flex items-center justify-between border-b 
          border-bg-gray-200 pb-2"
        >
          <h2
            className="flex items-center gap-x-4 text-slate-500 text-2xl
            mobileM:text-3xl whitespace-nowrap font-bold"
          >
            {title}
            <p
              className="bg-gray-200 text-base mobileM:text-lg
              text-primary-blue/80 px-2 rounded-md flex gap-x-2"
            >
              <span>{itemsCount}</span>{" "}
              <span className="hidden mobileM:block">{labelForItemsCount}</span>
            </p>
          </h2>

          {btnClearItems && btnClearItems}
        </header>

        {/* body */}
        <div className={bodyContentStyles}>{children}</div>
      </div>
    </main>
  );
};

export default UserItemsPageWrapper;
