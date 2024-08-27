import Button from './Button';
import styles from './App.module.css';
import { useState, useEffect } from 'react';

function App() {
  // state 가 변화할때마다 계속 리랜더링 되는데 이때마다 불필요하게 재호출됨
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);
  console.log('i run all, the time');
  const iRunOnlyOnce = () => {
    console.log('i run only once');
  };
  // 한번만 호출하고 다시 호출하지 않음 only once
  useEffect(iRunOnlyOnce, []);
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}> click me </button>
    </div>
  );
}

export default App;
