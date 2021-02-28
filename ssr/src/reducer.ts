import { AnyAction } from 'redux';

export interface UserSchema {
  id: string;
  name: string;
}

export interface StateSchema {
  currentUser?: UserSchema;
}

export function reducer(state: StateSchema = {}, action: AnyAction): StateSchema {
  switch (action.type) {
    case 'UPDATE_STORE': {
      return action.payload;
    }

    default: {
      return state;
    }
  }
}
