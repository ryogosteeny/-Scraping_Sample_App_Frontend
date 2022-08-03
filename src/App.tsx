import React from "react";
import { AppLayout } from "./AppLayout";

export const App = () => {
  return (
    <>
      {/*  TODO　これは動かす*/}
      <AppLayout
        header={"header-item"}
        aside={"nav-item"}
        main={"main-contents"}
      />
    </>
  );
};
