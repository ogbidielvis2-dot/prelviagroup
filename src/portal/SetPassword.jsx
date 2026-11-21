import { useState } from 'react';
import { supabase } from './supabase.js';

export default function SetPassword({ onDone }) {
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [msg, setMsg] = useState('');
  const [busy, setBusy] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    if (password.length < 8) return setMsg('Use at least 8 characters.');
    if (password !== confirm) return setMsg('Passwords do not match.');
    setBusy(true);
    const { error } = await supabase.auth.updateUser({ password });
    setBusy(false);
    if (error) setMsg('Could not update the password. The link may have expired.');
    else onDone();
  };

  return (
    <form className="pcard" onSubmit={submit} noValidate>
      <h1>Set a new password</h1>
      <div className="field">
        <label htmlFor="p-new">New password</label>
        <input id="p-new" type="password" autoComplete="new-password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div className="field">
        <label htmlFor="p-conf">Confirm password</label>
        <input id="p-conf" type="password" autoComplete="new-password" value={confirm} onChange={(e) => setConfirm(e.target.value)} />
      </div>
      <button className="btn btn--primary btn--lg" type="submit" disabled={busy}>Save password</button>
      <p className="pmsg pmsg--error" role="status" aria-live="polite">{msg}</p>
    </form>
  );
}
