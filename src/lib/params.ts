import MY_EXPERIENCES from './experiences.params';
import MY_PROJECTS from './projects.params';
import MY_SKILLS from './skills.params';
import {
  Platform,
  type HomePageParams,
  type ProjectPageParams,
  type ExperiencePageParams,
  type SkillsPageParams,
  type ResumePageParams,
  type SearchPageParams
} from './types';
import { Icons } from './utils';

export const TITLE_SUFFIX = 'BDBT';

export const NavBar = {
  home: 'Home',
  personal: 'Projects',
  career: 'Experiences',
  resume: 'Resume',
  skills: 'Skills'
};

export const getPlatfromIcon = (platform: Platform): Icons => {
  switch (platform) {
    case Platform.GitHub:
      return Icons.GitHub;
    case Platform.Linkedin:
      return Icons.LinkedIn;
    case Platform.StackOverflow:
      return Icons.StackOverflow;
    case Platform.Facebook:
      return Icons.Facebook;
    case Platform.Email:
      return Icons.Email;
    case Platform.Twitter:
      return Icons.Twitter;
    case Platform.Youtube:
      return Icons.Youtube;
  }
};

export const HOME: HomePageParams = {
  title: 'Home',
  name: 'Benjamin',
  lastName: 'Debotté',
  description:
    `A DevOps Engineer dedicated to the art of crafting seamless, efficient, and robust software ecosystems.
     With a rich background in CI/CD, full-stack development, software engineering, and system architectural design,
     I am your catalyst for optimizing and accelerating your software development and deployment processes.`,
  links: [
    { platform: Platform.GitHub, link: 'https://github.com/BenjaminDebotte/' },
    {
      platform: Platform.Linkedin,
      link: 'https://www.linkedin.com/in/benjamin-debotte/'
    },
    {
      platform: Platform.StackOverflow,
      link: 'https://stackoverflow.com/users/4012159/'
    },
    {
      platform: Platform.Email,
      link: 'contact@bdbt.dev'
    },
  ]
};

export const PROJECTS: ProjectPageParams = {
  title: 'Projects',
  items: MY_PROJECTS
};

export const EXPERIENCES: ExperiencePageParams = {
  title: 'Experiences',
  items: MY_EXPERIENCES
};

export const SKILLS: SkillsPageParams = {
  title: 'Skills',
  items: MY_SKILLS
};

export const RESUME: ResumePageParams = {
  title: 'Resumé',
  item: ''
};

export const SEARCH: SearchPageParams = {
  title: 'Search'
};
