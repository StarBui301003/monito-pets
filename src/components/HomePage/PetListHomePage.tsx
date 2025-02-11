import { PetCard } from "@/components/Cards/PetCard";
import { Skeleton } from "@/components/ui/skeleton";
import { fetchAllPetsFilter } from "@/services/pet.service";
import { PetProps } from "@/types/PetType";
import { useState, useEffect } from "react";

export const PetList = () => {
  const [pets, setPets] = useState<PetProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    loadDogRecentlyCreate();
  }, []);

  const loadDogRecentlyCreate = async () => {
    setLoading(true);
    const res = await fetchAllPetsFilter({
      order: "created_at",
      ascending: false,
      limit: 8,
    });

    if (res) {
      setPets(res as PetProps[]);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="grid md:grid-cols-4 grid-cols-2 gap-3 md:gap-[20px]">
        {Array(8)
          .fill(null)
          .map((_, index) => (
            <Skeleton key={index} className="w-full h-[264px] rounded-lg" />
          ))}
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-4 grid-cols-2 mb-4 my-[6px] gap-3 md:gap-[20px]">
      {pets.map((pet) => (
        <PetCard key={pet.uuid || pet.sku_code} pet={pet} />
      ))}
    </div>
  );
};
