import React from "react";
import { motion } from "framer-motion";
import { TbArrowsExchange } from "react-icons/tb";
import { FaMap, FaMapMarkedAlt, FaMapMarkerAlt, FaSearch } from "react-icons/fa";
const Search = () => {
  return (
    <motion.div
      className="w-full bg-neutral-50/20 border-2 border-neutral-300 shadow-lg rounded-xl p-5"
      initial={{ opacity: 0, y: -800 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -800 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    >
      <div className="w-full flex items-center gap-5 justify-between">
        {/* From and to input section */}
        <div className="w-[60%] flex items-center gap-5 relative">
          {/* From */}
          <div className="w-1/2 h-14 border border-neutral-300 bg-white/70 text-base text-neutral-700 font-medium px-5 flex items-center gap-x-1 rounded-lg">
            <input
              type="text"
              name=""
              id=""
              placeholder="From.."
              className="flex-1 w-full bg-transparent outline-none focus:outline-none"
            />
            <div className="size-5 text-neutral-400">
              <FaMapMarkerAlt className="w-full h-full" />
            </div>
          </div>

          {/* TO */}
          <div className="w-1/2 h-14 border border-neutral-300 bg-white/70 text-base text-neutral-700 font-medium px-5 flex items-center gap-x-1 rounded-lg">
            <input
              type="text"
              name=""
              id=""
              placeholder="To.."
              className="flex-1 w-full bg-transparent outline-none focus:outline-none"
            />
            <div className="size-5 text-neutral-400">
              <FaMapMarkerAlt className="w-full h-full" />
            </div>
          </div>

          <button className="absolute w-11 h-6 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center bg-primary">
            <TbArrowsExchange className="size-6 text-neutral-50" />
          </button>
        </div>

        {/* date and button section */}
        <div className="flex-1 h-full  flex items-center gap-5">
          <input
            type="date"
            name=""
            id=""
            placeholder="From.."
            className="flex-1 w-full border border-neutral-300 rounded-lg px-5 py-3 outline-none focus:outline-none"
          />

          <button className="w-fit px-3 py-2 h-full bg-primary hover:bg-transparent border-2 hover:text-primary  hover:border-primary rounded-lg flex items-center justify-center text-base ease-in-out transition-duration-300 gap-x-2 text-neutral-50 font-medium">
            <FaSearch />
            Search
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Search;
