import { NextFunction, Request, Response } from "express";
import CheckPalindrome from "../../../utils/checkPalindrome";
import { ErrorResponse, SuccessResponse } from "../../../core/apiService";
import HistoricalService from "./historical.service";
import { IAddHistorical } from "../../../types/historical.types";

interface SearchQuery {
  text?: string;
}

export default class HistoricalController {
  public static async VerifyIfPalindrome(
    req: Request<{}, {}, {}, SearchQuery>,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { text } = req.query;
      if (!text) throw new Error("Query param is missing!");
      const trimText = text.trim();

      const isPalindrome = CheckPalindrome(trimText);

      await HistoricalController.AddHistorical(
        { text: trimText, isPalindrome },
        res
      );
      const historicalList = await HistoricalController.GetHistorical(res);

      new SuccessResponse(
        isPalindrome ? "Is Palindrome" : "Is not Palindrome",
        {
          isPalindrome,
          historicalList,
        }
      ).send(res);
    } catch (error) {
      new ErrorResponse("Error", error).send(res);
    }
  }

  public static async AddHistorical(data: IAddHistorical, res: Response) {
    try {
      await HistoricalService.AddToHistorical(data);
    } catch (error) {
      new ErrorResponse("Error", error).send(res);
    }
  }

  public static async GetHistorical(res: Response) {
    try {
      const getHistorical = await HistoricalService.FindAll();
      return getHistorical;
    } catch (error) {
      new ErrorResponse("Error", error).send(res);
    }
  }
}
