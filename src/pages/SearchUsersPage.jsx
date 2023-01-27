import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { searchQueriedUsers } from "../store/user/userThunks";
import Seo from "../components/Seo/Seo";
import { uiActions } from "../store/ui/uiSlice";

export default function SearchUserPage() {
  const [query, setQuery] = useState("");

  const dispatch = useDispatch();

  const queriedUsers = useSelector((state) => state.ui.queriedUsers);

  const handleChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(uiActions.queriedUsersResponse(""));
    if (!query) {
      dispatch(
        uiActions.showNotification({
          message: "Search field must not be blank.",
        })
      );
      return;
    }
    dispatch(searchQueriedUsers(query));
    setQuery("");
  };

  return (
    <>
      <Seo
        title="Search User"
        description="Search for existing users in this application to request invitations and chat!"
      />
      Search Page
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          onChange={handleChange}
          value={query}
        />
        <button type="submit">Search</button>
      </form>
      <div>
        {queriedUsers.length >= 1 &&
          queriedUsers.map(({ name, _id }) => (
            <Link to={`/user/${_id}`}>{name}</Link>
          ))}
      </div>
    </>
  );
}
