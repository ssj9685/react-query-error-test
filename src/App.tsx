import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Example from "./Example";
import { Suspense } from "react";
import AsyncErrorBoundary from "./AsyncErrorBoundary";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      retryDelay: 1000,
      throwOnError: true,
    },
  },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <AsyncErrorBoundary fallback={"에러가 발생"}>
        <Suspense fallback="로딩중~~">
          <Example />
        </Suspense>
      </AsyncErrorBoundary>
    </QueryClientProvider>
  );
}
