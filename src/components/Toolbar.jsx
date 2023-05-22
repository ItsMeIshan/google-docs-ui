import { useDispatch } from "react-redux";
import ToolbarButton from "./ToolbarButton";
import {
  makeBold,
  makeCenterAlign,
  makeItalic,
  makeLeftAlign,
  makeRightAlign,
  makeUnderline,
  redo,
  undo,
} from "../utils/editorSlice";

function Toolbar() {
  const dispatch = useDispatch();
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
      }}
      className="toolbar"
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <ToolbarButton
          source="/undo-icon.svg"
          alternativeText="undo"
          onClickFn={(s) => dispatch(undo(s))}
        />
        <ToolbarButton
          source="/redo-icon.svg"
          alternativeText="redo"
          onClickFn={(s) => dispatch(redo(s))}
        />
        <ToolbarButton
          source="/print-icon.svg"
          alternativeText="print"
          isDisabled={true}
        />
        <ToolbarButton
          source="/spell-icon.svg"
          alternativeText="spelling and grammar check"
          isDisabled={true}
        />
        <ToolbarButton
          source="/paint-icon.svg"
          alternativeText="paint"
          isDisabled={true}
        />
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <ToolbarButton
          source="/bold-icon.svg"
          alternativeText="bold text"
          onClickFn={(s) => dispatch(makeBold(s))}
        />
        <ToolbarButton
          source="/italics-icon.svg"
          alternativeText="italics text"
          onClickFn={(s) => dispatch(makeItalic(s))}
        />
        <ToolbarButton
          source="/underline-icon.svg"
          alternativeText="underline text"
          onClickFn={(s) => dispatch(makeUnderline(s))}
        />
        <ToolbarButton
          source="/text-color-icon.svg"
          alternativeText="text color"
          isDisabled={true}
        />
        <ToolbarButton
          source="/highlight-icon.svg"
          alternativeText="highlight text"
          isDisabled={true}
        />
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <ToolbarButton
          source="/insert-link-icon.svg"
          alternativeText="insert link"
          isDisabled={true}
        />
        <ToolbarButton
          source="/add-comment-icon.svg"
          alternativeText="add comment"
          isDisabled={true}
        />
        <ToolbarButton
          source="/insert-image-icon.svg"
          alternativeText="insert image"
          isDisabled={true}
        />
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <ToolbarButton
          source="/left-align-icon.svg"
          alternativeText="left align"
          onClickFn={(s) => dispatch(makeLeftAlign(s))}
        />
        <ToolbarButton
          source="/center-align-icon.svg"
          alternativeText="center align"
          onClickFn={(s) => dispatch(makeCenterAlign(s))}
        />
        <ToolbarButton
          source="/right-align-icon.svg"
          alternativeText="right align"
          onClickFn={(s) => dispatch(makeRightAlign(s))}
        />
        <ToolbarButton
          source="/justify-icon.svg"
          alternativeText="justify text"
          isDisabled={true}
        />
        <ToolbarButton
          source="/bullet-list-icon.svg"
          alternativeText="bullet list"
          isDisabled={true}
        />
      </div>
    </div>
  );
}

export default Toolbar;
