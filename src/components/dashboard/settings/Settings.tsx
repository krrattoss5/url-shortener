import { useState, FormEvent } from 'react';
import { type User } from '../../../Types.d';
import s from '../Dashboard.module.css';
import { getOut } from '../../../constants.tsx'

interface Props {
  user: User | null;
}

const Settings = ({ user }: Props) => {
  const [data, setData] = useState({
    name: user?.name || '',
    email: user?.email || ''
  });

  const [passwords, setPasswords] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const token = localStorage.getItem('token');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData(prev => ({ ...prev, [name]: value }));
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPasswords(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmitPreferences = (e: FormEvent) => {
    e.preventDefault();
    fetch('https://api-shortener.onrender.com/updatePreferences', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${token}`
      },
      body: JSON.stringify(data)
    }).then(res => res.json())
      .then(updatedUser => {
        console.log(updatedUser);
        window.location.reload()
      }).catch(error => {
        console.error(error);
      });
  };

  const handleSubmitSecurity = (e: FormEvent) => {
    e.preventDefault();
    fetch('https://api-shortener.onrender.com/updatePassword', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${token}`
      },
      body: JSON.stringify(passwords)
    }).then(res => res.json())
      .then(response => {
        console.log(response);
        getOut()
      }).catch(error => {
        console.error(error);
      });
  };

  const handleDeleteAccount = () => {
    fetch('https://api-shortener.onrender.com/deleteAccount', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${token}`
      }
    }).then(res => res.json())
      .then(response => {
        console.log(response);
      }).catch(error => {
        console.error(error);
      });
  };

  return (
    <div className={s.containerSection} style={{ alignItems: 'flex-start', background: '#fff' }}>
      <h2 className={s.title}>Profile</h2>
      <h3>Preferences</h3>
      <form className={s.forms} onSubmit={handleSubmitPreferences}>
        <label>Display name</label>
        <input
          className={s.inputs}
          type="text"
          placeholder='name'
          name="name"
          value={data.name}
          onChange={handleChange}
        />
        <label>E-mail address</label>
        <input
          className={s.inputs}
          type="text"
          placeholder='e-mail'
          name="email"
          value={data.email}
          onChange={handleChange}
        />
        <button className={s.buttons} type="submit">Update display name</button>
      </form>

      <h2 className={s.title}>Security & authentication</h2>
      <h3>Change password</h3>
      <span>You will be required to login after changing your password.</span>
      <form className={s.forms} onSubmit={handleSubmitSecurity}>
        <label>Current password</label>
        <input
          className={s.inputs}
          type="password"
          name="currentPassword"
          value={passwords.currentPassword}
          onChange={handlePasswordChange}
        />
        <label>New password</label>
        <input
          className={s.inputs}
          type="password"
          name="newPassword"
          value={passwords.newPassword}
          onChange={handlePasswordChange}
        />
        <label>Confirm new password</label>
        <input
          className={s.inputs}
          type="password"
          name="confirmPassword"
          value={passwords.confirmPassword}
          onChange={handlePasswordChange}
        />
        <button className={s.buttons} type="submit">Update password</button>
      </form>

      <h2 className={s.title}>Delete account</h2>
      <form className={s.forms} onSubmit={(e) => { e.preventDefault(); handleDeleteAccount(); }}>
        <button className={s.buttons} style={{ background: '#da0000' }} type="submit">Delete account</button>
      </form>
    </div>
  );
};

export default Settings;
