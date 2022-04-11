import "./styles.css";
import FileList from "./components/FileList";
import { folderstructure } from "./components/FolderStrcture";
export default function App() {
  return (
    <div className="App">
      <FileList filesstruct={folderstructure} />
    </div>
  );
}
