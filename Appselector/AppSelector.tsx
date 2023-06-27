"use client";
import { store } from "@/Redux/store";
import React from "react";
// get appprovider from react-redux
import { Provider } from "react-redux";

const AppSelector = ({ children }: { children: React.ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default AppSelector;
