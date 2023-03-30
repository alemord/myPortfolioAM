const SocialIcons = () => {
  const styles = {
    icon: {
      textDecoration: "none",
      fontSize: "22px",
      padding: "10px",
      transition: "0.2s ease-in",
    },
  };

  return (
    <div className="socialIcons" style={styles.socialIcons}>
      <a className="icon" style={styles.icon} href="https://github.com/alemord">
        <i className="fa-brands fa-github" aria-hidden="true" title="Alessandro's GitHub Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://www.linkedin.com/in/alessandro-m-a7314b83/">
        <i className="fa-brands fa-linkedin" aria-hidden="true" title="Alessandro's LinkedIn Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://www.instagram.com/mr.mordini/">
        <i className="fa-brands fa-instagram" aria-hidden="true" title="Alessandro's Instagram Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://twitter.com/amrdn777">
        <i className="fa-brands fa-twitter" aria-hidden="true" title="Alessandro's Twitter Profile"></i>
      </a>
    </div>
  );
};

export default SocialIcons;
