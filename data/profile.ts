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
      period: "2026.01 – 2026.03",
      bullets: [
        {
          en: "Reproduced the Contour Proposal Network (CPN) cell instance segmentation algorithm; surveyed U-Net and Mask R-CNN baselines; built image preprocessing, model inference, and visualization pipeline using PyTorch and the celldetection framework; implemented feature extraction, contour regression, and NMS modules",
          zh: "系统调研 CPN、U-Net、Mask R-CNN 等主流生物医学实例分割算法，深入理解 CPN 基于傅里叶描述符的轮廓回归机制，对比分析其相较于 mask-based 方法的技术特性与适用场景",
        },
        {
          en: "Deployed deep learning environment on HZDR HPC cluster; configured GPU training jobs and completed model training and performance evaluation; tuned batch size, learning rate, and inference parameters across multiple microscopy datasets; authored technical report summarizing CPN's strengths and limitations for cell instance segmentation",
          zh: "基于 celldetection 框架将 CpnU22 模型适配至研究所公有显微图像数据集，完成 percentile 归一化、Albumentations 数据增强与数据集划分，实现数据预处理全流程",
        },
        {
          en: "Deployed deep learning environment on HZDR HPC cluster; configured GPU training jobs and completed model training and performance evaluation; tuned batch size, learning rate, and inference parameters across multiple microscopy datasets; authored technical report summarizing CPN's strengths and limitations for cell instance segmentation",
          zh: "调节学习率、batch size、NMS 阈值、傅里叶阶数等超参数，结合 loss 曲线与多 IoU 阈值下的平均 F1 指标评估模型性能，并在 HPC 集群完成训练、推理与实验验证",
        },
      ],
      highlight: { en: "Completed CPN model reproduction and segmentation experiments on million-scale microscopy datasets", zh: "完成 CPN 适配与显微图像分割端到端实验流程" },
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
          en: "Developed an LLM-based intelligent document retrieval and QA prototype; built a document parsing and knowledge organization pipeline to unify 400k+ scattered research documents, enabling natural-language access to technical knowledge across technical reports, papers, and project files",
          zh: "开发基于大语言模型的科研文档智能检索与问答系统原型，实现 PDF/Word 批量解析、文本清洗、分块与向量化，采用语义分句 + 重叠滑动窗口优化分块策略，缓解长文档语义断裂问题，召回准确率提升 15%",
        },
        {
          en: "Built document processing and embedding pipeline using Python and HuggingFace Transformers, covering PDF parsing, text chunking, and vectorization; integrated Sentence-Transformers for semantic vector indexing, achieving query response time < 500ms",
          zh: "构建 BM25 稀疏检索 + 稠密向量检索混合召回策略，弥补纯语义检索漏召短板，Top5 命中率从 72% 提升至 91%；结合重排序机制过滤无关片段，上下文质量有效提升",
        },
        {
          en: "Designed Hybrid Retrieval (BM25 + Vector Search) strategy with Prompt Engineering to optimize LLM inference; achieved technical QA accuracy > 87% in machine tool manufacturing and forming technology domains",
          zh: "通过 Prompt Engineering 约束模型仅依据检索上下文作答，降低幻觉风险；系统支持私有化部署，问答准确率提升 35%，平均响应耗时控制在 1s 内，显著提升内部文档检索效率",
        },
      ],
      highlight: { en: "Technical QA accuracy >87% in machine tool manufacturing domain · query response <500ms", zh: "问答准确率提升 35%，平均响应耗时控制在 1s 内，Top5 命中率从 72% 提升至 91%" },
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
          en: "Built a dataset of 8,000+ OCT B-scan images for additive manufacturing quality monitoring; analyzed structural differences in PA12 and PLA materials; designed feature extraction using sliding window analysis and Z-score anomaly detection to provide a stable data foundation for defect detection models",
          zh: "针对增材制造 OCT 断层图像，完成滑动窗口异常检测、Mask 生成、直方图匹配与 Block 式数据集划分，实现 Good/Bad 二分类自动标注",
        },
        {
          en: "Developed complete OCT image analysis pipeline (preprocessing → feature extraction → model training); used morphological operations and mask generation for defect localization; implemented binary quality classification (Good/Bad) with ResNet26-V2 CNN, outperforming EfficientNet-B0 and VGG16 across multiple metrics",
          zh: "基于 ResNet26-V2 搭建轻量化分类模型，设计 BottleneckV2 残差结构，完成网络宽度系数 K、模块数 N、Dropout、学习率等超参数优化",
        },
        {
          en: "Achieved accuracy 94.34%, recall 93.03%, precision 92.42%, F1 94.34%; ResNet26-V2 has only 3.5M parameters — significantly fewer than EfficientNet-B0 (5.3M) and VGG16 (138M) — demonstrating high detection accuracy with improved computational efficiency",
          zh: "使用 t-SNE 与 Grad-CAM 完成模型可解释性分析，最终二分类准确率 94.34%，实现增材制造过程内部缺陷实时监测与质量分类",
        },
      ],
      highlight: { en: "Accuracy 94.34% · Recall 93.03% · F1 94.34% · only 3.5M params vs EfficientNet-B0 (5.3M) & VGG16 (138M)", zh: "最终二分类准确率 94.34%，实现增材制造过程内部缺陷实时监测与质量分类" },
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
      title: { en: "Multimodal Video AI Pipeline", zh: "基于多模态AI的视频内容理解与自动摘要生成系统" },
      org: { en: "ScaDS.AI Dresden / Leipzig", zh: "可扩展数据分析与人工智能中心（ScaDS.AI）德累斯顿/莱比锡" },
      period: "2026.04 – 至今",
      bullets: [
        {
          en: "Designed and implemented an end-to-end multimodal video analysis pipeline; automated data acquisition, audio extraction, and content parsing from video URLs — covering transcription, keyframe detection, scene segmentation, and semantic sectioning to provide structured data for long-form video understanding",
          zh: "设计并实现端到端多模态视频分析流程，从视频 URL 自动完成数据获取、音视频提取与内容解析，实现关键帧提取、场景分割与语义分段，为长视频理解构建结构化数据基础",
        },
        {
          en: "Integrated multimodal AI models for video semantic understanding: Whisper (speech-to-text), CLIP/BLIP (visual semantics), OCR (text recognition), and Speaker Diarization — performing joint analysis across audio, visual, and subtitle streams to build structured semantic representations",
          zh: "集成 Whisper 语音转写、CLIP/BLIP 视觉语义理解、OCR 文本识别与说话人分离技术，对音视频信息进行跨模态联合分析，构建结构化视频语义表示",
        },
        {
          en: "Used LLMs (GPT series) to auto-generate narrative video summaries with Semantic Sectioning and Automatic Chaptering, breaking long videos into thematic segments with narrated summaries — improving accessibility and comprehension of public information such as parliamentary meeting recordings",
          zh: "基于大语言模型实现视频内容自动摘要生成，结合语义分段与自动章节划分，将长视频划分为主题片段并生成叙事式摘要与解说，提升公共视频信息的可访问性与理解效率",
        },
      ],
      highlight: { en: "Auto-generates narrative summaries & TTS narration for parliamentary meeting videos", zh: "自动生成叙事式摘要与语音解说，提升公共视频信息的可访问性" },
      tags: ["Python", "Whisper", "CLIP", "BLIP", "GPT", "OCR", "Pyannote", "Speaker Diarization", "LLaMA"],
      tagBlue: true,
    },
    {
      logo: "FSD",
      logoImg: "/logos/fsd.png",
      logoBg: "#3B6D11",
      logoColor: "#EAF3DE",
      badge: null,
      title: { en: "Enterprise NLP QA System", zh: "基于NLP与大语言模型的企业信息检索与知识抽取系统开发" },
      org: { en: "FSD Fahrzeugsystemdaten GmbH", zh: "FSD车辆系统数据有限公司" },
      period: "2024.05 – 2024.09",
      bullets: [
        {
          en: "Co-developed an LLM-based enterprise knowledge management and QA system for FSD Fahrzeugsystemdaten GmbH; unified semantic retrieval and QA over 30,000+ automotive technical documents and system specifications",
          zh: "基于 Django 框架独立完成企业 AI 助手 Web 界面开发，实现用户认证、聊天历史管理、文档上传与知识问答模块，搭建 6+ 核心功能页面，支持多角色权限与多用户并发访问",
        },
        {
          en: "Led web system architecture and core module development using Django; built a full-stack application with user authentication, chat history, document management, and admin panel (6+ modules); designed LLM service interface for efficient integration with the web application",
          zh: "参与 RAG 检索流程开发，协助完成技术文档解析、文本分块与向量化，配合团队实现 Elasticsearch 索引构建，优化检索链路，使 Top-5 文档命中率提升至 80%+",
        },
        {
          en: "Built RAG semantic retrieval and multi-tool Agent inference pipeline using LangChain and Elasticsearch; integrated LLaMA and Mistral LLMs for bilingual (DE/EN) technical QA; applied LoRA domain fine-tuning to improve automotive knowledge comprehension; achieved Top-5 document hit rate > 80% via Vector RAG",
          zh: "参与前后端接口联调与系统集成测试，对接 LLM 服务接口，保障 Web 应用与问答系统稳定交互，支撑万级份企业技术文档的统一检索服务",
        },
      ],
      highlight: { en: "Bilingual DE/EN QA · Top-5 document hit rate >80% · 30,000+ docs indexed", zh: "Top-5 文档命中率提升至 80%+，支撑万级企业技术文档统一检索服务" },
      tags: ["Python", "Django", "LangChain", "Elasticsearch", "LLM", "RAG", "LLaMA", "Mistral"],
      tagBlue: false,
    },
    {
      logo: "TUD",
      logoImg: "/logos/tud.png",
      logoBg: "#185FA5",
      logoColor: "#E6F1FB",
      badge: null,
      title: { en: "OCT Image Clustering & Feature Analysis", zh: "基于深度学习的 OCT 图像结构特征提取与聚类分析" },
      org: { en: "TU Dresden · Institute of Mechatronics", zh: "德累斯顿工业大学 机电工程研究所" },
      period: "2025.03 – 2025.07",
      bullets: [
        {
          en: "Built an additive manufacturing quality monitoring dataset from 8,000+ OCT B-scan images; designed preprocessing pipeline including binary mask generation, morphological enhancement, Spline curve filtering, and ROI extraction to provide high-quality inputs for feature learning",
          zh: "基于 8000+ 张 OCT B-scan 图像构建增材制造质量监测数据集，设计包含二值化、形态学增强、样条曲线 ROI 提取的完整预处理流程，有效抑制工业图像噪声，为模型提供高质量输入数据",
        },
        {
          en: "Designed and implemented a convolutional autoencoder for unsupervised feature learning, compressing 224×224 binary structural images to a 128-dim latent space; evaluated latent dimension, Dropout, and learning rate; applied PCA + K-Means for structural pattern recognition with block-based data splitting to prevent information leakage",
          zh: "设计并实现卷积自编码器无监督特征学习模型，将 224×224 图像压缩至 128 维潜在特征空间；通过调优 Dropout、学习率等关键超参数，其在结构分离任务中的轮廓系数达到 0.9101，显著优于 ResNet50、VGG16 等预训练 CNN 模型",
        },
        {
          en: "Autoencoder outperformed pretrained CNNs in structural separation: silhouette score at K=2 reached 0.9101 (vs. ResNet50: 0.7878, EfficientNet-B0: 0.8123, VGG16: 0.6785); Calinski-Harabasz index ~9.2×10⁴, Davies-Bouldin ~0.20; t-SNE and KDE visualizations confirmed latent-space structural separability",
          zh: "采用 PCA 降维与 K-Means 聚类实现结构模式识别，获得 Calinski-Harabasz 指数约 9.2×10⁴、Davies-Bouldin 指数低至 0.20，并通过 t-SNE 与 KDE 可视化验证特征可分性，为无标注工业缺陷检测提供有效方案",
        },
      ],
      highlight: { en: "Silhouette score 0.9101 at K=2 · C-H ~9.2×10⁴ · D-B ~0.20 · outperforms ResNet50, EfficientNet-B0, VGG16", zh: "轮廓系数 0.9101，C-H 指数约 9.2×10⁴，D-B 指数低至 0.20，为无标注工业缺陷检测提供有效方案" },
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