import React from 'react';

export const App = ({ name, onClick }) => {
  const [count, setCount] = React.useState(0);

  const handleClick = (event) => {
    setCount(count + 1);
    onClick({ event, state: count });
  };

  return <div onClick={handleClick}>Hello from the other side: {name}</div>;
};
export default App;
