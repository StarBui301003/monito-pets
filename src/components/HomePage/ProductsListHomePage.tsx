import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { ProductProps } from "@/types/ProductType";
import { ProductCard } from "@/components/Cards/ProductCard";

export const ProductsListHomePage = () => {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    setLoading(true);

    setTimeout(() => {
      const dummyProducts: ProductProps[] = Array(8)
        .fill(null)
        .map((_, index) => ({
          id: `product-${index}`,
          name: "Reflex Plus Adult Cat Food Salmon fkjhdfjk ljkfgjfdglk sklfdjgfđffdfd sfggđ",
          category: "Dog Food",
          size: "385gm",
          price: 140000,
          image: undefined,
        }));
      setProducts(dummyProducts);
      setLoading(false);
    }, 1000);
  };

  if (loading) {
    return (
      <div className="grid md:grid-cols-4 grid-cols-2 sm:mb-[50px] mb-4 gap-3 md:gap-[20px] my-[6px]">
        {Array(8)
          .fill(null)
          .map((_, index) => (
            <div
              key={index}
              className="rounded-[12px] p-2 shadow-[0px_4px_28px_-2px_rgba(0,0,0,0.08)]"
            >
              <Skeleton className="w-full h-[264px] rounded-[10px] mt-1" />
              <div className="p-2 flex flex-col justify-center h-[136px] gap-2]">
                <Skeleton className="h-4 w-[100%] mb-2" />
                <Skeleton className="h-4 w-[80%] mb-2" />
                <div className="flex items-center">
                  <Skeleton className="h-4 w-[30%] mr-2" />
                  <Skeleton className="h-4 w-[10px] rounded-full" />
                  <Skeleton className="h-4 w-[40%] ml-2" />
                </div>
                <Skeleton className="h-4 w-[60%] my-2" />
                <Skeleton className="w-[100%] h-[34px] mb-2 " />
              </div>
            </div>
          ))}
      </div>
    );
  }

  return (
    <div className="sm:grid hidden md:grid-cols-4 grid-cols-2 sm:mb-[50px] mb-4 gap-3 md:gap-[20px] my-[6px]">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
