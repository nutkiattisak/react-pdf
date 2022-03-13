import logo from "./logo.svg";
import "./App.css";
import samplePDF from "./files/sample.pdf";
import SinglePagePDFViewer from "./components/pdf";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h4>Single Page</h4>
        <SinglePagePDFViewer pdf={samplePDF} />
      </header>
    </div>
  );
}

export default App;
