import React from 'react';

export default function Login() {
  return (
    <div>
      <form action=''>
        <label htmlFor='user'>User : </label>
        <input placeholder='your name . . .' />
        <label htmlFor='' className='password'>
          Your password
        </label>
        <input type='password' className='pass' />
      </form>
    </div>
  );
}
