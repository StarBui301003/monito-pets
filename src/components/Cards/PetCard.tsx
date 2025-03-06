import { PLACEHOLDERIMAGE } from "@/assets/img";
import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { fetchPetCategory } from "@/services/pet.service";
import { PetProps } from "@/types/PetType";
import { useEffect, useState } from "react";
import { GoDotFill } from "react-icons/go";
import { useNavigate } from "react-router-dom";

export const PetCard = ({ pet }: { pet: PetProps }) => {
  const navigate = useNavigate();
  const [category, setCategory] = useState<string | null>(null);

  useEffect(() => {
    const getCategory = async () => {
      if (pet.uuid) {
        const categorySlug = await fetchPetCategory(pet.uuid);
        setCategory(categorySlug);
      }
    };

    getCategory();
  }, [pet.uuid]);

  const handleCardClick = () => {
    if (!pet.uuid || !category) return;
    const petSlug = pet.slug || pet.name.toLowerCase().replace(/\s+/g, "-");
    navigate(`/pets/${category}/${petSlug}.id=${pet.uuid}`);
  };
  return (
    <Card
      onClick={handleCardClick}
      key={pet.uuid || pet.sku_code}
      className="rounded-[12px] p-2 shadow-[0px_4px_28px_-2px_rgba(0,0,0,0.08)] cursor-pointer transition-transform duration-200 hover:scale-105"
    >
      <img
        src={pet.image?.[0] ?? PLACEHOLDERIMAGE}
        alt={pet.name}
        className="rounded-[10px] w-full sm:h-[264px] h-[169px] aspect-square object-cover"
      />
      <CardContent className="p-2">
        <CardTitle className="text-neutral-100 sm:body-bold-16 body-bold-14 py-1 sm:py-0 line-clamp-1">
          {pet.sku_code} - {pet.name}
        </CardTitle>
        <CardDescription className="sm:flex block items-center [&_svg]:size-2 gap-1">
          <div className="body-medium-12 py-1 sm:py-0">
            Gene: <span className="body-bold-12">{pet.gender || "N/A"}</span>
          </div>
          <div className="p-[6px] hidden sm:block">
            <GoDotFill />
          </div>
          <div className="body-medium-12 py-1 sm:py-0">
            Age: <span className="body-bold-12">{pet.age || "N/A"}</span>
          </div>
        </CardDescription>
        <CardTitle className="text-neutral-100 body-bold-16 py-1 sm:py-0">
          {pet.price ? `${pet.price.toLocaleString()} VND` : "Contact Us"}
        </CardTitle>
      </CardContent>
    </Card>
  );
};
