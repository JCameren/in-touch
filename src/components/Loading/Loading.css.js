import styled from "styled-components";

export const LoaderOverlay = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    place-items: center;
    background-color: rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(10px);
    position: fixed;
    z-index: 6 !important;
    top: 0;
`;

const StyledLoader = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;

 div {
  display: inline-block;
  position: absolute;
  left: 8px;
  width: 16px;
  background: ${({ theme }) => theme.colors.textFocus};
  animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
}
 div:nth-child(1) {
  left: 8px;
  animation-delay: -0.24s;
}
 div:nth-child(2) {
  left: 32px;
  animation-delay: -0.12s;
}
 div:nth-child(3) {
  left: 56px;
  animation-delay: 0;
}
@keyframes lds-facebook {
  0% {
    top: 8px;
    height: 64px;
  }
  50%, 100% {
    top: 24px;
    height: 32px;
  }
}
`;

export default StyledLoader;
