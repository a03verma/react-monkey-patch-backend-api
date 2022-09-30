import * as React from 'react';
import './style.css';
import { Users } from './Users';

export default function App() {
  return (
    <div>
      <h1>Users</h1>
      <p>Fetch users from API</p>
      <Users />
    </div>
  );
}
