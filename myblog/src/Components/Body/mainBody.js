import React from "react";
import { Route, Routes } from "react-router-dom";
import { Body } from "./MainBody_style";
import { Profile } from "./Contents/Profile/Profile";
import { Project } from "./Contents/Project/Project";
import { Sns } from "./Contents/SNS/Sns";

export const MainBody = () => {
  return (
    <Body>
      <Routes>
        <Route exact path="/" element={<Profile />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/Sns" element={<Sns />} />
      </Routes>
    </Body>
  );
};
