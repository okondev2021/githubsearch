import { useState, useEffect } from 'react';
import './App.css';
import { Home, Searchbar, Header } from './components';

function App() {

  const [fetchedData, setFetchedData] = useState(null)

  useEffect( () => {
    const fetchDefault = () => {
      fetch('https://api.github.com/users/octocat')
      .then(response => response.json())
      .then(data => {
        setFetchedData(data)
      })
    }

    fetchDefault()
  }, [])

  console.log(fetchedData)



  return (
    <div className=' font-body bg-dark-background min-h-screen h-full flex justify-center items-center'>
      <main className='w-[40%]'>
        <Header/>
        <Searchbar />
        <Home fetchedResult={fetchedData} />
      </main>
    </div>
  );
}

export default App;
