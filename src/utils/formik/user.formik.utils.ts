import {object, ref, string} from 'yup';
import {SignUpInitialValues} from "../../interfaces/user.interfaces";

export class UserFormikUtils {
	public static PasswordRules () {
		return /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
	}

	public static SignInInitialValues() {
		return {
			email: "",
			password: "",
		}
	}

	public static SignInSchema() {
		return object().shape({
			email: string().email('Email is invalid').required('Email is required'),
			password: string().required('Password is required'),
		});
	}

	public static SignUpInitialValues(): SignUpInitialValues {
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
		return object().shape({
			first_name: string().required('First name is required'),
			last_name: string().required("Last name is required"),
			email: string().email('Email is invalid').required('Email is required'),
			phone_number: string().required('Phone number is required'),
			password: string().
			min(8, "Minimum 8 characters").
			matches(this.PasswordRules(), "Minimum 8 characters, 1 uppercase, 1 letter, and 1 number").
			required('Password is required'),
			confirm_password: string().
			oneOf([ref("password")], "Password Must Match!").
			required("Confirm password must match!")
		})
	}
}