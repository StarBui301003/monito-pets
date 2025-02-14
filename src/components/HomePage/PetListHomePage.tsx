import { PetCard } from "@/components/Cards/PetCard";
import { Skeleton } from "@/components/ui/skeleton";
import { fetchAllPetsFilter } from "@/services/pet.service";
import { PetProps } from "@/types/PetType";
import { useState, useEffect } from "react";

export const PetListHomePage = () => {
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
            <div
              key={index}
              className="rounded-[12px] p-2 shadow-[0px_4px_28px_-2px_rgba(0,0,0,0.08)]"
            >
              <Skeleton className="rounded-[10px] w-full sm:h-[264px] h-[169px] aspect-square" />
              <div className="p-2">
                <Skeleton className="h-4 w-[80%] mb-2" />
                <div className="flex items-center">
                  <Skeleton className="h-4 w-[30%] mr-2" />
                  <Skeleton className="h-4 w-[10px] rounded-full" />
                  <Skeleton className="h-4 w-[40%] ml-2" />
                </div>
                <Skeleton className="h-4 w-[60%] mt-2" />
              </div>
            </div>
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
