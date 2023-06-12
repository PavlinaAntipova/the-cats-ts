import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import App from '@app/App';
import ROUTES from '@app/constants/routes';
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
      path={ROUTES.home}
      element={<App />}
    >
      <Route
        index
        element={<HomePage />}
      />
      <Route
        path={ROUTES.voting}
        element={<VotingPage />}
      />
      <Route
        path={ROUTES.breeds}
        element={<BreedsPage />}
      >
        <Route
          path=":id"
          element={<BreedInfoPage />}
        />
      </Route>
      <Route
        path={ROUTES.gallery}
        element={<GalleryPage />}
      />
      <Route
        path={ROUTES.likes}
        element={<FeedbackPage />}
      />
      <Route
        path={ROUTES.favourites}
        element={<FavoritePage />}
      />
      <Route
        path={ROUTES.dislikes}
        element={<FeedbackPage />}
      />
      <Route
        path={ROUTES.search}
        element={<SearchPage />}
      />
    </Route>,
  ),
);

export default router;
