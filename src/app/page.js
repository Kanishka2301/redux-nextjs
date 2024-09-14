import { fetchAllProducts } from "@/actions";
import ProductCard from "@/components/product-card";

export default async function Home() {
  const getAllProducts = await fetchAllProducts();
  console.log(getAllProducts);

  return (
    <div>
      <h1>Shopping cart</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {getAllProducts &&
        getAllProducts.data &&
        getAllProducts.data.length > 0 ? (
          getAllProducts.data.map((productItem) => (
            <ProductCard key={productItem.id} item={productItem} />
          ))
        ) : (
          <p>No products found!</p>
        )}
      </div>
    </div>
  );
}
