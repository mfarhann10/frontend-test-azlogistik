import DeleteProduct from "./DeleteProduct"
import EditProduct from "./EditProduct"

function ProductList({products}) {
    
    return (
        <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden mb-5">
            <div className="flex flex-col md:flex-row gap-5 px-5 py-2 ">
                <p className="font-bold">Nama : {products.name}</p>
                <p className="font-bold">Harga : {products.price}</p>
                <p className="font-bold">Stok : {products.stock}</p>

                <div className="flex flex-col md:flex-row gap-5">
                    <EditProduct product={products}/>
                    <DeleteProduct product={products}/>
                </div>
            </div>
        </div>
    )
}

export default ProductList
