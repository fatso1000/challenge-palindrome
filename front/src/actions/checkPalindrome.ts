"use server";

import { ApiResponse } from "@/types";

export async function checkPalindrome(prevState: unknown, formData: FormData) {
  const text = formData.get("text");
  const res = await fetch(
    encodeURI(`${process.env.API_URL}/v1/historical?text=${text}`)
  );
  const json: ApiResponse = await res.json();

  if (!res.ok) {
    return { message: "Not Palindrome", ok: false };
  }

  return {
    message: json.message,
    ok: json.data.isPalindrome,
    historicalList: json.data.historicalList,
  };
}
