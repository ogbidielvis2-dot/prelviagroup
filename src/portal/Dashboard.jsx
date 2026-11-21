import { supabase } from './supabase.js';

export default function Dashboard({ user }) {
  return (
    <div className="pcard pcard--wide">
      <h1>Welcome</h1>
      <p>Signed in as <strong>{user.email}</strong>.</p>
      <p>
        This is the starting point of the staff portal. Sign-in and password reset are in place;
        features such as enquiries and user management will be added here.
      </p>
      <button className="btn btn--outline" type="button" onClick={() => supabase.auth.signOut()}>
        Sign out
      </button>
    </div>
  );
}
