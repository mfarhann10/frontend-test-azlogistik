import { useState } from "react"
import AddProduct from "../../features/products/AddProduct"
import ProductList from "../../features/products/ProductList"
import { useGetProducts } from "../../hooks/products/useGetProducts"
import SpinnerMini from "../ui/SpinnerMini"
import SearchProduct from "../../features/products/SearchProduct"

function ProductUi() {
    const {products, isGetProducts} = useGetProducts()
    const [searchTerm, setSearchTerm] = useState("")
    //jika load products pake component spinner mini
    if(isGetProducts){
        return(
            <SpinnerMini/>
        )
    }

    const filteredProducts = products?.filter(filter => filter.name.toLowerCase().includes(searchTerm.toLocaleLowerCase()))
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex items-center space-x-4 mb-4">
                <SearchProduct searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
                <AddProduct/>
            </div>
            {filteredProducts.map((product) =>(
                <ProductList key={product.id} products={product} isGetProducts={isGetProducts}/>
            ))}
        </div>
    )
}

export default ProductUi
