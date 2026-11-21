import { useState } from 'react';
import { supabase } from './supabase.js';

export default function Login() {
  const [mode, setMode] = useState('signin'); // 'signin' | 'reset'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState({ kind: '', text: '' });

  const submit = async (e) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim())) {
      return setMsg({ kind: 'error', text: 'Please enter a valid email address.' });
    }
    setBusy(true);
    setMsg({ kind: '', text: '' });
    if (mode === 'signin') {
      if (!password) {
        setBusy(false);
        return setMsg({ kind: 'error', text: 'Please enter your password.' });
      }
      const { error } = await supabase.auth.signInWithPassword({ email: email.trim(), password });
      if (error) setMsg({ kind: 'error', text: 'Incorrect email or password.' });
    } else {
      const { error } = await supabase.auth.resetPasswordForEmail(email.trim(), {
        redirectTo: window.location.href.split('#')[0],
      });
      setMsg(
        error
          ? { kind: 'error', text: 'Could not send the reset email. Please try again.' }
          : { kind: 'ok', text: 'If that account exists, a reset link has been sent.' },
      );
    }
    setBusy(false);
  };

  return (
    <form className="pcard" onSubmit={submit} noValidate>
      <h1>{mode === 'signin' ? 'Staff sign in' : 'Reset password'}</h1>
      <div className="field">
        <label htmlFor="p-email">Email</label>
        <input id="p-email" type="email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      {mode === 'signin' && (
        <div className="field">
          <label htmlFor="p-pass">Password</label>
          <input id="p-pass" type="password" autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
      )}
      <button className="btn btn--primary btn--lg" type="submit" disabled={busy}>
        {busy ? 'Please wait…' : mode === 'signin' ? 'Sign in' : 'Send reset link'}
      </button>
      <p className={`pmsg pmsg--${msg.kind}`} role="status" aria-live="polite">{msg.text}</p>
      <button
        type="button"
        className="plink"
        onClick={() => { setMode(mode === 'signin' ? 'reset' : 'signin'); setMsg({ kind: '', text: '' }); }}
      >
        {mode === 'signin' ? 'Forgot your password?' : 'Back to sign in'}
      </button>
    </form>
  );
}
