"use client";
import { useState } from "react";
import dropdownStyle from "./dropdown.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Dropdown = ({ children, items }) => {
  const [isShowMenu, setShowMenu] = useState(false);
  return (
    <div className="relative">
      {/* input */}
      <div
        onClick={() => setShowMenu((showMenu) => !showMenu)}
        className="flex items-center gap-5 pointer border p-2 rounded-md"
      >
        <FontAwesomeIcon
          icon={faChevronDown}
          className={`${dropdownStyle.chevronIcon} ${
            isShowMenu ? dropdownStyle.rotate : dropdownStyle.rotateDefault
          }`}
        />
        {children}
      </div>
      {/* menu */}
      <div
        className={`absolute overflow-hidden shadow-lg rounded-md ${
          dropdownStyle.menu
        } ${isShowMenu ? dropdownStyle.showMenu : dropdownStyle.hideMenu}`}
      >
        {/* items */}
        {items.map((item, index) => (
          <div
            key={index}
            className="p-1 pointer select-none hover:bg-slate-400"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
