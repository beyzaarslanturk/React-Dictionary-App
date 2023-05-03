import { useState } from 'react';
import './index.css';
import axios from 'axios'
import { ListDetails } from './components/ListDetails';

function App() {
  const [keyWord, setKeyWord] = useState("");
  const [result, setResult] = useState(null);

  const api = "https://api.dictionaryapi.dev/api/v2/entries/en";

  async function handleSearch() {
    try {
      const res = await axios.get(`${api}/${keyWord}`);
      console.log(res, "res");
      setResult(res.data[0]);
    } catch (e) {
      console.log({ e });
    }
  }

  function handleClear() {
    setKeyWord("");
    setResult(null);
  }


  return (
    <div className='flex justify-center items-center h-screen bg-lime-200 gap-y-4'>
      <div className="App flex-col justify-center items-center w-3/4">

        <div className='flex'>
          <input className='p-2 border-2 border-bg-lime-600'
            value={keyWord}
            onChange={(e) => setKeyWord(e.target.value)}
            placeholder='Please enter a word'
          />
          <button
            className='button'
            type='submit'
            onClick={handleSearch}>
            Search
          </button>
          <button
            disabled={!result}
            className='button'
            type='submit'
            onClick={handleClear}>
            Clear
          </button>
        </div>


        <div className='meaning-card mt-6'>
          {result && <ListDetails {...{ result }} />}
        </div>

      </div>
    </div>
  );
}

export default App;
