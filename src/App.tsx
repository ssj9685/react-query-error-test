import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import UseQueryExample from "./UseQueryExample";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import FetchQueryExample from "./FetchQueryExample";

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
      <ErrorBoundary fallback={<div>useQuery 에러입니당</div>}>
        <Suspense fallback="useQuery로딩중~~">
          <UseQueryExample />
        </Suspense>
      </ErrorBoundary>
      <ErrorBoundary fallback={<div>fetchQuery 에러입니당</div>}>
        <Suspense fallback="fetchQuery 로딩중~~">
          <FetchQueryExample />
        </Suspense>
      </ErrorBoundary>
    </QueryClientProvider>
  );
}
