import React from "react";
import Image from "next/image";

const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <Image
        src="/assets/popcorn.gif"
        alt="Michael Jackson eating popcorn"
        width={500}
        height={500}
      />
    </div>
  );
};

export default Loading;