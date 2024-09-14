import { fetchAllProducts } from "@/actions";
import ProductCard from "@/components/product-card";
import { auth } from "@/auth";

export default async function Home() {
  const getSession = await auth();
  console.log(getSession);

  const getAllProducts = await fetchAllProducts();

  return (
    <div>
      <h1>Shopping Cart</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
