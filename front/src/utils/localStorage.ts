"use client";

import { IHistoricalList } from "@/types";

const historicalKey = "historical";

export default class LocalStorageHandler {
  private static SetItem(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  private static GetItem(key: string) {
    return localStorage.getItem(key);
  }

  public static UpdateHistorical(list: { historicalList: IHistoricalList[] }) {
    LocalStorageHandler.SetItem(historicalKey, JSON.stringify(list));
  }

  public static GetHistorical() {
    const item = LocalStorageHandler.GetItem(historicalKey);
    if (!item) return [];
    return (
      (
        JSON.parse(item) as {
          historicalList: IHistoricalList[];
        }
      ).historicalList ?? []
    );
  }
}
