import { useForm } from "react-hook-form";
import Button from "../../components/ui/ButtonStyledComponents";
import Form from "../../components/ui/Form";
import FormRow from "../../components/ui/FormRow";
import Input from "../../components/ui/Input";
import { useCreateProducts } from "../../hooks/products/useCreateProducts";
import { useEditProducts } from "../../hooks/products/useEditProduct";

function CreateEditProduct({productToEdit = {}, onCloseModal}) {
    const {createProduct, isCreateProduct} = useCreateProducts()
    const {editProduct, isEditProduct} = useEditProducts()

    const {id: editId, ...editValues} = productToEdit;
    const isEditSession = Boolean(editId);
    const { register, handleSubmit, reset, formState } = useForm({
        defaultValues: isEditSession ? editValues : {},
    });

    const { errors } = formState;

    const isWorking = isCreateProduct || isEditProduct

    function onSubmit(data){
        if(isEditSession){
            editProduct(
                {newProduct: {...data}, id: editId},
                {
                    onSuccess: ()=>{
                        reset()
                        onCloseModal?.()
                    }
                }
            )
        }else{
            createProduct(
                {...data},
                {
                    onSuccess:() =>{
                        reset()
                        onCloseModal?.()
                    }
                }
            )
        }
    }
    return (
        <Form
            onSubmit={handleSubmit(onSubmit)}
            type={onCloseModal ? "modal" : "regular"}
            >
            <FormRow label="Nama Produk" error={errors?.name?.message}>
                <Input
                type="text"
                id="name"
                disabled={isWorking}
                {...register("name", {
                    required: "this field is required",
                })}
                />
            </FormRow>

            <FormRow label="Harga Produk" error={errors?.price?.message}>
                <Input
                type="number"
                id="price"
                disabled={isWorking}
                {...register("price", {
                    required: "this field is required",
                })}
                />
            </FormRow>

            <FormRow label="Stok Produk" error={errors?.stock?.message}>
                <Input
                type="number"
                id="stock"
                disabled={isWorking}
                {...register("stock", {
                    required: "this field is required",
                })}
                />
            </FormRow>

            <FormRow>
                {/* type is an HTML attribute! */}
                <Button
                $variation="secondary"
                $size="medium"
                $type="reset"
                onClick={() => onCloseModal?.()}
                >
                Cancel
                </Button>
                <Button $variation="indigo" $size="medium" disabled={isWorking}>
                {isEditSession ? "Edit Product" : "Create new Product"}
                </Button>
            </FormRow>
        </Form>
    )
}

export default CreateEditProduct
