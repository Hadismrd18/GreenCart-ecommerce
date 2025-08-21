import RippleWaveLoader from "@/components/Loader";
import React from "react";

function loading() {
  return (
    <div
      className="w-[100vw] h-[100vh] bg-[#4fbf8b2a] flex items-center justify-center
    "
    >
      <RippleWaveLoader />
    </div>
  );
}

export default loading;
