export interface PetProps {
  uuid: string;
  sku_code: string;
  image: string[];
  name: string;
  price: number;
  gender: string;
  age: string;
  size?: string;
  color?: string[];
  vaccinated?: boolean;
  dewormed?: boolean;
  cert?: string;
  additional_information?: string;
  microchip?: boolean;
  location?: string;
  created_at?: string;
  updated_at?: string;
}

export interface FilterProps {
  order?: string;
  limit?: number;
  ascending?: boolean;
}

export interface PetListPetDetailPageProps {
  excludeUuid?: string;
  size?: string;
}
