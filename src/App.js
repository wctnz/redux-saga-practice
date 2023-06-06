import React from 'react';
import { useDispatch, useSelector } from "react-redux"
import "./App.css"
import { incrementCreator, decrementCreator, asyncIncrementCreator, asyncDecrementCreator } from './store/countReducer';
import { fetchUsers } from './store/userReducer';

const App = () => {
  const dispatch = useDispatch()
  const count = useSelector(state => state.countReducer.count)
  const users = useSelector(state => state.userReducer.users)

  return (
    <div className={"app"}>
      <div className="count">{count}</div>
      <div className="btns">
        <button className="btn" onClick={() => dispatch(asyncIncrementCreator())}>ИНКРЕМЕНТ</button>
        <button className="btn" onClick={() => dispatch(asyncDecrementCreator())}>ДЕКРЕМЕНТ</button>
        <button className="btn" onClick={() => dispatch(fetchUsers())}>Получить юзеров</button>
      </div>
      <div className="users">
        {users.map(user =>
          <div style={{ fontSize: "2rem", border: "1px solid black", padding: "10px", marginTop: 5 }}>{user.name}</div>
        )}
      </div>
    </div>
  );
};

export default App;
