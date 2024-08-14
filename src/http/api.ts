import { Credentilas } from "../types";
import { api } from "./client";

export const login = (credentials: Credentilas) =>
  api.post("/auth/login", credentials);
