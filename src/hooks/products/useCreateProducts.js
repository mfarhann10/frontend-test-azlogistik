import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditProducts } from "../../services/apiProduct";

export function useCreateProducts(){
    const queryClient = useQueryClient()

    const {mutate: createProduct, isPending: isCreateProduct} = useMutation({
        mutationFn: createEditProducts,
        onSuccess: () =>{
            queryClient.invalidateQueries({
                queryKey: ["products"]
            })
        },
        onError: (err) =>{
            throw new Error(err.message)
        }
    })

    return {createProduct, isCreateProduct}
}