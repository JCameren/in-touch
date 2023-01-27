import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { searchQueriedUsers } from "../store/user/userThunks";
import Seo from "../components/Seo/Seo";

export default function SearchUserPage() {
    const [query, setQuery] = useState("")

    const dispatch = useDispatch()

    // const queriedUsers = useSelector((state) => state.ui.queriedUsers)

    const handleChange = (e) => {
        e.preventDefault()
        setQuery( e.target.value )
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(searchQueriedUsers(query))
    }

  return (
    <>
      <Seo
        title="Search User"
        description="Search for existing users in this application to request invitations and chat!"
      />
      Search Page
      <form onSubmit={handleSubmit}>
        <input type="text" name="search" onChange={handleChange} value={query}/>
        <button type="submit">Search</button>
      </form>
      <div>
        {/* { queriedUsers.length() > 1 ? queriedUsers.map((user) => <div>{ user.name }</div>): <h2>No users found</h2>} */}
      </div>
    </>
  );
}
