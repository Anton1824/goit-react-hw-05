import { Route, Routes } from "react-router-dom";

import { Suspense } from "react";

import { DNA } from "react-loader-spinner";
import { easyLazy } from "../service/easylazy";
import Navigation from "./Navigation/Navigation";
import MovieCast from "./MovieCast/MovieCast";
import MovieReviews from "./MovieReviews.jsx/MovieReviews";

const HomePage = easyLazy("HomePage");
const MoviesPage = easyLazy("MoviesPage");
const MovieDetailsPage = easyLazy("MovieDetailsPage");
const NotFoundPage = easyLazy("NotFoundPage");

const App = () => {
  return (
    <div>
      <Navigation />
      <Suspense
        fallback={
          <div>
            <DNA
              visible={true}
              height="80"
              width="80"
              ariaLabel="dna-loading"
              wrapperStyle={{}}
              wrapperClass="dna-wrapper"
            />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
