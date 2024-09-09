import Movie from './components/Movie';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Detail from './routes/Detail';

// hashrouter 사용시 /#/movie 이런식으로 됨
// brouserRouter 사용시 /movie
function App() {
  return (
    // Routes 한번에 하나씩 렌더링을 원
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/movie/:id" element={<Detail />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
