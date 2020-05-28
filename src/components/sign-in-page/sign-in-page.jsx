import React from "react";

import PageFooter from "../page-footer/page-footer.jsx";
import SignIn from "../sign-in/sign-in.jsx";
import SvgSprite from "../svg-sprite/svg-sprite.jsx";

const SignInPage = () => (
  <>
    <SvgSprite />
    <div className="user-page">
      <SignIn />
      <PageFooter />
    </div>
  </>
);

export default SignInPage;
