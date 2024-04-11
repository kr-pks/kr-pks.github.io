export const bio = [
    "Hello there, This is Pallaw Kumar.",
    `A Software Engineer based in India.`,
    `My background includes a Master's degree from BITS Pilani and my current role as a Team Lead at HCL Technologies, where I apply my technical expertise to deliver successful projects.`,
    `My technical expertise and product knowledge empower me to make impactful contributions and excel in challenging projects, consistently exceeding expectations.`,
    "Thanks for getting the scoop on yours truly!",
];

export const skills = [
    {
        title: "Languages",
        skillName: "Python",
        color: "1",
        percentage: "85",
    },
    {
        title: "Frameworks/Libraries",
        skillName: "Django, Flask",
        color: "6",
        percentage: "75",
    },
    {
        title: "Edge technologies",
        skillName: "NLP, LLM, Semantic Search",
        color: "4",
        percentage: "70",
    },
    {
        title: "Version Control",
        skillName: "GitHub, JIRA, Bitbucket",
        color: "7",
        percentage: "75",
    },
    {
        title: "Tools",
        skillName: "Postman, VS Code, PyCharm",
        color: "3",
        percentage: "80",
    },
    {
        title: "DevOps",
        skillName: "Kubernetes, Jenkins, Docker",
        color: "5",
        percentage: "70",
    },
    {
        title: "Cloud",
        skillName: "AWS & GCP",
        color: "6",
        percentage: "70",
    },
];

export const projects = {
    semanticsearch: [
        {
            projectName: "Knowledge Square",
            image : "https://ahrefs.com/blog/wp-content/uploads/2020/06/fb-semantic-search.png",
            summary:
            "Project: Knowledge Square Project aimed to build a semantic search engine from scratch by leveraging open sources NLP & ML models. The business requirement was to gather research documents in different formats across the organization and generate insights on each document and serve those insight on a in house search engine.",
        techStack: ["Python", "Graph DB", "NLP", "RASA", "Semantic Search"],
    
        }
    ],
    devopsautomation: [
        {
            projectName: "vRelease",
            image : "https://sdincose.org/wp-content/uploads/2020/05/DevOps_2000.jpg",
            summary:
                "Project: vRelease is a tool for Client’s DevOps process that facilitate builds and deployments of various applications stack. It automates the end-to-end DevOps process focusing on eliminating manual interventions.",
            techStack: ["Python", "Kubernetes", "DevOps", "Microservices", "GIT", "Flask"],
        },
    ],
    llmrag: [
        {
            projectName: "Semantic Scholar",
            image: "https://www.futuretimeline.net/blog/images/275-semantic-scholar-ai-search-engine-technology-2015.jpg",
            summary:
                "Project: Semantic Scholar is an innovative research tool leveraging the power of LLM-based RAG technology to empower users to explore and extract knowledge from a vast collection of scholarly PDFs. Unlike traditional search engines, Semantic Scholar delves deeper into the meaning and context of academic texts, providing researchers, students, and knowledge seekers with a more comprehensive and insightful understanding of their field of study.",
            techStack: ["Python", "LLM", "NLP", "Vector DB", "OPENAI" ,"Gemini", "qDrant", "RAG"],
        },
        
    ],
};

export const experience = [
    {
        title: "HCL Technologies",
        duration: "Sep 2023 - Present",
        subtitle: "Team Lead",
        details: [
            `Spearheaded research and development efforts for diverse LLM applications, spanning RAG and vision use cases.`,
            `Developed an ingestion module capable of processing and tagging metadata within multiple PDF documents.`,
            `Engineered indexing and collection creation functionalities for vector databases, including qDrant.`,
            `Leveraged advanced language models such as Gemini Pro, OpenAI 4, and Hugging Face models to generate text and image outputs`,
            `Significantly enhanced application performance and load times through strategic implementation of Celery for task queuing, caching mechanisms, and multitasking.`,
            `Successfully led and mentored a team of developers in the completion of multiple LLM-based projects.`,
        ],
        tags: ["Python", "LLM", "NLP", "Vector DB", "OPENAI", "Gemini", "qDrant", "RAG"],
        icon: "heartbeat",
    },
    {
        title: "HCL Technologies",
        duration: "Aug 2021 - Sep 2023",
        subtitle: "Team Lead",
        details: [
            `vRelease is a tool for Client’s DevOps process that facilitate builds and deployments of various 
            applications stack. It automates the end-to-end DevOps process focusing on eliminating manual interventions.`,
            `Design architecture for the new features and get them approved by the Product Owner`,
            `Implement end-to-end new changes / feature / enhancements. `,
            `Coding the business logic to flag the vulnerability present in Git Repo & Docker Image.`,
            `Designing and developing deploy third party and in-house helm charts.`,

        ],
        tags: ["Python", "Kubernetes", "DevOps", "Microservices", "GIT", "Flask"],
        icon: "truck ",
    },
    {
        title: "WIPRO Technologies",
        duration: "June 2020 - April 2022",
        subtitle: "Sr. Python Developer",
        details: [
            `Knowledge Square Project aimed to build a semantic search engine from scratch by leveraging open 
            sources NLP & ML models. The business requirement was to gather research documents in different
            formats across the organization and generate insights on each document and serve those insight on a in 
            house search engine.`,
            `Worked with Product Owner and Client to gather Business Requirement and provide a solution to it`,
            `Implemented a new Graph DB (Janusgraph) on extracted data chunks from the Documents`,
            `Own the backend pipeline to consume the Data to generate the insight and serve it on APIs to frontend.`,
            `Managed the planning and development of design and procedures for REST APIs and NLP tech stack.`,
            `Streamlined the data indexing in Apache Solr to meet SLA of providing search results within 15 ms.`,
            `Automated Data quality check process to ensure the accuracy in data inputs and outputs leading to 50 hrs
            saving`,
        ],
        tags: ["Python", "Graph DB", "NLP", "RASA", "Semantic Search","Flask"],
        icon: "qrcode",
    },
    {
        title: "WIPRO Technologies",
        duration: "Dec 2019 - Jul 2020",
        subtitle: "Sr. Python Developer",
        details: [
            `Loyalty Program is to offer loyalty rewards to VISA users in USA and Europe based business. This 
            project is oriented around gathering all the transaction happening in real time which meet business logic 
            to qualify to count for reward system. In this project we also worked on finding anomalies and High-risk
            transactions.`,
            `Analyzing and interpreting data Using NumPy, Pandas and matplotlib `,
            `Created Data Pipeline for to update the correct name of the transaction source when the payment source did 
            not satisfy all the conditions.`,
            `Automate report generation process on a daily basis.`,
            `Wrote maintainable and extendable code in Python.`,
            `Build backend APIs using Django Rest Framwork`,
        ],
        tags: ["Python", "Django", "GCP", "GIT", "Python-Automation"],
        icon: "group",
    },
    {
        title: "WIPRO Technologies",
        duration: "Feb 2016 - Dec 2019",
        subtitle: "Sr. Integration Engineer",
        details: [
            `LATAM Integration Layer (LIL) project aims to provide middleware support to process the data from 
            frontend and various third party with mainframe system of client. It primarily focused on correct data mapping 
            with new standard data to mainframe data, which also includes to process the data to get the correct format of 
            data required by mainframe systems.`,
            `Worked to developed various middleware applications over SOAP, REST, JMS & MQ.`,
            `Created a utility to remove the dependency of MQ operations team to perform purges and sanity check of MQ queues. `,
            `Orchestrated the end-to-end DevOps pipeline to enable deployment of our services in multiple regions based on approvals 
            and business requirements.`,
            `Extensively used MQ and JMS to process batch job to utilize the resource efficiently, which leads to 15 % less resource 
            utilizations`,
        ],
        tags: ["SOAP", "MQ", "JMS", "DEVOPS", "Python"],
        icon: "group",
    },
];

export const education = [
    {
        title: "Masters in Software Engineering",
        subtitle: "BITS, Pilani",
        details: ["CGPA  - 7.25"],
        duration: "",
        tags: [
            "Data Structures & Algorithms",
            "Operating Systems",
            "Database Management System",
            "Computer Networks",
            "Compiler Designing",
            "Cloud Computing",
        ],
        icon: "graduation-cap",
    },
];

export const footer = [
    {
        label: "Dev Profiles",
        data: [
            {
                text: "medium",
                link: "https://medium.com/@mrpksjr",
            },
            {
                text: "GitHub",
                link: "https://github.com/kr-pks",
            },
        ],
    },
    {
        label: "Resources",
        data: [
            {
                text: "Enable Dark/Light Mode",
                func: "enableDarkMode()",
            },
            {
                text: "Print this page",
                func: "window.print()",
            },
        ],
    },
    {
        label: "Social Profiles",
        data: [
            {
                text: "Linkedin",
                link: "https://www.linkedin.com/in/pallaw-kumar/",
            },
            {
                text: "Twitter",
                link: "https://twitter.com/MrPksJr",
            },
            {
                text: "Buy me a coffee",
                link: "https://www.buymeacoffee.com/mrpksjr",
            },
        ],
    },
    {
        label: "copyright-text",
        data: [
            "Made with &hearts; by Pallaw Kumar.",
            "&copy; No Copyrights. Feel free to use this template.",
        ],
    },
];