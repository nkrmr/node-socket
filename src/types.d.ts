declare namespace Express {
  export interface Request {
    userId: string;
    userRole: string;
    noGain?: boolean;
  }
}
