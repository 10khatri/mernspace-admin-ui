import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "antd/dist/reset.css";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import { Router } from "./router.tsx";
import { ConfigProvider } from "antd";

const queryClient = new QueryClient();
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#F65F42",
            colorLink: "#F65F42",
          },
        }}
      >
        <RouterProvider router={Router} />
      </ConfigProvider>
    </QueryClientProvider>
  </StrictMode>
);
