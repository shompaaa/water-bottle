
import { Suspense } from 'react';
import './App.css'
import Bottles from './Bottles/Bottles';

const bottlesPromise = fetch('bottles.json')
.then(res => res.json());

function App() {

  return (
    <>
      <Suspense fallback={<h3>Loading.....</h3>}>
        <Bottles bottlesPromise={bottlesPromise}></Bottles>
      </Suspense>
    </>
  )
}

export default App
