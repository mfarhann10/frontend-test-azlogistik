import { Plus } from "lucide-react";
import Modal from "../../components/ui/Modal"
import CreateEditProduct from "./CreateEditProduct";
function AddProduct() {
    return (
        <div>
            <Modal>
                <Modal.Open opens="add-product">
                <button className="cursor-pointer px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2">
                    <Plus className="h-4 w-4" />
                    <span>Add Product</span>
                </button>
                </Modal.Open>
                <Modal.Window name="add-product">
                <CreateEditProduct />
                </Modal.Window>
            </Modal>
        </div>
    )
}

export default AddProduct
