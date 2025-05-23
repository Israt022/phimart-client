import ProductItem from "../Products/ProductItem";

const ProductList = ({products,loading}) => {
    if (loading) return(
        <div className="flex justify-center items-center py-10 min-h-screen">
            <span className="loading loading-spinner loading-xl text-secondary"></span>
        </div>
    )
    return (
        <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" >
            {products.map((product) => (
                <ProductItem product={product} key={product.id}/>
            ))}
        </div>
    );
};

export default ProductList;