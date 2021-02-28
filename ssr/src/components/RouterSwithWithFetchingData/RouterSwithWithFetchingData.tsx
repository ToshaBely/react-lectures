import React from 'react';
import { useDispatch } from 'react-redux';
import { Switch, useLocation } from 'react-router';

export const RouterSwithWithFetchingData: React.FC = function RouterSwithWithFetchingData({ children }) {
  let dispatch = useDispatch();
  let location = useLocation();

  let [isLoading, setIsLoading] = React.useState<boolean>(false);

  let fetchData = React.useCallback(() => {
    return fetch(`/api/router-data?url=${encodeURIComponent(location.pathname)}`)
      .then((result) => result.json())
      .then((data) => {
        dispatch({
          type: 'UPDATE_STORE',
          payload: data,
        });
      });
  }, [location]);

  React.useEffect(() => {
    setIsLoading(true);

    fetchData()
      .catch((err) => {
        console.log(err);
      })
      .then(() => {
        setIsLoading(false);
      });
  }, [fetchData]);

  if (IS_SERVER) {
    return <Switch>{children}</Switch>
  }

  if (isLoading) {
    return (
      <section className="section">
        Loading...
      </section>
    );
  } else {
    return <Switch>{children}</Switch>;
  }
};
