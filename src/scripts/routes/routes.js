import HomePage from '../pages/home-page';
import AboutPage from '../pages/about-page';
<<<<<<< HEAD
=======
import DetectionPage from '../pages/detection-page';
import EducationPage from '../pages/education-page';
import EducationDetailPage from '../pages/education-detail-page';
import DetectionSpecificPage from '../pages/detection-spesific-page';
>>>>>>> origin/ui-ux

const routes = {
  '/': new HomePage(),
  '/about': new AboutPage(),
<<<<<<< HEAD
=======
  '/detection': new DetectionPage(),
  '/detection/padi': new DetectionSpecificPage('Padi'),
  '/detection/jagung': new DetectionSpecificPage('Jagung'),
  '/detection/cabai': new DetectionSpecificPage('Cabai'),
  '/education': new EducationPage(),
  '/education/:id': new EducationDetailPage(),
>>>>>>> origin/ui-ux
};

export default routes;
