import HomePage from '../pages/home-page';
import AboutPage from '../pages/about-page';

const routes = {
  '/': new HomePage(),
  '/about': new AboutPage(),
};

export default routes;
