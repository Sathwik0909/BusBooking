import { FaSearch, FaWifi } from "react-icons/fa";
import { GiCharging, GiWaterBottle } from "react-icons/gi";
import { IoTv } from "react-icons/io5";
const TopSearchCard = ({ routeFrom, routeTo, timeDuration, price }) => {
  return (
    <div className="w-full rounded-xl p-5 border-2 border-neutral-300 sapce-y-10">
      <div className="space-y-3 5 w-full">
        <div>
          <div className="w-full flex items-centeer justify-between">
            <p className="text-xs text-neutral-400 font-normal">From</p>
            <p className="text-xs text-neutral-400 font-normal">To</p>
          </div>

          <div className="w-full flex items-center justify-between gap-x-3">
            <h1 className="text-xl text-neutral-600 font-semibold">
              {routeFrom}
            </h1>

            <div className="flex-1 border-dashed border border-neutral-400 relative">
              <p className="absolute w-fit px-3 h-6 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-neutral-50 rounded-full flex items-center justify-center text-sm text-neutral-500 font-norma border-dashed border border-neutral-500">
                {timeDuration}
              </p>
            </div>

            <h1 className="text-xl text-neutral-600 font-semibold">
              {routeTo}
            </h1>
          </div>
        </div>

        <div className="w-full flex items-center gap-3 flex-wrap">
          <div className="flex items-center gap-x-1">
            <FaWifi className="size-3 text-neutral-500" />
            <p className="text-xs text-neutral-600 font-normal">Internet</p>
          </div>

          <div className="flex items-center gap-x-1">
            <GiWaterBottle className="size-3 text-neutral-500" />
            <p className="text-xs text-neutral-600 font-normal">Snacks</p>

            <div className="flex items-center gap-x-1">
              <IoTv className="size-3 text-neutral-500" />
              <p className="text-xs text-neutral-600 font-normal">TV</p>
            </div>

            <div className="flex items-center gap-x-1">
              <GiCharging className="size-3 text-neutral-500" />
              <p className="text-xs text-neutral-600 font-normal">
                Mobile Charging
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex items-center justify-between">
          <h1 className="text-xl text-neutral-700 font-semibold">{price}</h1>
          <button className="w-fit px-3 py-2 bg-primary hover:bg-transparent border-2 hover:text-primary  hover:border-primary rounded-lg flex items-center justify-center text-sm ease-in-out transition-duration-300 gap-x-2 text-neutral-50 font-normal">
            <FaSearch />
            Reserve Seat
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopSearchCard;
