import ReactGA from 'react-ga';

const trackPageView = location => {
  ReactGA.set({ page: location.pathname });
  ReactGA.pageview(location.pathname);
};

const initGa = history => {
  if (process.env.NODE_ENV === 'production') {
    ReactGA.initialize(process.env.REACT_APP_GA_ID);

    trackPageView(history.location);
    history.listen(trackPageView);
  }
};

export { initGa as default, trackPageView };
