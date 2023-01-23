import { LoaderOverlay } from "./Loading.css";
import StyledLoader from "./Loading.css";

export default function Loading() {
  return (
    <LoaderOverlay>
      <StyledLoader>
        <div></div>
        <div></div>
        <div></div>
      </StyledLoader>
    </LoaderOverlay>
  );
}
