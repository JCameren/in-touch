import { createGlobalStyle } from "styled-components";
import MetropolisBold from "../fonts/Metropolis-Bold.otf";
import MetropolisLight from "../fonts/Metropolis-Light.otf";
import MetropolisMedium from "../fonts/Metropolis-Medium.otf";
import MetropolisRegular from "../fonts/Metropolis-Regular.otf";
import MetropolisSemiBold from "../fonts/Metropolis-SemiBold.otf";
import MetropolisThin from "../fonts/Metropolis-Thin.otf";
import Technos from "../fonts/Technos-PKDZP.otf";

export const GlobalStyle = createGlobalStyle`
    @font-face {
      font-family: "Metropolis-Bold";
      src: url(${MetropolisBold});
    }
    @font-face {
      font-family: "Metropolis-Light";
      src: url(${MetropolisLight});
    }
    @font-face {
      font-family: "Metropolis-Medium";
      src: url(${MetropolisMedium});
    }
    @font-face {
      font-family: "Metropolis-Regular";
      src: url(${MetropolisRegular});
    }
    @font-face {
      font-family: "Metropolis-SemiBold";
      src: url(${MetropolisSemiBold});
    }
    @font-face {
      font-family: "Metropolis-Thin";
      src: url(${MetropolisThin});
    }
    @font-face {
      font-family: "Technos";
      src: url(${Technos});
    }

    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    body, html {
        width: 100%;
        height: 100vh;
        background-color: ${({ theme }) => theme.colors.fg};
        color: white;
        font-family: "Metropolis-Regular";
    }

`;

export const darkTheme = {
  colors: {
    bg: "#fff",
    fg: "#f5f4fc",
    primary: "#6b17e6",
    linearGradient:
      "linear-gradient(90deg, rgba(255,84,145,1) 0%, rgba(255,57,135,1) 50%)",
    textFocus: "#fff",
    textSubtle: "#8D93A1",
    rgba: "rgba(255, 57, 135, 0.8)"
  },
  fontSizes: {
    lg: "clamp(2.625rem, 1.2857rem + 3.5714vw, 4rem)",
    md: "clamp(2, 5vw, 2.25rem)",
    sm: "clamp(0.9rem, 3vw, 1rem)",
    xs: "clamp(0.75rem, 2vw, 0.8rem)",
  },
};
