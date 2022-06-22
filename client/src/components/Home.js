import Navigation from './navbar';
import '../index.css';
const React = require('react');


function Home(){
    return (
        <main>
            <div>
                <Navigation />
            </div>
            <div >
                <img id="banner" src="https://document-export.canva.com/Oveq4/DAFDaSOveq4/19/thumbnail/0001.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUHWDTJW6UD%2F20220613%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220613T121616Z&X-Amz-Expires=34959&X-Amz-Signature=e7b17f751ebb1730ff472618c5db412c899447f015f6c70f17e3a8c55714cec9&X-Amz-SignedHeaders=host&response-expires=Mon%2C%2013%20Jun%202022%2021%3A58%3A55%20GMT"
                    alt="home banner">
                </img>
            </div>
            <h1>Home</h1>
        </main>
    )
}

export default Home