function showContent(section) {
    const content = document.getElementById('content');
    content.innerHTML = ''; // Clear the current content

    if (section === 'home') {
        content.innerHTML = `
            
            <div class="flyer">
                <img src="Images/flyer.jpg" alt="flyer">
            </div>
            <h2>Welcome to the Event</h2>
            <section style="margin-top: 20px;">
                <h3>About the Department</h3>
                <p>The Department of Computer Science and Engineering at IIT Bombay is known for cutting-edge research and world-class education. Our faculty and students engage in solving real-world problems in various fields, including artificial intelligence, data science, cybersecurity, and more.</p>
            </section>

            <section style="margin-top: 20px;">
                <h3>About the Event</h3>
                <p>This event brings together leading academics, researchers, and industry professionals to explore the latest advancements in technology and research.</p>
            </section>

            <section style="margin-top: 20px;">
                <h3>Venue: XYZ Auditorium, IIT Bombay</h3>
            </section>

            <section style="margin-top: 20px;">
                <h3>Date: March 25-27, 2024</h3>
            </section>

            <section style="margin-top: 30px; text-align: center;">
                <div style="border: 2px solid #004d99; padding: 20px; border-radius: 10px;">
                    <h3>Register Now  
                        <a href="" target="_blank" style="background-color: #004d99; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Register Here</a>
                    </h3>    
                </div>
            </section>
            
        `;
    } else if (section === 'location') {
        content.innerHTML = `
            <div style="display: flex; justify-content: space-between;">
                <div>
                    <h2>Location</h2>
                    <p>The event will be held at the IIT Bombay campus, ESED Block.</p>
                    <h3>How to Reach IIT Bombay</h3>
                    <p>IIT Bombay is located in Powai, Mumbai. It is well-connected by road, rail, and air.</p>
                    <ul>
                        <li><strong>By Air:</strong> Nearest airport is Chhatrapati Shivaji Maharaj International Airport.</li>
                        <li><strong>By Rail:</strong> Nearest railway stations are Kanjurmarg and Vikhroli.</li>
                        <li><strong>By Road:</strong> Easily reachable by taxis or public transport.</li>
                    </ul>
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d7538.824163968783!2d72.913267!3d19.133431!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1727451533735!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        `;
    } else if (section === 'caplab') {
        content.innerHTML = `
            <div class="container">
                <div class="image">
                    <img src="Images/Abhishek_Chakraborty.jpg" alt="Prof. Abhishek Chakraborty">
                </div>
                <div class="info">
                    <h1>Prof. Abhishek Chakraborty</h1>
                    <h2>Core Faculty | Assistant Professor</h2>
                    <hr>
                    <strong>Research Areas:</strong>
                    <ul>
                        <li>Air pollution control technologies</li>
                        <li>Atmospheric processing of organic aerosols</li>
                        <li>Real-time air pollution monitoring</li>
                        <li>Fog-smog-aerosol interactions</li>
                        <li>Physicochemical characterization of aerosols</li>
                        <li>Real-time characterization and source apportionment of organic aerosols</li>
                        <li>Source apportionment</li>
                    </ul>
                </div>
            </div>
        `;
    } else if (section === 'contact') {
        content.innerHTML = `
            <div class="container">
                Sattish Yasarappu
                chandankr014@gmail.com
                +917070957221
            </div>
        `;
    }
}
