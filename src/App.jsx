import { PDFViewer } from "@react-pdf/renderer"
import DocumentPreview from "./components/DocumentPreview"

function App() {
  return (
    <div>
      <PDFViewer width="100%" style={{ height: "100dvh" }}>
        <DocumentPreview />
      </PDFViewer>
    </div>
  )
}

export default App
