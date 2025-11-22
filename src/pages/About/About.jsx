import React from 'react';


const About = () => {

  // --- Icon Components (Defined inside AboutUs) ---

  const AccessibilityIcon = ({ className = "w-6 h-6" }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15.667a.75.75 0 0 1-.53 1.28l-2.219.002a.75.75 0 0 1-.53-1.28l2.22-.002a.75.75 0 0 1 .53 1.28ZM12 12.75a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 10.5c0-1.519.9-2.825 2.188-3.399C14.072 6.74 15 5.42 15 3.75a3 3 0 0 0-6 0c0 1.67.928 2.99 2.312 3.35A3.74 3.74 0 0 1 10.5 10.5ZM12 12.75c-5.182 0-9.42 3.65-9.728 8.435a.75.75 0 0 0 .727.815h18a.75.75 0 0 0 .728-.815C21.42 16.4 17.182 12.75 12 12.75Z" />
    </svg>
  );

  const UsersIcon = ({ className = "w-6 h-6" }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0-12 0m12 0a9.094 9.094 0 0 1-12 0m12 0c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3Zm-6 0c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3Zm-6 0c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3Z" />
    </svg>
  );

  const SparklesIcon = ({ className = "w-6 h-6" }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.25 12l2.846-.813a4.5 4.5 0 0 0-3.09-3.09L15 5.25l-.813 2.846a4.5 4.5 0 0 0-3.09 3.09L8.25 12l2.846.813a4.5 4.5 0 0 0 3.09 3.09L15 18.75l.813-2.846a4.5 4.5 0 0 0 3.09-3.09Z" />
    </svg>
  );

  const LightBulbIcon = ({ className = "w-6 h-6" }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a.75.75 0 0 1-.75-.75V11.25a.75.75 0 0 1 1.5 0v6a.75.75 0 0 1-.75.75ZM9 20.25a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c-4.97 0-9 4.03-9 9 0 3.15.82 5.043 2.5 6.342C7.17 19.82 9.5 21.75 12 21.75c2.5 0 4.83-1.93 6.5-3.408C20.18 17.043 21 15.15 21 12c0-4.97-4.03-9-9-9Z" />
    </svg>
  );

  const ShieldCheckIcon = ({ className = "w-6 h-6" }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.6 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296A3.745 3.745 0 0 1 16.5 21a3.745 3.745 0 0 1-2.864-1.332 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 12 15c-1.268 0-2.39-.6-3.068-1.593a3.745 3.745 0 0 1-3.296-1.043A3.745 3.745 0 0 1 3 16.5a3.745 3.745 0 0 1 1.332-2.864 3.745 3.745 0 0 1 3.296-1.043A3.745 3.745 0 0 1 9 12c0-1.268.6-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296A3.745 3.745 0 0 1 13.5 3a3.745 3.745 0 0 1 2.864 1.332 3.745 3.745 0 0 1 1.043 3.296A3.745 3.745 0 0 1 18 9c1.268 0 2.39.6 3.068 1.593a3.745 3.745 0 0 1 3.296 1.043A3.745 3.745 0 0 1 21 13.5" />
    </svg>
  );

  const TrendingUpIcon = ({ className = "w-6 h-6" }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 18 9-9 4.5 4.5L21.75 6" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 18V6h-6" />
    </svg>
  );

  /**
   * Card component for displaying a single core value.
   */
  const ValueCard = ({ icon, title, description }) => {
    return (
      <div className="flex flex-col items-start">
        <div className="flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full mb-4 text-blue-600 dark:text-blue-400">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400">{description}</p>
      </div>
    );
  };

  // --- Page Section Components (Defined inside AboutUs) ---

  /**
   * Hero section for the About page.
   */
  const Hero = () => {
    return (
      <section className="w-full bg-gradient-to-b from-blue-50 to-white dark:from-blue-950 dark:to-gray-900 py-20 md:py-28 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About StepFree: Empowering Lives, Building Connections
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            StepFree is dedicated to breaking down barriers and fostering an inclusive world where disabled individuals have unparalleled access to education, meaningful employment, and vibrant community life. We believe in a future where every step is free from limitation.
          </p>
        </div>
      </section>
    );
  };

  /**
   * Section for Mission and Vision.
   */
  const MissionVision = () => {
    return (
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Column */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
              Our Mission
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              To provide a comprehensive, accessible platform that connects disabled individuals with vital resources, fostering equal opportunities in education, meaningful employment, and vibrant community engagement, promoting independence and quality of life.
            </p>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
              Our Vision
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              To be the leading global resource for accessibility, empowering every disabled person to reach their full potential and live a life without barriers, contributing to a more inclusive and equitable society.
            </p>
          </div>
          {/* Image Column */}
          <div>
            <img
              src="https://placehold.co/600x400/d1e3f8/3b82f6?text=Our+Team"
              alt="A diverse group of colleagues collaborating in an office."
              className="rounded-lg shadow-lg w-full h-auto"
              onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/e2e8f0/94a3b8?text=Image'; }}
            />
          </div>
        </div>
      </section>
    );
  };

  /**
   * Section for Core Values.
   */
  const CoreValues = () => {
    const values = [
      {
        icon: <AccessibilityIcon className="w-6 h-6" />,
        title: "Accessibility First",
        description: "Ensuring all our resources and platform features are user-friendly, intuitive, and barrier-free for everyone."
      },
      {
        icon: <UsersIcon className="w-6 h-6" />,
        title: "Community & Belonging",
        description: "Fostering a supportive, inclusive network where disabled individuals feel valued, connected, and empowered."
      },
      {
        icon: <SparklesIcon className="w-6 h-6" />,
        title: "Empowerment",
        description: "Providing tools, knowledge, and opportunities that enable self-determination and personal growth."
      },
      {
        icon: <LightBulbIcon className="w-6 h-6" />,
        title: "Innovation",
        description: "Continuously seeking new and better ways to solve challenges, at the forefront of accessibility through creative solutions and thoughtful design."
      },
      {
        icon: <ShieldCheckIcon className="w-6 h-6" />,
        title: "Integrity",
        description: "Operating with honesty, transparency, and a deep commitment to the trust placed in us by our community."
      },
      {
        icon: <TrendingUpIcon className="w-6 h-6" />,
        title: "Growth & Progress",
        description: "Committed to supporting individuals in achieving their personal and professional aspirations, fostering continuous improvement."
      },
    ];

    return (
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-black">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-16">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {values.map((value) => (
              <ValueCard
                key={value.title}
                icon={value.icon}
                title={value.title}
                description={value.description}
              />
            ))}
          </div>
        </div>
      </section>
    );
  };

  /**
   * Section for Commitment to Impact.
   */
  const Commitment = () => {
    return (
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <div>
            <img
              src="https://placehold.co/600x400/d1d5db/4b5563?text=Our+Impact"
              alt="A person in a wheelchair working diligently on a laptop in a bright room."
              className="rounded-lg shadow-lg w-full h-auto"
              onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/e2e8f0/94a3b8?text=Image'; }}
            />
          </div>
          {/* Text Column */}
          <div className="md:order-last">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Our Commitment to Impact
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              StepFree is more than just a platform; it's a movement. We are committed to making a tangible, positive impact in the lives of disabled individuals by fostering an ecosystem of support, opportunity, and advocacy. Our initiatives are designed with a deep understanding of the unique challenges and strengths of our community.
              <br /><br />
              We partner with leading organizations, educators, and employers to ensure our resources are current, relevant, and effective, continuously expanding our reach and deepening our support for the community.
            </p>
            <a
              href="#"
              className="inline-block bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300"
            >
              Learn More About Our Work
            </a>
          </div>
        </div>
      </section>
    );
  };

  // --- Main Return Statement for AboutUs Component ---
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 font-sans antialiased">
      <Hero />
      <MissionVision />
      <CoreValues />
      <Commitment />
    </div>
  );
}

export default About;