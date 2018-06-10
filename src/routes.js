import Route from 'route-parser';
import Home from './pages/home/index.html';
import About from './pages/about/index.html';

const routes = [
  {
    name: 'about',
    matcher: new Route('/about'),
    component: About
  },
  {
    name: 'home',
    matcher: new Route('/'),
    component: Home
  }
];

const match = (location, action) => {
  for (let route of routes) {
    const result = route.matcher.match(
      `${location.pathname}${location.search ? `?${location.search}` : ''}${location.hash ? `#${location.hash}` : ''}`
    );
    if (result !== false) {
      return route.component;
    }
  }
  return null;
};

export {
  routes,
  match
};