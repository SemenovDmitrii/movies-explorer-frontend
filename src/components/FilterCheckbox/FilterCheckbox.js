import "./FilterCheckbox.css";
function FilterCheckbox() {
  return (
    <div className="checkbox">
      <div className="checkbox__block">
        <label class="switch link">
          <input type="checkbox" />
          <span class="slider round"></span>
        </label>
        <p className="checkbox__title">Короткометражки</p>
      </div>
    </div>
  );
}
export default FilterCheckbox;
