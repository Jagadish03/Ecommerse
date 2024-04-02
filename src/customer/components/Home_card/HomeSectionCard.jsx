import React from "react";

const HomeSectionCard = () => {
  return (
    <div className="cursor-pointer flex flex-col item-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3">
      <div className="h-[13rem] w-[10rem]">
        <img
          className="object-contain object-top w-full h-full"
          src="data:image/jpeg;base64,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"
          alt=""
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900">Roadster</h3>
        <p className="mt-2 text-sm text-gray-500">Women solid Cotton Shirt</p>
      </div>
    </div>
  );
};

export default HomeSectionCard;
