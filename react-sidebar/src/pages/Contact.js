import React from 'react';

function Contact() {
  return (
    <div className="contact">
      <h1>Contact</h1>
      <a href="mailto:webmaster@example.com">Jon Doe</a>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Contact;
