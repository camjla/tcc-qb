import React from "react";
import { NavbarAccount } from "../../components/NavbarAccount";
import { Wrapper } from "./account.styles";
import { Menu } from "../../components/Menu";
import { ListOptions } from "../../components/ListOptions";
import { ProfilePhoto } from "../../components/ProfilePhoto";
import { Support } from "../../components/Support";

export const Account = () => {
  return (
    <>
      <NavbarAccount />
      <Wrapper>
      <div>
        <ProfilePhoto />
        <ListOptions />
        <Support />
      </div>
      </Wrapper>

      <Menu />
    </>
  );
};
