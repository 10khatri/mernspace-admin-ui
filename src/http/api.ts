import { Credentilas } from "../types";
import { api } from "./client";

export const login = (credentials: Credentilas) =>
  api.post("/auth/login", credentials);

export const self = () => api.get("/auth/self");

export const logout = () => api.post("/auth/logout");
