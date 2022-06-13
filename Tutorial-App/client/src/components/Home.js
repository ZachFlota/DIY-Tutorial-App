const React = require('react');
import Navigation from './navbar';
import '../index.css';

function Home(){
    return (
        <main>
            <div>
                <Navigation />
            </div>
            <div >
                <img id="banner" src="https://document-export.canva.com/Oveq4/DAFDaSOveq4/19/thumbnail/0001.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUHWDTJW6UD%2F20220612%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220612T121616Z&X-Amz-Expires=27759&X-Amz-Signature=1e8f5fdf1b1660fbfebe01d2b99d251460ce2b26df7183d1d2ff602fa023142d&X-Amz-SignedHeaders=host&response-expires=Sun%2C%2012%20Jun%202022%2019%3A58%3A55%20GMT"
                    alt="home banner">
                </img>
            </div>
            <h1>Home</h1>
        </main>
    )
}

export default Home