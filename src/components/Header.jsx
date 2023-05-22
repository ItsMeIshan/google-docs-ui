import Menubar from "./Menubar";
import MenubarButton from "./MenubarButton";
import Toolbar from "./Toolbar";

function Header() {
  return (
    <div
      style={{
        background: "#f9fbfd",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          alignSelf: "stretch",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            alignSelf: "flex-start",
          }}
        >
          <div className="logo">
            <img src="/docs-logo.svg" alt="logo" />
          </div>
          <div>
            <div className="document-title">
              <div>
                <input
                  readOnly={true}
                  type="text"
                  name="name"
                  value={"Untitled"}
                  className="doc-name"
                />
              </div>
              <div>
                <a href="#" className="extention">
                  .DOCX
                </a>
              </div>
              <div>
                <MenubarButton name={<img src="/star-icon.svg" />} />
                <MenubarButton name={<img src="/move-icon.svg" />} />
                <MenubarButton name={<img src="/saved-icon.svg" />} />
              </div>
            </div>
            <div>
              <Menubar />
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <a href="#" style={{ margin: "1rem" }}>
            <img
              width={"24px"}
              height={"24px"}
              src="/last-edit-icon.svg"
              alt=""
            />
          </a>
          <a href="#">
            <img
              width={"24px"}
              height={"24px"}
              src="/add-comments-icon.svg"
              alt=""
            />
          </a>
          <a href="#" className="share-btn">
            <img src="/globe-share-icon.svg" alt="" />
            <span style={{ marginRight: "0.7rem", marginLeft: "0.7rem" }}>
              Share
            </span>
          </a>
          <a href="#" style={{ margin: "0.4rem" }}>
            <img width={"24px"} height={"24px"} src="/user-icon.svg" alt="" />
          </a>
        </div>
      </div>

      <Toolbar />
    </div>
  );
}

export default Header;
