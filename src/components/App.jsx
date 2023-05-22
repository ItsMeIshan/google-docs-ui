import Header from "./Header";
import SidePannel from "./SidePannel";
import TextEditor from "./TextEditor";

function App() {
  return (
    <div style={{ minWidth: "500px" }}>
      <Header />
      <div className="main-body">
        <div className="editor-container">
          <TextEditor />
        </div>
        <SidePannel />
      </div>
    </div>
  );
}

export default App;

/* Planning
  Header
    Left Side
       - Logo
       - File Name
       - File Extention
       - Menu Buttons
    
    Right Side
       - Title Bar buttons
       - User Icon

  
  ToolBar

  Text Editor


  Side Pannel
    - Links to Other Google Apps
    - Button to open and close it (optional)
  
  

*/
