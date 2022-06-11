import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

function GuideView() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [guideData, setGuideData] = useState([]);

  useEffect(() => {
    const dbr = /*database route*/;
    const fetchData = async () => {
      const response = await fetch(dbr);
      const resData = await response.json();
      setsGuideData(resData.results);
    };
    fetchData();
  }, [id]);

  const justGuides = guideData.fliter(
    (entry) => entry.collectionType === 'name in db'
  );

  const renderGuides = justGuides.map((album, i) => {
    return (
      <Link to={`/name in db/{name in db.collectionId}`}>
        <div key="">
          <p>{/*name in db*/.collectionName}</p>
        </div>
      </Link>
    );
  });

  const navButtons = () => {
    return (
      <div>
        <button onClick={() => navigate(-1)}>Back</button>
        <button onClick={() => navigate(+1)}>Foward</button>
        <button onClick={() => navigate('/')}>Home</button>
      </div>
    );
  };
  return (
    <div>
      {guideData.length > 0 ? (
        <h2>{guideData[0].albumName}</h2>
      ) : (
        <h2>Loading...</h2>
      )}
      {navButtons()}
      {renderGuides}
    </div>
  );
}

export default GuideView;
