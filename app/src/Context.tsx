import React from 'react';

export const UserContext = React.createContext({
  userid: '',
  handleUserId: (v: string) => {
    return null;
  },
});
