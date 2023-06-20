import './App.css';
import { useEffect,useState } from 'react';

function App() {
  const [pyodide, setPyodide] = useState(null);

  useEffect(
    async ()=> {
    console.log("in useEffect")
    await window.loadPyodide({
      indexURL : "https://cdn.jsdelivr.net/pyodide/v0.18.1/full/"
    }).then((pyodideInstance) => {setPyodide(pyodideInstance);});
  
  },[])
  
  const buttonFunction = async () =>{
    const pyCode = `print('hi from python')`;
    if (pyodide !== null){
      await pyodide.runPythonAsync(pyCode);
    }
    else{
      console.log("wait for pyodide load");
    }
  }

  return (
    <div className="App">
      <header className="App-header">
      <button onClick={buttonFunction}>Execute Python</button>
      </header>
    </div>
  );
}

export default App;
