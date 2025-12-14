const MediaRow = ({item, setSelectedItem}) => {
  const thumbnailUrl = `${item.filename}`;

  console.log('Filename:', item.filename);
  console.log('Full URL:', thumbnailUrl);

  return (
    <tr onClick={() => setSelectedItem(item)} style={{cursor: 'pointer'}}>
      <td>
        <img
          src={thumbnailUrl}
          alt={item.title}
          style={{width: '100px', height: '100px', objectFit: 'cover'}}
          onError={(e) => {
            console.log('Image failed to load:', thumbnailUrl);
            e.target.src = 'https://via.placeholder.com/100';
          }}
        />
      </td>
      <td>{item.title}</td>
      <td>{item.username}</td>
    </tr>
  );
};

export default MediaRow;
