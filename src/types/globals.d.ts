interface Beverage {
  name: string;
  can_type: string;
  main_color: string;
  available_sizes: { image: string; volume: string }[];
  bitterness: string;
  alcohol_content: string;
  nutrients: { icon: string; name: string; amount: string }[];
  ingredients: { icon: string; name: string }[];
  origin: { icon: string; name: string }[];
  tasting_notes: { icon: string; name: string }[];
  pairing: { icon: string; name: string }[];
  ideal_glass: { icon: string; name: string }[];
}
