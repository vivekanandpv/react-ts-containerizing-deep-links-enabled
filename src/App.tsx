import React from 'react';
import Sample from './Sample';

interface AppProps {}

const App: React.FunctionComponent<AppProps> = () => {
  const parentHandler = (message: string): void => {
    console.log('Received', message);
  };

  return (
    <>
      <div className='p-5'>
        <h2>React with TypeScript</h2>
        <hr />
        <Sample
          message='Hello, world!'
          year={2023}
          person={{
            firstName: 'John',
            lastName: 'Doe',
            email: 'john@gmail.com',
          }}
          onSend={parentHandler}
        />
      </div>
    </>
  );
};

export default App;
