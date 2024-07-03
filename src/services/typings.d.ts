declare namespace API {
  type Response<Data> = {
    data: Data;
    success: boolean;
    errors?: any;
    message?: string;
    code?: number;
    timestamp?: number;
  };
}
