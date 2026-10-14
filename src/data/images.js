// Dummy Unsplash photos for the client preview. Replace with real photos before launch.
const photo = (id, alt, width, height) => ({
  src: `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${width}&h=${height}&q=75`,
  alt,
  width,
  height,
});

const localImage = (file, alt, width, height) => ({
  src: `/images/${file}.svg`,
  alt,
  width,
  height,
});

export const images = {
  hero: photo("1522202176988-66273c2fd55f", "Students collaborating in a bright classroom", 1600, 700),
  avatars: [
    photo("1507003211169-0a1dd7228f2d", "Learner portrait", 120, 120),
    photo("1494790108377-be9c29b29330", "Learner portrait", 120, 120),
    photo("1500648767791-00dcc994a43e", "Learner portrait", 120, 120),
  ],
  mentors: [
    photo("1438761681033-6461ffad8d80", "Instructor explaining a digital marketing strategy", 600, 600),
    photo("1472099645785-5658abf4ff4e", "Instructor reviewing a campaign with learners", 600, 600),
    photo("1580489944761-15a19d654956", "Instructor guiding a creative workshop", 600, 600),
    photo("1544005313-94ddf0286df2", "Instructor teaching a marketing class", 600, 600),
  ],
  projects: [
    photo("1524178232363-1fb2b075b655", "Students working together on a campaign project", 1000, 625),
    photo("1531482615713-2afd69097998", "Team discussing a search campaign case study", 1000, 625),
    photo("1517245386807-bb43f82c33c4", "Learners collaborating on a marketing project", 1000, 625),
    photo("1522071820081-009f0129c71c", "Team planning a digital advertising campaign", 1000, 625),
  ],
  testimonials: [
    photo("1506794778202-cad84cf45f1d", "Digital marketing course learner portrait", 200, 200),
    photo("1573497019940-1c28c88b4f3e", "Search marketing course learner portrait", 200, 200),
    photo("1573496359142-b8d87734a5a2", "Digital growth course learner portrait", 200, 200),
    photo("1507003211169-0a1dd7228f2d", "Freelance marketing course learner portrait", 200, 200),
    photo("1494790108377-be9c29b29330", "Paid media course learner portrait", 200, 200),
    photo("1500648767791-00dcc994a43e", "Content marketing course learner portrait", 200, 200),
  ],
  campus: [
    photo("1552664730-d307ca884978", "Learners collaborating in a classroom", 1200, 800),
    photo("1519389950473-47ba0277781c", "Team working together at computers", 800, 800),
    photo("1553877522-43269d4ea984", "Creative team collaborating in a studio", 800, 600),
    photo("1460925895917-afdab827c52f", "Digital marketing team reviewing analytics", 800, 1000),
    photo("1551288049-bebda4e38f71", "Colleagues discussing campaign performance", 1200, 600),
  ],
  partners: [
    localImage("partner-1", "Placeholder hiring partner logo 1", 240, 96),
    localImage("partner-2", "Placeholder hiring partner logo 2", 240, 96),
    localImage("partner-3", "Placeholder hiring partner logo 3", 240, 96),
    localImage("partner-4", "Placeholder hiring partner logo 4", 240, 96),
    localImage("partner-5", "Placeholder hiring partner logo 5", 240, 96),
    localImage("partner-6", "Placeholder hiring partner logo 6", 240, 96),
    localImage("partner-7", "Placeholder hiring partner logo 7", 240, 96),
    localImage("partner-8", "Placeholder hiring partner logo 8", 240, 96),
  ],
  placed: [
    photo("1438761681033-6461ffad8d80", "Learner portrait after a career placement", 600, 600),
    photo("1472099645785-5658abf4ff4e", "Learner portrait after a career placement", 600, 600),
    photo("1580489944761-15a19d654956", "Learner portrait after a career placement", 600, 600),
    photo("1544005313-94ddf0286df2", "Learner portrait after a career placement", 600, 600),
    photo("1506794778202-cad84cf45f1d", "Learner portrait after a career placement", 600, 600),
    photo("1573497019940-1c28c88b4f3e", "Learner portrait after a career placement", 600, 600),
  ],
  placementEvents: [
    photo("1524178232363-1fb2b075b655", "Learners working together in a classroom", 960, 720),
    photo("1531482615713-2afd69097998", "Team discussing a campaign project", 960, 720),
    photo("1517245386807-bb43f82c33c4", "Colleagues collaborating around a table", 960, 720),
    photo("1522071820081-009f0129c71c", "Team planning work in a shared workspace", 960, 720),
    photo("1552664730-d307ca884978", "Learners attending a workshop", 960, 720),
    photo("1519389950473-47ba0277781c", "Colleagues working at computers", 960, 720),
    photo("1553877522-43269d4ea984", "Creative team sharing ideas in a studio", 960, 720),
    photo("1460925895917-afdab827c52f", "Team reviewing digital campaign analytics", 960, 720),
  ],
  about: photo("1432888498266-38ffec3eaf0a", "Team planning a learning and work program", 1200, 900),
  plans: {
    starter: photo("1504384308090-c894fdcc538d", "Team learning digital marketing fundamentals", 1000, 600),
    pro: photo("1522202176988-66273c2fd55f", "Learners collaborating on advanced campaign work", 1000, 600),
    master: photo("1531482615713-2afd69097998", "Team building a digital growth strategy", 1000, 600),
    custom: photo("1517245386807-bb43f82c33c4", "Colleagues planning a tailored learning project", 1000, 600),
  },
  courseHero: photo("1522071820081-009f0129c71c", "Team learning in a collaborative workspace", 1600, 800),
  blog: [
    photo("1552664730-d307ca884978", "Team discussing search engine optimization", 1200, 630),
    photo("1519389950473-47ba0277781c", "Learners discussing digital marketing courses", 1200, 630),
    photo("1553877522-43269d4ea984", "Colleagues preparing for a marketing interview", 1200, 630),
    photo("1460925895917-afdab827c52f", "Digital team reviewing advertising analytics", 1200, 630),
    photo("1551288049-bebda4e38f71", "Team building a digital marketing portfolio", 1200, 630),
    photo("1432888498266-38ffec3eaf0a", "Freelancers working together on a marketing project", 1200, 630),
  ],
  videoPoster: photo("1504384308090-c894fdcc538d", "Learners attending a digital marketing demo class", 1280, 720),
  og: photo("1504384308090-c894fdcc538d", "Learners attending a digital marketing class", 1200, 630),
  contactMap: photo("1552664730-d307ca884978", "Learners collaborating in a classroom", 1200, 675),
};
