"use client";

import React from "react";
import { ReCaptchaProvider } from "next-recaptcha-v3";
import ThemeProvider from './components/theme-provider';

const Providers = ({ children }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      disableTransitionOnChange
    >
      <ReCaptchaProvider>
        {children}
      </ReCaptchaProvider>

    </ThemeProvider >
  );
};

export default Providers;
