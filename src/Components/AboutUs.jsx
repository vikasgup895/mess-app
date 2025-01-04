import React from 'react';
import './AboutUs.css'; // Assuming you're using a CSS file for styling

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-header">
        <h1>About ABESEC Hostel Mess</h1>
        <p>Fueling Your Campus Life with Good Food</p>
      </div>

      <div className="about-us-content">
        <section className="section">
          <div className="section-content">
            <img 
              src="https://th.bing.com/th/id/OIP.TRcMco_syL5plvnK2aVv_gHaE6?w=245&h=180&c=7&r=0&o=5&pid=1.7" 
              alt="Hostel Mess" 
              className="section-image" 
            />
            <div className="text-content">
              <h2>Our Story</h2>
              <p>
                ABESEC Hostel Mess has been serving the students of ABES Engineering College for over a decade,
                providing nutritious, hygienic, and delicious meals to ensure a comfortable stay during their academic journey.
                We understand the importance of proper nutrition for students' physical and mental well-being,
                and we strive to provide meals that are wholesome, balanced, and affordable.
              </p>
            </div>
          </div>
        </section>

        <section className="section reverse">
          <div className="section-content">
            <div className="text-content">
              <h2>Our Mission</h2>
              <p>
                Our mission is to offer high-quality food and service, focusing on cleanliness, variety, and nutrition.
                We aim to foster a sense of community within the hostel by providing a warm, welcoming atmosphere
                where students can come together, share meals, and engage in meaningful conversations.
              </p>
            </div>
            <img 
              src="https://cache.careers360.mobi/media/colleges/social-media/media-gallery/5104/2018/9/14/Mess%20of%20ABES%20Engineering%20College%20Ghaziabad_Hostel.jpg" 
              alt="Mission Image" 
              className="section-image" 
            />
          </div>
        </section>

        <section className="section">
          <div className="section-content">
            <img 
              src="https://institute.careerguide.com/wp-content/uploads/2022/08/pu-h2.jpg" 
              alt="Facilities Image" 
              className="section-image" 
            />
            <div className="text-content">
              <h2>Facilities</h2>
              <p>
                Our hostel mess is equipped with modern kitchen facilities, ensuring that food is prepared in a hygienic and safe environment.
                We offer a variety of menu options for breakfast, lunch, snacks, and dinner, catering to different tastes and dietary needs.
                Our mess is spacious, and we also provide ample seating arrangements for students to enjoy their meals in comfort.
              </p>
            </div>
          </div>
        </section>

        <section className="section reverse">
          <div className="section-content">
            <div className="text-content">
              <h2>Our Team</h2>
              <p>
                ABESEC Hostel Mess is operated by a dedicated team of chefs, kitchen staff, and management personnel,
                all working together to ensure that every meal is of the highest quality. Our team is committed to providing excellent
                customer service and maintaining a clean and friendly environment.
              </p>
            </div>
            <img 
              src="https://th.bing.com/th/id/OIP.bfvOwlTLRXGbqsbNZxlrxgHaD2?w=306&h=180&c=7&r=0&o=5&pid=1.7" 
              alt="Team Image" 
              className="section-image" 
            />
          </div>
        </section>

        <section className="section">
          <div className="text-content contact-info">
            <h2>Contact Us</h2>
            <p>For any queries, feedback, or suggestions, feel free to reach out to us:</p>
            <ul>
              <li>Email: <a href="mailto:hostelmess@abesec.edu">hostelmess@abesec.edu</a></li>
              <li>Phone: <a href="tel:+911234567890">+91 123 456 7890</a></li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;