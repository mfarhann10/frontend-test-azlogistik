import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditProducts } from "../../services/apiProduct";

export function useEditProducts(){
    const queryClient = useQueryClient()

    const {mutate: editProduct, isPending: isEditProduct} = useMutation({
        mutationFn: ({newProduct, id}) => createEditProducts(newProduct, id),
        onSuccess: () =>{
            queryClient.invalidateQueries({
                queryKey: ["products"]
            })
        },
        onError: (err) =>{
            throw new Error(err.message)
        }
    })

    return {editProduct, isEditProduct}
}