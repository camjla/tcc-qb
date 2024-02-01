import React from "react";
import { Menu } from "../../components/Menu";
import { NavbarAdress } from "../../components/NavbarAdress";
import { AdressInput} from "../../components/AdressInput";



export const AdressSelect = () => {
  return (
    <>

      <NavbarAdress />
      <AdressInput />

      <Menu />
    </>
  );
};
