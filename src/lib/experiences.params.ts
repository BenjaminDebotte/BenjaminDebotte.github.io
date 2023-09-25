import Assets from './data/assets';
import { getSkills } from './skills.params';
import { ContractType, type Experience } from './types';

const MY_EXPERIENCES: Array<Experience> =
  [
    {
      "slug": "liberty-global-team-leader-devops-cloud-automation",
      "company": "Liberty Global",
      "description": "Chef d’équipe Automatisation - Mise en place et maintenance du système CI/CD via Jenkins / K8s (50+ jobs) - Développement et maintenance d'outils Fullstack NodeJS (React + ExpressJS) - Development et maintenance d'un cluster GraphQL - Support de nombreuses equipes de developpement pour enseigner et pousser les Best Practices - Developpement et support de nombreux scripts en Python.",
      "contract": ContractType.FullTime,
      "type": "",
      "location": "Amsterdam, Hollande Septentrionale, Pays-Bas",
      "period": {
        "from": new Date("Nov 2020"),
        "to": new Date("Dec 2023")
      },
      "skills": [],
      "name": "Team Leader - DevOps Cloud & Automation",
      "color": "#ffffff",
      "links": [],
      "logo": "Assets.Unknown",
      "shortDescription": ""
    },
    {
      "slug": "liberty-global-devops-engineer",
      "company": "Liberty Global",
      "description": "Building and maintaining an internal BigData Analysis platform, using technologies such as Apache Kafka, Docker, ElasticStack and Spark Streaming.",
      "contract": ContractType.FullTime,
      "type": "",
      "location": "Région de Amsterdam, Pays-Bas",
      "period": {
        "from": new Date("Sep 2017"),
        "to": new Date("Nov 2020")
      },
      "skills": [],
      "name": "DevOps Engineer",
      "color": "#ffffff",
      "links": [],
      "logo": "Assets.Unknown",
      "shortDescription": ""
    },
    {
      "slug": "dejamobile-devops-engineer-automation-infrastructure",
      "company": "dejamobile",
      "description": "Leading redesign of internal processes with tools such as VSphere, Docker, Ansible and Vagrant to assist development and deployment of our Cloud-based Payment system for our clients.",
      "contract": ContractType.FullTime,
      "type": "",
      "location": "",
      "period": {
        "from": new Date("Sep 2016"),
        "to": new Date("Aug 2017")
      },
      "skills": [],
      "name": "DevOps Engineer - Automation and Infrastructure",
      "color": "#ffffff",
      "links": [],
      "logo": "Assets.Unknown",
      "shortDescription": ""
    },
    {
      "slug": "juniper-networks-summer-internship-processes-workflow-automation",
      "company": "Juniper Networks",
      "description": "Software development in Python3 with Django and setted-up a whole workflow based on git-flow, GitLab-CI to enable Continuous Integration, Delivery and Deployment of containerized applications for the Proof of Concept Lab in Juniper Networks Amsterdam.",
      "contract": ContractType.FullTime,
      "type": "",
      "location": "",
      "period": {
        "from": new Date("Jun 2016"),
        "to": new Date("Aug 2016")
      },
      "skills": [],
      "name": "Summer Internship - Processes and Workflow Automation (PoC Lab Amsterdam)",
      "color": "#ffffff",
      "links": [],
      "logo": "Assets.Unknown",
      "shortDescription": ""
    },
    {
      "slug": "bodycap-ingenieur-en-formation-developpeur",
      "company": "BodyCap",
      "description": "Développement de capteurs miniaturisés pour le domaine médical principalement utilisant le C pour les applications embarquées ou Qt/C++ pour des applications clientes. http://www.bodycap-medical.com/en/ Alternance à l'ENSICAEN (Informatique par Apprentissage) en Monétique et Sécurité.",
      "contract": ContractType.FullTime,
      "type": "",
      "location": "",
      "period": {
        "from": new Date("Sep 2014"),
        "to": new Date("Aug 2016")
      },
      "skills": [],
      "name": "Ingénieur en formation - Développeur",
      "color": "#ffffff",
      "links": [],
      "logo": "Assets.Unknown",
      "shortDescription": ""
    },
    {
      "slug": "bodycap-developpeur",
      "company": "BodyCap",
      "description": "Alternance dans le cadre de ma Licence professionnelle.",
      "contract": ContractType.FullTime,
      "type": "",
      "location": "",
      "period": {
        "from": new Date("Sep 2013"),
        "to": new Date("Aug 2014")
      },
      "skills": [],
      "name": "Développeur",
      "color": "#ffffff",
      "links": [],
      "logo": "Assets.Unknown",
      "shortDescription": ""
    },
    {
      "slug": "genilie-hote-daccueil",
      "company": "Génilie",
      "description": "Accueil des festivaliers au sein du Stand RIFFX (Crédit Mutuel) - Festival Beauregard.",
      "contract": ContractType.FullTime,
      "type": "",
      "location": "",
      "period": {
        "from": new Date("Jul 2013"),
        "to": new Date("Jul 2013")
      },
      "skills": [],
      "name": "Hôte d'accueil",
      "color": "#ffffff",
      "links": [],
      "logo": "Assets.Unknown",
      "shortDescription": ""
    },
    {
      "slug": "alfanet-services-developpeur",
      "company": "Alfanet Services",
      "description": "Development of a C# GUI App.",
      "contract": ContractType.FullTime,
      "type": "",
      "location": "",
      "period": {
        "from": new Date("May 2012"),
        "to": new Date("Jul 2012")
      },
      "skills": [],
      "name": "Développeur",
      "color": "#ffffff",
      "links": [],
      "logo": "Assets.Unknown",
      "shortDescription": ""
    }
  ]


export default MY_EXPERIENCES;
