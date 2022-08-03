import React from "react";
import "./AppLayout.css";

interface Props {
  header: React.ReactNode;
  aside: React.ReactNode;
  main: React.ReactNode;
}

// come このコンポーネントをmemo化したらどうなるか検証したい
export const AppLayout = ({ header, aside, main }: Props) => {
  return (
    <div className="grid-container">
      <div className="grid__header">{header}</div>
      <div className="grid__side">{aside}</div>
      <div className="grid__main">{main}</div>
    </div>
  );
};
