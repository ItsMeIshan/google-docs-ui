import MenubarButton from "./MenubarButton";

function Menubar() {
  return (
    <div className="menubar">
      <MenubarButton name={"File"} />
      <MenubarButton name={"Edit"} />
      <MenubarButton name={"View"} />
      <MenubarButton name={"Insert"} />
      <MenubarButton name={"Format"} />
      <MenubarButton name={"Tools"} />
      <MenubarButton name={"Help"} />
    </div>
  );
}

export default Menubar;
