import supabase from "@/lib/supabase";
import { FilterProps } from "@/types/PetType";

export const fetchAllPetsFilter = async (props: FilterProps) => {
  const { order = "", limit = 10, ascending = true } = props;
  const { data } = await supabase
    .from("Pets")
    .select("*")
    .order(order, { ascending })
    .limit(limit);
  return data;
};
