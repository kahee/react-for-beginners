import Button from './Button';
import styles from './App.module.css';
import { useState, useEffect } from 'react';
import { keyboard } from '@testing-library/user-event/dist/keyboard';

function App() {
  // state 가 변화할때마다 계속 리랜더링 되는데 이때마다 불필요하게 재호출됨
  const [counter, setValue] = useState(0);
  const [kyeword, setKeyword] = useState('');
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log('i run all, the time');
  const iRunOnlyOnce = () => {
    console.log('i run only once');
  };
  // 한번만 호출하고 다시 호출하지 않음 only once
  useEffect(iRunOnlyOnce, []);
  // keyword 가 변할때만 리랜더링 하고 싶음 -> 특정부분만 변화할때, 원하는코드들 실행되도록
  useEffect(() => {
    if (kyeword !== '' && kyeword.length > 5) {
      console.log({ kyeword });
    }
  }, [kyeword]);
  useEffect(() => {
    console.log("I run when 'counter' changes");
  }, [counter]);
  useEffect(() => {
    console.log('I run when keyword & counter change');
  }, [counter, kyeword]);
  return (
    <div>
      <input
        value={kyeword}
        onChange={onChange}
        type="text"
        placeholder="Search hear..."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}> click me </button>
    </div>
  );
}

export default App;
