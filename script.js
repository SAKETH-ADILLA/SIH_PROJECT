const sections = {
    home: document.querySelector('#home'),
    jobs: document.querySelector('#jobs'),
    internships: document.querySelector('#internships'),
    mentorship: document.querySelector('#mentorship'),
    resources: document.querySelector('#resources'),
};

// Function to handle section navigation
const handleNavigation = () => {
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = anchor.getAttribute('href').substring(1);
            const targetSection = sections[targetId];
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        });
    });
};

// Call the navigation handler
handleNavigation();

// JavaScript Classes and Inheritance
class Job {
    constructor(title, company, location, description) {
        this.title = title;
        this.company = company;
        this.location = location;
        this.description = description;
    }

    getJobDetails() {
        return ${this.title} at ${this.company}, located in ${this.location}. Description: ${this.description};
    }
}

class Internship extends Job {
    constructor(title, company, location, description, duration) {
        super(title, company, location, description);
        this.duration = duration;
    }

    getInternshipDetails() {
        return ${this.getJobDetails()} Duration: ${this.duration};
    }
}
