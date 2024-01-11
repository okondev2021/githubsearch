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


  const getUserDetail = (val) => {
     fetch(`https://api.github.com/users/${val}`)
    .then(response => response.json())
    .then(data => {
      setFetchedData(data)
    })
  }





  return (
    <div className=' font-body bg-dark-background min-h-screen h-full flex justify-center items-center'>
      <main className='w-[45%] mobile:w-[85%] tab:w-[70%] mobile:py-6 mobile:min-h-full'>
        <Header/>
        <Searchbar func={getUserDetail} />
        <Home fetchedResult={fetchedData} />
      </main>
    </div>
  );
}

export default App;
