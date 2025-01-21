import Image from "next/image";
import { beers } from "../data/beverages";

export default function Home() {
  return (
    <div className="container mx-auto text-black p-4">
      <h1 className="text-3xl font-bold mb-6">Nossas Cervejas</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {beers.map((beer: Beverage, index: number) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-4">
            {/* Imagem da cerveja */}

            {/* Nome da cerveja */}
            <h2 className="text-xl font-semibold">{beer.name}</h2>

            {/* Tipo de embalagem */}
            <p className="text-sm text-gray-500">{beer.can_type}</p>

            {/* Informações de conteúdo */}
            <div className="mt-4">
              <p>
                <strong>Amargor:</strong> {beer.bitterness}
              </p>
              <p>
                <strong>Teor alcoólico:</strong> {beer.alcohol_content}
              </p>
            </div>

            {/* Tamanho disponível */}
            <div className="mt-4">
              <h3 className="font-semibold">Tamanhos disponíveis:</h3>
              {beer.available_sizes.map((size, idx) => (
                <div key={idx} className="flex items-center">
                  <Image
                    src={`/images/${size.image}`}
                    alt={`${beer.name} ${size.volume}`}
                    className="w-12 h-12 object-cover mr-2"
                  />
                  <span>{size.volume}</span>
                </div>
              ))}
            </div>

            {/* Ingredientes */}
            <div className="mt-4">
              <h3 className="font-semibold">Ingredientes:</h3>
              <ul>
                {beer.ingredients.map((ingredient, idx) => (
                  <li key={idx} className="flex items-center">
                    <Image
                      src={`/images/${ingredient.icon}`}
                      alt={ingredient.name}
                      className="w-6 h-6 mr-2"
                    />
                    {ingredient.name}
                  </li>
                ))}
              </ul>
            </div>

            {/* Notas de degustação */}
            <div className="mt-4">
              <h3 className="font-semibold">Notas de Degustação:</h3>
              {beer.tasting_notes.map((note, idx) => (
                <div key={idx} className="flex items-center">
                  <Image
                    src={`/images/${note.icon}`}
                    alt={note.name}
                    className="w-6 h-6 mr-2"
                  />
                  {note.name}
                </div>
              ))}
            </div>

            {/* Combinações recomendadas */}
            <div className="mt-4">
              <h3 className="font-semibold">Harmonização:</h3>
              {beer.pairing.map((pair, idx) => (
                <div key={idx} className="flex items-center">
                  <Image
                    src={`/images/${pair.icon}`}
                    alt={pair.name}
                    className="w-6 h-6 mr-2"
                  />
                  {pair.name}
                </div>
              ))}
            </div>

            {/* Copo ideal */}
            <div className="mt-4">
              <h3 className="font-semibold">Copo Ideal:</h3>
              {beer.ideal_glass.map((glass, idx) => (
                <div key={idx} className="flex items-center">
                  <Image
                    src={`/images/${glass.icon}`}
                    alt={glass.name}
                    className="w-6 h-6 mr-2"
                  />
                  {glass.name}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
