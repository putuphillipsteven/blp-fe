import {
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Heading,
    Icon,
    Input,
    InputGroup,
    InputRightElement,
    Modal,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Text,
    useDisclosure,
    useTheme,
    useToast,
    VStack,
} from '@chakra-ui/react';
import {useFormik} from 'formik';
import {UserFormikUtils} from '../../../utils/formik/user.formik.utils';
import {useState} from 'react';
import {IoEye, IoEyeOff} from 'react-icons/io5';
import {useDispatch} from 'react-redux';
import {login} from '../../../utils/redux/reducer/auth-reducer';
import {AppDispatch} from '../../../utils/redux/store';
import {useNavigate} from 'react-router-dom';
import SuccessToast from '../../component/success-toast';
import ErrorToast from '../../component/error-toast';
import axios from 'axios';

export default function SignInModal() {
    const [showPassword, setShowPassword] = useState(false);
    const toast = useToast();
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    const theme = useTheme();
    const {isOpen, onOpen, onClose} = useDisclosure();

    const formik = useFormik({
        validateOnChange: true,
        validateOnBlur: true,
        initialValues: UserFormikUtils.SignInInitialValues(),
        validationSchema: UserFormikUtils.SignInSchema(),
        onSubmit: async (values, {resetForm}) => {
            try {
                const userData = await dispatch(login(values));
                const role_id = userData?.data?.data.user.role_id;

                toast({
                    duration: 2000,
                    position: 'bottom',
                    render: () => <SuccessToast message='Login Success'/>,
                });

                if (role_id === 3) {
                    navigate('/', {replace: true});
                    onClose();
                } else {
                    navigate('/dashboard/overview', {replace: true});
                }

                resetForm({values: {email: '', password: ''}});
            } catch (err: unknown) {
                let errorMessage = 'Something went wrong';

                if (axios.isAxiosError(err)) {
                    errorMessage = err.response?.data?.errors?.message || 'An error occurred';
                } else {
                    errorMessage = err?.message;
                }

                console.error('sign in modal error: ', err);

                toast({
                    duration: 2000,
                    position: 'bottom',
                    render: () => <ErrorToast message={errorMessage}/>,
                });
            }
        },
    });

    const customOnClose = () => {
        formik.resetForm();
        onClose();
    };

    return (
        <>
            <Button
                onClick={onOpen}
                bgColor={theme.colors.background}
                border={`2px solid ${theme.colors.primary}`}
                shadow={`0 4px 0 ${theme.colors.primary}`}
            >
                Sign In
            </Button>
            <Modal isOpen={isOpen} onClose={customOnClose} closeOnOverlayClick={false}>
                <ModalOverlay/>
                <ModalContent w={'100%'} mx={'1em'}>
                    <ModalHeader>
                        <Heading as={'h1'} size={'md'}>
                            Sign In
                        </Heading>
                    </ModalHeader>
                    <form onSubmit={formik.handleSubmit}>
                        <VStack px={'1em'} align={'stretch'} spacing={'1em'}>
                            <FormControl isInvalid={!!(formik.touched.email && formik.errors.email)}>
                                <FormLabel w={'fit-content'} _hover={{cursor: 'pointer'}}>
                                    Email
                                </FormLabel>
                                <Input
                                    autoComplete='off'
                                    name='email'
                                    placeholder='Enter your email...'
                                    type='email'
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    w={'100%'}
                                    focusBorderColor={`${theme.colors.primary}`}
                                    _invalid={{
                                        bgColor: theme.colors.background,
                                        border: `2px solid ${theme.colors.destructive}`,
                                        shadow: `0 6px 0 ${theme.colors.destructive}`,
                                    }}
                                    border={`2px solid ${
                                        formik.touched.email && formik.values.email
                                            ? formik.errors.email
                                                ? theme.colors.destructive
                                                : theme.colors.success
                                            : theme.colors.input
                                    }`}
                                    shadow={`0 6px 0 ${
                                        formik.touched.email && formik.values.email
                                            ? formik.errors.email
                                                ? theme.colors.destructive
                                                : theme.colors.success
                                            : theme.colors.input
                                    }`}
                                    _focus={{
                                        bgColor: theme.colors.background,
                                        border: `2px solid ${theme.colors.primary}`,
                                        shadow: `0 6px 0 ${theme.colors.primary}`,
                                    }}
                                />
                                {formik.touched.email && formik.errors.email && (
                                    <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                                )}
                            </FormControl>
                            <FormControl isInvalid={!!(formik.touched.password && formik.errors.password)}>
                                <FormLabel w={'fit-content'} _hover={{cursor: 'pointer'}}>
                                    Password
                                </FormLabel>
                                <InputGroup position={'relative'}>
                                    <Input
                                        autoComplete='off'
                                        name='password'
                                        placeholder='Enter your password...'
                                        w={'100%'}
                                        type={showPassword ? 'text' : 'password'}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.password}
                                        _valid={{
                                            bgColor: theme.colors.background,
                                            border: `2px solid ${theme.colors.success}`,
                                            shadow: `0 6px 0 ${theme.colors.success}`,
                                        }}
                                        _invalid={{
                                            bgColor: theme.colors.background,
                                            border: `2px solid ${theme.colors.destructive}`,
                                            shadow: `0 6px 0 ${theme.colors.destructive}`,
                                        }}
                                        focusBorderColor={`${theme.colors.primary}`}
                                        border={`2px solid ${
                                            formik.touched.password && formik.values.password
                                                ? formik.errors.password
                                                    ? theme.colors.destructive
                                                    : theme.colors.success
                                                : theme.colors.input
                                        }`}
                                        shadow={`0 6px 0 ${
                                            formik.touched.password && formik.values.password
                                                ? formik.errors.password
                                                    ? theme.colors.destructive
                                                    : theme.colors.success
                                                : theme.colors.input
                                        }`}
                                        _focus={{
                                            bgColor: theme.colors.background,
                                            border: `2px solid ${theme.colors.primary}`,
                                            shadow: `0 6px 0 ${theme.colors.primary}`,
                                        }}
                                    />
                                    <InputRightElement>
                                        <Button
                                            variant={'ghost'}
                                            onClick={() => setShowPassword((show) => !show)}
                                            backgroundColor={'transparent'}
                                            height={'64px'}
                                            color={'#707070'}
                                        >
                                            {showPassword ? (
                                                <Icon as={IoEye} position={'absolute'}/>
                                            ) : (
                                                <Icon as={IoEyeOff} position={'absolute'}/>
                                            )}
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                                {formik.touched.password && formik.errors.password && (
                                    <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
                                )}
                            </FormControl>
                            <Text fontSize={'sm'} color={`${theme.colors.link}`} as={'u'}>
                                Forgot Password?
                            </Text>
                            <Button
                                type='submit'
                                onClick={onOpen}
                                bgColor={theme.colors.link}
                                color={theme.colors.background}
                                border={`2px solid ${theme.colors.primary}`}
                                shadow={`0 6px 0 ${theme.colors.primary}`}
                            >
                                Sign In
                            </Button>
                            <Text align={'center'}>
                                Dont have an account?{' '}
                                <Text
                                    as={'span'}
                                    color={`${theme.colors.link}`}
                                    fontWeight={'bold'}
                                    textDecoration={'underline'}
                                >
                                    Sign Up Here
                                </Text>
                            </Text>
                        </VStack>
                    </form>
                    <ModalCloseButton/>
                    <ModalFooter></ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}
