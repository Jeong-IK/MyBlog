import React, { createContext, useState } from "react";

export const SelectmenuContxt = createContext({
  //1=Profile, 2=Project, 3=SNS
  selectMenu: 1,
  ChangeselectMenu: () => {},
});
