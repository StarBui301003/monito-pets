import { PetProps } from "@/types/PetType";

export const PetInfoTable = ({ pet }: { pet: PetProps }) => {
  const rows = [
    { label: "SKU", value: pet.sku_code },
    { label: "Gender", value: pet.gender },
    { label: "Age", value: pet.age },
    { label: "Size", value: pet.size || "N/A" },
    { label: "Color", value: pet.color?.join(", ") || "N/A" },
    { label: "Vaccinated", value: pet.vaccinated ? "Yes" : "No" },
    { label: "Dewormed", value: pet.dewormed ? "Yes" : "No" },
    { label: "Cert", value: pet.cert || "N/A" },
    { label: "Microchip", value: pet.microchip ? "Yes" : "No" },
    { label: "Location", value: pet.location || "N/A" },
    { label: "Published Date", value: pet.created_at || "N/A" },
    {
      label: "Additional Information",
      value: pet.additional_information || "N/A",
    },
  ];

  return (
    <div>
      <div>
        {rows.map((row, index) => (
          <div
            key={index}
            className="hover:bg-transparent border-b border-neutral-10 flex items-center"
          >
            <div className="text-neutral-60 body-medium-14 pl-[11px] py-[11px] w-[194px]">
              {row.label}
            </div>
            <div className="text-neutral-60 body-medium-14">: {row.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
