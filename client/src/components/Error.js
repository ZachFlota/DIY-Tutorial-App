import errorPic from '../images/error.jpg'
const React = require("react");


function Error() {
  return (
    <main>
      <h1>404: PAGE NOT FOUND</h1>
      <p>Oops, sorry, we can't find this page!</p>
      <img src={errorPic} alt="screaming dog" />
    </main>
  );
}

export default Error;
