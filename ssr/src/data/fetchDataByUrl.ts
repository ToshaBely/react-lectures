import { match, matchPath } from 'react-router';
import { ROUTES } from '../routes';

const DATA_DICTIONARY: Record<string, (route: match) => Promise<any>> = {
  user(route) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          currentUser: {
            id: 'data-id-1',
            name: 'Anton for RS',
          },
        });
      }, 150);
    });
  },
};

export function fetchDataByUrl(url: string): Promise<any> {
  let route: match;

  let routeConfig = ROUTES.find(( {path} ) => {
    let matchedRoute = matchPath(url, path);

    if (matchedRoute) {
      route = matchedRoute;
      return true;
    }

    return false;
  });

  if (route && DATA_DICTIONARY[routeConfig.key]) {
    return DATA_DICTIONARY[routeConfig.key](route);
  }

  return Promise.resolve({});
}
