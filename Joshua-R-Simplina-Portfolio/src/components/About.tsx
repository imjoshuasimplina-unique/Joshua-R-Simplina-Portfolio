import profilePhoto from '@/assets/pic3.webp';

const About = () => {
  return (
    <section id="about" className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about quality and dedicated to ensuring software excellence
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <div className="fade-in-left">
            <div className="relative max-w-md mx-auto">
              <div className="glass rounded-2xl p-2 glow-hover">
                <img
                  src={profilePhoto}
                  alt="Alex Johnson - Software QA Tester"
                  className="rounded-xl w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Professional Details Table */}
          <div className="fade-in-right">
          <div className="glass rounded-xl p-8 glow-hover">
  <div className="grid gap-6">

    {/* Background Section */}
    <div className="flex flex-col items-center text-center py-8 border-b border-white/10 last:border-b-0">
      <h3 className="text-2xl font-semibold text-primary mb-4">Background</h3>
      <div className="max-w-3xl text-muted-foreground space-y-4 text-justify">
        <p>
          I'm Joshua R. Simplina, a software tester with 4 years of hands-on experience in testing web and mobile applications with 
          a strong attention to detail and a passion for software quality. Hands-on experience in test planning, test case design, and defect reporting.
        </p>
        <p>
          Specialized in Manual Testing with growing expertise in Automation Testing 
          using Selenium and Playwright. Experienced in executing comprehensive testing 
          strategies across various project types and domains.
        </p>
        <p>
          Proficient in Functional, Regression, Smoke, Integration, UAT, and Exploratory 
          testing. Skilled in API testing using Postman and bug management with JIRA and Redmine. 
          Well-versed in SDLC and STLC processes.
        </p>
        <p>
          Comfortable collaborating in Agile/Scrum environments with a focus on 
          continuous improvement and quality. Committed to thorough documentation 
          and clear communication with development teams.
        </p>
      </div>
    </div>

  </div>
</div>

</div>

        </div>
      </div>
    </section>
  );
};

export default About;