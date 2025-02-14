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

export const fetchRandomPetsBySize = async (
  size?: string,
  excludeUuid?: string
) => {
  let query = supabase
    .from("Pets")
    .select("*")
    .order("created_at", { ascending: false })
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
