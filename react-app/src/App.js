import './App.css';
import axios from 'axios';
import {useState} from "react"

function App() {

  const [data, setData] = useState();
  const onChange = async (e) => {
    const city = e.target.value;
    if(city !== ""){
      const res = await axios.get('http://localhost:5000/cities/'+ city);
      setData(res.data.coworkings)
      console.log(res.data.coworkings)
    }
  }
  return (
    <div className="App">
     <div>
     <label htmlFor="site-search">Search the site:</label>
    <input type="search" id="site-search" name="q"
          aria-label="Search through site content"
          onChange={(e) => onChange(e)}
          />

    <button>Search</button>
    <div style={{"marginTop": "50px"}}>
      {data && data.length > 0 && 
      data.map(c => 
        <div key={c.address}>
           <ul>
        <li>
          {c.name}
        </li>
        <li>
          {c.city}
        </li>
        <li>
          {c.address}
        </li>
        <li>
          {c.description}
        </li>
        <div>
          <img src={c.photo} alt={"Loading..." + c.photo} />
        </div>
        <li>
          {c.prixDemiJ}
        </li>
        <li>
          {c.prixH}
        </li>
        <li>
          {c.prixJ}
        </li>
      </ul>
        </div>
        )
     
      }
    </div>
     </div>
    </div>
  );
}

export default App;
