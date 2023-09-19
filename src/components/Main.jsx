import { React, useState } from "react";
import ListBox from "./ListBox";
import WatchBox from "./WatchBox";

const Main = ({ movieData, watchedData }) => {
  return (
    <main className="main">
      <ListBox movieData={movieData} />
      <WatchBox watchedData={watchedData} />
    </main>
  );
};

export default Main;
