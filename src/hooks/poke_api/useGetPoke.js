import { useQuery } from "@tanstack/react-query";
import { getPoke } from "../../services/apiPoke";

export function useGetPoke({ limit = 20, offset = 0 }) {
  const {
    data: poke = [],
    isPending: isGetPoke,
  } = useQuery({
    queryKey: ["pokes", { limit, offset }],
    queryFn: () => getPoke({ limit, offset }),
  });

  return { poke, isGetPoke };
}
