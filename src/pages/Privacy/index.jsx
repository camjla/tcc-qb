import React from "react";

import { } from "./Privacy.styles";
import { Menu } from "../../components/Menu";
import { PrivacyComponent } from "../../components/PrivacyComponent";
import { NavbarPrivacy } from "../../components/NavbarPrivacy";


export const Privacy = () => {
  return (
    <>
      <NavbarPrivacy />
      <PrivacyComponent />

      <Menu />
    </>
  );
};
