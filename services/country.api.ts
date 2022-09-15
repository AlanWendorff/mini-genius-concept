import { COUNTRY_FLAG_URI } from "@constants/api";

export const getCountryFlag = (code: string) =>
  `${COUNTRY_FLAG_URI}${code}.svg`;
