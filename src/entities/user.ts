export class User {
	constructor(
		public id: number | null,
		public first_name: string,
		public last_name: string | null,
		public full_name: string,
		public phone_number: string,
		public second_phone_number: string | null,
		public avatar_url: string | null,
		public email: string,
		public password: string,
		public role_id: number | null,
		public gender_id: number,
		public is_verified: boolean,
		public created_at: Date,
		public updated_at: Date | null,
		public deleted_at: Date | null,
		public cashier_transactions: [] | null,
		public customer_transactions: [] | null,
		public User_Address: [] | null,
		public Booking: [] | null
	) {}
}
