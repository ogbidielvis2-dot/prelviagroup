import { formEndpoint, contact } from '../config/site.js';

// Single place to connect a backend. Set `formEndpoint` in config/site.js to a URL that
// accepts a JSON POST ({ name, email, subject, message }). Until then nothing is sent.
export async function submitContact(values) {
  if (!formEndpoint) {
    return {
      ok: false,
      notConfigured: true,
      message: `Your details look good, but the contact form is not connected yet, so nothing was sent.${
        contact.email ? ` Please email us at ${contact.email}.` : ''
      }`,
    };
  }
  try {
    const res = await fetch(formEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(values),
    });
    if (!res.ok) throw new Error(`Status ${res.status}`);
    return { ok: true };
  } catch {
    return { ok: false, message: 'Something went wrong while sending. Please try again or contact us directly.' };
  }
}
