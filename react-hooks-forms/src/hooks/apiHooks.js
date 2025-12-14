import {useState, useEffect} from 'react';

const useMedia = () => {
  const [mediaArray, setMediaArray] = useState([]);

  useEffect(() => {
    const fetchMedia = async () => {
      try {
        const response = await fetch(import.meta.env.VITE_MEDIA_API + '/media');
        const mediaData = await response.json();

        const mediaWithUsers = await Promise.all(
          mediaData.map(async (item) => {
            try {
              const userResponse = await fetch(
                import.meta.env.VITE_AUTH_API + '/users/' + item.user_id
              );

              if (!userResponse.ok) {
                console.error(
                  'Failed to fetch user:',
                  item.user_id,
                  userResponse.status
                );
                return {...item, username: 'Unknown'};
              }

              const userData = await userResponse.json();
              return {...item, username: userData.username || 'Unknown'};
            } catch (err) {
              console.error('Error fetching user:', item.user_id, err);
              return {...item, username: 'Unknown'};
            }
          })
        );

        setMediaArray(mediaWithUsers);
      } catch (error) {
        console.error('Error fetching media:', error);
      }
    };

    fetchMedia();
  }, []);

  return {mediaArray};
};

const fetchData = async (url, options = {}) => {
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return await response.json();
};

const useAuthentication = () => {
  const postLogin = async (inputs) => {
    const fetchOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputs),
    };
    const loginResult = await fetchData(
      import.meta.env.VITE_AUTH_API + '/auth/login',
      fetchOptions
    );
    return loginResult;
  };

  return {postLogin};
};

const useUser = () => {
  const getUserByToken = async (token) => {
    const fetchOptions = {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    };
    const userData = await fetchData(
      import.meta.env.VITE_AUTH_API + '/users/token',
      fetchOptions
    );
    return userData;
  };

  const postUser = async (inputs) => {
    const fetchOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputs),
    };
    const userResult = await fetchData(
      import.meta.env.VITE_AUTH_API + '/users',
      fetchOptions
    );
    return userResult;
  };

  return {getUserByToken, postUser};
};

export {useMedia, useAuthentication, useUser};
