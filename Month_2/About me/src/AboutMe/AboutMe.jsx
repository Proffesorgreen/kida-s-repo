import React from "react";
import styles from "./AbouteMe.module.css";
import profilePic from "./360.jpg";

function AboutMe() {
  return (
    <div className={styles.container}>
      <div className={styles.profile}>
        <img src={profilePic} alt="Profile" className={styles.profileImg} />
        <h1>Steven Miller</h1>
        <p>Web Developer</p>
      </div>
      <div className={styles.details}>
        <h2>About Me</h2>
        <p>
          I am Steven Miller,I graduated from MIT a month ago. Now, I am looking
          for my first full-time job. I have been working as a freelance web
          developer for the last three years and cooperated with several
          startups. I cannot say with 100% confidence where I see myself in five
          years or what my big career goal is. The world is changing rapidly,
          and I don’t have enough professional experience to be certain about
          such things. However, I know that I can provide a fresh take and an
          extraordinary approach to every project. I am always open to
          challenges and constructive feedback. I am open-minded and learn new
          things quickly. I want to become a team player and dedicate all my
          skills and talents to develop high-quality and unique products.
        </p>
        <p>
          I’m a master coach, best-selling author and a passionate speaker. I’m
          the founder of the first hedge fund, special counsellor in many
          corporations across the globe. I’ve found balance between work and
          life, now I’m a totally happy person, inspiring speaker and writer,
          but it didn’t come easily. I've gone though hundreds of failures and
          complicated situations. You can use my previous experience in order
          not to fall into the same trap.
        </p>

        <h2>Contact Information</h2>
        <ul>
          <li>Email: miller.steven@example.com</li>
          <li>Phone: +1234567890</li>
          <li>Address: 123 Main Street, City, Country</li>
        </ul>
      </div>
    </div>
  );
}

export default AboutMe;
