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
    cv: "/cv/CV_Mengqing_Hu.pdf",
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
          zh: "复现 Contour Proposal Network（CPN）细胞实例分割算法，调研 U-Net、Mask R-CNN 等主流方法，基于 PyTorch 与 celldetection 实现显微图像预处理、模型推理与可视化 pipeline；实现特征提取、轮廓回归与 NMS 等核心模块",
        },
        {
          en: "Deployed deep learning environment on HZDR HPC cluster; configured GPU training jobs and completed model training and performance evaluation; tuned batch size, learning rate, and inference parameters across multiple microscopy datasets; authored technical report summarizing CPN's strengths and limitations for cell instance segmentation",
          zh: "在 HZDR HPC 高性能计算集群部署深度学习实验环境，配置 GPU 训练任务并完成模型训练与性能评估；调整 batch size、学习率及推理参数，在多组显微图像数据上完成实验验证，并输出技术报告总结 CPN 的优势与局限",
        },
      ],
      highlight: { en: "Completed CPN model reproduction and segmentation experiments on million-scale microscopy datasets", zh: "在万级细胞实例显微图像数据集上完成 CPN 模型复现与分割实验" },
      tags: ["PyTorch", "Instance Segmentation", "HPC", "Computer Vision"],
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
          zh: "开发基于大语言模型的科研文档智能检索与问答系统原型，构建文档解析与知识组织流程，实现四十万级技术报告、论文及项目文档的统一索引与语义检索，支持研究人员通过自然语言快速获取相关技术信息",
        },
        {
          en: "Built document processing and embedding pipeline using Python and HuggingFace Transformers, covering PDF parsing, text chunking, and vectorization; integrated Sentence-Transformers for semantic vector indexing, achieving query response time < 500ms",
          zh: "基于 Python 与 HuggingFace Transformers 构建文档处理与嵌入生成 pipeline，实现 PDF 自动解析、文本切分与向量化；结合 Sentence-Transformers 构建语义向量索引，在科研文档问答场景中实现查询响应时间 < 500ms",
        },
        {
          en: "Designed Hybrid Retrieval (BM25 + Vector Search) strategy with Prompt Engineering to optimize LLM inference; achieved technical QA accuracy > 87% in machine tool manufacturing and forming technology domains",
          zh: "设计 Hybrid Retrieval（BM25 + 向量检索）策略并结合 Prompt Engineering 优化 LLM 推理效果，在机床制造与成形技术领域问答测试中实现技术问答准确率 > 87%",
        },
      ],
      highlight: { en: "Technical QA accuracy >87% in machine tool manufacturing domain · query response <500ms", zh: "在机床制造领域技术问答准确率 >87%，查询响应时间 <500ms" },
      tags: ["RAG", "HuggingFace", "BM25", "Vector Search", "LLM", "Prompt Engineering"],
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
          zh: "构建 8000+ 张 OCT B-scan 图像数据集用于增材制造在线质量监测研究，分析 PA12 与 PLA 材料结构差异，设计基于滑动窗口分析与 Z-score 异常检测的特征提取方法，为深度学习缺陷检测模型提供稳定的数据基础",
        },
        {
          en: "Developed complete OCT image analysis pipeline (preprocessing → feature extraction → model training); used morphological operations and mask generation for defect localization; implemented binary quality classification (Good/Bad) with ResNet26-V2 CNN, outperforming EfficientNet-B0 and VGG16 across multiple metrics",
          zh: "开发完整 OCT 图像分析 pipeline（数据预处理 → 特征提取 → 模型训练），通过形态学操作与 Mask 生成实现缺陷区域定位，基于 ResNet26-V2 CNN 实现产品质量二分类（Good/Bad），在多项指标上优于 EfficientNet-B0 与 VGG16",
        },
        {
          en: "Achieved accuracy 94.34%, recall 93.03%, precision 92.42%, F1 94.34%; ResNet26-V2 has only 3.5M parameters — significantly fewer than EfficientNet-B0 (5.3M) and VGG16 (138M) — demonstrating high detection accuracy with improved computational efficiency",
          zh: "模型准确率 94.34%、召回率 93.03%、精确率 92.42%、F1-score 94.34%；ResNet26-V2 仅 3.5M 参数，显著低于 EfficientNet-B0（5.3M）与 VGG16（138M），在保证检测精度的同时大幅提升计算效率与部署可行性",
        },
      ],
      highlight: { en: "Accuracy 94.34% · Recall 93.03% · F1 94.34% · only 3.5M params vs EfficientNet-B0 (5.3M) & VGG16 (138M)", zh: "准确率 94.34%、召回率 93.03%、F1 94.34%，仅 3.5M 参数，显著优于 EfficientNet-B0（5.3M）与 VGG16（138M）" },
      tags: ["CNN", "ResNet", "PyTorch", "Supervised Learning", "Computer Vision"],
    },
  ],
  projects: [
    {
      logo: "ScaDS",
      logoImg: "/logos/scads.png",
      logoBg: "#26215C",
      logoColor: "#CECBF6",
      badge: { en: "M.Sc. Thesis", zh: "硕士论文" },
      title: { en: "Multimodal Video AI Pipeline", zh: "多模态 AI 视频内容理解与摘要系统" },
      org: { en: "ScaDS.AI Dresden / Leipzig", zh: "ScaDS.AI 德累斯顿/莱比锡" },
      period: "2026.02 – present",
      bullets: [
        {
          en: "Designed and implemented an end-to-end multimodal video analysis pipeline; automated data acquisition, audio extraction, and content parsing from video URLs — covering transcription, keyframe detection, scene segmentation, and semantic sectioning to provide structured data for long-form video understanding",
          zh: "设计并实现端到端多模态视频分析流程，从视频 URL 自动完成数据获取、音频提取与内容解析，实现视频下载、语音转录、关键帧检测、场景分割与语义分段等自动化处理步骤，为长视频内容理解提供结构化数据基础",
        },
        {
          en: "Integrated multimodal AI models for video semantic understanding: Whisper (speech-to-text), CLIP/BLIP (visual semantics), OCR (text recognition), and Speaker Diarization — performing joint analysis across audio, visual, and subtitle streams to build structured semantic representations",
          zh: "集成多模态 AI 模型实现视频语义理解，结合 Whisper（语音识别转录）、CLIP/BLIP（视觉语义理解）、OCR（文本识别）以及 Speaker Diarization（发言人识别），对视频中的语音、画面与字幕信息进行联合分析，构建结构化视频语义表示",
        },
        {
          en: "Used LLMs (GPT series) to auto-generate narrative video summaries with Semantic Sectioning and Automatic Chaptering, breaking long videos into thematic segments with narrated summaries — improving accessibility and comprehension of public information such as parliamentary meeting recordings",
          zh: "基于 LLM（GPT 系列）实现视频内容自动摘要生成，通过语义分段与自动章节划分将长视频拆分为多个主题片段，生成叙事式摘要与自动语音解说，从而提升政府会议视频等公共信息的可访问性与理解效率",
        },
      ],
      highlight: { en: "Auto-generates narrative summaries & TTS narration for parliamentary meeting videos", zh: "自动生成叙事式摘要与语音解说，提升政府会议视频的可访问性" },
      tags: ["Whisper", "CLIP", "BLIP", "GPT", "Pyannote", "Multimodal AI"],
      tagBlue: true,
    },
    {
      logo: "FSD",
      logoImg: "/logos/fsd.png",
      logoBg: "#3B6D11",
      logoColor: "#EAF3DE",
      badge: null,
      title: { en: "Enterprise NLP QA System", zh: "企业知识管理与智能问答系统" },
      org: { en: "FSD Fahrzeugsystemdaten GmbH", zh: "FSD 车辆系统数据有限公司" },
      period: "2024.05 – 2024.09",
      bullets: [
        {
          en: "Co-developed an LLM-based enterprise knowledge management and QA system for FSD Fahrzeugsystemdaten GmbH; unified semantic retrieval and QA over 30,000+ automotive technical documents and system specifications",
          zh: "参与开发基于大语言模型的企业知识管理与智能问答系统，面向 FSD 内部技术文档与汽车系统知识库，实现 30000+ 企业技术文档与系统规范的统一索引与语义检索",
        },
        {
          en: "Led web system architecture and core module development using Django; built a full-stack application with user authentication, chat history, document management, and admin panel (6+ modules); designed LLM service interface for efficient integration with the web application",
          zh: "负责 Web 系统架构设计与核心模块开发，基于 Django 构建前后端分离应用，实现用户认证、聊天历史管理、文档管理与管理员后台等 6+ 核心功能模块，并设计 LLM 服务接口与 Web 应用高效集成",
        },
        {
          en: "Built RAG semantic retrieval and multi-tool Agent inference pipeline using LangChain and Elasticsearch; integrated LLaMA and Mistral LLMs for bilingual (DE/EN) technical QA; applied LoRA domain fine-tuning to improve automotive knowledge comprehension; achieved Top-5 document hit rate > 80% via Vector RAG",
          zh: "构建 RAG 语义检索与多工具 Agent 推理流程，基于 LangChain 与 Elasticsearch 实现文档向量化与语义检索；集成 LLaMA 与 Mistral 支持德英双语问答，采用 LoRA 进行领域微调；通过 Vector RAG 增强上下文检索，实现 Top-5 文档命中率 > 80%",
        },
      ],
      highlight: { en: "Bilingual DE/EN QA · Top-5 document hit rate >80% · 30,000+ docs indexed", zh: "支持德英双语问答，Top-5 文档命中率 >80%，索引 30000+ 企业技术文档" },
      tags: ["Django", "LangChain", "LLaMA", "Mistral", "LoRA", "RAG", "Agent"],
      tagBlue: false,
    },
    {
      logo: "TUD",
      logoImg: "/logos/tud.png",
      logoBg: "#185FA5",
      logoColor: "#E6F1FB",
      badge: null,
      title: { en: "OCT Image Clustering & Feature Analysis", zh: "OCT 图像结构特征提取与聚类分析" },
      org: { en: "TU Dresden · Institute of Mechatronics", zh: "德累斯顿工业大学 机电工程研究所" },
      period: "2025.03 – 2025.07",
      bullets: [
        {
          en: "Built an additive manufacturing quality monitoring dataset from 8,000+ OCT B-scan images; designed preprocessing pipeline including binary mask generation, morphological enhancement, Spline curve filtering, and ROI extraction to provide high-quality inputs for feature learning",
          zh: "基于 8000+ 张 OCT B-scan 图像构建增材制造质量监测数据集，设计完整图像处理流程，包括二值掩膜生成、形态学增强、Spline 曲线过滤与 ROI 提取等预处理步骤，为深度学习特征学习提供高质量输入数据",
        },
        {
          en: "Designed and implemented a convolutional autoencoder for unsupervised feature learning, compressing 224×224 binary structural images to a 128-dim latent space; evaluated latent dimension, Dropout, and learning rate; applied PCA + K-Means for structural pattern recognition with block-based data splitting to prevent information leakage",
          zh: "设计并实现卷积自编码器无监督特征学习模型，将 224×224 二值结构图像压缩为 128 维潜在空间特征表示，系统评估潜在维度、Dropout 及学习率等关键超参数；通过 PCA 降维与 K-Means 聚类实现结构模式识别，采用 block-based 数据划分策略避免相邻 B-scan 数据的信息泄露",
        },
        {
          en: "Autoencoder outperformed pretrained CNNs in structural separation: silhouette score at K=2 reached 0.9101 (vs. ResNet50: 0.7878, EfficientNet-B0: 0.8123, VGG16: 0.6785); Calinski-Harabasz index ~9.2×10⁴, Davies-Bouldin ~0.20; t-SNE and KDE visualizations confirmed latent-space structural separability",
          zh: "自编码器在结构分离任务中优于 ResNet50、VGG16 与 EfficientNet-B0，K=2 时轮廓系数达 0.9101（ResNet50：0.7878，EfficientNet-B0：0.8123，VGG16：0.6785）；Calinski-Harabasz 指数约 9.2×10⁴，Davies-Bouldin 指数约 0.20；通过 t-SNE 与 KDE 可视化验证潜在空间特征的结构可分性",
        },
      ],
      highlight: { en: "Silhouette score 0.9101 at K=2 · C-H ~9.2×10⁴ · D-B ~0.20 · outperforms ResNet50, EfficientNet-B0, VGG16", zh: "K=2 时轮廓系数 0.9101，C-H 指数约 9.2×10⁴，D-B 指数约 0.20，优于 ResNet50、EfficientNet-B0 与 VGG16" },
      tags: ["Autoencoder", "PCA", "K-Means", "t-SNE", "Unsupervised Learning"],
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