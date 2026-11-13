import PageHero from '../components/ui/PageHero.jsx';
import ContactInfo from '../components/contact/ContactInfo.jsx';
import ContactForm from '../components/contact/ContactForm.jsx';
import '../styles/contact.css';
import heroImg from '../assets/images/contact-hero.webp';

export default function Contact() {
  return (
    <>
      <PageHero
        image={heroImg}
        eyebrow="Contact us"
        title={
          <>
            Let’s talk about <em>your plant.</em>
          </>
        }
        lead="Reach our Gwalior office by phone or email, or send an enquiry and we will respond with the team and scope for your requirement."
      />

      <section className="section">
        <div className="container contact">
          <ContactInfo />
          <ContactForm />
        </div>
      </section>
    </>
  );
}
