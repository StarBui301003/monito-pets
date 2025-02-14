import { useEffect, useState } from "react";
import { fetchPetById } from "@/services/pet.service";
import { PetProps } from "@/types/PetType";
import { ScrollRestoration, useParams } from "react-router-dom";
import { PetInfo } from "@/components/PetDetailPage/PetDetail/PetInfo";
import { CustomerSwiper } from "@/components/PetDetailPage/CustomerSwiper";
import { MainContentHomePage } from "@/components/HomePage/MainContentHomePage";
import { PetListPetDetailPage } from "@/components/PetDetailPage/PetDetail/PetListPetDetailPage";
import { PetDetailPageLoading } from "@/components/PetDetailPage/PetLoading/PetDetailPageLoading";

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
      <div className="sm:mt-[120px] wrapper sm:mb-16">
        <PetDetailPageLoading />
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
        className="mb-5 mx-4 sm:mx-0"
        buttonClassName="sm:hidden hidden"
      />
      <PetListPetDetailPage excludeUuid={pet.uuid} size={pet.size} />
    </div>
  );
};
