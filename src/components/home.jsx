const React = require('react');
import GuideItem from './GuideItem';

function Home(props) {
  const display = props.data.map((item, index) => {
    return <GuideItem item={item} key={index} />;
  });
  return <div>{display}</div>;
}

export default Home;

//module.exports = home;
