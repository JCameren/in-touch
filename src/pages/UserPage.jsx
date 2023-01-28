import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getSpecificUserProfile } from "../store/user/userThunks";
import Seo from "../components/Seo/Seo";

export default function UserPage() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.ui.userProfile);
  const { name, email, createdAt } = user;

  const { id } = useParams();

  useEffect(() => {
    dispatch(getSpecificUserProfile(id));
  }, [id, dispatch]);

  return (
    <>
      <Seo
        title={`${name}'s Profile`}
        description={`Currently viewing the profile page of ${name}.`}
      />
      <pre>{name}</pre>
      <pre>{email}</pre>
      <pre>{createdAt}</pre>
    </>
  );
}
