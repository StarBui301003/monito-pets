import { useEffect, useState } from "react";
import { fetchPetById } from "@/services/pet.service";
import { PetProps } from "@/types/PetType";
import { ScrollRestoration, useParams } from "react-router-dom";
import { Skeleton } from "@/components/ui/skeleton";
import { PetInfo } from "@/components/PetDetailPage/PetDetail/PetInfo";
import { CustomerSwiper } from "@/components/PetDetailPage/CustomerSwiper";
import { MainContentHomePage } from "@/components/HomePage/MainContentHomePage";
import { PetListPetDetailPage } from "@/components/PetDetailPage/PetDetail/PetListPetDetailPage";

export const PetDetail = () => {
  const { uuid } = useParams<{ uuid: string }>();
  const [pet, setPet] = useState<PetProps | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPetDetail = async () => {
      if (!uuid) return;
      setLoading(true);
      try {
        const res = await fetchPetById(uuid);
        setPet(res as PetProps);
      } catch (error) {
        console.error("Failed to fetch pet:", error);
        setPet(null);
      }
      setLoading(false);
    };

    if (uuid) loadPetDetail();
  }, [uuid]);

  if (loading) {
    return (
      <div className="container mx-auto p-4">
        <Skeleton className="w-full h-[400px] rounded-md mb-4" />
        <Skeleton className="w-1/2 h-[30px] rounded-md mb-2" />
        <Skeleton className="w-3/4 h-[20px] rounded-md" />
      </div>
    );
  }

  if (pet === null) return null;

  return (
    <div className="sm:mt-[120px] wrapper sm:mb-16">
      <ScrollRestoration />
      <PetInfo pet={pet} />
      <CustomerSwiper />
      <MainContentHomePage
        title="Related Pets"
        subtitle="Take A Look At Some Of Our Pets"
        buttonText="View more"
        buttonLink="/#"
        className="mb-5"
        buttonClassName="sm:hidden hidden"
      />
      <PetListPetDetailPage excludeUuid={pet.uuid} size={pet.size} />
    </div>
  );
};
