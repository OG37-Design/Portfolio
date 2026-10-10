interface Job {
  title: string;
  org: string;
  dates: string;
  body: string;
}

const JOBS: Job[] = [
  {
    title: "Lead Design Researcher",
    org: "Nikola Motor",
    dates: "2021 May – Current",
    body: "Responsible for the design, strategy, planning, and deployment of research programs within Nikola Motors. Recruit focus group participants and maintain the participant database. Oversee organizational research and organizational design strategies for service, design, and product departments. Successfully integrated Human-Centered D/R into agile methodology through an innovative process. Build physical & digital prototypes to test design intent with a series of biometric hardware and software to include emotional recognition, GSR & eye-tracking.",
  },
  {
    title: "Service Designer",
    org: "steampunk",
    dates: "2020 July – 2021 May",
    body: "Responsible for creating human-centered systems and frameworks across a range of industries. Responsible for defining, executing, and documenting design research. Translate research-based insights into desired, feasible, and viable design solutions. Integrate lessons learned from lo- to hi-fidelity physical and digital prototypes. Leader in developing the research practice at steampunk.",
  },
  {
    title: "Service Design Director",
    org: "Candor Medical USA",
    dates: "2019 Nov – 2020 July",
    body: "As Service Design Director, I focus on developing new business, managing the client relationship at the executive level, and providing direction and oversight to project teams. Responsible for scoping and proposing work in addition to growing the design team. Responsible for the design and deployment of usability tests, documentation of insights, and the practical application of insights in the service offering.",
  },
  {
    title: "Project Manager & Design Strategy Lead",
    org: "Volvo",
    dates: "2019 Sep – 2019 Nov",
    body: "Investigating what people need and want, to develop new-to-the-world products, services, and experiences. Responsible for the design and research initiative of autonomous vehicles in an old infrastructure context. Responsible for introducing and implementing service design tools. Planned and executed a series of stakeholder workshops. Designed a playbook for auto manufacturers to become partners with the local government.",
  },
  {
    title: "Director Of Services",
    org: "Parker's",
    dates: "2015 Dec – 2019 Nov",
    body: "Responsible for the design of a new service system that exceeded our internal customer's expectations while responding to the strict time and budgetary constraints on the project. Along with the simultaneous deployment of each branch of the system — quality, inventory, service, and craftsmanship — I managed daily operations and multiple teams.",
  },
  {
    title: "E-5 Petty Officer, Damage Controlman",
    org: "US Navy",
    dates: "2012 Jan – 2016 Jan",
    body: "Received two Navy-Marine Corps Achievement Medals aboard the USS Farragut DDG 99. Led tactical anti-terrorism teams across many missions in the middle-east. Primarily responsible for all fire fighting, CBR exercise, support, and prevention equipment. Within three years, I was promoted from E1 to E5 Second Class Damage Controlman.",
  },
];

export default function ResumePage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <div className="flex flex-wrap items-baseline justify-between gap-4">
        <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Resume
        </h1>
        <a
          href="/resume/resume.png"
          target="_blank"
          rel="noreferrer"
          className="text-sm text-accent underline underline-offset-2"
        >
          View original
        </a>
      </div>
      <p className="mt-2 text-muted">
        Noel O. G. — Service Researcher · Strategist · Designer
      </p>

      <div className="mt-10">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">
          Experience
        </h2>
        <ul className="mt-4 divide-y divide-border border-t border-border">
          {JOBS.map((job) => (
            <li key={job.title + job.org} className="py-6">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="font-medium">
                  {job.title} <span className="text-muted">— {job.org}</span>
                </h3>
                <span className="text-sm text-muted">{job.dates}</span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-foreground/90">
                {job.body}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2">
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">
            Skills
          </h2>
          <p className="mt-4 text-sm leading-relaxed">
            iMotions, MAXQDA, Adobe CC, Rapid Prototyping, Client Management,
            Complexity Mapping, Workshop Facilitation, Software Architecture
            &amp; IA, Mixed Methods Research, Spanish Speaking/Writing
          </p>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">
            Education
          </h2>
          <p className="mt-4 text-sm leading-relaxed">
            <strong>Savannah College of Art and Design</strong>
            <br />
            M.F.A. Service Design, 2018–2020
            <br />
            B.F.A. Industrial Design, 2016–2018, Cum Laude
            <br />
            <br />
            <strong>Miami Dade College</strong>
            <br />
            Architecture Design, 2009–2012
          </p>
        </div>
      </div>
    </div>
  );
}
