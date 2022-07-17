import React, { useState } from 'react';
import { homeWorkReducer } from './bll/homeWorkReducer';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';

export type UserType = {
  _id: number
  name: string
  age: number
}

const initialPeople: UserType[] = [
  { _id: 0, name: 'Кот', age: 3 },
  { _id: 1, name: 'Александр', age: 66 },
  { _id: 2, name: 'Коля', age: 16 },
  { _id: 3, name: 'Виктор', age: 44 },
  { _id: 4, name: 'Дмитрий', age: 40 },
  { _id: 5, name: 'Ирина', age: 55 },
];

function HW8() {
  const [people, setPeople] = useState<UserType[]>(initialPeople); // need to fix any

  // need to fix any
  const finalPeople = people.map((p: UserType) => <div key={p._id} style={{display: 'flex', justifyContent: 'space-between', maxWidth: '250px'}}>
    <span>{p.name}</span>
    <span>{p.age}</span>
  </div>);

  const sortUp = () => setPeople(homeWorkReducer(people, { type: 'sort', payload: 'up' }));

  const sortDown = () => setPeople(homeWorkReducer(people, { type: 'sort', payload: 'down' }));

  const checkAge = () => setPeople(homeWorkReducer(people, { type: 'check', payload: 18}))

  return (
    <div>
      <h3 className="homework-title">homeworks 8</h3>
      {finalPeople}
      <div style={{padding: '10px 0'}}>
        <SuperButton onClick={sortUp}>sort up</SuperButton>
        <SuperButton onClick={sortDown}>sort down</SuperButton>
        <SuperButton onClick={checkAge}>check 18</SuperButton>
      </div>
      <hr />
    </div>
  );
}

export default HW8;
