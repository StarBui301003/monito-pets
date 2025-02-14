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
                <Skeleton className="w-full h-[24px] rounded-md mb-1" />
                <Skeleton className="w-3/4 h-[24px] rounded-md mb-1" />
                <Skeleton className="w-3/4 h-[18px] rounded-md mb-1" />
                <Skeleton className="w-1/2 h-[20px] rounded-md mb-1" />
                <Skeleton className="w-full h-[34px] rounded-md " />
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
