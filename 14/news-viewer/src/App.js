import React from 'react';
import {Route} from 'react-router-dom';
import NewsPage from "./pages/NewsPage";

// category 값 리액트 라우터 URL 파라미터 이용.
const App = () => {
  return <Route path="/:category?" component={NewsPage}/>;
};

/*
// category 값 useState 관리.
const App = () => {
  const [category, setCategory] = useState('all');
  const onSelect = useCallback(category => setCategory(category), []);

  return (
    <>
      <Categories category={category} onSelect={onSelect}/>
      <NewsList category={category}/>
    </>
  )
};
*/

export default App;
