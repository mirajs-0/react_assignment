import {useState} from 'react';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';

const Login = () => {
  const [toggleForm, setToggleForm] = useState(true);

  return (
    <>
      {toggleForm ? <LoginForm /> : <RegisterForm />}
      <button onClick={() => setToggleForm(!toggleForm)}>
        {toggleForm
          ? 'No account? Register here'
          : 'Already have account? Login here'}
      </button>
    </>
  );
};

export default Login;
