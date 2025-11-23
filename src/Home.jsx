import React, {useState, useEffect} from 'react';

function Home() {
  const [mediaArray, setMediaArray] = useState([]);

  useEffect(() => {
    const fetchMedia = async () => {
      try {
        const response = await fetch('test.json');
        const data = await response.json();
        setMediaArray(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching media:', error);
      }
    };

    fetchMedia();
  }, []);

  return (
    <div>
      <h2>Home Component</h2>
      {mediaArray.map((media) => (
        <div key={media.id}>{media.title}</div>
      ))}
    </div>
  );
}

export default Home;
