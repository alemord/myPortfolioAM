import PageHeader from "../../components/PageHeader";
import SocialIcons from "../../components/SocialIcons";
import Form from "../../components/Form";
import ContactInfo from "../../components/ContactInfo";

const Contact = ({ email, location }) => {
  return (
    <section className="contact">
      <PageHeader title="Contact me" description="Let's connect today" />
      <div className="contactWrap container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <Form />
          </div>
          <div className="col-12 col-lg-6">
          <ContactInfo name="Alessandro Mordini" location={location} email={email} />

           
          </div>
        </div>
      </div>
      <SocialIcons />
    </section>
  );
};

export default Contact;
