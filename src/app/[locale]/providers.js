"use client";

import React from "react";
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
        {children}
      </NextIntlClientProvider>
    </ThemeProvider >
  );
};

export default Providers;
