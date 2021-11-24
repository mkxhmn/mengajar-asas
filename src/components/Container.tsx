import { FunctionComponent } from "react";

export const Container: FunctionComponent = ({ children }) => (
  <div className="max-w-8xl mx-auto xl:px-8">{children}</div>
);
