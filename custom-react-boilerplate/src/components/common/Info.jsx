import React from "react";
import { BsTelephone } from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FiMail } from "react-icons/fi";

function Info() {
  return (
    <div className="info-items">
      <div>
        <HiOutlineLocationMarker />
        Address: RA, Gyumri, A. Manukyan 1
      </div>
      <div>
        <BsTelephone />
        Phone: +374 55 51 01 05
      </div>
      <div>
        <FiMail />
        E-mail: market@shop.am
      </div>
    </div>
  );
}

export default Info;
