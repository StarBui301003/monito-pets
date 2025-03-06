import { useEffect, useState } from "react";
import { fetchPetById } from "@/services/pet.service";
import { PetProps } from "@/types/PetType";
import { useParams } from "react-router-dom";
import { PetInfo } from "@/components/PetDetailPage/PetDetail/PetInfo";
import { CustomerSwiper } from "@/components/PetDetailPage/CustomerSwiper";
import { MainContentHomePage } from "@/components/HomePage/MainContentHomePage";
import { PetListPetDetailPage } from "@/components/PetDetailPage/PetDetail/PetListPetDetailPage";
import { PetDetailPageLoading } from "@/components/PetDetailPage/PetLoading/PetDetailPageLoading";
import { MobileDrawer } from "@/components/PetDetailPage/MobileDrawer/MobileDrawer";
import { PetDetailPageLoadingMobile } from "@/components/PetDetailPage/PetLoading/PetDetailPageLoadingMobile";

export const PetDetail = () => {
  const [pet, setPet] = useState<PetProps | null>(null);
  const [loading, setLoading] = useState(true);
  const { uuid: rawUuid } = useParams<{ uuid: string }>();
  const uuid = rawUuid?.split("id=")[1] || "";

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

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  if (loading) {
    return (
      <>
        <div className="sm:mt-[120px] wrapper sm:mb-16 sm:block hidden">
          <PetDetailPageLoading />
        </div>
        <div className="sm:mt-[120px] wrapper sm:mb-16 sm:hidden block">
          <PetDetailPageLoadingMobile />
        </div>
      </>
    );
  }

  if (pet === null) return null;

  return (
    <div className="sm:mt-[120px] wrapper sm:mb-16 overflow-y-hidden min-h-screen">
      <PetInfo
        pet={pet}
        className="sm:block hidden"
        socialMediaClassName="sm:flex hidden"
      />
      <CustomerSwiper className="sm:block hidden" />
      <MainContentHomePage
        title="Related Pets"
        subtitle="Take A Look At Some Of Our Pets"
        buttonText="View more"
        buttonLink="/#"
        className="sm:block hidden mb-5 mx-4 sm:mx-0"
        buttonClassName="sm:flex hidden"
      />
      <PetListPetDetailPage
        excludeUuid={pet.uuid}
        size={pet.size}
        className="sm:flex hidden"
        loadingClassName="sm:flex hidden"
      />
      <div className="block sm:hidden">
        <MobileDrawer pet={pet} />
      </div>
    </div>
  );
};
