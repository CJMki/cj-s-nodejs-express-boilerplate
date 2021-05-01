const routes = [require('./item').default, require('./search').default];

const setupRoutes = (app, prefix) => {
  routes.forEach((route) => app.use(prefix, route));
};

export default setupRoutes;
