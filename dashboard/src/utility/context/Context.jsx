import { createContext, useContext } from "react";

export const LinkContext = createContext();
export const useLink = () => useContext(LinkContext);
