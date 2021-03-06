import { Fade, Slide } from "react-reveal";
import { useRef } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = ({ data }) => {
  const form = useRef();

  if (!data) return null;
  const name = data.name;
  const street = data.address.street;
  const city = data.address.city;
  const state = data.address.state;
  const zip = data.address.zip;
  const phone = data.phone;
  const message = data.contactmessage;

  const onSubmit = (e) => {
    e.preventDefault();

    var name = document.getElementById("name").value;
    var mail = document.getElementById("mail").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    if (
      name.length === 0 ||
      mail.length === 0 ||
      subject.length === 0 ||
      message.length === 0
    ) {
      toast("Please,complete the fields", {
        position: "top-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });

      return;
    } else {
      emailjs
        .sendForm(
          "service_6mp8skr",
          "template_xpo3ai2",
          form.current,
          "cY6CzwstGgVQOf9wY"
        )
        .then(
          (result) => {
            toast("Thanks for your message", {
              position: "top-left",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
          },
          (error) => {
            console.log(error.text);
          }
        );
    }

    e.target.reset();
  };

  return (
    <section id="contact">
      <ToastContainer />
      <Fade bottom duration={1000}>
        <div className="row section-head">
          <div className="two columns header-col">
            <h1>
              <span>Get In Touch.</span>
            </h1>
          </div>

          <div className="ten columns">
            <p className="lead">{message}</p>
          </div>
        </div>
      </Fade>

      <div className="row">
        <Slide left duration={1000}>
          <div className="eight columns">
            <form onSubmit={onSubmit} ref={form}>
              <fieldset>
                <div>
                  <label htmlFor="contactName">
                    Name <span className="required">*</span>
                  </label>
                  <input type="text" size="35" name="name" id="name" />
                </div>

                <div>
                  <label htmlFor="contactEmail">
                    Email <span className="required">*</span>
                  </label>
                  <input type="text" size="35" name="mail" id="mail" />
                </div>

                <div>
                  <label htmlFor="contactSubject">Subject</label>
                  <input type="text" size="35" name="subject" id="subject" />
                </div>

                <div>
                  <label htmlFor="contactMessage">
                    Message <span className="required">*</span>
                  </label>
                  <textarea
                    cols="50"
                    rows="8"
                    name="message"
                    id="message"
                  ></textarea>
                </div>

                <div>
                  <button className="submit">Submit</button>
                  <span id="image-loader">
                    <img alt="" src="images/loader.gif" />
                  </span>
                </div>
              </fieldset>
            </form>

            <div id="message-warning"> Error boy</div>
            <div id="message-success">
              <i className="fa fa-check"></i>Your message was sent, thank you!
              <br />
            </div>
          </div>
        </Slide>

        <Slide right duration={1000}>
          <aside className="four columns footer-widgets">
            <div className="widget widget_contact">
              <h4>Address and Phone</h4>
              <p className="address">
                {name}
                <br />
                {street} <br />
                {city}, {state} {zip}
                <br />
                <span>{phone}</span>
              </p>
            </div>
          </aside>
        </Slide>
      </div>
    </section>
  );
};

export default Contact;
