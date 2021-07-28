import Home from "@/pages/Home";
import Movies from "@/pages/Movies";
import NotFound from "@/pages/NotFound";

export default [
  {
    path: '/',
    key: 'home',
    exact: true,
    component: Home
  },
  {
    path: '/movies',
    key: 'movies',
    exact: true,
    component: Movies
  },
  {
    key: 'notFound',
    component: NotFound
  }
];