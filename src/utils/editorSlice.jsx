import { createSlice } from "@reduxjs/toolkit";
import { EditorState, RichUtils } from "draft-js";

const editorSlice = createSlice({
  name: "editor",
  initialState: {
    editorState: EditorState.createEmpty(),
    alignmentState: "left",
  },
  reducers: {
    undo: (state, action) => {
      console.log(action);
      state.editorState = EditorState.undo(state.editorState);
    },
    redo: (state, action) => {
      console.log(action);
      state.editorState = EditorState.redo(state.editorState);
    },
    makeBold: (state, action) => {
      console.log(action);
      state.editorState = RichUtils.toggleInlineStyle(
        state.editorState,
        "BOLD"
      );
    },
    makeItalic: (state, action) => {
      console.log(action);
      state.editorState = RichUtils.toggleInlineStyle(
        state.editorState,
        "ITALIC"
      );
    },
    makeUnderline: (state, action) => {
      console.log(action);
      state.editorState = RichUtils.toggleInlineStyle(
        state.editorState,
        "UNDERLINE"
      );
    },
    makeLeftAlign: (state, action) => {
      console.log(action);
      state.alignmentState = "left";
    },
    makeRightAlign: (state, action) => {
      console.log(action);
      state.alignmentState = "right";
    },
    makeCenterAlign: (state, action) => {
      console.log(action);
      state.alignmentState = "center";
    },
    handleChange: (state, action) => {
      state.editorState = action.payload;
    },
  },
});
export const {
  makeBold,
  handleChange,
  makeItalic,
  makeUnderline,
  makeLeftAlign,
  makeRightAlign,
  makeCenterAlign,
  undo,
  redo,
} = editorSlice.actions;
export default editorSlice.reducer;
