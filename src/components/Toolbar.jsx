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
          source="/src/assets/undo-icon.svg"
          alternativeText="undo"
          onClickFn={(s) => dispatch(undo(s))}
        />
        <ToolbarButton
          source="/src/assets/redo-icon.svg"
          alternativeText="redo"
          onClickFn={(s) => dispatch(redo(s))}
        />
        <ToolbarButton
          source="/src/assets/print-icon.svg"
          alternativeText="print"
          isDisabled={true}
        />
        <ToolbarButton
          source="/src/assets/spell-icon.svg"
          alternativeText="spelling and grammar check"
          isDisabled={true}
        />
        <ToolbarButton
          source="/src/assets/paint-icon.svg"
          alternativeText="paint"
          isDisabled={true}
        />
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <ToolbarButton
          source="/src/assets/bold-icon.svg"
          alternativeText="bold text"
          onClickFn={(s) => dispatch(makeBold(s))}
        />
        <ToolbarButton
          source="/src/assets/italics-icon.svg"
          alternativeText="italics text"
          onClickFn={(s) => dispatch(makeItalic(s))}
        />
        <ToolbarButton
          source="/src/assets/underline-icon.svg"
          alternativeText="underline text"
          onClickFn={(s) => dispatch(makeUnderline(s))}
        />
        <ToolbarButton
          source="/src/assets/text-color-icon.svg"
          alternativeText="text color"
          isDisabled={true}
        />
        <ToolbarButton
          source="/src/assets/highlight-icon.svg"
          alternativeText="highlight text"
          isDisabled={true}
        />
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <ToolbarButton
          source="/src/assets/insert-link-icon.svg"
          alternativeText="insert link"
          isDisabled={true}
        />
        <ToolbarButton
          source="/src/assets/add-comment-icon.svg"
          alternativeText="add comment"
          isDisabled={true}
        />
        <ToolbarButton
          source="/src/assets/insert-image-icon.svg"
          alternativeText="insert image"
          isDisabled={true}
        />
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <ToolbarButton
          source="/src/assets/left-align-icon.svg"
          alternativeText="left align"
          onClickFn={(s) => dispatch(makeLeftAlign(s))}
        />
        <ToolbarButton
          source="/src/assets/center-align-icon.svg"
          alternativeText="center align"
          onClickFn={(s) => dispatch(makeCenterAlign(s))}
        />
        <ToolbarButton
          source="/src/assets/right-align-icon.svg"
          alternativeText="right align"
          onClickFn={(s) => dispatch(makeRightAlign(s))}
        />
        <ToolbarButton
          source="/src/assets/justify-icon.svg"
          alternativeText="justify text"
          isDisabled={true}
        />
        <ToolbarButton
          source="/src/assets/bullet-list-icon.svg"
          alternativeText="bullet list"
          isDisabled={true}
        />
      </div>
    </div>
  );
}

export default Toolbar;
