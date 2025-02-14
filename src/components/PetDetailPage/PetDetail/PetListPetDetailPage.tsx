import { PetCard } from "@/components/Cards/PetCard";
import { Skeleton } from "@/components/ui/skeleton";
import { fetchRandomPetsBySize } from "@/services/pet.service";
import { PetProps } from "@/types/PetType";
import { useState, useEffect, useCallback } from "react";

interface PetListPetDetailPageProps {
  excludeUuid?: string;
  size?: string;
}

export const PetListPetDetailPage = ({
  excludeUuid,
  size,
}: PetListPetDetailPageProps) => {
  const [pets, setPets] = useState<PetProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const loadPetsBySize = useCallback(async () => {
    setLoading(true);
    const res = await fetchRandomPetsBySize(size, excludeUuid);
    if (res) {
      setPets(res as PetProps[]);
    }
    setLoading(false);
  }, [size, excludeUuid]);

  useEffect(() => {
    loadPetsBySize();
  }, [loadPetsBySize]);

  if (loading) {
    return (
      <div className="grid md:grid-cols-4 grid-cols-2 gap-3 md:gap-[20px] mx-4 sm:mx-0">
        {Array(4)
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
                  <Skeleton className="hidden sm:block h-4 w-[10px] rounded-full" />
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
    <div className="grid md:grid-cols-4 grid-cols-2 mb-4 my-[6px] gap-3 md:gap-[20px] mx-4 sm:mx-0">
      {pets.map((pet) => (
        <PetCard key={pet.uuid || pet.sku_code} pet={pet} />
      ))}
    </div>
  );
};
