import { useState } from "react";
import "antd/dist/antd.css";
import "./App.css";
import { DatePicker, Button } from "antd";

function openFile() {
  window.electronAPI.openFile();
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <p>Hello Vite + React!</p>
        <p>
          <Button type="primary" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </Button>
          <Button type="primary" onClick={openFile}>
            openFile
          </Button>
        </p>
        <DatePicker />
      </header>
    </div>
  );
}

export default App;
