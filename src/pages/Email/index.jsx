import React from "react";
import { Menu } from "../../components/Menu";
import { NavbarInfoAccount } from "../../components/NavbarInfoAccount";
import { EmailInput } from "../../components/EmailInput";



export const Email = () => {
  return (
    <>

      <NavbarInfoAccount />
      <EmailInput />

      <Menu />
    </>
  );
};
