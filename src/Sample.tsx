import * as React from 'react';

export interface Person {
  firstName: string;
  lastName: string;
  email: string;
}

export interface SampleProps {
  message: string;
  year: number;
  person: Person;
  onSend?: (message: string) => void;
}

const Sample: React.FunctionComponent<SampleProps> = (props: SampleProps) => {
  const [greeting, setGreeting] = React.useState<string>('');

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log('Button clicked!');

    if (props.onSend) {
      props.onSend('Hello from Sample');
    }
  };

  const handleInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    setGreeting((_) => (e.target as HTMLInputElement).value);
  };

  return (
    <>
      <h4>Sample Component</h4>
      <p>
        {props.message} :: {props.year}
      </p>
      <hr />
      <div className='alert alert-primary' role='alert'>
        <p className='lead'>
          Person: {props.person.firstName} {props.person.lastName} ::{' '}
          {props.person.email} says: {greeting}
        </p>

        <button className='btn btn-primary' onClick={handleClick}>
          Send Message
        </button>
        <input
          type='text'
          className='form-control mt-4'
          onInput={handleInput}
        />
      </div>
    </>
  );
};

export default Sample;
