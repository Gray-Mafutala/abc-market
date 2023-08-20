import { AiFillStar } from "react-icons/ai";

type StarRatingProps = {
  rate: number;
};

const StarRating = ({ rate }: StarRatingProps) => {
  const starStyles = "min-w-[24px] text-primary-blue/60";
  const grayStarStyles = "min-w-[24px] text-slate-200";
  const grayBackgroundStarStyles =
    grayStarStyles + " absolute top-0 left-0 -z-[1]";
  const wrapperStarCommonStyles = "h-6 overflow-hidden flex items-center";
  const starNormalSize = 24;

  const getStarWidthToDisplay = (
    starPosition: number,
    normalStarWidthInPx: number
  ) => {
    if (rate >= starPosition)
      return normalStarWidthInPx.toString().concat("px");
    else {
      const widthPercentageToDisplay = parseInt(rate.toString().slice(-1)) / 10;
      const finalStartWidthInpx =
        widthPercentageToDisplay * normalStarWidthInPx;
      return Math.round(finalStartWidthInpx).toString().concat("px");
    }
  };

  return (
    <div className="flex gap-x-[4px] z-[2]">
      {/* star 1 */}
      <div className={`w-6 ${wrapperStarCommonStyles}`}>
        <AiFillStar size={starNormalSize} className={starStyles} />
      </div>

      {/* star 2 */}
      {rate > 1 ? (
        <div className={`min-w-[${starNormalSize}px] relative`}>
          <div
            className={wrapperStarCommonStyles}
            style={{ width: getStarWidthToDisplay(2, starNormalSize) }}
          >
            <AiFillStar size={starNormalSize} className={starStyles} />
          </div>

          <AiFillStar
            size={starNormalSize}
            className={grayBackgroundStarStyles}
          />
        </div>
      ) : (
        <div className={wrapperStarCommonStyles}>
          <AiFillStar size={starNormalSize} className={grayStarStyles} />
        </div>
      )}

      {/* star 3 */}
      {rate > 2 ? (
        <div className={`min-w-[${starNormalSize}px] relative`}>
          <div
            className={wrapperStarCommonStyles}
            style={{ width: getStarWidthToDisplay(3, starNormalSize) }}
          >
            <AiFillStar size={starNormalSize} className={starStyles} />
          </div>

          <AiFillStar
            size={starNormalSize}
            className={grayBackgroundStarStyles}
          />
        </div>
      ) : (
        <div className={wrapperStarCommonStyles}>
          <AiFillStar size={starNormalSize} className={grayStarStyles} />
        </div>
      )}

      {/* star 4 */}
      {rate > 3 ? (
        <div className={`min-w-[${starNormalSize}px] relative`}>
          <div
            className={wrapperStarCommonStyles}
            style={{ width: getStarWidthToDisplay(4, starNormalSize) }}
          >
            <AiFillStar size={starNormalSize} className={starStyles} />
          </div>

          <AiFillStar
            size={starNormalSize}
            className={grayBackgroundStarStyles}
          />
        </div>
      ) : (
        <div className={wrapperStarCommonStyles}>
          <AiFillStar size={starNormalSize} className={grayStarStyles} />
        </div>
      )}

      {/* star 5 */}
      {rate > 4 ? (
        <div className={`min-w-[${starNormalSize}px] relative`}>
          <div
            className={wrapperStarCommonStyles}
            style={{ width: getStarWidthToDisplay(5, starNormalSize) }}
          >
            <AiFillStar size={starNormalSize} className={starStyles} />
          </div>

          <AiFillStar
            size={starNormalSize}
            className={grayBackgroundStarStyles}
          />
        </div>
      ) : (
        <div className={wrapperStarCommonStyles}>
          <AiFillStar size={starNormalSize} className={grayStarStyles} />
        </div>
      )}
    </div>
  );
};

export default StarRating;
