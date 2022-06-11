import { useState } from 'react';
import { Link } from 'react-router-dom';

function GuideItem(props) {
  console.log(props);
  let [view, setView] = useState(false);

  const simpleStyle = {
    width: '25vw',
    height: '20vh',
    border: '1px solid black',
    margin: '2px',
  };

  const detailStyle = {
    width: '80vw',
    height: '20vh',
    border: '1px solid black',
    margin: '2px',
    backgroundImage: `url(${props.item.artworkUrl100})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    color: 'yellow',
  };

  const simpleView = () => {
    return (
      <div style={simpleStyle}>
        <h3>{props.item./*name in db*/}</h3>
        <h4>{props.item./*name in db*/}</h4>
      </div>
    );
  };

  const detailView = () => {
    return (
      <div style={detailStyle}>
        <h2>{props.item./*name in db*/}</h2>
        <h3>
          <Link to={`/guide/${props.item./*name in db*/}`}>
            {props.item./*name in db*/}
          </Link>
        </h3>
      </div>
    );
  };

  return (
    <div onClick={() => setView(!view)} style={{ display: 'inline-block' }}>
      <p>One Guide Item</p>
      {view ? detailView() : simpleView()}
    </div>
  );
}

export default GuideItem;
