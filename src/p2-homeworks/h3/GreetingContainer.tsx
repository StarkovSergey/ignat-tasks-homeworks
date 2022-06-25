import React, { ChangeEvent, KeyboardEvent, useState } from 'react';
import Greeting from './Greeting';
import { UserType } from './HW3';

type GreetingContainerPropsType = {
  users: Array<UserType>;
  addUserCallback: (name: string) => void;
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => {
  const [name, setName] = useState<string>('');
  // const [error, setError] = useState<string>('');

  const error = name ? '' : 'error';


  // const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
  //   const currentInputName = e.currentTarget.value.trim();
  //   setName(currentInputName);
  //   if (currentInputName !== '') {
  //     setError('');
  //   }
  // };

  const addUser = () => {
    if (name !== '') {
      alert(`Hello, ${name}!`);
      addUserCallback(name);
      setName('');
    }
  };

  const keyDownHandler = (evt: KeyboardEvent<HTMLInputElement>) => {
    if (evt.key === 'Enter') {
      addUser();
    }
  }

  const totalUsers = users.length;

  return (
    <Greeting
      name={name}
      // setNameCallback={setNameCallback}
      setName={setName}
      addUser={addUser}
      error={error}
      totalUsers={totalUsers}
      keyDownHandler={keyDownHandler}
    />
  );
};

export default GreetingContainer;
