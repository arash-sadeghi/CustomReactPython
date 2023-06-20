import './App.css';
import { useEffect } from 'react';

// const runScript = async (code) => {
//   const pyodide = await window.loadPyodide({
//     indexURL : "https://cdn.jsdelivr.net/pyodide/v0.18.1/full/"
//   });

//   return await pyodide.runPythonAsync(code);
// }

function App() {

  useEffect(()=> {
    console.log("in useEffect")
    const pyodide = window.loadPyodide({
      indexURL : "https://cdn.jsdelivr.net/pyodide/v0.18.1/full/"
    });
  
  },[])
  

  // async function main() {
  //   await runScript(`
  //       # Your Python code goes here
  //       print('heee')
  //   `);
  // }


  const buttonFunction = () =>{
    console.log('will execute');

    const pyCode = `print('hi from python')`;

    // main();
    
    // const pyodide = window.pyodide;

    // pyodide.runPython(pyCode);
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
