import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useDispatch, useSelector } from "react-redux";
import { handleChange } from "../utils/editorSlice";

function TextEditor() {
  const editorState = useSelector((store) => store.editor?.editorState);
  const alignmentState = useSelector((store) => store.editor?.alignmentState);
  const dispatch = useDispatch();
  return (
    <>
      <Editor
        textAlignment={alignmentState}
        editorState={editorState}
        onEditorStateChange={(state) => dispatch(handleChange(state))}
        toolbarClassName="default-toolbar"
        editorClassName="editor"
      />
    </>
  );
}

export default TextEditor;
