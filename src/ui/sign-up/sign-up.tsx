import {Heading, useTheme, useToast, VStack} from '@chakra-ui/react';
import {useNavigate} from "react-router-dom";
import {useFormik} from "formik";
import {UserFormikUtils} from "../../utils/formik/user.formik.utils";

export default function SignUp() {
	const [showPassword, setShowPassword] = useState(false);

	const toast = useToast();

	const navigate = useNavigate();

	const theme = useTheme();

	const formik = useFormik({
		validateOnChange: true,
		validateOnBlur: true,
		initialValues: UserFormikUtils.SignUpInitialValues(),
		validationSchema: UserFormikUtils.SignInSchema(),
		onSubmit: async () {}
	})

	return (
		<VStack minH={'100vh'} w={'100vw'} alignItems={'center'} justifyContent={'start'} maxW={'100vw'} p={"1em"}>
			<Heading as={'h1'} fontSize={'2xl'}>Sign Up</Heading>
		</VStack>
	);
}
