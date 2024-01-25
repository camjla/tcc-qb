import React from "react";
import { Menu } from "../../components/Menu";
import { NavbarInfoAccount } from "../../components/NavbarInfoAccount";
import { NameInput } from "../../components/NameInput";



export const Name = () => {
  return (
    <>
      <NavbarInfoAccount />

      <NameInput />

      <Menu />
    </>
  );
};
