const HeroSection = () => {
  return (
    <section className={styles.section1}>
      <h2>Hello There</h2>
      <p>My name is Malik Elbadri, I am a passionate frontend developer</p>
      <p>
        This website is intended to demonstrate the skills and use frontend
        tools to create an amazing user interfaces
      </p>
      <p>
        The UI in this website is completely designed by me and I didn't use any
        UI libraries such as MUI or Tailwind <br />
        This is intentional to demonstrate styling skills
      </p>
      <Button
        iconPosition="end"
        Icon={FaChevronDown}
        onClick={() => {
          context.switchTheme();
        }}
      >
        Scroll Down to start
      </Button>
    </section>
  );
};

export default HeroSection;
