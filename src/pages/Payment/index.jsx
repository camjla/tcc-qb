import React from "react";
import { Menu } from "../../components/Menu";
import { NavbarPayment } from "../../components/NavbarPayment";
import { PaymentInput } from "../../components/PaymentInput";



export const Payment = () => {
  return (
    <>

      <NavbarPayment />

      <PaymentInput />
      <Menu />
    </>
  );
};
