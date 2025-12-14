import useForm from '../hooks/formHooks';
import {useUser} from '../hooks/apiHooks';

const RegisterForm = () => {
  const {postUser} = useUser();

  const initValues = {
    username: '',
    email: '',
    password: '',
  };

  const doRegister = async (registerInputs) => {
    try {
      console.log('Register inputs:', registerInputs);
      const registerResult = await postUser(registerInputs);
      console.log('Register result:', registerResult);

      if (registerResult.user) {
        alert('Registration successful! Please login.');
      }
    } catch (error) {
      console.error('Register error:', error);
      alert('Registration failed. Username or email might already exist.');
    }
  };

  const {inputs, handleInputChange, handleSubmit} = useForm(
    doRegister,
    initValues
  );

  return (
    <>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            name="username"
            type="text"
            id="username"
            onChange={handleInputChange}
            value={inputs.username}
            autoComplete="username"
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="email"
            id="email"
            onChange={handleInputChange}
            value={inputs.email}
            autoComplete="email"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            id="password"
            onChange={handleInputChange}
            value={inputs.password}
            autoComplete="new-password"
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default RegisterForm;
