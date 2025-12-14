const SingleView = ({item}) => {
  return <div>{item ? `Selected: ${item.title}` : 'No item selected'}</div>;
};
export default SingleView;
