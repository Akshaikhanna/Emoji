import { useEffect, useState } from 'react';
import Emoji from './Emoji.json';
import './App.css';

function App() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  useEffect(() => {
    const newData = Emoji.filter(emoji => emoji.title.toLowerCase().includes(search.toLowerCase()));
    setData(newData);
  }, [search])

  return (
    <div>
      <center>
        <h1> Emoji</h1>
        <input className='box' placeholder='Search' type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
      </center>
      {data.map(emoji =>
        <div className="card" key={emoji.title}>
          <div className="card-body" onClick={() => { navigator.clipboard.writeText(emoji.symbol) }}>
            {emoji.symbol}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;