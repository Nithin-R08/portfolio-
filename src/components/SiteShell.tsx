import React from "react";
import { Preloader } from "./Preloader";
import { StructuredData } from "./StructuredData";
import { TransitionOverlay } from "./TransitionOverlay";

export function SiteShell() {
  return (
    <>
      <Preloader />
      <TransitionOverlay />

      <div id="interaction-lock"></div>

      <div className="container"></div>

      {React.createElement("custom-cursor")}

      <StructuredData />
    </>
  );
}
