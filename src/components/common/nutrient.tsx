import Image from "next/image";

type NutrientTypes = {
  nutrientName: string;
  nutrientIcon: string;
  nutrientAmount: string;
};

export function Nutrient({
  nutrientName,
  nutrientIcon,
  nutrientAmount,
}: Readonly<NutrientTypes>) {
  return (
    <div
      key={nutrientName}
      className="flex items-center justify-center gap-x-2"
    >
      <Image
        src={`/img/icons/${nutrientIcon}`}
        alt={nutrientName}
        width={50}
        height={50}
        className="invert filter"
      />
      <div>
        <p className="text-center text-[14px] font-bold text-background">
          {nutrientName}
        </p>
        <p className="text-center text-[10px] font-bold text-background">
          {nutrientAmount}
        </p>
      </div>
    </div>
  );
}
