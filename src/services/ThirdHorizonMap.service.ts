import { supabase } from "../utils/supabase";
export const getSystemDetails = async (systemId: string) => {
	return (await supabase.from('systems').select('*').eq('id', systemId).limit(1).single()).data;

}
export const getSystems = async () => {
	return (await supabase.from('systems').select('*')).data ?? [];
}
