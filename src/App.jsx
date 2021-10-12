import React, { useState } from 'react';

const App = () => {

    const myList = [{
      id: 1,
      msg: 'Howdy!'
    },
    {
      id: 2,
      msg: 'nuttin much lol'
    },
    {
      id: 3,
      msg: 'bet'
    },
  ];

    return (
      <>

        <ul>
          {myList.map(val => <li key={`my-fancy-item-${val.id}`}>{val.msg}</li>)}
        </ul>

      </>
    );
};

export default App;