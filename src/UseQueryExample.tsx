import { useQuery } from "@tanstack/react-query";

export default function Example() {
  useQuery({
    queryKey: ["test1"],
    queryFn: async () => {
      return await fetch("http://localhost/useQuery");
    },
  });

  return <div>이게 나오면 성공이제~</div>;
}
