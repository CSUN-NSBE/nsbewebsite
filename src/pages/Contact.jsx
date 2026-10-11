import { useState } from "react";

// TODO: in the future we will replace with actual Formspree form ID
const FORM_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

function Contact() {
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("submitting");

    const form = event.target;
    const data = new FormData(form);

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div id="wrapper" className="contact-page">
      <div id="main" style={{ maxWidth: "600px", margin: "3em auto", padding: "0 1.5em" }}>
        <h1 style={{ textAlign: "center", marginBottom: "0.25em" }}>Contact Us</h1>
        <p style={{ textAlign: "center", color: "maroon", marginBottom: "2em" }}>
          Have a question, or want to get involved? Send us a message.
        </p>

        {status === "success" ? (
          <p style={{ textAlign: "center", fontSize: "1.2em" }}>
            Thanks for reaching out — we&apos;ll get back to you soon!
          </p>
        ) : (
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: "1.2em" }}>
              <label htmlFor="name" style={{ display: "block", marginBottom: "0.4em" }}>
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                style={{ width: "100%", padding: "0.6em", boxSizing: "border-box" }}
              />
            </div>

            <div style={{ marginBottom: "1.2em" }}>
              <label htmlFor="email" style={{ display: "block", marginBottom: "0.4em" }}>
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                style={{ width: "100%", padding: "0.6em", boxSizing: "border-box" }}
              />
            </div>

            <div style={{ marginBottom: "1.2em" }}>
              <label htmlFor="message" style={{ display: "block", marginBottom: "0.4em" }}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                style={{ width: "100%", padding: "0.6em", boxSizing: "border-box" }}
              />
            </div>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="button"
              style={{ width: "100%", padding: "0.8em", fontSize: "1em" }}
            >
              {status === "submitting" ? "Sending..." : "Send Message"}
            </button>

            {status === "error" && (
              <p style={{ color: "red", marginTop: "1em", textAlign: "center" }}>
                Something went wrong — please try again, or email us directly.
              </p>
            )}
          </form>
        )}
      </div>
    </div>
  );
}

export default Contact;