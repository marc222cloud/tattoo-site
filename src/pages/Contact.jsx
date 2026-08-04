import { useState } from 'react';
import './Contact.css';
import studioLogo from '../assets/tattoologo2.png';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="booking-page">
      <section
        className="booking-hero"
        aria-labelledby="booking-title"
      >
        <div className="booking-hero__overlay">
          <div className="booking-hero__content">
            <img
              className="booking-hero__logo"
              src={studioLogo}
              alt=""
              aria-hidden="true"
            />
            <h1 id="booking-title">Book an Appointment</h1>
            <p>
              Tell us about your tattoo or piercing request. Submit the form and
              our studio will follow up to discuss the details and schedule your
              appointment.
            </p>
          </div>
        </div>
      </section>

      <section className="booking-content" aria-label="Appointment request and studio information">
        <div className="booking-content__container">
          <div className="booking-form-card">
            <div className="booking-section-heading">
              <h2>Booking Form</h2>
              <span aria-hidden="true" />
            </div>

            {submitted ? (
              <div className="booking-success" role="status" tabIndex="-1">
                <h3>Thank You</h3>
                <p>
                  Your appointment request has been received. The Archangel team
                  will follow up with you as soon as possible.
                </p>
                <button type="button" onClick={() => setSubmitted(false)}>
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form className="booking-form" onSubmit={handleSubmit}>
                <div className="booking-form__field booking-form__field--full">
                  <label htmlFor="full-name">Full Name <span>*</span></label>
                  <input id="full-name" name="fullName" type="text" autoComplete="name" required />
                </div>

                <div className="booking-form__field">
                  <label htmlFor="email">Email Address <span>*</span></label>
                  <input id="email" name="email" type="email" autoComplete="email" required />
                </div>

                <div className="booking-form__field">
                  <label htmlFor="phone">Phone Number <span>*</span></label>
                  <input id="phone" name="phone" type="tel" autoComplete="tel" required />
                </div>

                <div className="booking-form__field">
                  <label htmlFor="preferred-artist">Preferred Artist</label>
                  <select id="preferred-artist" name="preferredArtist" defaultValue="">
                    <option value="">No preference</option>
                    <option value="fred">Fred</option>
                    <option value="hannah">Hannah</option>
                    <option value="jake">Jake</option>
                  </select>
                </div>

                <div className="booking-form__field">
                  <label htmlFor="service-type">Service Type <span>*</span></label>
                  <select id="service-type" name="serviceType" defaultValue="" required>
                    <option value="" disabled>Select a service</option>
                    <option value="tattoo">Tattoo</option>
                    <option value="piercing">Piercing</option>
                  </select>
                </div>

                <div className="booking-form__field">
                  <label htmlFor="tattoo-style">Tattoo Style</label>
                  <select id="tattoo-style" name="tattooStyle" defaultValue="">
                    <option value="">Select a style</option>
                    <option value="anime">Anime</option>
                    <option value="blackwork">Blackwork</option>
                    <option value="realism">Realism</option>
                    <option value="traditional">Traditional</option>
                    <option value="fine-line">Fine Line</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="booking-form__field">
                  <label htmlFor="appointment-date">Preferred Appointment Date</label>
                  <input id="appointment-date" name="appointmentDate" type="date" />
                </div>

                <div className="booking-form__field">
                  <label htmlFor="placement">Placement on Body</label>
                  <input id="placement" name="placement" type="text" placeholder="e.g. forearm, back, thigh" />
                </div>

                <div className="booking-form__field">
                  <label htmlFor="estimated-size">Estimated Size</label>
                  <select id="estimated-size" name="estimatedSize" defaultValue="">
                    <option value="">Select a size</option>
                    <option value="small">Small — under 3 inches</option>
                    <option value="medium">Medium — 3 to 6 inches</option>
                    <option value="large">Large — over 6 inches</option>
                    <option value="unsure">Not sure yet</option>
                  </select>
                </div>

                <div className="booking-form__field">
                  <label htmlFor="budget">Budget</label>
                  <input id="budget" name="budget" type="text" inputMode="decimal" placeholder="Estimated budget" />
                </div>

                <div className="booking-form__field booking-form__field--full">
                  <label htmlFor="project-description">Project Description <span>*</span></label>
                  <textarea
                    id="project-description"
                    name="projectDescription"
                    rows="6"
                    placeholder="Describe your idea, preferred details, colors, and any other helpful information."
                    required
                  />
                </div>

                <div className="booking-form__field booking-form__field--full">
                  <label htmlFor="reference-image">Reference Image</label>
                  <label className="booking-upload" htmlFor="reference-image">
                    <span className="booking-upload__icon" aria-hidden="true">↑</span>
                    <strong>Upload an image</strong>
                    <small>PNG, JPG, or WEBP</small>
                  </label>
                  <input
                    className="booking-upload__input"
                    id="reference-image"
                    name="referenceImage"
                    type="file"
                    accept="image/png,image/jpeg,image/webp"
                  />
                </div>

                <button className="booking-form__submit" type="submit">
                  Submit Inquiry
                </button>
                <p className="booking-form__required"><span>*</span> Required fields</p>
              </form>
            )}
          </div>

          <aside className="booking-info-card" aria-labelledby="studio-information-title">
            <div className="booking-section-heading">
              <h2 id="studio-information-title">Studio Information</h2>
              <span aria-hidden="true" />
            </div>

            <address className="booking-info-list">
              <div className="booking-info-item">
                <span className="booking-info-item__icon" aria-hidden="true">●</span>
                <div>
                  <h3>Address</h3>
                  <p>102 Genesee St<br />Utica, NY 13502</p>
                </div>
              </div>

              <div className="booking-info-item">
                <span className="booking-info-item__icon" aria-hidden="true">●</span>
                <div>
                  <h3>Phone</h3>
                  <a href="tel:+13155550123">(315) 555-0123</a>
                </div>
              </div>

              <div className="booking-info-item">
                <span className="booking-info-item__icon" aria-hidden="true">●</span>
                <div>
                  <h3>Email</h3>
                  <a href="mailto:archangeltattoo@email.com">archangeltattoo@email.com</a>
                </div>
              </div>

              <div className="booking-info-item">
                <span className="booking-info-item__icon" aria-hidden="true">●</span>
                <div>
                  <h3>Studio Hours</h3>
                  <p>Mon–Fri: 10am–6pm<br />Sat: 12pm–5pm<br />Sun: Closed</p>
                </div>
              </div>
            </address>

            <div className="booking-socials">
              <h3>Follow Us</h3>
              <div className="booking-socials__links">
                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram</a>
                <a href="https://www.tiktok.com/" target="_blank" rel="noreferrer">TikTok</a>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
