import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../services/apiProduct";

export function useGetProducts(){
    const {data: products, isPending: isGetProducts} = useQuery({
        queryFn: getProducts,
        queryKey: ["products"]
    })

    return {products, isGetProducts}
}