import { useEffect, useState } from "react";
import { TbError404 } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();

  const timeInSec = 5;

  const [counter, setCounter] = useState(timeInSec);
  useEffect(() => {
    const counterId = setInterval(() => setCounter((value) => value - 1), 1000);
    setTimeout(() => navigate("/"), timeInSec * 1000);
    return () => clearInterval(counterId);
  }, [counter, navigate]);

  return (
    <main className="px-4 pt-8 pb-24 bg-slate-50">
      <div className="mt-4 flex flex-col items-center text-center gap-y-2">
        <TbError404 className="text-8xl text-slate-300" />
        <p className="text-lg text-slate-400 font-medium tracking-wide">
          You seem to have lost your way... ?{" "}
          <span className="text-primary-blue">
            Redirection in <span className="font-semibold">{counter} </span>{" "}
            sec.
          </span>
        </p>
      </div>
    </main>
  );
};

export default PageNotFound;
