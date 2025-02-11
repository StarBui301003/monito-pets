import { CustomerSwiper } from "@/components/PetDetailPage/CustomerSwiper";
import { PetInfo } from "@/components/PetDetailPage/PetDetail/PetInfo";

export const PetDetail = () => {
  return (
    <div className="wrapper mt-[120px] w-full">
      <PetInfo />
      <CustomerSwiper />
    </div>
  );
};
