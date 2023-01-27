import Seo from "../components/Seo/Seo";

export default function Homepage() {
  return (
    <>
      <Seo title="Home" description="Welcome to the home page" />
      <h2>
        this is where a useEffect to query all chats for this specific user will
        be done.
      </h2>
    </>
  );
}
