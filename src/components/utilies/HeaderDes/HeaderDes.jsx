const HeaderDes = () => {
  return (
    <div className="flex md:justify-center w-[100%]">
      {" "}
      <div
        className="flex justify-between  items-center gap-x-3
       bg-gray-200  py-3 pl-3 md:w-[60%] "
      >
        <div className="">
          <button className="bg-[#D72050] text-white text-xl px-4 py-2">
            Latest
          </button>
        </div>
        <div className=" overflow-hidden md:w-[95%]">
          <div className="whitespace-nowrap animate-scrolling-text">
            Match Highlights: Germany vs Spain — as it happened ! Match
            Highlights: Germany vs Spain as...
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderDes;
