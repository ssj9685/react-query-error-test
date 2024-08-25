import { useQueryClient } from "@tanstack/react-query";
import { useErrorBoundary } from "react-error-boundary";

export default function FetchQueryExample() {
  const queryClient = useQueryClient();
  const { showBoundary } = useErrorBoundary();

  queryClient.fetchQuery({
    queryKey: ["test2"],
    queryFn: async () => {
      try {
        return await fetch("https://localhost/fetchQuery");
      } catch (e) {
        showBoundary(e);
      }
    },
    retry: 1,
  });

  return <div>이게 나오면 성공이제~</div>;
}
