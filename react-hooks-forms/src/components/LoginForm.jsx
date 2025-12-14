import useForm from '../hooks/formHooks';
import {useAuthentication} from '../hooks/apiHooks';
import {useNavigate} from 'react-router-dom';

const LoginForm = () => {
  const {postLogin} = useAuthentication();
  const navigate = useNavigate();

  const initValues = {
    username: '',
    password: '',
  };

  const doLogin = async (loginInputs) => {
    try {
      console.log('Login inputs:', loginInputs);
      const loginResult = await postLogin(loginInputs);
      console.log('Login result:', loginResult);

      if (loginResult.token) {
        localStorage.setItem('token', loginResult.token);
        navigate('/');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Login failed. Please check your credentials.');
    }
  };

  const {inputs, handleInputChange, handleSubmit} = useForm(
    doLogin,
    initValues
  );

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="loginuser">Username</label>
          <input
            name="username"
            type="text"
            id="loginuser"
            onChange={handleInputChange}
            value={inputs.username}
            autoComplete="username"
          />
        </div>
        <div>
          <label htmlFor="loginpassword">Password</label>
          <input
            name="password"
            type="password"
            id="loginpassword"
            onChange={handleInputChange}
            value={inputs.password}
            autoComplete="current-password"
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default LoginForm;
