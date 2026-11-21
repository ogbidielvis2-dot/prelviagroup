import { useEffect, useState } from 'react';
import { Mail, Phone, MessageCircle } from 'lucide-react';
import SocialIcon from './Icons.jsx';
import { contact, social } from '../config/site.js';
import { submitContact } from '../services/contact.js';
import './Contact.css';

const EMPTY = { name: '', email: '', subject: '', message: '' };

function validate(v) {
  const e = {};
  if (v.name.trim().length < 2) e.name = 'Please enter your full name.';
  if (!v.email.trim()) e.email = 'Please enter your email address.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim())) e.email = 'Please enter a valid email address.';
  if (v.subject.trim().length < 3) e.subject = 'Please enter a subject.';
  if (v.message.trim().length < 10) e.message = 'Please write a message of at least 10 characters.';
  return e;
}

export default function Contact({ inquiry }) {
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ state: 'idle', text: '' });

  useEffect(() => {
    if (inquiry) {
      setValues((v) => ({ ...v, subject: inquiry.subject, message: inquiry.message }));
      setErrors({});
      setStatus({ state: 'idle', text: '' });
    }
  }, [inquiry]);

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    const first = Object.keys(found)[0];
    if (first) {
      document.getElementById(`f-${first}`)?.focus();
      return;
    }
    setStatus({ state: 'sending', text: 'Sending…' });
    const result = await submitContact(values);
    if (result.ok) {
      setValues(EMPTY);
      setStatus({ state: 'success', text: 'Thank you. Your message has been sent.' });
    } else {
      setStatus({ state: result.notConfigured ? 'info' : 'error', text: result.message });
    }
  };

  const field = (name, label, props = {}) => (
    <div className="field">
      <label htmlFor={`f-${name}`}>{label}</label>
      {props.as === 'textarea' ? (
        <textarea id={`f-${name}`} name={name} rows="5" value={values[name]} onChange={onChange}
          aria-invalid={!!errors[name]} aria-describedby={errors[name] ? `e-${name}` : undefined} />
      ) : (
        <input id={`f-${name}`} name={name} type={props.type || 'text'} autoComplete={props.autoComplete}
          value={values[name]} onChange={onChange}
          aria-invalid={!!errors[name]} aria-describedby={errors[name] ? `e-${name}` : undefined} />
      )}
      {errors[name] && <span className="field__error" id={`e-${name}`}>{errors[name]}</span>}
    </div>
  );

  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <div className="container contact__grid">
        <div className="contact__info">
          <h2 id="contact-title" className="section-title">Let's Connect.</h2>
          <p className="contact__lead">
            We'd love to hear from you. Reach out to Prelvia Group for inquiries, partnerships,
            services or more information.
          </p>
          <ul className="contact__list">
            {contact.email && (
              <li><Mail size={20} aria-hidden="true" /><a href={`mailto:${contact.email}`}>{contact.email}</a></li>
            )}
            {contact.phone && (
              <li><Phone size={20} aria-hidden="true" /><a href={`tel:${contact.phone.replace(/[^+\d]/g, '')}`}>{contact.phone}</a></li>
            )}
            {contact.whatsapp && (
              <li>
                <MessageCircle size={20} aria-hidden="true" />
                <a href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
              </li>
            )}
          </ul>
          <ul className="social" aria-label="Social media">
            {social.filter((s) => s.url).map((s) => (
              <li key={s.id}>
                <a href={s.url} aria-label={s.label} target="_blank" rel="noopener noreferrer">
                  <SocialIcon name={s.id} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <form className="form" onSubmit={onSubmit} noValidate>
          {field('name', 'Full Name', { autoComplete: 'name' })}
          {field('email', 'Email', { type: 'email', autoComplete: 'email' })}
          {field('subject', 'Subject')}
          {field('message', 'Message', { as: 'textarea' })}
          <button className="btn btn--primary btn--lg" type="submit" disabled={status.state === 'sending'}>
            {status.state === 'sending' ? 'Sending…' : 'Submit'}
          </button>
          <p className={`form__status form__status--${status.state}`} role="status" aria-live="polite">
            {status.text}
          </p>
        </form>
      </div>
    </section>
  );
}
