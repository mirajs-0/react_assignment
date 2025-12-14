import {useState} from 'react';
import {useMedia} from '../hooks/apiHooks';
import SingleView from '../components/SingleView';
import MediaRow from '../components/MediaRow';

const Home = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const {mediaArray} = useMedia();

  return (
    <>
      <h2>Media Items</h2>
      <SingleView item={selectedItem} setSelectedItem={setSelectedItem} />
      <table border="1" style={{width: '100%', borderCollapse: 'collapse'}}>
        <thead>
          <tr>
            <th>Thumbnail</th>
            <th>Title</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          {mediaArray.map((mediaItem) => (
            <MediaRow
              key={mediaItem.media_id}
              item={mediaItem}
              setSelectedItem={setSelectedItem}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Home;
