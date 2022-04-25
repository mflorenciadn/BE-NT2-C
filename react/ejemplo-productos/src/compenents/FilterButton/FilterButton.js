import Button from "../Button/Button";
import FilterIcon from "../../assets/icons/filter.png";
import "./FilterButton.css";

export default function FilterButton({ showAll, handleFilter }) {
  return (
    <Button onClick={handleFilter}>
      <span>
        <img className="Filter-Icon" src={FilterIcon} height="12" width="12" />
        {showAll ? "Sólo con stock" : "Mostrar todos"}
      </span>
    </Button>
  );
}
