import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteProduct as deleteProductApi} from "../../services/apiProduct";

export function useDeleteProduct(){
    const queryClient = useQueryClient()

    const {mutate: deleteProduct, isPending: isDeleteProduct} = useMutation({
        mutationFn: deleteProductApi,
        onSuccess: () =>{
            queryClient.invalidateQueries({ active: true })
        },
        onError: (err) =>{
            throw new Error(err.message)
        }
    })

    return {deleteProduct, isDeleteProduct}
}