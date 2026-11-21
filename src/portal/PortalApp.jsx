import { useEffect, useState } from 'react';
import Logo from '../components/Logo.jsx';
import Login from './Login.jsx';
import SetPassword from './SetPassword.jsx';
import Dashboard from './Dashboard.jsx';
import { supabase, isConfigured } from './supabase.js';

export default function PortalApp() {
  const [session, setSession] = useState(undefined); // undefined = still loading
  const [recovering, setRecovering] = useState(false);

  useEffect(() => {
    if (!supabase) return undefined;
    supabase.auth.getSession().then(({ data }) => setSession(data.session));
    const { data } = supabase.auth.onAuthStateChange((event, s) => {
      setSession(s);
      if (event === 'PASSWORD_RECOVERY') setRecovering(true);
    });
    return () => data.subscription.unsubscribe();
  }, []);

  let view;
  if (!isConfigured) {
    view = (
      <div className="pcard">
        <h1>Portal not configured</h1>
        <p>
          Set <code>VITE_SUPABASE_URL</code> and <code>VITE_SUPABASE_ANON_KEY</code> in the
          environment, then rebuild. See <code>.env.example</code>.
        </p>
      </div>
    );
  } else if (session === undefined) {
    view = <p className="pload">Loading…</p>;
  } else if (recovering && session) {
    view = <SetPassword onDone={() => setRecovering(false)} />;
  } else if (session) {
    view = <Dashboard user={session.user} />;
  } else {
    view = <Login />;
  }

  return (
    <div className="portal">
      <header className="portal__bar">
        <Logo href="../" />
        <span className="portal__tag">Staff Portal</span>
      </header>
      <main className="portal__main">{view}</main>
    </div>
  );
}
