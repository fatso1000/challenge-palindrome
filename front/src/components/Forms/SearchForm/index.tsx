"use client";
import { checkPalindrome } from "@/actions/checkPalindrome";
import PalindromeDisplay from "@/components/PalindromeDisplay";
import { IHistoricalList } from "@/types";
import LocalStorageHandler from "@/utils/localStorage";
import { useActionState, useEffect, useState } from "react";

const initialState = {
  message: "",
  ok: false,
  historicalList: [],
};

export default function SearchForm() {
  const [state, formAction, pending] = useActionState(
    checkPalindrome,
    initialState
  );
  const [historicalList, setHistoricalList] = useState<IHistoricalList[]>([]);

  useEffect(() => {
    if (!historicalList.length) {
      GetAndSetHistoricalList();
    }
  }, []);

  useEffect(() => {
    if (state.historicalList && state.historicalList.length > 0)
      LocalStorageHandler.UpdateHistorical({
        historicalList: state.historicalList,
      });

    GetAndSetHistoricalList();
  }, [state.message, state.historicalList, state.ok]);

  const GetAndSetHistoricalList = () =>
    setHistoricalList(LocalStorageHandler.GetHistorical());

  return (
    <form action={formAction} className="flex flex-col gap-4">
      <input
        type="text"
        id="text"
        name="text"
        placeholder="Check Palindrome"
        minLength={3}
        required
        className="rounded-md p-3 text-neutral-700 font-bold"
      />
      {state.message && (
        <PalindromeDisplay
          displayText={state.message}
          isPalindrome={state.ok}
        />
      )}
      <button
        className="bg-neutral-700 hover:bg-neutral-500 text-neutral-200 p-3 rounded-md font-bold"
        disabled={pending}
      >
        Check Palindrome
      </button>
      {historicalList.length > 0 && (
        <div className="my-4 border border-neutral-600" />
      )}
      <div className="mt-4 flex flex-col gap-3 min-h-48 max-h-48 overflow-auto rounded-md">
        {historicalList.length > 0 &&
          historicalList.map((v) => (
            <PalindromeDisplay
              key={v.id}
              displayText={v.text}
              isPalindrome={v.isPalindrome}
            />
          ))}
      </div>
    </form>
  );
}
