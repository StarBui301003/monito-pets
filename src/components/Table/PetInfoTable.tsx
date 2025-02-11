export const PetInfoTable = () => {
  const rows = [
    { label: "SKU", value: "" },
    { label: "Gender", value: "" },
    { label: "Age", value: "" },
    { label: "Size", value: "" },
    { label: "Color", value: "" },
    { label: "Vaccinated", value: "" },
    { label: "Dewormed", value: "" },
    { label: "Cert", value: "" },
    { label: "Microchip", value: "" },
    { label: "Location", value: "" },
    { label: "Published Date", value: "" },
    { label: "Additional Information", value: "" },
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
