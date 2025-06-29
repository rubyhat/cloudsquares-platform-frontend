export interface ApiErrorResponse {
  error: RequestResponseError;
  message: string;
  statusCode: number;
}

export interface RequestResponseError {
  code: number;
  key: string;
  message: string;
  status: string;
  details?: Record<string, string[]>;
}
