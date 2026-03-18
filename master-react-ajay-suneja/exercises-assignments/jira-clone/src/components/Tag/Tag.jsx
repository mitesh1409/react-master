import './Tag.css';

function Tag(props) {
  return (
    <button className='tag'>{props.name}</button>
  );
}

export default Tag;
