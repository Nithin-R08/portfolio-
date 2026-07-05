"use client";

import React, { useEffect } from "react";
import { Preloader } from "./Preloader";
import { TransitionOverlay } from "./TransitionOverlay";

export function SiteShell() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const SCRIPT_ID = "vanilla-portfolio-script";
    let script = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null;

    const initializeApp = () => {
      if ((window as any).app) {
        try {
          (window as any).app.loadPage(window.location.pathname, false);
        } catch (e) {
          console.error("Error loading page in vanilla app:", e);
        }
      } else {
        document.dispatchEvent(new Event("DOMContentLoaded"));
      }
    };

    if (!script) {
      script = document.createElement("script");
      script.id = SCRIPT_ID;
      script.src = "/assets/index-DGJ9sR8m.js?v=46";
      script.type = "module";
      script.crossOrigin = "anonymous";
      script.onload = () => {
        setTimeout(initializeApp, 0);
      };
      document.body.appendChild(script);
    } else {
      initializeApp();
    }
  }, []);

  return (
    <>
      <Preloader />
      <TransitionOverlay />

      <div id="interaction-lock"></div>

      <div className="container"></div>

      {React.createElement("custom-cursor")}
    </>
  );
}

