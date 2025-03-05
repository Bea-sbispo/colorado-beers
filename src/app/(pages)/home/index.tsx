"use client";

import { Ingredient } from "@/components/common/ingredient";
import { NavigationMenu } from "@/components/common/navigation-menu";
import { Nutrient } from "@/components/common/nutrient";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import ibuFilledActive from "/public/img/icons/ibu_active_filled_icon.svg";
import ibuEmpty from "/public/img/icons/ibu_empty_icon.svg";
import ibuFilled from "/public/img/icons/ibu_filled_icon.svg";
import loader from "/public/loader.gif";

interface Beverage {
  name: string;
  can_type: string;
  available_sizes: { image: string; volume: string }[];
  bitterness: string;
  alcohol_content: string;
  nutrients: { icon: string; name: string; amount: string }[];
  ingredients: { icon: string; name: string }[];
  main_color: string;
}

export function HomePage() {
  const [beers, setBeers] = useState<Beverage[]>([]);
  const [selectedBeer, setSelectedBeer] = useState<Beverage | null>(null);
  const [selectedSizeImage, setSelectedSizeImage] = useState<string>("");
  const [isLoadingPage, setIsLoadingPage] = useState(true);

  useEffect(() => {
    const fetchBeers = async () => {
      try {
        const response = await fetch("/api/beers");
        const data = await response.json();
        setBeers(data);
        setSelectedBeer(data[0]);
        setSelectedSizeImage(data[0]?.available_sizes[0]?.image || "");
      } catch (error) {
        console.error("Erro ao buscar as cervejas:", error);
      } finally {
        setIsLoadingPage(false);
      }
    };
    fetchBeers();
  }, []);

  const changeBeer = (direction: "prev" | "next") => {
    if (!selectedBeer) return;
    const currentIndex = beers.findIndex(
      (beer) => beer.name === selectedBeer.name,
    );
    let newIndex = direction === "prev" ? currentIndex - 1 : currentIndex + 1;

    if (newIndex < 0) newIndex = beers.length - 1;
    if (newIndex >= beers.length) newIndex = 0;

    setSelectedBeer(beers[newIndex]);
    setSelectedSizeImage(beers[newIndex]?.available_sizes[0]?.image || "");
    console.log(selectedBeer);
  };

  const handleSizeChange = (image: string) => {
    setSelectedSizeImage(image);
  };

  return (
    <>
      <NavigationMenu />
      <section className="flex h-[100vh]">
        <div className="bg-colorado grid w-full grid-cols-1 lg:grid-cols-2">
          {isLoadingPage ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="loader"
            >
              <div className="absolute z-50 flex h-dvh w-dvw items-center justify-center bg-[#180f05]/85">
                <Image src={loader} alt="Loading..." className="size-64" />
              </div>
            </motion.div>
          ) : (
            <>
              {/* Lado Esquerdo - Nutrientes e Ingredientes */}
              <motion.aside
                className="hidden h-dvh w-full flex-col items-center justify-center gap-10 pt-24 lg:flex"
                initial={{ backgroundColor: "#1268b8" }}
                animate={{ backgroundColor: selectedBeer?.main_color }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <AnimatePresence mode="wait">
                  {selectedBeer && (
                    <motion.div
                      key={selectedBeer.name}
                      initial={{ opacity: 0, x: "-100%" }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: "-100%" }}
                      transition={{ duration: 1, ease: [0.43, 0, 0.23, 1.3] }}
                      className="flex h-[600px] flex-col items-center justify-center gap-6"
                      style={{ width: "calc(100% - 270px)" }}
                    >
                      <div className="flex w-full flex-col items-center gap-10">
                        <h5 className="text-[40px] font-bold capitalize text-background">
                          Nutrientes
                        </h5>
                        <div className="grid grid-cols-2 justify-center gap-5">
                          {selectedBeer.nutrients.map((nutrient) => (
                            <Nutrient
                              key={nutrient.name}
                              nutrientName={nutrient.name}
                              nutrientIcon={nutrient.icon}
                              nutrientAmount={nutrient.amount}
                            />
                          ))}
                        </div>
                      </div>
                      <div className="flex w-full flex-col items-center gap-10">
                        <h5 className="text-[40px] font-bold capitalize text-background">
                          Ingredientes
                        </h5>
                        <div
                          className={`grid grid-cols-${selectedBeer.ingredients.length} grid-flow-col justify-center gap-5`}
                        >
                          {selectedBeer.ingredients.map((ingredient) => (
                            <Ingredient
                              key={ingredient.name}
                              ingredientName={ingredient.name}
                              ingredientIcon={ingredient.icon}
                            />
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.aside>

              {/* Imagem do Produto */}
              <AnimatePresence mode="wait">
                {selectedBeer && !isLoadingPage && (
                  <motion.div
                    key={selectedSizeImage}
                    initial={{ opacity: 0, y: "100%" }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: "-100%" }}
                    transition={{ duration: 1.2, ease: [0.43, 0, 0.23, 1.2] }}
                    className="product-position absolute flex h-dvh w-fit items-end justify-center lg:items-center"
                  >
                    <Image
                      src={`/img/products/${selectedSizeImage}`}
                      alt={selectedBeer.name}
                      width={400}
                      height={1000}
                      className="absolute max-w-[150px] opacity-100 transition-opacity duration-500 lg:max-h-[650px] lg:max-w-[270px]"
                    />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Lado Direito - Informações da Cerveja */}
              <aside className="absolute right-0 flex h-dvh w-1/2 items-center justify-center pt-24">
                <AnimatePresence mode="wait">
                  {selectedBeer && (
                    <motion.div
                      key={selectedBeer.name}
                      initial={{ opacity: 0, x: "100%" }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: "100%" }}
                      transition={{ duration: 1, ease: [0.43, 0, 0.23, 1.3] }}
                      className="right-size flex h-[600px] flex-col items-start justify-start gap-3 px-4 lg:justify-center lg:gap-6"
                    >
                      <h5 className="text-[55px] font-bold capitalize leading-none text-foreground">
                        {selectedBeer.name}
                      </h5>
                      <h4 className="text-[28px] font-medium uppercase text-foreground">
                        {selectedBeer.can_type}
                      </h4>
                      <p className="max-w-[500px] text-xs font-medium text-foreground">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Illo dolores itaque magni quisquam autem? Officia iusto
                        iure iste, sequi, fugit dolore amet ducimus voluptate
                        consequuntur vitae quidem animi pariatur quae.
                      </p>
                      <div>
                        <h4 className="mb-4 text-2xl capitalize text-foreground">
                          Disponível em
                        </h4>
                        <div
                          className={`grid grid-cols-2 justify-center gap-2 lg:grid-cols-4`}
                        >
                          {selectedBeer.available_sizes.map((size) => (
                            <Button
                              key={size.volume}
                              variant={"outline"}
                              onClick={() => handleSizeChange(size.image)}
                              className="text-xs font-bold uppercase"
                            >
                              {size.volume}
                            </Button>
                          ))}
                        </div>
                      </div>
                      <div>
                        <Button
                          variant={"primary"}
                          className="h-11 w-40 text-xs font-bold"
                        >
                          Onde comprar
                        </Button>
                      </div>
                      <div className="flex w-full flex-col lg:flex-row">
                        <div className="flex w-1/2 flex-col items-start justify-start">
                          <h5 className="text-xl font-bold uppercase">
                            Amargor (IBU): {selectedBeer.bitterness}
                          </h5>
                          <div className="flex gap-2">
                            {[...Array(6)].map((_, index, arr) => {
                              const bitternessMatch =
                                selectedBeer.bitterness.match(/\d+(\.\d+)?/);
                              const bitternessValue = bitternessMatch
                                ? Number(bitternessMatch[0])
                                : NaN;
                              const filledThreshold = (index + 1) * 10;
                              const isFilled =
                                bitternessValue >= filledThreshold;

                              // Verifica se é o último item preenchido
                              const nextFilledThreshold = (index + 2) * 10;
                              const isLastFilled =
                                isFilled &&
                                (bitternessValue < nextFilledThreshold ||
                                  index === arr.length - 1);

                              return (
                                <Image
                                  key={index}
                                  src={
                                    isLastFilled
                                      ? ibuFilledActive
                                      : isFilled
                                        ? ibuFilled
                                        : ibuEmpty
                                  }
                                  alt="ibu level"
                                  width={25}
                                  height={45}
                                />
                              );
                            })}
                          </div>
                        </div>

                        <div className="flex w-1/2 flex-col items-start justify-start">
                          <h5 className="text-xl font-bold uppercase">
                            Teor alcoólico
                          </h5>
                          <h4 className="text-[22px] font-bold">
                            {selectedBeer.alcohol_content}
                          </h4>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </aside>
              <div className="absolute right-0 top-20 flex w-fit items-end gap-2 pe-4 lg:bottom-10 lg:right-10">
                <Button
                  variant={"ghost"}
                  className="size-12 rounded-full bg-transparent shadow-lg"
                  onClick={() => changeBeer("prev")}
                >
                  <Icon icon={"lucide:chevron-left"} />
                </Button>
                <Button
                  variant={"ghost"}
                  className="size-12 rounded-full bg-transparent shadow-lg"
                  onClick={() => changeBeer("next")}
                >
                  <Icon icon={"lucide:chevron-right"} />
                </Button>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}
