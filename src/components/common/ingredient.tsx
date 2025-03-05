import Image from "next/image";

type IngredientTypes = {
  ingredientName: string;
  ingredientIcon: string;
};

export function Ingredient({
  ingredientName,
  ingredientIcon,
}: Readonly<IngredientTypes>) {
  return (
    <div
      key={ingredientName}
      className="flex flex-col items-center justify-center gap-y-2"
    >
      <Image
        src={`/img/icons/${ingredientIcon}`}
        alt={ingredientName}
        width={60}
        height={60}
        className="size-[60px] max-h-[60px] max-w-[60px] invert filter"
      />
      <p className="text-center text-[16px] text-background">
        {ingredientName}
      </p>
    </div>
  );
}
