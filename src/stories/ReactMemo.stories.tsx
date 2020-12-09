import React, {useState} from 'react';

export default {
  title: 'ReactMemo demo'
}

const NewMessageCounter = (props: { count: number }) => {
  return <div> {props.count}</div>
}

const UsersSecret = (props: {users: Array<string>}) => {
  console.log('userr refactoring')
  return <div>{
    props.users.map((u, i) => <div>{u}</div>)
  }</div>
}

const Users = React.memo(UsersSecret);

export const Example1 = () => {

  console.log('Example1')

  const [counter, setCounter] = useState(0);
  const [users, setUsers] = useState(['Dima', 'Valera', 'Artem'])
  const addUser = () => {
    const newUsers = [...users, 'sveta' + new Date().getTime()];
    setUsers(newUsers);
  }

  users.push(...users, 'sveta' + new Date().getTime());


  return <div>
    <button onClick={ () => setCounter(counter + 1) }> + </button>
    <button onClick = { addUser }>add User</button>
    <NewMessageCounter count = { counter }/>
    <Users users={ users }/>
  </div>
}