import React from 'react';
import './App.css';
import Info from "./Info";

const App = () => {
  return <Info/>;
};

/*const App = () => {
  return <Average/>;
};*/

/*const App = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setVisible(!visible)
        }}
      >
        {visible ? '숨기기' : '보이기'}
      </button>
      <hr/>
      {visible && <Info/>}
    </div>
  );
};*/

export default App;
