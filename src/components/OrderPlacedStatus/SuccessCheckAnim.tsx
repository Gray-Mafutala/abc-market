const SuccessCheckAnim = () => {
  return (
    // check-container
    <div className="w-[6.25rem] h-[7.5rem] flex flex-col items-center justify-between">
      {/* check-background */}
      <div
        className="w-full h-[calc(100%-1.25rem)] bg-gradient-to-br from-[#5de593] to-[#41d67c]
        shadow-[0px_0px_0px_65px_#ffffff40_inset,0px_0px_0px_65px_#ffffff40_inset] scale-[0.84]
        rounded-[50%] animate-successCheckContainer flex items-center justify-center opacity-0"
      >
        <svg
          viewBox="0 0 65 51"
          className="w-[65%] translate-y-[0.25rem] animate-successCheckAnimCheck fill-none"
          strokeDasharray={80}
          strokeDashoffset={80}
        >
          <path
            d="M7 25L27.3077 44L58.5 7"
            stroke="white"
            strokeWidth="13"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      {/* check-shadow */}
      <div className="bottom-[calc(-15%-5px)] left-0 rounded-[50%] bg-[radial-gradient(closest-side,#49da83,transparent)] animate-successCheckAnimShadow"></div>
    </div>
  );
};

export default SuccessCheckAnim;
