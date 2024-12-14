export interface ApiResponse {
  statusCode: string;
  status: number;
  message: string;
  data: Data;
}

export interface Data {
  isPalindrome: boolean;
  historicalList: IHistoricalList[];
}

export interface IHistoricalList {
  id: number;
  text: string;
  isPalindrome: boolean;
}
