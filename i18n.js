module.exports = {
  locales: [
    "en-US",
    "fr-FR"
  ],
  defaultLocale: "fr-FR",
  pages: {
    "*": [
      "common"
    ],
    "/[lang]": [
      "home"
    ],
    "/[lang]/contact": [
      "contact"
    ]
  }
};
