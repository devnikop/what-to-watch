import React from "react";

import Catalog from "../catalog/catalog.jsx";
import MovieMain from "../movie-card-main/movie-card-main.jsx";
import PageFooter from "../page-footer/page-footer.jsx";
import SvgSprite from "../svg-sprite/svg-sprite.jsx";

const MainPage = () => (
  <>
    <SvgSprite />
    <MovieMain />
    <div className="page-content">
      <Catalog />
      <PageFooter />
    </div>
  </>
);

export default MainPage;
