import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import type { UserResource } from "@clerk/types";

type User = UserResource | null | undefined;

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const getValidUserName = (user: User) => {
  if (!user) {
    return "";
  }

  if (user.fullName) {
    return user.fullName;
  }

  if (user.firstName) {
    return capitalizeFirstLetter(user.firstName);
  }

  if (user.username) {
    return capitalizeFirstLetter(user.username);
  }

  return "";
};

export const getIsUsingMacOS = (nav: Navigator) => {
  return nav.userAgent.includes("Mac");
};
