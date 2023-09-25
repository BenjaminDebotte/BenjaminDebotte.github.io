import Assets from './data/assets';
import type { Skill } from './types';
import svelte from './md/svelte.md?raw';

const s = (skill: Skill) => skill;

export type ArrayElementType<ArrayType extends readonly unknown[]> =
  ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

const MY_SKILLS = [
  s({
    slug: 'graphql',
    color: 'purple',
    description: 'GraphQL is a query language for your API, providing a more efficient and flexible approach to data retrieval.',
    logo: Assets.GraphQL,
    name: 'GraphQL'
  }),
  s({
    slug: 'kafka',
    color: 'orange',
    description: 'Kafka is a distributed streaming platform that enables the building of real-time data pipelines and streaming applications.',
    logo: Assets.Kafka,
    name: 'Apache Kafka'
  }),
  s({
    slug: 'full-stack-development',
    color: 'green',
    description: 'Full-stack development involves working on both the front-end and back-end of web applications.',
    logo: Assets.FullStack,
    name: 'Full-Stack Development'
  }),
  s({
    slug: 'continuous-integration-and-continuous-delivery',
    color: 'blue',
    description: 'Continuous Integration (CI) and Continuous Delivery (CD) automate the software development pipeline, ensuring high-quality and efficient releases.',
    logo: Assets.CICD,
    name: 'Continuous Integration and Continuous Delivery (CI/CD)'
  }),
  s({
    slug: 'kubernetes',
    color: 'orange',
    description: 'Kubernetes is a container orchestration platform that automates the deployment, scaling, and management of containerized applications.',
    logo: Assets.Kubernetes,
    name: 'Kubernetes'
  }),
  s({
    slug: 'team-leading',
    color: 'cyan',
    description: 'Team leading involves guiding and managing a group of individuals to achieve common goals and deliver outstanding results.',
    logo: Assets.TeamLeading,
    name: 'Team Leading'
  }),
  s({
    slug: 'linux',
    color: 'black',
    description: 'Linux is an open-source operating system used extensively in software development and server environments.',
    logo: Assets.Linux,
    name: 'Linux'
  }),
  s({
    slug: 'java',
    color: 'orange',
    description: 'Java is a versatile programming language commonly used for building robust and scalable applications.',
    logo: Assets.Java,
    name: 'Java'
  }),
  s({
    slug: 'nvim',
    color: 'green',
    description: 'Neovim is an improved version of the Vim text editor, offering enhanced extensibility and functionality for efficient code editing.',
    logo: Assets.Neovim,
    name: 'Neovim'
  }),
  s({
    slug: 'git',
    color: 'red',
    description: 'Git is a distributed version control system used for tracking changes in source code during software development.',
    logo: Assets.Git,
    name: 'Git'
  }),
  s({
    slug: 'node-js',
    color: 'green',
    description: 'Node.js is a runtime environment that allows you to run JavaScript on the server side, making it suitable for building scalable web applications.',
    logo: Assets.NodeJs,
    name: 'Node.js'
  }),
  s({
    slug: 'react-js',
    color: 'blue',
    description: 'React.js is a JavaScript library for building user interfaces, known for its component-based approach and reactivity.',
    logo: Assets.ReactJs,
    name: 'React.js'
  }),
  s({
    slug: 'devops',
    color: 'orange',
    description: 'DevOps is a set of practices that combine software development and IT operations to improve the software delivery process.',
    logo: Assets.DevOps,
    name: 'DevOps'
  }),
  s({
    slug: 'docker',
    color: 'cyan',
    description: 'Docker is a platform for developing, shipping, and running applications in containers, providing portability and scalability.',
    logo: Assets.Docker,
    name: 'Docker'
  }),
  s({
    slug: 'ansible',
    color: 'red',
    description: 'Ansible is an open-source automation tool used for configuration management, application deployment, and task automation.',
    logo: Assets.Ansible,
    name: 'Ansible'
  }),
  s({
    slug: 'python',
    color: 'yellow',
    description: 'Python is a versatile and high-level programming language known for its readability and extensive libraries.',
    logo: Assets.Python,
    name: 'Python'
  }),
  s({
    slug: 'javascript',
    color: 'yellow',
    description: 'JavaScript is a versatile and widely-used programming language for building interactive web applications.',
    logo: Assets.JavaScript,
    name: 'JavaScript'
  }),
  s({
    slug: 'cryptography',
    color: 'red',
    description: 'Cryptography involves securing data through encryption techniques, ensuring confidentiality and integrity.',
    logo: Assets.Cryptography,
    name: 'Cryptography'
  }),

  s({
    slug: 'django',
    color: 'green',
    description: 'Django is a high-level Python web framework known for its speed and scalability in web application development.',
    logo: Assets.Django,
    name: 'Django'
  }),

];

export default MY_SKILLS;

export const getSkills = (...slugs: Array<string>): Array<Skill> =>
  MY_SKILLS.filter((it) => slugs.includes(it.slug));
