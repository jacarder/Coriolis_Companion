export type Json =
	| string
	| number
	| boolean
	| null
	| { [key: string]: Json }
	| Json[]

export interface Database {
	public: {
		Tables: {
			bazaar_categories: {
				Row: {
					id: number
					created_at: string | null
					title: string | null
				}
				Insert: {
					id?: number
					created_at?: string | null
					title?: string | null
				}
				Update: {
					id?: number
					created_at?: string | null
					title?: string | null
				}
			}
			bazaar_items: {
				Row: {
					id: number
					created_at: string | null
					name: string
					bonus_effects: string[] | null
					cost: number
					weight: number | null
					tech_tier: string
					bazaar_categories_id: number
					description: string
				}
				Insert: {
					id?: number
					created_at?: string | null
					name: string
					bonus_effects?: string[] | null
					cost: number
					weight?: number | null
					tech_tier?: string
					bazaar_categories_id: number
					description: string
				}
				Update: {
					id?: number
					created_at?: string | null
					name?: string
					bonus_effects?: string[] | null
					cost?: number
					weight?: number | null
					tech_tier?: string
					bazaar_categories_id?: number
					description?: string
				}
			}
			systems: {
				Row: {
					id: string
					created_at: string
					name: string
					planet_count: number
					longitude: number
					latitude: number
				}
				Insert: {
					id?: string
					created_at?: string
					name: string
					planet_count: number
					longitude?: number
					latitude?: number
				}
				Update: {
					id?: string
					created_at?: string
					name?: string
					planet_count?: number
					longitude?: number
					latitude?: number
				}
			}
		}
		Views: {
			[_ in never]: never
		}
		Functions: {
			[_ in never]: never
		}
		Enums: {
			[_ in never]: never
		}
	}
}
