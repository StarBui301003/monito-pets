import {
  PARTNER1,
  PARTNER2,
  PARTNER3,
  PARTNER4,
  PARTNER5,
  PARTNER6,
  PARTNER7,
} from "@/assets/img";

export const Partners = () => {
  return (
    <div className="hidden sm:grid grid-cols-7 mb-4">
      <img src={PARTNER1} alt="" />
      <img src={PARTNER2} alt="" />
      <img src={PARTNER3} alt="" />
      <img src={PARTNER4} alt="" />
      <img src={PARTNER5} alt="" />
      <img src={PARTNER6} alt="" />
      <img src={PARTNER7} alt="" />
    </div>
  );
};
