import supabase from "@/lib/supabase";
import { FilterProps, PetProps } from "@/types/PetType";

export const fetchAllPetsFilter = async (props: FilterProps) => {
  const { order = "", limit = 10, ascending = true } = props;
  const { data } = await supabase
    .from("Pets")
    .select("*")
    .order(order, { ascending })
    .limit(limit);
  return data;
};

export const fetchPetById = async (petId: string): Promise<PetProps | null> => {
  const { data, error } = await supabase
    .from("Pets")
    .select("*")
    .eq("uuid", petId)
    .single();

  if (error) {
    return null;
  }

  return data;
};
