const AVATAR_SRC = "";

const translations = {
  en: {
    brand: "Gerrard Ren",
    email: "Email",
    heroEyebrow: "Academic Portfolio",
    heroTitle: "Gerrard Ren",
    identity:
      "Software Engineering undergraduate focused on computer vision, vision-language models, prompt learning, and reinforcement learning.",
    profileName: "Hedong Ren",
    profileSchool: "Fuzhou University · Maynooth International Engineering College",
    profileLocation: "Fuzhou, China",
    educationTitle: "Education Background",
    educationSummary: "Degree, coursework, GPA, and academic foundation.",
    awardsTitle: "Awards & Projects",
    awardsSummary: "Awards, modeling experience, project documents, and selected achievements.",
    experienceTitle: "Research & Internship Experience",
    experienceSummary: "Research projects, practice, repositories, and reports.",
    educationHeroEyebrow: "Education Background",
    educationHeroTitle: "Education Background",
    educationHeroBody:
      "I am currently an undergraduate student majoring in Software Engineering at Maynooth International Engineering College, Fuzhou University. My undergraduate study combines English-taught coursework, core computer science foundations, software engineering training, and research-oriented technical reading, preparing me for further study in computer vision, vision-language models, and reinforcement learning.",
    educationBasicTitle: "Basic Information",
    educationBasicBody:
      "Maynooth International Engineering College, Fuzhou University. B.Eng. in Software Engineering, undergraduate student, expected graduation in 2028. Current GPA: 3.6 / 4.0. The program provides an English-taught learning environment, through which I have developed experience in English coursework, technical documentation reading, academic expression, and cross-cultural communication.",
    educationCoursesTitle: "Core Coursework",
    educationCoursesBody:
      "Computer Systems, Computer Networks, Introduction to Computer Science, Databases, Programming Language Design and Compilation, Computer Architecture, Algorithms and Data Structures, Web Information Processing, Software Testing, Software Engineering and Software Process, Software Design.",
    educationTechTitle: "Technical Stack",
    educationTechBody:
      "For programming and engineering tools, I mainly use Python, Bash / Shell, Linux, Git, GitHub, Docker, Markdown, and LaTeX / Overleaf. For deep learning and computer vision, I am building research and experimental experience around PyTorch, CLIP, CoOp, Prompt Learning, Vision-Language Models, Few-Shot Learning, and Domain Generalization. For research workflow, I am familiar with experiment scripting, multi-seed and multi-dataset experiment management, CSV / Markdown result organization, ablation study design, and technical report writing.",
    courseSystems: "Computer Systems",
    courseNetworks: "Computer Networks",
    courseIntro: "Introduction to Computer Science",
    courseDatabase: "Databases",
    courseCompiler: "Programming Language Design and Compilation",
    courseArchitecture: "Computer Architecture",
    courseAlgorithms: "Algorithms and Data Structures",
    courseWeb: "Web Information Processing",
    courseTesting: "Software Testing",
    courseProcess: "Software Engineering and Software Process",
    courseDesign: "Software Design",
    skillProgrammingTitle: "Programming & Engineering Tools",
    skillProgrammingBody: "Python, Bash / Shell, Linux, Git, GitHub, Docker, Markdown, LaTeX / Overleaf",
    skillVisionTitle: "Deep Learning & Computer Vision",
    skillVisionBody:
      "PyTorch, CLIP, CoOp, Prompt Learning, Vision-Language Models, Few-Shot Learning, Domain Generalization",
    skillWorkflowTitle: "Research Workflow",
    skillWorkflowBody:
      "Experiment scripting, multi-seed and multi-dataset experiment management, CSV / Markdown result organization, ablation study design, technical report writing",
    awardsPageTitle: "Awards & Project Experience",
    awardsPageIntro:
      "At this stage, I mainly present my 2026 Mathematical Contest in Modeling Honorable Mention experience. It reflects my training in problem formulation, data analysis, teamwork, and English academic writing.",
    githubProfile: "GitHub Profile",
    mcmTitle: "Honorable Mention, Mathematical Contest in Modeling",
    mcmMeta: "Mathematical Contest in Modeling · Honorable Mention",
    mcmSummary:
      "In this MCM project, I worked on a Liverpool-related modeling problem, covering problem decomposition, data processing, model design, result analysis, and English paper writing. The experience strengthened my ability to translate open-ended real-world questions into computable models and improved my understanding of result communication, paper structure, and team workflow.",
    expandDetails: "Expand Details",
    collapseDetails: "Collapse Details",
    awardProofLabel: "Award Proof",
    mcmPaperLabel: "MCM Paper",
    experiencePageTitle: "Research & Internship Experience",
    experiencePageIntro:
      "My current research experience centers on vision-language models, prompt learning, and multi-armed bandit algorithms. This page presents two experiences: a CLIP prompt learning research project since 2026 and a multi-armed bandit research and paper publication project completed in July 2025.",
    researchPeriod: "2026 - Present",
    researchInstitute: "Fujian Digital China Research Institute",
    researchMeta: "Supervisor: Zhanchao Huang · Research Project Experience",
    researchSummary:
      "This experience focuses on CLIP prompt learning and robust cross-dataset transfer. Under my supervisor's guidance, I have worked on literature review, method design, experimental pipeline construction, result analysis, and documentation, exploring how dataset-level priors can improve the generalization stability of CoOp-style methods across datasets.",
    researchDetailRoleTitle: "Experience Information",
    researchDetailRoleBody:
      "Period: 2026 to present; institution: Fujian Digital China Research Institute; supervisor: Zhanchao Huang; role: research project participant and main developer.",
    researchDetailProjectTitle: "Project Content",
    researchDetailProjectBody:
      "The project studies Safe Dataset-Prior Residual Prompt Adaptation for Robust Transfer, injecting dataset-level task priors into CoOp context tokens through a safe residual formulation to improve the stability of CLIP prompt learning under cross-dataset transfer.",
    researchDetailWorkTitle: "Main Contributions",
    researchDetailWorkBody:
      "Built dataset task feature extraction, CoOp / CLIP RN50 experiment pipelines, few-shot and domain generalization experiments, prior ablations, result aggregation, technical report writing, and GitHub repository organization.",
    projectRepository: "Project Repository",
    technicalReportLabel: "Technical Report",
    banditPeriod: "2025.07",
    banditTitle: "Multi-Armed Bandit Algorithm Research & Paper Publication Project",
    banditMeta: "Team Leader, Core Author · Dr. Osman Yağan · Onsite Research Program in Beijing",
    banditSummary:
      "This project focused on multi-armed bandit algorithms and their applications in recommendation scenarios. I served as team leader and core author, led empirical analysis based on the MovieLens recommendation dataset, focused on Thompson Sampling and UCB algorithm analysis, visualization, and result interpretation, and contributed to the EvoClusterBandit paper. The paper was accepted by ACAAI 2025.",
    banditDocumentsLabel: "Project Documents",
    banditPaperLabel: "ACAAI Paper",
    banditAcceptanceLabel: "Acceptance Letter",
    banditRecommendationLabel: "Recommendation Letter",
    banditCertificateLabel: "Program Certificate",
  },
  zh: {
    brand: "任河东",
    email: "邮箱",
    heroEyebrow: "个人主页",
    heroTitle: "任河东",
    identity: "软件工程本科生，关注计算机视觉、视觉语言模型、提示学习与强化学习方向。",
    profileName: "Hedong Ren",
    profileSchool: "福州大学 · 梅努斯国际工程学院",
    profileLocation: "中国福州",
    educationTitle: "教育背景",
    educationSummary: "学位、课程、绩点与学术基础。",
    awardsTitle: "获奖情况及项目经历",
    awardsSummary: "获奖情况、建模经历、项目文档与阶段性成果。",
    experienceTitle: "科研经历及实习经历",
    experienceSummary: "科研项目、实践经历、代码仓库与报告。",
    educationHeroEyebrow: "教育背景",
    educationHeroTitle: "教育背景",
    educationHeroBody:
      "我目前就读于福州大学梅努斯国际工程学院软件工程专业。本科阶段的学习以英文授课、计算机基础课程、软件工程训练和研究型技术阅读为主，为后续在计算机视觉、视觉语言模型和强化学习方向继续深造打下基础。",
    educationBasicTitle: "基础信息",
    educationBasicBody:
      "福州大学梅努斯国际工程学院，软件工程工学学士本科在读，预计 2028 年毕业。目前 GPA 为 3.6 / 4.0。我所在项目具备较高比例的英文教学与技术交流环境，因此本科阶段持续积累英文课程学习、英文技术文档阅读、学术表达和跨文化沟通经验。",
    educationCoursesTitle: "核心课程",
    educationCoursesBody:
      "计算机系统、计算机网络、计算机科学导论、数据库、程序语言设计和编译、计算机结构、算法与数据结构、Web 信息处理、软件测试、软件工程与软件过程、软件设计。",
    educationTechTitle: "技术栈",
    educationTechBody:
      "编程与工程工具方面，我主要使用 Python、Bash / Shell、Linux、Git、GitHub、Docker、Markdown 和 LaTeX / Overleaf。深度学习与计算机视觉方向，我正在围绕 PyTorch、CLIP、CoOp、Prompt Learning、Vision-Language Models、Few-Shot Learning 和 Domain Generalization 建立研究与实验能力。在科研流程方面，我熟悉实验脚本编写、多种子和多数据集实验管理、CSV / Markdown 结果整理、消融实验设计以及技术报告写作。",
    courseSystems: "计算机系统",
    courseNetworks: "计算机网络",
    courseIntro: "计算机科学导论",
    courseDatabase: "数据库",
    courseCompiler: "程序语言设计和编译",
    courseArchitecture: "计算机结构",
    courseAlgorithms: "算法与数据结构",
    courseWeb: "Web 信息处理",
    courseTesting: "软件测试",
    courseProcess: "软件工程与软件过程",
    courseDesign: "软件设计",
    skillProgrammingTitle: "编程与工程工具",
    skillProgrammingBody: "Python, Bash / Shell, Linux, Git, GitHub, Docker, Markdown, LaTeX / Overleaf",
    skillVisionTitle: "深度学习与计算机视觉",
    skillVisionBody:
      "PyTorch, CLIP, CoOp, Prompt Learning, Vision-Language Models, Few-Shot Learning, Domain Generalization",
    skillWorkflowTitle: "科研实验流程",
    skillWorkflowBody: "实验脚本编写、多种子和多数据集实验管理、CSV / Markdown 结果整理、消融实验设计、技术报告写作",
    awardsPageTitle: "获奖情况及项目经历",
    awardsPageIntro:
      "目前我主要展示 2026 年美国大学生数学建模竞赛 Honorable Mention 经历。该经历体现了我在问题建模、数据分析、团队协作与英文论文表达方面的综合训练。",
    githubProfile: "GitHub 个人主页",
    mcmTitle: "美国大学生数学建模竞赛 Honorable Mention",
    mcmMeta: "Mathematical Contest in Modeling · Honorable Mention",
    mcmSummary:
      "在本次美赛中，我参与完成一个与 Liverpool 相关的建模问题，主要围绕问题拆解、数据处理、模型设计、结果分析与英文论文写作展开。项目训练了我将开放式现实问题转化为可计算模型的能力，也强化了我对结果表达、论文结构和团队协作节奏的理解。",
    expandDetails: "展开详情",
    collapseDetails: "收起详情",
    awardProofLabel: "获奖证明",
    mcmPaperLabel: "美赛论文",
    experiencePageTitle: "科研经历及实习经历",
    experiencePageIntro:
      "我的科研经历目前集中在视觉语言模型、提示学习与多臂老虎机算法相关方向。现阶段展示两段经历：一段是 2026 年开始的 CLIP prompt learning 科研项目，另一段是 2025 年 7 月完成的多臂老虎机算法研究与论文发表项目。",
    researchPeriod: "2026 - 至今",
    researchInstitute: "福建省数字中国研究院",
    researchMeta: "导师：黄展超 · 科研项目经历",
    researchSummary:
      "该经历围绕 CLIP prompt learning 与跨数据集稳健迁移展开。我在导师指导下推进项目调研、方法设计、实验管线搭建、结果分析与文档整理，重点探索如何利用数据集级先验提升 CoOp 类方法在跨数据集场景下的泛化表现。",
    researchDetailRoleTitle: "经历信息",
    researchDetailRoleBody: "时间：2026 年至今；机构：福建省数字中国研究院；导师：黄展超；角色：科研项目参与者与主要开发者。",
    researchDetailProjectTitle: "项目内容",
    researchDetailProjectBody:
      "研究聚焦 Safe Dataset-Prior Residual Prompt Adaptation for Robust Transfer，尝试将数据集级任务先验以安全残差形式注入 CoOp 上下文 token，从而提升 CLIP prompt learning 在跨数据集迁移中的稳定性。",
    researchDetailWorkTitle: "主要工作",
    researchDetailWorkBody:
      "完成数据集任务特征提取、CoOp / CLIP RN50 实验流程搭建、few-shot 与 domain generalization 实验、prior ablation、结果汇总、技术报告写作和 GitHub 仓库整理。",
    projectRepository: "项目仓库",
    technicalReportLabel: "技术报告",
    banditPeriod: "2025.07",
    banditTitle: "多臂老虎机算法研究与论文发表项目",
    banditMeta: "组长、核心作者 · Dr. Osman Yağan · 北京线下研究项目",
    banditSummary:
      "该项目围绕多臂老虎机算法及其在推荐系统等场景中的应用展开。我担任小组组长和核心作者，带领团队基于 MovieLens 推荐数据集开展实证分析，重点负责 Thompson Sampling、UCB 等算法的分析、可视化和结果解读，并参与完成 EvoClusterBandit 论文写作。该论文已被 ACAAI 2025 接收。",
    banditDocumentsLabel: "项目材料",
    banditPaperLabel: "ACAAI 论文",
    banditAcceptanceLabel: "论文接收证明",
    banditRecommendationLabel: "导师推荐信",
    banditCertificateLabel: "结课证书",
  },
};

const avatar = document.querySelector(".avatar-image");
if (avatar && AVATAR_SRC) {
  avatar.src = AVATAR_SRC;
  avatar.classList.add("has-avatar");
}

const LANGUAGE_STORAGE_KEY = "portfolio-language";
const languageButton = document.querySelector(".language-toggle");
const languageLabel = document.querySelector(".language-label");

function readStoredLanguage() {
  const params = new URLSearchParams(window.location.search);
  const urlLanguage = params.get("lang");
  if (urlLanguage === "en" || urlLanguage === "zh") return urlLanguage;

  try {
    const storedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (storedLanguage === "en" || storedLanguage === "zh") return storedLanguage;
  } catch (error) {
    return "en";
  }

  return "en";
}

function writeStoredLanguage(language) {
  try {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  } catch (error) {
    // Some file:// preview environments block localStorage. URL sync below keeps navigation state.
  }
}

function syncLanguageInUrl(language) {
  const url = new URL(window.location.href);
  url.searchParams.set("lang", language);
  window.history.replaceState({}, "", url);
}

function syncInternalLinks(language) {
  document.querySelectorAll('a[href$=".html"], a[href*=".html#"], a[href*=".html?"]').forEach((link) => {
    const href = link.getAttribute("href");
    if (!href || href.startsWith("http") || href.startsWith("mailto:")) return;

    const url = new URL(href, window.location.href);
    url.searchParams.set("lang", language);
    link.setAttribute("href", `${url.pathname.split("/").pop()}${url.search}${url.hash}`);
  });
}

let activeLanguage = readStoredLanguage();

function applyLanguage(language) {
  activeLanguage = language;
  writeStoredLanguage(language);
  syncLanguageInUrl(language);
  syncInternalLinks(language);
  document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
  document.body.classList.toggle("lang-zh", language === "zh");
  if (languageLabel) {
    languageLabel.textContent = language === "zh" ? "中" : "EN";
  }

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    node.textContent = translations[language][key] || translations.en[key] || "";
  });

  updateExpandButtons();
}

if (languageButton && languageLabel) {
  languageButton.addEventListener("click", () => {
    applyLanguage(activeLanguage === "en" ? "zh" : "en");
  });
}

function updateExpandButtons() {
  document.querySelectorAll(".expand-toggle").forEach((button) => {
    const label = button.querySelector("[data-i18n]");
    if (!label) return;
    const expanded = button.getAttribute("aria-expanded") === "true";
    label.textContent = translations[activeLanguage][expanded ? "collapseDetails" : "expandDetails"];
  });
}

document.querySelectorAll(".expand-toggle").forEach((button) => {
  button.addEventListener("click", () => {
    const targetId = button.dataset.expandTarget;
    const panel = document.getElementById(targetId);
    if (!panel) return;

    const isExpanded = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!isExpanded));
    panel.hidden = isExpanded;
    updateExpandButtons();
  });
});

document.querySelectorAll(".panel-close").forEach((button) => {
  button.addEventListener("click", () => {
    const targetId = button.dataset.closeTarget;
    const panel = document.getElementById(targetId);
    const trigger = document.querySelector(`.expand-toggle[data-expand-target="${targetId}"]`);
    if (!panel || !trigger) return;

    panel.hidden = true;
    trigger.setAttribute("aria-expanded", "false");
    updateExpandButtons();
    trigger.scrollIntoView({ behavior: "smooth", block: "center" });
  });
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.18 }
);

document.querySelectorAll(".section-reveal, .education-reveal").forEach((section) => {
  revealObserver.observe(section);
});

applyLanguage(activeLanguage);
