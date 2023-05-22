function ToolbarButton({
  source,
  alternativeText,
  onClickFn = () => {},
  isDisabled = false,
}) {
  return (
    <div>
      <a
        onClick={onClickFn}
        href="#"
        className={`${isDisabled ? "disabled" : "toolbar-btn"}`}
      >
        <img src={source} alt={alternativeText} />
      </a>
    </div>
  );
}

export default ToolbarButton;
