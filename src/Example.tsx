import { useQueryClient } from "@tanstack/react-query";

export default function Example() {
  const queryClient = useQueryClient();

  queryClient.fetchQuery({
    queryKey: ["test"],
    queryFn: async () => {
      throw new Error("응 에러야~");
    },
  });

  return <div>이게 나오면 성공이제~</div>;
}
