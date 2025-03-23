const _BIO = {
  name: "Julian Barbera",
  summary:
    "I have a deep passion for solving problems and take great pride in collaborating with others to address some of the most significant challenges facing humanity. Engineering is my creative outlet, allowing me to express my ideas and innovations. To me, it is a form of art, and I am eager to share it with others to make a meaningful impact.",
  profilePicture: "img/personal/profile.jpg",
  email: "jbarbera@ucsc.edu", // Optional
  github: "https://github.com/JulianBarbera", // Optional
  linkedin: "https://www.linkedin.com/in/julianbarbera/", // Optional

  education: [
    {
      _id: 1,
      institution: "University of California at Sasnta Cruz",
      logoURL:
        "https://www.ucsc.edu/wp-content/uploads/2023/08/fiat-slug.png",
      field: "Electrical Engineering",
      degree: "Bachelor of Science",
      startDate: "2023-09", // Enter valid date format
      endDate: "2027-04", // Enter valid date format
      gpa: "",
      summary: "", // Optional
      organizations: [
        { name: "Rocket Team", position: "Avionics Lead" },
        { name: "Slug Security", position: "External Outreach" },
        { name: "Slugbotics", position: "Team Lead" },
      ], // Optional
    },
    {
      _id: 2,
      institution: "Bishop O'Dowd High School",
      logoURL:
        "https://www.calhisports.com/wp-content/uploads/2016/08/BishopODowdDragonsOaklandCA.png",
      field: "",
      degree: "",
      startDate: "2019-08", // Enter valid date format
      endDate: "2023-04", // Enter valid date format
      gpa: "3.12",
      summary: "", // Optional
      organizations: [
        { name: "Robotics Club", position: "President" },
        { name: "Chemistry Club", position: "President" },
        { name: "Aerospace Engineering Club", position: "President" },
      ], // Optional
    },
  ],
};

const _WORK = [
   {
    _id: 2,
    company: "Astranis Space Technologies Corp.",
    position: "Avionics Electrical Intern",
    website: "https://www.astranis.com/",
    logoURL:
      "img/logos/Astranis.png",
    startDate: "2025-03",
    endDate: "present",
    summary:
      "Assisted in the design, testing, and integration of avionics systems for geostationary communication satellites, focusing on power distribution, signal integrity, and system reliability.",
    skills: [],
  },
  {
    _id: 1,
    company: "Slugworks",
    position: "3D Printing Manager",
    website: "https://slugworks.engineering.ucsc.edu/",
    logoURL:
      "img/logos/Slugworks.png",
    startDate: "2023-10",
    endDate: "present",
    summary:
      "Developed infrastructure, established protocols and training programs for a public 3D printing space. Trained over 500 students and staff in 3D printing while managing a fleet of 10 Bambu Labs 3D printers.",
    skills: [],
  },
];

const _PROJECTS = [
  {
    title: "Small Form Factor Flight Computer",
    completionDate: "2025-02", // "Present" if in progress
    imageURL: "img/projects/BlazeMini.png",
    githubURL: "https://github.com/UCSCRocketry/blaze-mini",
    website: "",
    summary: "A flight computer designed to control thrust vector control solid propellant rockets and actuate air braking systems while conducting real-time data processing. The system integrates power management, gps, and multiple sensors, including a gyroscope, accelerometer, and barometer. It features a telemetry system for transmitting real-time flight data to a ground station, enabling live monitoring and analysis. Programming in C enables live telemetry, ensuring reliable data transmission and system performance. PCB is designed in KiCad with design focused on being compact and highly reliable",
  },
  {
    title: "CAN Throttle Encoder",
    completionDate: "2025-03", // "Present" if in progress
    imageURL: "img/projects/ThrottleEncoder.png",
    githubURL: "https://github.com/Slugbotics/railspeeder-electrical",
    website: "",
    summary: "A throttle encoder is designed to encode the signal from a potentiometer into CAN bus communication using an STM32 microcontroller and a CAN transceiver with ESD protection. This compact system converts the analog input from the potentiometer into a digital signal, ensuring precise throttle control in experimental locomotives. The design incorporates robust ESD protection to safeguard the components against electrostatic discharge, enhancing reliability in demanding environments. With a focus on space efficiency, the encoder is engineered in a very small form factor, making it ideal for applications in experimental locomotives where both size and performance are critical.",
  }
];

const _PAPERS = [
  {
    title: "Resume",
    pdfURL: "papers/Barbera, Resume.pdf",
    abstract: "My latest resume",
  },
];

const _PORTFOLIO = {
  _BIO,
  _WORK,
  _PROJECTS,
  _PAPERS,
};

export default _PORTFOLIO;
