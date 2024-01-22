import axios from "axios";

interface SignupDetails {
  firstName: string;
  email: string;
  password: string;
  mobileNumber: string;
}

const SignUp = async (signUpDetails: SignupDetails) => {
  try {
    console.log(signUpDetails);

    const response = await axios.post('https://bookstore.incubation.bridgelabz.com/bookstore_user/registration', signUpDetails);
    console.log(response);
    localStorage.setItem('Token', response.data.id);
  } catch (error) {
    console.error(error);
  }
};

export default SignUp;
