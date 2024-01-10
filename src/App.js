import './App.css';
import { Home, Searchbar, Header } from './components';

function App() {



  return (
    <div className=' font-body bg-dark-background min-h-screen h-full flex justify-center items-center'>
      <main className='w-[40%]'>
        <Header />
        <Searchbar />
        <Home />
      </main>
    </div>
  );
}

export default App;
