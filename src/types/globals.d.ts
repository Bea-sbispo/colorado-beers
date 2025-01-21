interface Beverage {
  name: string;
  can_type: string;
  available_sizes: {
    image: string;
    volume: string;
  }[];
  bitterness: string;
  alcohol_content: string;
  nutrients: {
    icon: string;
    name: string;
    value: string;
  }[];
  ingredients: {
    icon: string;
    name: string;
  }[];
  origin: {
    icon: string;
    name: string;
  }[];
  tasting_notes: {
    icon: string;
    name: string;
  }[];
  pairing: {
    icon: string;
    name: string;
  }[];
  ideal_glass: {
    icon: string;
    name: string;
  }[];
  image: string;
}
