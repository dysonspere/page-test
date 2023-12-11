import React, { useState } from 'react';

function App() {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleButtonClick = () => {
    setOutputText(inputText);
  };

  return (
    <div>
      <h1>文章評価システム</h1>
      <h2>文章を入れてください</h2>
      <input type="text" value={inputText} onChange={handleInputChange} />
      <button onClick={handleButtonClick}>入力</button>
      <h2>結果</h2>
      <p>{outputText}</p>
      <p>(文章の評価結果が表示されます)</p>
    </div>
  );
}

export default App;
