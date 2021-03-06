import React, { useState } from 'react';
import GreetingContainer from './GreetingContainer';
import { v1 } from 'uuid';

// types
export type UserType = {
  _id: string;
  name: string;
}

// уровень работы с глобальными данными
function HW3() {
  const [users, setUsers] = useState<Array<UserType>>([]);

  const addUserCallback = (name: string) => {
    const newUser = {
      name,
      _id: v1(),
    }
    setUsers([...users, newUser]);
  };

  return (
    <div>
      <hr/>
      <h3 className="homework-title">homeworks 3</h3>

      {/*should work (должно работать)*/}
      <GreetingContainer users={users} addUserCallback={addUserCallback}/>

      {/*для личного творчества, могу проверить*/}
      {/*<AlternativeGreeting/>*/}
      <hr/>
    </div>
  );
}

export default HW3;
