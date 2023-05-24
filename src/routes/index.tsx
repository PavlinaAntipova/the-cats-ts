import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import App from '@app/App';
import {
  BreedInfoPage,
  BreedsPage,
  FavoritePage,
  FeedbackPage,
  GalleryPage,
  HomePage,
  SearchPage,
  VotingPage,
} from '@app/pages';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<App />}
    >
      <Route
        index
        element={<HomePage />}
      />
      <Route
        path="/voting"
        element={<VotingPage />}
      />
      <Route
        path="/breeds"
        element={<BreedsPage />}
      >
        <Route
          path=":breedId"
          element={<BreedInfoPage />}
        />
      </Route>
      <Route
        path="/gallery"
        element={<GalleryPage />}
      />
      <Route
        path="/likes"
        element={<FeedbackPage />}
      />
      <Route
        path="/favourites"
        element={<FavoritePage />}
      />
      <Route
        path="/dislikes"
        element={<FeedbackPage />}
      />
      <Route
        path="/search"
        element={<SearchPage />}
      />
    </Route>,
  ),
);

export default router;
