import { useState } from "react";
import LogoVerso from "../assets/logoVer.png";

export function Header(props) {
  const [searchTerm, setSearchTerm] = useState("");

  function handleInputChange(event) {
    setSearchTerm(event.target.value);
  }

  function handleSearch() {
    props.onSearch(searchTerm);
  }

  return (
    <div className="w-full h-16 bg-red-600 rounded-b-lg flex items-center justify-between px-4">
      <img src={LogoVerso} alt="" />
      <div className="flex items-center gap-2">
        <input
          value={searchTerm}
          onChange={handleInputChange}
          type="text"
          className="rounded border-none w-72 h-8 px-1 font-semibold"
        />
        <button
          onClick={handleSearch}
          className="w-8 h-8 rounded bg-yellow-300 hover:bg-yellow-400 flex items-center justify-center"
        >
          <lord-icon
            src="https://cdn.lordicon.com/msoeawqm.json"
            trigger="hover"
            style={{ width: "28px", height: "28px" }}
          />
        </button>
      </div>
    </div>
  );
}
