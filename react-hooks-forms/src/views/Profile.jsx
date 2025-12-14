import {useState, useEffect} from 'react';
import {useUser} from '../hooks/apiHooks';

const Profile = () => {
  const [user, setUser] = useState(null);
  const {getUserByToken} = useUser();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem('token');
        if (token) {
          const userData = await getUserByToken(token);
          console.log('User data:', userData);
          setUser(userData.user);
        }
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    fetchUser();
  }, []);

  if (!user) {
    return <div>Please login to view profile</div>;
  }

  return (
    <div>
      <h2>Profile</h2>
      <p>
        <strong>Username:</strong> {user.username}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>User ID:</strong> {user.user_id}
      </p>
      <p>
        <strong>Level:</strong> {user.level_name}
      </p>
    </div>
  );
};

export default Profile;
