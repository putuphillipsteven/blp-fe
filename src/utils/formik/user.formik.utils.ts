import * as Yup from 'yup';
import { ObjectSchema } from "yup";
import { User } from "../../entities/user.ts"

export class UserFormikUtils {
	public static SignInInitialValues() {
		return {
			email: "",
			password: "",
		}
	}

	public static SignInSchema() {
		return Yup.object().shape({
			email: Yup.string().email('Email is invalid').required('Email is required'),
			password: Yup.string().required('Password is required'),
		});
	}

	public static SignUpInitialValues() {
		return {
			first_name: "",
			last_name: "",
			email: "",
			phone_number: "",
			password: "",
			confirm_password: "",
			gender_id: 0,
		}
	}

	public static SignUpSchema() {
		const schema: ObjectSchema<User> = Yup.object({
			first_name: Yup.string().required('First name is required'),
			email: Yup.string().email('Email is invalid').required('Email is required'),
			phone_number: Yup.string().required('Phone number is required'),
			password: Yup.string().required('Password is required'),

		})
	}

}