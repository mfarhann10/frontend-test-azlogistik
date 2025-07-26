import { Edit } from 'lucide-react';
import Modal from '../../components/ui/Modal';
import CreateEditProduct from './CreateEditProduct';


function EditProduct({product}) {
    return (
        <div className="h-4 w-4">
            <Modal>
                <Modal.Open opens="edit-product">
                <button className="text-blue-500 hover:text-blue-600 cursor-pointer">
                    <Edit className="h-4 w-4" />
                </button>
                </Modal.Open>
                <Modal.Window name="edit-product">
                <CreateEditProduct productToEdit={product} />
                </Modal.Window>
            </Modal>
        </div>
    )
}

export default EditProduct
