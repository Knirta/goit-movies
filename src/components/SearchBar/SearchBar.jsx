import PropTypes from "prop-types";
import s from "./SearchBar.module.css";

const SearchBar = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const title = form.elements.title.value;
    const nextParams = title !== "" ? { title } : {};
    onSubmit(nextParams);
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        className={s.input}
        placeholder="movie title"
      />
    </form>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func,
};

export default SearchBar;
