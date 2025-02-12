import { SaleGift } from "@/assets/icons";
import { PRODUCT1 } from "@/assets/img";
import { SaleButton } from "@/components/Buttons/SaleButton";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { ProductProps } from "@/types/ProductType";
import { GoDotFill } from "react-icons/go";

export const ProductCard = ({ product }: { product: ProductProps }) => {
  return (
    <Card className="rounded-[12px] p-2 shadow-[0px_4px_28px_-2px_rgba(0,0,0,0.08)]">
      <div>
        <img
          src={product.image ?? PRODUCT1}
          alt={product.name}
          className="rounded-[10px]"
        />
      </div>
      <CardContent className="p-2">
        <div className="text-neutral-100 sm:body-bold-16 body-bold-14 pt-2 py-1 sm:py-0 line-clamp-2">
          {product.name}
        </div>
        <CardDescription className="block sm:flex items-center [&_svg]:size-2 gap-1 mt-1">
          <div className="body-medium-12 py-1 sm:py-0">
            Product: <span className="body-bold-12">{product.category}</span>
          </div>
          <div className="p-[6px] hidden sm:block">
            <GoDotFill />
          </div>
          <div className="body-medium-12 py-1 sm:py-0">
            Size: <span className="body-bold-12">{product.size}</span>
          </div>
        </CardDescription>
        <CardTitle className="text-neutral-100 body-bold-16 mt-1 py-1 sm:py-0">
          {product.price.toLocaleString()} VND
        </CardTitle>
        <SaleButton className="mt-[10px]">
          <div className="p-[2px]">
            <SaleGift />
          </div>
          <div className="py-1 px-[2px]">
            <GoDotFill />
          </div>
          Free Toy & Free Shaker
        </SaleButton>
      </CardContent>
    </Card>
  );
};
