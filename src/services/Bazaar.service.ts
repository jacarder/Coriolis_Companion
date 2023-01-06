import { BazaarCategory } from "../constants/BazaarCategory";
import { supabase } from "../utils/supabase";

export const getBazaarInventory = async (category: BazaarCategory) => {
	return (await supabase.from('bazaar_items').select().eq('bazaar_categories_id', category)).data
}
