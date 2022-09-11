import { COUNTRY_FLAG_URI, COUNTRY_NAME_URI } from "@constants/api";

export const getCountryFlag = (code: string) =>
  `${COUNTRY_FLAG_URI}${code}.svg`;

export const getCountryName = (code: string) => `${COUNTRY_NAME_URI}${code}`;
// add axios or useAxios IDK
