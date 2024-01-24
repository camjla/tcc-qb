import React from "react";
// import { NavbarAccount } from "../../components/NavbarAccount";
import { Menu } from "../../components/Menu";
import { ListSettings } from "../../components/ListSettings";
import { ProfilePhoto } from "../../components/ProfilePhoto";
import { NavbarSettingsAccount } from "../../components/NavbarSettingsAccount";
import { Security } from "../../components/Security";


export const AccountSettings = () => {
  return (
    <>

      <NavbarSettingsAccount />
      <div >
        <ListSettings />

        <Security />
      </div>
      <Menu />
    </>
  );
};
