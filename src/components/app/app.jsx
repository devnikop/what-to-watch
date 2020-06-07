import React from "react";

import MainPage from "../main-page/main-page.jsx";
import SignInPage from "../sign-in-page/sign-in-page.jsx";

const App = () => (true ? <MainPage /> : <SignInPage />);

export default App;
