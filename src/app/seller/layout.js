import SellerDashboard from "@/components/SellerDashboard";
import React from "react";

function page({children}) {
  return (
    <div>
      <SellerDashboard children={children} />
      
    </div>
  );
}

export default page;
