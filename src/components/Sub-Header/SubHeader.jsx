import React from "react";
import HeaderDes from "../utilies/HeaderDes/HeaderDes";

const SubHeader = () => {
  const currentDate = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = currentDate.toLocaleDateString("en-US", options);
  return (
    <>
      <div className="container mx-auto pt-3">
        <div className="text-center">
          <div>
            <h3 className="font-OldEnglish font-thin text-4xl md:text-6xl opacity-75">
              The Dragon News
            </h3>
            <p className=" text-lg font-normal py-2 md:py-3">
              Journalism Without Fear or Favour
            </p>
            <p className=" text-xl font-medium">{formattedDate}</p>
          </div>
        </div>
      </div>
      <div>
        <HeaderDes />
      </div>
    </>
  );
};

export default SubHeader;
