// src/components/atoms/register-form.tsx
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { setEmail as setReduxEmail } from '@/store/actions';
import { Button } from './button';

interface RegisterFormProps {
  onFormSubmitted: () => void;
}

export const RegisterForm = ({ onFormSubmitted }: RegisterFormProps) => {
  const dispatch = useDispatch();
  const [email, setEmail] = React.useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email) {
      dispatch(setReduxEmail(email));
      setEmail('');
      onFormSubmitted();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={email} onChange={handleChange} />
        <Button type="submit" variant="primary" size="small" label="Register" />
      </div>
    </form>
  );
};
