import { Trash2 } from 'lucide-react';
import ConfirmDelete from '../../components/ui/ConfirmDelete';
import Modal from '../../components/ui/Modal';
import { useDeleteProduct } from '../../hooks/products/useDeleteProduct';

function DeleteProduct({product}) {
    const {deleteProduct, isDeleteProduct} = useDeleteProduct()
    return (
        <div className='h-4 w-4'>
            <Modal>
                <Modal.Open opens="delete-instansi">
                    <button className="text-red-500 hover:text-red-600 cursor-pointer">
                    <Trash2 className="h-4 w-4" />
                    </button>
                </Modal.Open>
                <Modal.Window name="delete-instansi">
                    <ConfirmDelete
                        resourceName={product.name}
                        disabled={isDeleteProduct}
                        onConfirm={() => deleteProduct(product.id)}
                    />
                </Modal.Window>
            </Modal>
        </div>
    )
}

export default DeleteProduct;
