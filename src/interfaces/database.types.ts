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
