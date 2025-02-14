import supabase from "@/lib/supabase";
import { FilterProps, PetProps } from "@/types/PetType";

const VITE_DB_NAME = import.meta.env.VITE_DB_NAME;

export const fetchAllPetsFilter = async (props: FilterProps) => {
  const { order = "", limit = 10, ascending = true } = props;
  const { data } = await supabase
    .from(VITE_DB_NAME)
    .select("*")
    .order(order, { ascending })
    .limit(limit);
  return data;
};

export const fetchPetById = async (petId: string): Promise<PetProps | null> => {
  const { data, error } = await supabase
    .from(VITE_DB_NAME)
    .select("*")
    .eq("uuid", petId)
    .single();

  if (error) {
    return null;
  }

  return data;
};

const randomSort = [
  "created_at",
  "name",
  "sku_code",
  "price",
  "gender",
  "age",
  "color",
  "vaccinated",
  "microchip",
  "cert",
];

const ascending = [true, false];

const randomIntFromInterval = (min: number, max: number) => {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const fetchRandomPetsBySize = async (
  size?: string,
  excludeUuid?: string
) => {
  const randomField =
    randomSort[randomIntFromInterval(0, randomSort.length - 1)];
  const randomOrder = ascending[randomIntFromInterval(0, ascending.length - 1)];

  let query = supabase
    .from(VITE_DB_NAME)
    .select("*")
    .order(randomField, { ascending: randomOrder })
    .limit(4);

  if (size) {
    query = query.eq("size", size);
  }
  if (excludeUuid) {
    query = query.neq("uuid", excludeUuid);
  }

  const { data, error } = await query;

  if (error) {
    console.error("Error fetching pets:", error);
    return [];
  }
  return data;
};
