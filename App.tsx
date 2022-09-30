import * as React from 'react';
import { MonkeyPatchAPI } from './MonkeyPatchAPI';
import './style.css';
import { Users } from './Users';

export default function App() {
  MonkeyPatchAPI();

  return (
    <div>
      <h1>Users</h1>
      <p>Fetch users from API</p>
      <Users />
    </div>
  );
}
