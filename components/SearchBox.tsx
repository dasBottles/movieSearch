"use client";

import React, { ChangeEvent } from "react";

interface SearchBoxProps {
  value: string;
  setSearchValue: (value: string) => void;
}

const SearchBox: React.FC<SearchBoxProps> = (props) => {
  return (
    <div className="col col-sm-4">
      <input
        className="form-control"
        value={props.value}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          props.setSearchValue(event.target.value)
        }
        placeholder="Type to search..."
      />
    </div>
  );
};

export default SearchBox;
