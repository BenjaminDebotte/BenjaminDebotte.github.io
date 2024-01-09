
import { getRequestConfig } from "next-intl/server";
export default getRequestConfig(async ({ locale }) => ({
  messages: (await import(`./src/_translations/${locale}.json`)).default,
  timeZone: "Europe/Paris"
}));


