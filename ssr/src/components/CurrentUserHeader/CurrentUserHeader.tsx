import React from 'react';
import { useSelector } from 'react-redux';
import { StateSchema } from '../../reducer';

export const CurrentUserHeader: React.FC = function CurrentUserHeader() {
  let currentUser = useSelector((state: StateSchema) => state.currentUser);

  return (
    <section className="section">
      {currentUser && (
        <h4 className="section__title">
          {currentUser.name}
        </h4>
      )}
    </section>
  );
}
