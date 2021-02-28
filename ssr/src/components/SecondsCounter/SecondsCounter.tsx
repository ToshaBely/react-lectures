import React from 'react';

export const SecondsCounter: React.FC = function SecondsCounter() {
  let [seconds, setSeconds] = React.useState<number>(0);

  React.useEffect(() => {
    let timer = setTimeout(() => {
      setSeconds(seconds + 1);
    }, 1000);

    return () => {
      clearTimeout(timer);
    }
  }, [seconds]);

  return (
    <section className="section">
      <h4 className="section__title">
        Seconds: {seconds}
      </h4>
    </section>
  )
};
