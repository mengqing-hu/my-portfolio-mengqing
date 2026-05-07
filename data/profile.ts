export const profile = {
  name: { en: "Mengqing Hu", zh: "胡梦晴" },
  title: { en: "M.Sc. Student · TU Dresden · Dresden, Germany", zh: "硕士研究生 · 德累斯顿工业大学 · 德国德累斯顿" },
  tagline: {
    en: "Building intelligent systems at the intersection of multimodal AI, computer vision, and RAG. Experienced across research labs in Germany — Fraunhofer, Helmholtz, and TU Dresden.",
    zh: "在多模态 AI、计算机视觉与 RAG 的交叉领域构建智能系统。曾在德国弗劳恩霍夫、亥姆霍兹及德累斯顿工业大学等研究机构工作。",
  },
  keywords: ["multimodal AI", "computer vision", "RAG"],
  contact: {
    linkedin: "https://www.linkedin.com/in/mengqinghu/",
    github: "https://github.com/mengqing-hu",
    instagram: "https://www.instagram.com/xiaohu_0801/",
    email: "mengqinghu688@gmail.com",
    emailCN: "mengqinghu688@163.com",
    cv: {
      en: "/cv/Mengqing Hu_TU Dresden_01623382989.pdf",
      zh: "/cv/胡梦晴_德累斯顿工业大学_17549200183.pdf",
    },
  },
  strengths: [
    {
      icon: "grid",
      color: "#E6F1FB",
      title: { en: "AI Research & System Development", zh: "AI 研发能力" },
      desc: {
        en: "Proficient in deep learning, LLMs, and multimodal models. Independently completed full pipelines from data processing and model training to deployment across computer vision, RAG, and intelligent QA systems.",
        zh: "熟悉深度学习、LLM 与多模态模型，可独立完成从数据处理、模型训练到 AI 系统部署的完整研发流程，涵盖计算机视觉、RAG 及智能问答系统等方向。",
      },
    },
    {
      icon: "globe",
      color: "#E1F5EE",
      title: { en: "International Research Background & Language Skills", zh: "国际科研背景与语言能力" },
      desc: {
        en: "Pursuing M.Sc. in Germany with experience at Fraunhofer IWU, Helmholtz HZDR, and TU Dresden. Fluent in English (working level), with basic German communication ability.",
        zh: "在德国攻读硕士，曾在弗劳恩霍夫 IWU、亥姆霍兹 HZDR 及德累斯顿工业大学从事科研工作。英语流利（工作语言），具备基础德语沟通能力。",
      },
    },
  ],
  intentions: {
    role: { en: "AI Application Developer · AI Agent Engineer", zh: "AI 应用开发 · AI Agent 工程师" },
    location: { en: "Germany · China", zh: "德国 · 中国" },
    locationSub: { en: "On-site · Hybrid · Remote", zh: "线下 · 混合 · 远程" },
    availability: { en: "Late 2026", zh: "2026 年底" },
    availabilitySub: { en: "After graduation · Nov 2026", zh: "毕业后 · 2026 年 11 月" },
    type: { en: "Full-time", zh: "全职" },
    typeSub: { en: "Industry · Research lab", zh: "工业界 · 科研机构" },
    focusAreas: ["Multimodal AI", "Machine Learning", "Computer Vision", "AI Agent"],
  },
  education: [
    {
      logo: "TUD",
      logoImg: "/logos/tud.png",
      logoBg: "#042C53",
      logoColor: "#B5D4F4",
      school: { en: "TU Dresden", zh: "德累斯顿工业大学" },
      schoolSub: "QS 218",
      degree: { en: "M.Sc. Computer Modeling & Simulation · Visual Computing", zh: "计算机建模与仿真（视觉计算方向）硕士" },
      period: "2023.10 – 2026.11",
      detail: { en: "GPA 2.9 (Top 25%) · ML · Computer Vision · LLMs · Knowledge Graph", zh: "GPA 2.9（前 25%）· 机器学习 · 计算机视觉 · 大语言模型 · 知识图谱" },
    },
    {
      logo: "HNU",
      logoImg: "/logos/hnu.png",
      logoBg: "#3B6D11",
      logoColor: "#EAF3DE",
      school: { en: "Henan University of Technology", zh: "河南工业大学" },
      schoolSub: "",
      degree: { en: "B.Eng. Software Engineering", zh: "软件工程学士" },
      period: "2019.09 – 2023.07",
      detail: { en: "GPA 85/100 (Top 20%)", zh: "GPA 85/100（前 20%）" },
    },
  ],
  experience: [
    {
      logo: "HZDR",
      logoImg: "/logos/hzdr.png",
      logoBg: "#042C53",
      logoColor: "#B5D4F4",
      org: { en: "Helmholtz-Zentrum Dresden-Rossendorf", zh: "亥姆霍兹德累斯顿研究中心（HZDR）" },
      role: { en: "Computer Vision Algorithm Intern", zh: "计算机视觉算法实习生" },
      period: "2026.01 – Present",
      bullets: [
        {
          en: "Conducted a comprehensive survey of mainstream biomedical instance segmentation algorithms such as CPN, U-Net and Mask R-CNN, gained an in-depth understanding of CPN's contour regression mechanism based on Fourier descriptors, and conducted a comparative analysis of its technical characteristics and applicable scenarios relative to mask-based methods.",
        },
        {
          en: "Adapted the CpnU22 model to the institute's public microscopy image dataset using the celldetection framework, executed percentile normalization, Albumentations-based data augmentation and dataset splitting to complete the entire data preprocessing pipeline.",
        },
        {
          en: "Tuned hyperparameters including learning rate, batch size, NMS threshold and Fourier order, evaluated model performance by analyzing loss curves and average F1 scores across multiple IoU thresholds, and executed model training, inference and experimental validation on an HPC cluster.",
        },
      ],
      highlight: { en: "Completed CPN adaptation and end-to-end microscopy segmentation experiments", zh: "完成 CPN 适配与显微图像分割端到端实验流程" },
      tags: ["Python", "PyTorch", "Computer Vision", "Instance Segmentation", "Contour Proposal Network", "HPC"],
    },
    {
      logo: "IWU",
      logoImg: "/logos/iwu.png",
      logoBg: "#0C447C",
      logoColor: "#E6F1FB",
      org: { en: "Fraunhofer IWU", zh: "弗劳恩霍夫 IWU 研究所" },
      role: { en: "Research Assistant", zh: "研究助手" },
      period: "2025.08 – 2026.03",
      bullets: [
        {
          en: "Developed an intelligent retrieval and Q&A system for research documents based on Large Language Models (LLMs), enabled batch parsing of PDF and Word files, text cleaning, chunking and vectorization. Employed a chunking strategy optimized via semantic sentence splitting + overlapping sliding windows to mitigate semantic fragmentation issues in long documents, resulting in a 15% improvement in retrieval recall accuracy.",
        },
        {
          en: "Constructed a hybrid recall strategy combining BM25 sparse retrieval with dense vector retrieval to address the limitations of pure semantic retrieval, boosted the Top-5 hit rate from 72% to 91%. Integrated a re-ranking mechanism to filter out irrelevant snippets, thereby effectively enhancing the quality of the generated context.",
        },
        {
          en: "Utilized Prompt Engineering to constrain the model to generate responses solely based on the retrieved context, thereby mitigating the risk of hallucinations. Supported private deployment, achieved a 35% improvement in Q&A accuracy while maintaining an average response time of under 1 second, significantly boosting the efficiency of internal document retrieval.",
        },
      ],
      highlight: { en: "Q&A accuracy improved by 35% with average response time under 1 second", zh: "问答准确率提升 35%，平均响应耗时控制在 1s 内，Top5 命中率从 72% 提升至 91%" },
      tags: ["Python", "LangChain", "RAG", "BM25", "Chroma", "Prompt Engineering", "Cross-Encoder Re-ranker"],
    },
    {
      logo: "TUD",
      logoImg: "/logos/tud.png",
      logoBg: "#185FA5",
      logoColor: "#E6F1FB",
      org: { en: "TU Dresden · Institute of Mechatronics", zh: "德累斯顿工业大学 机电工程研究所" },
      role: { en: "Research Assistant", zh: "研究助手" },
      period: "2024.11 – 2025.04",
      bullets: [
        {
          en: "Implemented sliding-window anomaly detection, mask generation, histogram matching and block-based dataset partitioning for OCT tomographic images in additive manufacturing to achieve automated binary classification labeling (Good/Bad).",
        },
        {
          en: "Built a lightweight classification model based on ResNet26-V2, designed a BottleneckV2 residual structure, and optimized hyperparameters including network width coefficient K, number of modules N, Dropout rate and learning rate.",
        },
        {
          en: "Performed model interpretability analysis using t-SNE and Grad-CAM; achieved a final binary classification accuracy of 94.34%, enabling real-time monitoring of internal defects and quality classification within the additive manufacturing process.",
        },
      ],
      highlight: { en: "Final binary classification accuracy reached 94.34%", zh: "最终二分类准确率 94.34%，实现增材制造过程内部缺陷实时监测与质量分类" },
      tags: ["Python", "PyTorch", "Computer Vision", "Supervised Learning", "CNN", "t-SNE"],
    },
  ],
  projects: [
    {
      logo: "ScaDS",
      logoImg: "/logos/scads.png",
      logoBg: "#26215C",
      logoColor: "#CECBF6",
      badge: { en: "M.Sc. Thesis", zh: "硕士论文" },
      title: { en: "Multimodal AI-Based Video Content Understanding and Automatic Summarization System", zh: "基于多模态AI的视频内容理解与自动摘要生成系统" },
      org: { en: "ScaDS.AI Dresden / Leipzig", zh: "可扩展数据分析与人工智能中心（ScaDS.AI）德累斯顿/莱比锡" },
      period: "2026.04 – Present",
      bullets: [
        {
          en: "Design and implement an end-to-end multimodal video analysis pipeline that automatically handles data acquisition, audio-visual extraction and content parsing directly from video URLs; perform keyframe extraction, scene segmentation and semantic partitioning to establish a structured data foundation for long-form video understanding.",
          zh: "设计并实现端到端多模态视频分析流程，从视频 URL 自动完成数据获取、音视频提取与内容解析，实现关键帧提取、场景分割与语义分段，为长视频理解构建结构化数据基础",
        },
        {
          en: "Integrate technologies such as Whisper for speech transcription, CLIP/BLIP for visual-semantic understanding, OCR for text recognition and speaker diarization to conduct cross-modal joint analysis of audio-visual information, thereby constructing structured semantic representations of video content.",
          zh: "集成 Whisper 语音转写、CLIP/BLIP 视觉语义理解、OCR 文本识别与说话人分离技术，对音视频信息进行跨模态联合分析，构建结构化视频语义表示",
        },
        {
          en: "Leverage Large Language Models (LLMs) to generate automatic summaries of video content; combine semantic partitioning with automatic chapterization to segment long videos into thematic clips and generate narrative-style summaries and commentaries, thereby enhancing the accessibility and comprehension efficiency of public video information.",
          zh: "基于大语言模型实现视频内容自动摘要生成，结合语义分段与自动章节划分，将长视频划分为主题片段并生成叙事式摘要与解说，提升公共视频信息的可访问性与理解效率",
        },
      ],
      highlight: { en: "Narrative summaries and commentaries improve accessibility and comprehension efficiency", zh: "自动生成叙事式摘要与语音解说，提升公共视频信息的可访问性" },
      tags: ["Python", "Whisper", "CLIP", "BLIP", "GPT", "OCR", "Pyannote", "Speaker Diarization", "LLaMA"],
      tagBlue: true,
    },
    {
      logo: "FSD",
      logoImg: "/logos/fsd.png",
      logoBg: "#3B6D11",
      logoColor: "#EAF3DE",
      badge: null,
      title: { en: "NLP & LLM-Based Enterprise Information Retrieval and Knowledge Extraction System", zh: "基于NLP与大语言模型的企业信息检索与知识抽取系统开发" },
      org: { en: "FSD Fahrzeugsystemdaten GmbH", zh: "FSD车辆系统数据有限公司" },
      period: "2024.05 – 2024.09",
      bullets: [
        {
          en: "Independently developed the web interface for an enterprise AI assistant using the Django framework, implemented modules for user authentication, chat history management, document uploading and knowledge-based Q&A; built over six core functional pages, supporting multi-role permissions and concurrent access for multiple users.",
          zh: "基于 Django 框架独立完成企业 AI 助手 Web 界面开发，实现用户认证、聊天历史管理、文档上传与知识问答模块，搭建 6+ 核心功能页面，支持多角色权限与多用户并发访问",
        },
        {
          en: "Participated in the development of the RAG retrieval pipeline, assisted with the parsing of technical documentation, text chunking and vectorization; collaborated with the team to construct Elasticsearch indices and optimized the retrieval chain, thereby boosting the Top-5 document hit rate to over 80%.",
          zh: "参与 RAG 检索流程开发，协助完成技术文档解析、文本分块与向量化，配合团队实现 Elasticsearch 索引构建，优化检索链路，使 Top-5 文档命中率提升至 80%+",
        },
        {
          en: "Engaged in front-end/back-end interface debugging and system integration testing; integrated with Large Language Model (LLM) service APIs to ensure stable interaction between the web application and the Q&A system, supporting unified search services for tens of thousands of enterprise technical documents.",
          zh: "参与前后端接口联调与系统集成测试，对接 LLM 服务接口，保障 Web 应用与问答系统稳定交互，支撑万级份企业技术文档的统一检索服务",
        },
      ],
      highlight: { en: "Top-5 document hit rate improved to over 80%", zh: "Top-5 文档命中率提升至 80%+，支撑万级企业技术文档统一检索服务" },
      tags: ["Python", "Django", "LangChain", "Elasticsearch", "LLM", "RAG", "LLaMA", "Mistral"],
      tagBlue: false,
    },
    {
      logo: "TUD",
      logoImg: "/logos/tud.png",
      logoBg: "#185FA5",
      logoColor: "#E6F1FB",
      badge: null,
      title: { en: "Deep Learning-Based Structural Feature Extraction and Clustering Analysis for OCT Images", zh: "基于深度学习的 OCT 图像结构特征提取与聚类分析" },
      org: { en: "TU Dresden · Institute of Mechatronics", zh: "德累斯顿工业大学 机电工程研究所" },
      period: "2025.03 – 2025.07",
      bullets: [
        {
          en: "Leveraged a dataset of over 8,000 OCT B-scan images for research into online quality monitoring in additive manufacturing, designed a comprehensive preprocessing pipeline incorporating binarization, morphological enhancement and spline-based ROI extraction to effectively suppress noise in industrial images and provide high-quality input data for subsequent modeling.",
          zh: "基于 8000+ 张 OCT B-scan 图像构建增材制造质量监测数据集，设计包含二值化、形态学增强、样条曲线 ROI 提取的完整预处理流程，有效抑制工业图像噪声，为模型提供高质量输入数据",
        },
        {
          en: "Designed and implemented a convolutional autoencoder for unsupervised feature learning, compressed 224×224 images into a 128-dimensional latent feature space; fine-tuned key hyperparameters such as Dropout and learning rate, and achieved a Silhouette Coefficient of 0.9101 in structural separation tasks, significantly outperforming pre-trained CNN models such as ResNet50 and VGG16.",
          zh: "设计并实现卷积自编码器无监督特征学习模型，将 224×224 图像压缩至 128 维潜在特征空间；通过调优 Dropout、学习率等关键超参数，其在结构分离任务中的轮廓系数达到 0.9101，显著优于 ResNet50、VGG16 等预训练 CNN 模型",
        },
        {
          en: "Employed PCA dimensionality reduction and K-Means clustering to achieve structural pattern recognition, yielded a Calinski-Harabasz Index of approximately 9.2×10⁴ and a Davies-Bouldin Index as low as 0.20; validated feature separability through t-SNE and KDE visualizations, providing an effective solution for unsupervised industrial defect detection.",
          zh: "采用 PCA 降维与 K-Means 聚类实现结构模式识别，获得 Calinski-Harabasz 指数约 9.2×10⁴、Davies-Bouldin 指数低至 0.20，并通过 t-SNE 与 KDE 可视化验证特征可分性，为无标注工业缺陷检测提供有效方案",
        },
      ],
      highlight: { en: "Silhouette Coefficient 0.9101 · C-H ~9.2×10⁴ · D-B ~0.20", zh: "轮廓系数 0.9101，C-H 指数约 9.2×10⁴，D-B 指数低至 0.20，为无标注工业缺陷检测提供有效方案" },
      tags: ["Python", "PyTorch", "Autoencoder", "Computer Vision", "Unsupervised Learning", "PCA", "K-Means", "t-SNE"],
      tagBlue: false,
    },
  ],
  skills: [
    {
      category: { en: "AI & LLM", zh: "AI 与大语言模型" },
      items: [
        { name: "LangChain", iconBg: "#1868F2", iconText: "LC" },
        { name: "LangGraph", iconBg: "#0F4DA3", iconText: "LG" },
        { name: "RAG", iconBg: "#0EA5E9", iconText: "RAG" },
        { name: "Whisper", iconBg: "#FF6B35", iconText: "W" },
        { name: "Pyannote", iconBg: "#6366F1", iconText: "PA" },
        { name: "TTS", iconBg: "#8B5CF6", iconText: "TTS" },
        { name: "OCR", iconBg: "#059669", iconText: "OCR" },
        { name: "HuggingFace", hf: true },
      ],
    },
    {
      category: { en: "CV & ML", zh: "计算机视觉与机器学习" },
      items: [
        { name: "PyTorch", devicon: "pytorch" },
        { name: "CNNs", iconBg: "#00ADEF", iconText: "CNN" },
        { name: "Computer Vision", iconBg: "#185FA5", iconText: "CV" },
      ],
    },
    {
      category: { en: "Backend", zh: "后端开发" },
      items: [
        { name: "Python", devicon: "python" },
        { name: "Java", devicon: "java" },
        { name: "FastAPI", devicon: "fastapi" },
        { name: "Django", devicon: "django" },
        { name: "SpringBoot", iconBg: "#6DB33F", iconText: "SB" },
      ],
    },
    {
      category: { en: "Database", zh: "数据库" },
      items: [
        { name: "MySQL", devicon: "mysql" },
        { name: "Redis", devicon: "redis" },
        { name: "Elasticsearch", iconBg: "#FEC514", iconText: "ES" },
        { name: "Chroma", iconBg: "#E15D44", iconText: "Chr" },
      ],
    },
    {
      category: { en: "DevOps", zh: "开发与部署" },
      items: [
        { name: "Docker", devicon: "docker" },
        { name: "Git", devicon: "git" },
        { name: "Linux", devicon: "linux" },
        { name: "CI/CD", iconBg: "#374151", iconText: "CI" },
        { name: "Azure", devicon: "azure" },
      ],
    },
  ],
  languages: [
    { flag: "🇨🇳", name: { en: "Chinese", zh: "中文" }, level: { en: "Native", zh: "母语" }, dots: 5 },
    { flag: "🇬🇧", name: { en: "English", zh: "英语" }, level: { en: "Fluent · working", zh: "流利 · 工作语言" }, dots: 4 },
    { flag: "🇩🇪", name: { en: "German", zh: "德语" }, level: { en: "Basic · daily", zh: "基础 · 日常交流" }, dots: 2 },
  ],
}