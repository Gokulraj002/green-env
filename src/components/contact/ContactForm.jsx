import { useState } from 'react';
import { CheckCircle2, Send } from 'lucide-react';
import Reveal from '../ui/Reveal.jsx';
import { company } from '../../data/company.js';

const requirements = [
  'Operation & maintenance of a plant',
  'Manpower supply',
  'Turnkey ETP / STP project',
  'Performance evaluation study',
  'Equipment, chemicals or RO cartridges',
  'Something else',
];

const empty = { name: '', organisation: '', phone: '', email: '', requirement: requirements[0], message: '' };

export default function ContactForm() {
  const [form, setForm] = useState(empty);
  const [sent, setSent] = useState(false);

  const update = (event) => setForm((f) => ({ ...f, [event.target.name]: event.target.value }));

  // No backend yet: the enquiry opens in the visitor's own email app, pre-filled.
  const submit = (event) => {
    event.preventDefault();
    const subject = `Enquiry: ${form.requirement}`;
    const body = [
      `Name: ${form.name}`,
      `Organisation: ${form.organisation || '-'}`,
      `Phone: ${form.phone}`,
      `Email: ${form.email || '-'}`,
      `Requirement: ${form.requirement}`,
      '',
      form.message,
    ].join('\n');

    window.location.href = `mailto:${company.emails[0]}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <Reveal as="form" className="cform" onSubmit={submit} delay={120}>
      <div className="cform__head">
        <h2>Send an enquiry</h2>
        <p>Share the plant type and capacity and we will get back to you.</p>
      </div>

      <div className="cform__grid">
        <label className="field">
          <span>Full name *</span>
          <input name="name" value={form.name} onChange={update} required autoComplete="name" />
        </label>
        <label className="field">
          <span>Organisation</span>
          <input name="organisation" value={form.organisation} onChange={update} autoComplete="organization" />
        </label>
        <label className="field">
          <span>Phone *</span>
          <input name="phone" type="tel" value={form.phone} onChange={update} required autoComplete="tel" />
        </label>
        <label className="field">
          <span>Email</span>
          <input name="email" type="email" value={form.email} onChange={update} autoComplete="email" />
        </label>
        <label className="field field--full">
          <span>What do you need?</span>
          <select name="requirement" value={form.requirement} onChange={update}>
            {requirements.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </label>
        <label className="field field--full">
          <span>Message *</span>
          <textarea
            name="message"
            rows={5}
            value={form.message}
            onChange={update}
            required
            placeholder="Plant type, capacity, location…"
          />
        </label>
      </div>

      <div className="cform__foot">
        <button type="submit" className="btn btn--dark">
          Send enquiry <Send />
        </button>
        {sent && (
          <p className="cform__sent" role="status">
            <CheckCircle2 size={18} /> Your email app should now be open with the enquiry ready to send.
          </p>
        )}
      </div>
    </Reveal>
  );
}
