import { useDeleteProductsMutation, useGetProductsQuery } from "./productsApi";

const ProductsPage = () => {
  // const data = useGetProductsQuery();
  const { data: products, isError, isLoading } = useGetProductsQuery();
  const [deleteProduct, delInfo] = useDeleteProductsMutation();
  console.log(delInfo.data);
  console.log(delInfo.isError);
  console.log(delInfo.isLoading);
  return (
    <>
      {products && (
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              {product.title}
              <button type="button" onClick={() => deleteProduct(product.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </>

    // <ul>
    //   {products.map((product) => (
    //     <li key={products.id}>{product.title}</li>
    //   ))}
    // </ul>
  );
};

export default ProductsPage;
