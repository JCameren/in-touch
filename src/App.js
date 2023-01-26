import { Routes, Route, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import Layout from "./components/Layout/Layout";
import LandingPage from "./pages/LandingPage";
import SignUpPage from "./pages/SignUpPage"
import Homepage from "./pages/Homepage";
import AboutPage from "./pages/AboutPage";
import ProfilePage from "./pages/ProfilePage";
import MessagesPage from "./pages/MessagesPage";
import ChatPage from "./pages/ChatPage";
import Notification from "./components/Notification/Notification";
import Loading from "./components/Loading/Loading";
import { uiActions } from "./store/ui/uiSlice";
import { GlobalStyle, darkTheme } from "./theme/theme.css";

export default function App() {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.user);
  const isLoading = useSelector((state) => state.ui.isLoading)
  const uiNotification = useSelector((state) => state.ui.uiNotification);
  const { message } = uiNotification;

  const removeNotification = () => {
    dispatch(uiActions.removeNotification());
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      {user ? (
        <Layout>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/messages" element={<MessagesPage />} />
            <Route path="/messages/:id" element={<ChatPage />} />
            <Route path="/profile/:id" element={<ProfilePage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Layout>
      ) : (
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      )}

      {uiNotification && (
        <Notification
          message={message}
          removeNotification={removeNotification}
        />
      )}

      { isLoading && <Loading />}
    </ThemeProvider>
  );
}
