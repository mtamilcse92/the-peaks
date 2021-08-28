import { ReactNode } from "react";

export type TErrorBoundaryProps = {
  children: ReactNode;
}

export interface IErrorBoundaryState {
  hasError: boolean;
}