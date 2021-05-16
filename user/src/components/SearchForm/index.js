import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="User">Employee Name:</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name=""
          list=""
          type="text"
          className="form-control"
          placeholder="Type in a name to begin"
          id="User"
        />
        <datalist id="User">
          {props.breeds.map(User => (
            <option value={User} key={User} />
          ))}
        </datalist>
        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
