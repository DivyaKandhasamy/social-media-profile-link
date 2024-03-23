import "./App.css";
import img from './assets/images/avatar-jessica.jpeg';

function App() {
  return (
   <div className="card-container">
        <div className="card">
          <div className="img-div">
            <img src={img}/>
          </div>
          <div className="text-content">
             <p className="text-1">Jessica Randall</p>
             <p className="text-2">London, United Kingdom</p>
          </div>
          <span>"Front-end developer and avid reader."</span>
          <div className="div-groups">
             <div className="link-div">GitHub</div>
             <div className="link-div">Frontend Mentor</div>
             <div className="link-div">LinkedIn</div>
             <div className="link-div">Twitter</div>
             <div className="link-div">Instagram</div>
          </div>
        </div>
   </div>
  );
}

export default App;
