"use client";

import React from "react";
import { ReCaptchaProvider } from "next-recaptcha-v3";
import ThemeProvider from '../../components/theme-provider';
import { NextIntlClientProvider } from 'next-intl';

const Providers = ({ locale, translations, children }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      disableTransitionOnChange
    >
      <NextIntlClientProvider locale={locale} messages={translations}>
        <ReCaptchaProvider>
          {children}
        </ReCaptchaProvider>
      </NextIntlClientProvider>
    </ThemeProvider >
  );
};

export default Providers;
