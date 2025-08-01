<template>
  <div>
    <!-- Hero Section -->
    <section id="home" class="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div class="text-center max-w-4xl mx-auto">
        <div class="animate-fade-in">
          <div class="relative inline-block mb-6">
            <!-- Rotating Glow Halo -->
            <div class="absolute inset-0 flex items-center justify-center">
              <div class="rotating-halo"></div>
            </div>
            <!-- 3D Text -->
            <h1 class="text-6xl sm:text-8xl font-bold text-white animate-fade-in relative z-10 text-3d-glow">
              VAMSI JAKKULA
            </h1>
          </div>
          <p class="text-2xl sm:text-3xl text-gray-300 mb-4">
            AI ENGINEER
          </p>
          <p class="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Masters in IT | AWS Certified | Specializing in AI | Cloud Computing
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" class="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-orange-500/25">
              Get In Touch
            </a>
            <a href="#projects" class="px-8 py-4 border-2 border-orange-500 text-orange-400 font-semibold rounded-lg hover:bg-orange-500 hover:text-white transform hover:scale-105 transition-all duration-300">
              View Projects
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-500 via-blue-500 to-yellow-400 bg-clip-text text-transparent">
            About Me
          </h2>
        </div>
        
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div class="space-y-6">
            <p class="text-lg text-gray-300 leading-relaxed">
              I'm an aspiring AI and Data Engineering professional currently pursuing a Master's in Information Technology at St. Francis College, Brooklyn, holding a 3.4 GPA. My academic foundation is built on system architecture, data structures, cybersecurity, and cloud technologies, which complements my strong technical background in Python, SQL, distributed systems, and data pipeline development.
            </p>
            <p class="text-lg text-gray-300 leading-relaxed">
              Through hands-on roles as a Robotics Engineer and Ethical Hacker at ELITEPATH, and as a Design & Analysis Engineer at Bangalore Aircraft Industries, I've gained practical experience in modeling real-time systems, developing control algorithms, and securing digital environments. My projects further reflect this depth, including building scalable fraud detection systems, personalized churn prediction platforms, and LLM-based document Q&A tools using LangChain and vector databases.
            </p>
            <p class="text-lg text-gray-300 leading-relaxed">
              Certified in AWS, Azure, and Generative AI with LLMs, I specialize in developing intelligent data systems that solve real-world problems, merging data quality, automation, and semantic search to drive performance and innovation. I'm passionate about leveraging AI to build context-aware applications that are scalable, secure, and impactful.
            </p>
          </div>
          
          <div class="bg-black/50 rounded-2xl p-8 border border-gray-800">
            <h3 class="text-2xl font-bold text-white mb-6">Education</h3>
            <div class="space-y-4">
              <div>
                <h4 class="text-xl font-semibold text-blue-400">Masters in Information Technology</h4>
                <p class="text-gray-300">St. Francis College, Brooklyn, NY</p>
                <p class="text-gray-400">Jan 2024 – May 2025 | GPA: 3.4/4.0</p>
              </div>
              <div class="mt-4">
                <p class="text-sm text-gray-400 font-medium mb-2">Relevant Coursework:</p>
                <p class="text-sm text-gray-500">Tech Analytics, Data Visualization, Information Security & Risk Management, System Integration & Architecture, Advanced Program Design, Project Management, Statistical Analysis</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Certifications Section -->
    <section class="py-20 px-4 sm:px-6 lg:px-8">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-500 via-blue-500 to-yellow-400 bg-clip-text text-transparent">
            Certifications
          </h2>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-black/50 rounded-2xl p-6 border border-gray-800 text-center hover:border-orange-500/50 transition-all duration-300">
            <div class="text-7xl mb-4">☁️</div>
            <h3 class="text-xl font-bold text-white mb-2">AWS Certified</h3>
            <p class="text-blue-400 font-medium">Cloud Practitioner</p>
          </div>
          
          <div class="bg-black/50 rounded-2xl p-6 border border-gray-800 text-center hover:border-blue-500/50 transition-all duration-300">
            <div class="text-7xl mb-4">🔷</div>
            <h3 class="text-xl font-bold text-white mb-2">Microsoft Azure</h3>
            <p class="text-blue-400 font-medium">Fundamentals (AZ-900)</p>
          </div>
          
          <div class="bg-black/50 rounded-2xl p-6 border border-gray-800 text-center hover:border-yellow-500/50 transition-all duration-300">
            <div class="text-7xl mb-4">🤖</div>
            <h3 class="text-xl font-bold text-white mb-2">Generative AI</h3>
            <p class="text-blue-400 font-medium">Large Language Models</p>
          </div>
          
          <div class="bg-black/50 rounded-2xl p-6 border border-gray-800 text-center hover:border-green-500/50 transition-all duration-300">
            <div class="text-7xl mb-4">🗃️</div>
            <h3 class="text-xl font-bold text-white mb-2">SQL for Data Science</h3>
            <p class="text-blue-400 font-medium">Coursera</p>
          </div>
          
          <div class="bg-black/50 rounded-2xl p-6 border border-gray-800 text-center hover:border-purple-500/50 transition-all duration-300">
            <div class="text-7xl mb-4">🐍</div>
            <h3 class="text-xl font-bold text-white mb-2">Databases & SQL</h3>
            <p class="text-blue-400 font-medium">Data Science with Python (IBM)</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-500 via-blue-500 to-yellow-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Programming & Scripting -->
          <div class="bg-black/50 rounded-2xl p-6 border border-gray-800">
            <div class="flex items-center mb-4">
              <div class="text-6xl mr-4">💻</div>
              <h3 class="text-xl font-bold text-white">Programming & Scripting</h3>
            </div>
            <div class="flex flex-wrap gap-2">
              <span class="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-sm">Python</span>
              <span class="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">SQL</span>
              <span class="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">R</span>
              <span class="px-3 py-1 bg-red-500/20 text-red-300 rounded-full text-sm">Prompt Engineering</span>
              <span class="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">C</span>
              <span class="px-3 py-1 bg-gray-500/20 text-gray-300 rounded-full text-sm">Bash</span>
              <span class="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-sm">MATLAB</span>
              <span class="px-3 py-1 bg-teal-500/20 text-teal-300 rounded-full text-sm">VBA</span>
              <span class="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm">DAX</span>
              <span class="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-sm">PCL</span>
            </div>
          </div>

          <!-- AI & Frameworks -->
          <div class="bg-black/50 rounded-2xl p-6 border border-gray-800">
            <div class="flex items-center mb-4">
              <div class="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">🤖</div>
              <h3 class="text-xl font-bold text-white">AI/ML & Frameworks</h3>
            </div>
            <div class="flex flex-wrap gap-2">
              <span class="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">Streamlit</span>
              <span class="px-3 py-1 bg-red-500/20 text-red-300 rounded-full text-sm">Flask</span>
              <span class="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-sm">scikit-learn</span>
              <span class="px-3 py-1 bg-red-500/20 text-red-300 rounded-full text-sm">TensorFlow</span>
              <span class="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">PyTorch</span>
              <span class="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Pandas</span>
              <span class="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">NumPy</span>
              <span class="px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-sm">spaCy</span>
              <span class="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-sm">LangChain</span>
              <span class="px-3 py-1 bg-teal-500/20 text-teal-300 rounded-full text-sm">OpenCV</span>
            </div>
          </div>

          <!-- Cloud & Infrastructure -->
          <div class="bg-black/50 rounded-2xl p-6 border border-gray-800">
            <div class="flex items-center mb-4">
              <div class="text-6xl mr-4">☁️</div>
              <h3 class="text-xl font-bold text-white">Cloud & Infrastructure</h3>
            </div>
            <div class="flex flex-wrap gap-2">
              <span class="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-sm">AWS (EC2, S3)</span>
              <span class="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Microsoft Azure</span>
              <span class="px-3 py-1 bg-red-500/20 text-red-300 rounded-full text-sm">Redis</span>
              <span class="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">REST APIs</span>
              <span class="px-3 py-1 bg-gray-500/20 text-gray-300 rounded-full text-sm">Linux</span>
              <span class="px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-sm">CRON</span>
            </div>
          </div>

          <!-- Data & Analytics -->
          <div class="bg-black/50 rounded-2xl p-6 border border-gray-800">
            <div class="flex items-center mb-4">
              <div class="text-6xl mr-4">📊</div>
              <h3 class="text-xl font-bold text-white">Data & Analytics</h3>
            </div>
            <div class="flex flex-wrap gap-2">
              <span class="px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-sm">Power BI</span>
              <span class="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-sm">Tableau</span>
              <span class="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">Excel</span>
              <span class="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Power Automate</span>
              <span class="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">SharePoint</span>
              <span class="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-sm">Jupyter Notebook</span>
            </div>
          </div>

          <!-- Security & Testing -->
          <div class="bg-black/50 rounded-2xl p-6 border border-gray-800">
            <div class="flex items-center mb-4">
              <div class="text-6xl mr-4">🔐</div>
              <h3 class="text-xl font-bold text-white">Security & Testing</h3>
            </div>
            <div class="flex flex-wrap gap-2">
              <span class="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Wireshark</span>
              <span class="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-sm">Penetration Testing</span>
            </div>
          </div>

          <!-- Development Tools -->
          <div class="bg-black/50 rounded-2xl p-6 border border-gray-800">
            <div class="flex items-center mb-4">
              <div class="text-6xl mr-4">🛠️</div>
              <h3 class="text-xl font-bold text-white">Development Tools</h3>
            </div>
            <div class="flex flex-wrap gap-2">
              <span class="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-sm">Git</span>
              <span class="px-3 py-1 bg-gray-500/20 text-gray-300 rounded-full text-sm">GitHub</span>
              <span class="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">VS Code</span>
              <span class="px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-sm">Fusion 360</span>
              <span class="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-sm">Cura</span>
              <span class="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-sm">MSC NASTRAN</span>
              <span class="px-3 py-1 bg-teal-500/20 text-teal-300 rounded-full text-sm">PATRAN</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Experience Section -->
    <section class="py-20 px-4 sm:px-6 lg:px-8">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-500 via-blue-500 to-yellow-400 bg-clip-text text-transparent">
            Professional Experience
          </h2>
        </div>
        
        <div class="space-y-8">
          <!-- Robotics Engineer -->
          <div @click="openExperienceModal('robotics')" class="bg-black/50 rounded-2xl p-8 border border-gray-800 hover:border-orange-500/50 transition-all duration-300 cursor-pointer group">
            <div class="flex items-start justify-between">
              <div class="flex items-center">
                <div class="text-3xl mr-4 group-hover:scale-110 transition-transform duration-300">🤖</div>
                <div>
                  <h3 class="text-2xl font-bold text-white mb-2">Robotics Engineer</h3>
                  <p class="text-orange-400 font-medium">ELITEPATH, Remote</p>
                  <p class="text-gray-400">Aug 2022 – Oct 2022</p>
                </div>
              </div>
              <div class="text-gray-400 group-hover:text-orange-400 transition-colors duration-300">
                Click to learn more →
              </div>
            </div>
            <p class="text-gray-300 mt-4">
              Developed real-time robotic monitoring frameworks with IMU and ultrasonic sensor integration, creating predictive diagnostics pipelines and executive dashboards.
            </p>
          </div>

          <!-- Ethical Hacker -->
          <div @click="openExperienceModal('hacker')" class="bg-black/50 rounded-2xl p-8 border border-gray-800 hover:border-blue-500/50 transition-all duration-300 cursor-pointer group">
            <div class="flex items-start justify-between">
              <div class="flex items-center">
                <div class="text-3xl mr-4 group-hover:scale-110 transition-transform duration-300">🔐</div>
                <div>
                  <h3 class="text-2xl font-bold text-white mb-2">Ethical Hacker</h3>
                  <p class="text-blue-400 font-medium">ELITEPATH, Remote</p>
                  <p class="text-gray-400">May 2022 – Jul 2022</p>
                </div>
              </div>
              <div class="text-gray-400 group-hover:text-blue-400 transition-colors duration-300">
                Click to learn more →
              </div>
            </div>
            <p class="text-gray-300 mt-4">
              Executed comprehensive penetration tests using Burp Suite, Nessus, and Wireshark, automated threat assessments with CVSS scoring and dynamic threat modeling.
            </p>
          </div>

          <!-- Design and Analysis Engineer -->
          <div @click="openExperienceModal('aircraft')" class="bg-black/50 rounded-2xl p-8 border border-gray-800 hover:border-yellow-500/50 transition-all duration-300 cursor-pointer group">
            <div class="flex items-start justify-between">
              <div class="flex items-center">
                <div class="text-3xl mr-4 group-hover:scale-110 transition-transform duration-300">✈️</div>
                <div>
                  <h3 class="text-2xl font-bold text-white mb-2">Design and Analysis Engineer</h3>
                  <p class="text-yellow-400 font-medium">Bangalore Aircraft Industries Pvt. Ltd.</p>
                  <p class="text-gray-400">Jan 2020 – Aug 2020</p>
                </div>
              </div>
              <div class="text-gray-400 group-hover:text-yellow-400 transition-colors duration-300">
                Click to learn more →
              </div>
            </div>
            <p class="text-gray-300 mt-4">
              Performed structural simulations and modal/vibration analyses on aircraft components using MSC NASTRAN and PATRAN, automated fatigue life calculations with Excel VBA.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-500 via-blue-500 to-yellow-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- AI Insurance Fraud Detection -->
          <div @click="openProjectModal('fraud')" class="bg-black/50 rounded-2xl p-6 border border-gray-800 hover:border-orange-500/50 transition-all duration-300 cursor-pointer group">
            <div class="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">🤖</div>
            <h3 class="text-xl font-bold text-white mb-3">AI-Driven Insurance Fraud Detection</h3>
            <p class="text-gray-400 mb-4">Machine learning pipeline with 85.4% accuracy for fraud detection using ensemble methods and SMOTE balancing.</p>
            <div class="text-orange-400 group-hover:text-orange-300 transition-colors duration-300">
              Click to learn more →
            </div>
          </div>

          <!-- Financial Dashboard -->
          <div @click="openProjectModal('dashboard')" class="bg-black/50 rounded-2xl p-6 border border-gray-800 hover:border-blue-500/50 transition-all duration-300 cursor-pointer group">
            <div class="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">📊</div>
            <h3 class="text-xl font-bold text-white mb-3">Financial Performance Dashboard</h3>
            <p class="text-gray-400 mb-4">Power BI analytics dashboard integrating HR, Logistics, and Finance data with automated reporting.</p>
            <div class="text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
              Click to learn more →
            </div>
          </div>

          <!-- Customer Churn -->
          <div @click="openProjectModal('churn')" class="bg-black/50 rounded-2xl p-6 border border-gray-800 hover:border-green-500/50 transition-all duration-300 cursor-pointer group">
            <div class="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">📈</div>
            <h3 class="text-xl font-bold text-white mb-3">Customer Churn Intelligence Platform</h3>
            <p class="text-gray-400 mb-4">XGBoost-powered churn prediction with Flask frontend and MongoDB integration, achieving 19% churn reduction.</p>
            <div class="text-green-400 group-hover:text-green-300 transition-colors duration-300">
              Click to learn more →
            </div>
          </div>

          <!-- Document Q&A Chatbot -->
          <div @click="openProjectModal('chatbot')" class="bg-black/50 rounded-2xl p-6 border border-gray-800 hover:border-purple-500/50 transition-all duration-300 cursor-pointer group">
            <div class="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">💬</div>
            <h3 class="text-xl font-bold text-white mb-3">Document Q&A Chatbot (RAG)</h3>
            <p class="text-gray-400 mb-4">LangChain and FAISS-powered intelligent document assistant with 70% improved lookup speed.</p>
            <div class="text-purple-400 group-hover:text-purple-300 transition-colors duration-300">
              Click to learn more →
            </div>
          </div>

          <!-- Financial News Q&A -->
          <div @click="openProjectModal('news')" class="bg-black/50 rounded-2xl p-6 border border-gray-800 hover:border-yellow-500/50 transition-all duration-300 cursor-pointer group">
            <div class="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">📰</div>
            <h3 class="text-xl font-bold text-white mb-3">LLM Financial News Q&A Tool</h3>
            <p class="text-gray-400 mb-4">Custom LLM agent processing 200+ financial articles daily with sentiment analysis and credibility scoring.</p>
            <div class="text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300">
              Click to learn more →
            </div>
          </div>

          <!-- HR Onboarding -->
          <div @click="openProjectModal('hr')" class="bg-black/50 rounded-2xl p-6 border border-gray-800 hover:border-pink-500/50 transition-all duration-300 cursor-pointer group">
            <div class="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">👥</div>
            <h3 class="text-xl font-bold text-white mb-3">Automated HR Onboarding Solution</h3>
            <p class="text-gray-400 mb-4">SharePoint and Power Automate solution reducing onboarding time by 45% with automated workflows.</p>
            <div class="text-pink-400 group-hover:text-pink-300 transition-colors duration-300">
              Click to learn more →
            </div>
          </div>

          <!-- Redis Task Queue -->
          <div @click="openProjectModal('redis')" class="bg-black/50 rounded-2xl p-6 border border-gray-800 hover:border-red-500/50 transition-all duration-300 cursor-pointer group">
            <div class="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">⚡</div>
            <h3 class="text-xl font-bold text-white mb-3">Distributed Task Queue Simulator</h3>
            <p class="text-gray-400 mb-4">Redis pub/sub system with TTL-based retry mechanisms and multi-threaded worker orchestration.</p>
            <div class="text-red-400 group-hover:text-red-300 transition-colors duration-300">
              Click to learn more →
            </div>
          </div>

          <!-- Log Analyzer -->
          <div @click="openProjectModal('logs')" class="bg-black/50 rounded-2xl p-6 border border-gray-800 hover:border-indigo-500/50 transition-all duration-300 cursor-pointer group">
            <div class="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">📋</div>
            <h3 class="text-xl font-bold text-white mb-3">Scalable Log Analyzer</h3>
            <p class="text-gray-400 mb-4">High-speed log parser processing 1M+ lines/minute with multiprocessing and InfluxDB-Grafana pipeline.</p>
            <div class="text-indigo-400 group-hover:text-indigo-300 transition-colors duration-300">
              Click to learn more →
            </div>
          </div>

          <!-- Resume Screening -->
          <div @click="openProjectModal('resume')" class="bg-black/50 rounded-2xl p-6 border border-gray-800 hover:border-teal-500/50 transition-all duration-300 cursor-pointer group">
            <div class="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">📄</div>
            <h3 class="text-xl font-bold text-white mb-3">AI Resume Screening Assistant</h3>
            <p class="text-gray-400 mb-4">OpenAI embeddings and spaCy NLP for semantic resume ranking, reducing screening time by 70%.</p>
            <div class="text-teal-400 group-hover:text-teal-300 transition-colors duration-300">
              Click to learn more →
            </div>
          </div>

          <!-- Voting System -->
          <div @click="openProjectModal('voting')" class="bg-black/50 rounded-2xl p-6 border border-gray-800 hover:border-cyan-500/50 transition-all duration-300 cursor-pointer group">
            <div class="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">🗳️</div>
            <h3 class="text-xl font-bold text-white mb-3">Online Voting System</h3>
            <p class="text-gray-400 mb-4">Secure electronic voting with Java/JDBC, AES encryption, and OTP authentication for 1,000+ users.</p>
            <div class="text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
              Click to learn more →
            </div>
          </div>

          <!-- Brain Disease Classification -->
          <div @click="openProjectModal('brain')" class="bg-black/50 rounded-2xl p-6 border border-gray-800 hover:border-orange-500/50 transition-all duration-300 cursor-pointer group">
            <div class="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">🧠</div>
            <h3 class="text-xl font-bold text-white mb-3">Brain Disease Classification</h3>
            <p class="text-gray-400 mb-4">CNN model with 92% accuracy for Alzheimer's and Parkinson's detection using TensorFlow and Grad-CAM.</p>
            <div class="text-orange-400 group-hover:text-orange-300 transition-colors duration-300">
              Click to learn more →
            </div>
          </div>

          <!-- Emotion AI Chatbot -->
          <div @click="openProjectModal('emotion')" class="bg-black/50 rounded-2xl p-6 border border-gray-800 hover:border-blue-500/50 transition-all duration-300 cursor-pointer group">
            <div class="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">😊</div>
            <h3 class="text-xl font-bold text-white mb-3">Emotion AI Chatbot</h3>
            <p class="text-gray-400 mb-4">Empathetic chatbot with facial expression detection and voice tone analysis, improving engagement by 25%.</p>
            <div class="text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
              Click to learn more →
            </div>
          </div>

          <!-- Speech Translator -->
          <div @click="openProjectModal('speech')" class="bg-black/50 rounded-2xl p-6 border border-gray-800 hover:border-green-500/50 transition-all duration-300 cursor-pointer group">
            <div class="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">🗣️</div>
            <h3 class="text-xl font-bold text-white mb-3">Speech-to-Speech Translator</h3>
            <p class="text-gray-400 mb-4">Real-time translation app with Google Cloud APIs achieving 94% transcription precision across 5 languages.</p>
            <div class="text-green-400 group-hover:text-green-300 transition-colors duration-300">
              Click to learn more →
            </div>
          </div>

          <!-- 3D Printing Optimization -->
          <div @click="openProjectModal('printing')" class="bg-black/50 rounded-2xl p-6 border border-gray-800 hover:border-purple-500/50 transition-all duration-300 cursor-pointer group">
            <div class="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">🖨️</div>
            <h3 class="text-xl font-bold text-white mb-3">3D Printing Optimization</h3>
            <p class="text-gray-400 mb-4">Fusion 360 and Cura optimization reducing print time by 28% and material waste by 30%.</p>
            <div class="text-purple-400 group-hover:text-purple-300 transition-colors duration-300">
              Click to learn more →
            </div>
          </div>

          <!-- Hive Robotics -->
          <div @click="openProjectModal('hive')" class="bg-black/50 rounded-2xl p-6 border border-gray-800 hover:border-yellow-500/50 transition-all duration-300 cursor-pointer group">
            <div class="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">🐝</div>
            <h3 class="text-xl font-bold text-white mb-3">Hive Robotics - Swarm System</h3>
            <p class="text-gray-400 mb-4">Multi-agent collaboration system with A* pathfinding achieving 25% improvement in mission throughput.</p>
            <div class="text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300">
              Click to learn more →
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-20 px-4 sm:px-6 lg:px-8">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-500 via-blue-500 to-yellow-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p class="text-xl text-gray-300">
            Let's discuss your next project or collaboration opportunity
          </p>
        </div>
        
        <div class="bg-black/50 rounded-2xl p-8 border border-gray-800">
          <form @submit.prevent="submitForm" class="space-y-6">
            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <label for="name" class="block text-gray-300 mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  v-model="form.name"
                  placeholder="Your name" 
                  class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                >
              </div>
              <div>
                <label for="email" class="block text-gray-300 mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  v-model="form.email"
                  placeholder="your.email@example.com" 
                  class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                >
              </div>
            </div>
            
            <div>
              <label for="subject" class="block text-gray-300 mb-2">Subject</label>
              <input 
                type="text" 
                id="subject" 
                v-model="form.subject"
                placeholder="Project inquiry" 
                class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              >
            </div>
            
            <div>
              <label for="message" class="block text-gray-300 mb-2">Message</label>
              <textarea 
                id="message" 
                v-model="form.message"
                rows="5" 
                placeholder="Tell me about your project..." 
                class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              class="w-full px-6 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-orange-700 transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-orange-500/25 flex items-center justify-center"
              :disabled="isSubmitting"
            >
              <span v-if="!isSubmitting">Send Message</span>
              <span v-else class="flex items-center">
                <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>

    <!-- Footer with Quick Links and Social Media -->
    <footer class="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900/50 border-t border-gray-800">
      <div class="max-w-6xl mx-auto">
        <div class="grid md:grid-cols-2 gap-12">
          <!-- Quick Links -->
          <div>
            <h3 class="text-2xl font-bold text-white mb-6">Vamsi Jakkula</h3>
            <p class="text-gray-300 mb-6">AI Engineer passionate about creating innovative digital experiences.</p>
            
            <div class="mb-8">
              <h4 class="text-lg font-semibold text-orange-400 mb-4">Quick Links</h4>
              <div class="grid grid-cols-2 gap-4">
                <a href="#about" class="text-gray-300 hover:text-orange-400 transition-colors duration-300">About</a>
                <a href="#skills" class="text-gray-300 hover:text-orange-400 transition-colors duration-300">Skills</a>
                <a href="#projects" class="text-gray-300 hover:text-orange-400 transition-colors duration-300">Projects</a>
                <a href="#contact" class="text-gray-300 hover:text-orange-400 transition-colors duration-300">Contact</a>
              </div>
            </div>
          </div>

          <!-- Social Media -->
          <div>
            <h4 class="text-lg font-semibold text-orange-400 mb-4">Connect With Me</h4>
            <div class="flex space-x-4 mb-8">
              <a href="https://github.com/Vamsijakkula1436" target="_blank" rel="noopener noreferrer" class="text-gray-300 hover:text-white transition-colors duration-300">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path>
                </svg>
              </a>
              <a href="https://x.com/itsmevamsi1436" target="_blank" rel="noopener noreferrer" class="text-gray-300 hover:text-white transition-colors duration-300">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/vamsijakkula1436" target="_blank" rel="noopener noreferrer" class="text-gray-300 hover:text-white transition-colors duration-300">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill-rule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clip-rule="evenodd"></path>
                </svg>
              </a>
            </div>
            
            <div class="text-gray-400">
              <p>© 2025 Vamsi Jakkula. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>

    <!-- Experience Modals -->
    <div v-if="activeExperienceModal" @click="closeExperienceModal" class="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div @click.stop class="bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-700">
        <div class="p-8">
          <div class="flex justify-between items-start mb-6">
            <div class="flex items-center">
              <div class="text-5xl mr-4">{{ getExperienceIcon(activeExperienceModal) }}</div>
              <div>
                <h3 class="text-3xl font-bold text-white mb-2">{{ getExperienceTitle(activeExperienceModal) }}</h3>
                <p class="text-xl text-orange-400 font-medium">{{ getExperienceCompany(activeExperienceModal) }}</p>
                <p class="text-gray-400">{{ getExperienceDuration(activeExperienceModal) }}</p>
              </div>
            </div>
            <button @click="closeExperienceModal" class="text-gray-400 hover:text-white text-2xl">×</button>
          </div>
          
          <div class="space-y-6">
            <div>
              <h4 class="text-xl font-bold text-orange-400 mb-3">Role Overview</h4>
              <p class="text-gray-300 leading-relaxed">{{ getExperienceOverview(activeExperienceModal) }}</p>
            </div>
            
            <div>
              <h4 class="text-xl font-bold text-orange-400 mb-3">Key Responsibilities & Achievements</h4>
              <ul class="space-y-2 text-gray-300">
                <li v-for="achievement in getExperienceAchievements(activeExperienceModal)" :key="achievement" class="flex items-start">
                  <span class="text-blue-400 mr-2">•</span>
                  <span>{{ achievement }}</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 class="text-xl font-bold text-orange-400 mb-3">Technologies & Tools</h4>
              <div class="flex flex-wrap gap-2">
                <span v-for="tech in getExperienceTech(activeExperienceModal)" :key="tech" class="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                  {{ tech }}
                </span>
              </div>
            </div>
            
            <div>
              <h4 class="text-xl font-bold text-orange-400 mb-3">Impact & Results</h4>
              <p class="text-gray-300 leading-relaxed">{{ getExperienceImpact(activeExperienceModal) }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Project Modals -->
    <div v-if="activeProjectModal" @click="closeProjectModal" class="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div @click.stop class="bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-700">
        <div class="p-8">
          <div class="flex justify-between items-start mb-6">
            <div class="flex items-center">
              <div class="text-5xl mr-4">{{ getProjectIcon(activeProjectModal) }}</div>
              <div>
                <h3 class="text-3xl font-bold text-white mb-2">{{ getProjectTitle(activeProjectModal) }}</h3>
              </div>
            </div>
            <button @click="closeProjectModal" class="text-gray-400 hover:text-white text-2xl">×</button>
          </div>
          
          <div class="space-y-6">
            <div>
              <h4 class="text-xl font-bold text-orange-400 mb-3">Project Overview</h4>
              <p class="text-gray-300 leading-relaxed">{{ getProjectOverview(activeProjectModal) }}</p>
            </div>
            
            <div>
              <h4 class="text-xl font-bold text-orange-400 mb-3">Key Features & Achievements</h4>
              <ul class="space-y-2 text-gray-300">
                <li v-for="feature in getProjectFeatures(activeProjectModal)" :key="feature" class="flex items-start">
                  <span class="text-blue-400 mr-2">•</span>
                  <span>{{ feature }}</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 class="text-xl font-bold text-orange-400 mb-3">Technologies Used</h4>
              <div class="flex flex-wrap gap-2">
                <span v-for="tech in getProjectTech(activeProjectModal)" :key="tech" class="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                  {{ tech }}
                </span>
              </div>
            </div>
            
            <div>
              <h4 class="text-xl font-bold text-orange-400 mb-3">Business Impact</h4>
              <p class="text-gray-300 leading-relaxed">{{ getProjectImpact(activeProjectModal) }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useHead } from '#app'

// Contact form state
const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})
const isSubmitting = ref(false)
const showSuccessMessage = ref(false)

const submitForm = async () => {
  isSubmitting.value = true
  showSuccessMessage.value = false
  
  try {
    // Here you would typically send the form data to your backend or email service
    console.log('Form submitted:', form.value)
    
    // Simulate API call (replace with actual form submission)
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // Show success message
    showSuccessMessage.value = true
    
    // Reset form
    form.value = { name: '', email: '', subject: '', message: '' }
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      showSuccessMessage.value = false
    }, 5000)
  } catch (error) {
    console.error('Error submitting form:', error)
    alert('There was an error submitting your message. Please try again.')
  } finally {
    isSubmitting.value = false
  }
}
// Modal state management
const activeExperienceModal = ref(null)
const activeProjectModal = ref(null)

// Experience modal functions
const openExperienceModal = (type) => {
  activeExperienceModal.value = type
  document.body.style.overflow = 'hidden'
}

const closeExperienceModal = () => {
  activeExperienceModal.value = null
  document.body.style.overflow = 'auto'
}

// Project modal functions
const openProjectModal = (type) => {
  activeProjectModal.value = type
  document.body.style.overflow = 'hidden'
}

const closeProjectModal = () => {
  activeProjectModal.value = null
  document.body.style.overflow = 'auto'
}

// Experience data functions
const getExperienceIcon = (type) => {
  const icons = {
    robotics: '🤖',
    hacker: '🔐',
    aircraft: '✈️'
  }
  return icons[type] || '💼'
}

const getExperienceTitle = (type) => {
  const titles = {
    robotics: 'Robotics Engineer',
    hacker: 'Ethical Hacker',
    aircraft: 'Design and Analysis Engineer'
  }
  return titles[type] || ''
}

const getExperienceCompany = (type) => {
  const companies = {
    robotics: 'ELITEPATH, Remote',
    hacker: 'ELITEPATH, Remote',
    aircraft: 'Bangalore Aircraft Industries Pvt. Ltd., Bangalore, India'
  }
  return companies[type] || ''
}

const getExperienceDuration = (type) => {
  const durations = {
    robotics: 'Aug 2022 – Oct 2022',
    hacker: 'May 2022 – Jul 2022',
    aircraft: 'Jan 2020 – Aug 2020'
  }
  return durations[type] || ''
}

const getExperienceOverview = (type) => {
  const overviews = {
    robotics: 'Led the development of advanced robotic monitoring systems, focusing on real-time sensor integration and predictive analytics. Worked with cutting-edge IoT technologies to create robust, fault-tolerant systems for industrial robotics applications.',
    hacker: 'Specialized in cybersecurity assessment and penetration testing across diverse digital infrastructures. Conducted comprehensive security audits and developed automated threat detection systems to enhance organizational security posture.',
    aircraft: 'Performed critical structural analysis and design validation for aircraft components, ensuring compliance with aerospace industry standards. Utilized advanced simulation tools and automated calculation systems to optimize design efficiency and safety.'
  }
  return overviews[type] || ''
}

const getExperienceAchievements = (type) => {
  const achievements = {
    robotics: [
      'Developed real-time robotic monitoring framework leveraging IMU and ultrasonic sensor integration',
      'Enhanced feedback accuracy through adaptive control logic and fault-tolerant routing under dynamic conditions',
      'Engineered robust data pipelines using Python for predictive diagnostics and anomaly detection',
      'Enabled trend forecasting and early-stage fault classification across robot behaviors',
      'Created executive-level dashboards with KPIs and trend analysis for real-time decision-making',
      'Supported maintenance planning and iterative design enhancements through data-driven insights'
    ],
    hacker: [
      'Executed comprehensive penetration tests on web apps, networks, and APIs using industry-standard tools',
      'Simulated both black-box and gray-box scenarios to uncover high-risk vulnerabilities',
      'Automated threat assessments with custom CVSS scoring and dynamic threat modeling',
      'Significantly reduced report generation time while improving compliance documentation clarity',
      'Proposed data-backed remediation strategies based on vulnerability assessments',
      'Created internal knowledge content and conducted security awareness training',
      'Uplifted secure development practices among engineering teams'
    ],
    aircraft: [
      'Performed structural simulations and modal/vibration analyses on aircraft wings and fuselage components',
      'Utilized MSC NASTRAN and PATRAN for advanced finite element analysis',
      'Ensured alignment with aero-structural reliability benchmarks and regulatory standards',
      'Automated fatigue life calculations via Excel VBA macros',
      'Improved assessment turnaround by 30% while maintaining regulatory accuracy',
      'Maintained consistency across multiple design revisions and certification workflows',
      'Designed advanced Excel dashboards for visualizing critical structural KPIs',
      'Supported technical documentation and certification processes'
    ]
  }
  return achievements[type] || []
}

const getExperienceTech = (type) => {
  const tech = {
    robotics: ['Python', 'IMU Sensors', 'Ultrasonic Sensors', 'IoT', 'Data Pipelines', 'Predictive Analytics', 'Dashboard Development', 'Real-time Systems'],
    hacker: ['Wireshark', 'CVSS Scoring', 'Penetration Testing', 'Threat Modeling', 'Security Assessment', 'Vulnerability Analysis'],
    aircraft: ['MSC NASTRAN', 'PATRAN', 'Excel VBA', 'Finite Element Analysis', 'Structural Simulation', 'Modal Analysis', 'Vibration Analysis', 'CAD Systems']
  }
  return tech[type] || []
}

const getExperienceImpact = (type) => {
  const impacts = {
    robotics: 'Successfully delivered a comprehensive robotic monitoring solution that enhanced operational efficiency and reduced downtime through predictive maintenance capabilities. The system provided real-time insights that enabled proactive decision-making and improved overall system reliability.',
    hacker: 'Strengthened organizational security posture by identifying and addressing critical vulnerabilities before they could be exploited. The automated threat assessment system reduced manual security review time while improving the accuracy and consistency of security evaluations.',
    aircraft: 'Contributed to the successful certification and deployment of aircraft components by ensuring structural integrity and regulatory compliance. The automated calculation systems and visualization dashboards improved design validation efficiency and supported faster time-to-market for aerospace products.'
  }
  return impacts[type] || ''
}

// Project data functions
const getProjectIcon = (type) => {
  const icons = {
    fraud: '🤖',
    dashboard: '📊',
    churn: '📈',
    chatbot: '💬',
    news: '📰',
    hr: '👥',
    redis: '⚡',
    logs: '📋',
    resume: '📄',
    voting: '🗳️',
    brain: '🧠',
    emotion: '😊',
    speech: '🗣️',
    printing: '🖨️',
    hive: '🐝'
  }
  return icons[type] || '💻'
}

const getProjectTitle = (type) => {
  const titles = {
    fraud: 'AI-Driven Insurance Claim Fraud Detection Platform',
    dashboard: 'Financial Performance Insights Dashboard (Power BI)',
    churn: 'Customer Churn Intelligence and Retention Platform',
    chatbot: 'Personal Document Q&A Chatbot (LangChain + RAG)',
    news: 'LLM-Driven Financial News Q&A Tool',
    hr: 'Automated HR Onboarding Solution using SharePoint',
    redis: 'Distributed Task Queue Simulator with Redis',
    logs: 'Scalable Log Analyzer using Python multiprocessing',
    resume: 'AI-Based Resume Screening Assistant',
    voting: 'Online Voting System using JDBC',
    brain: 'Brain Disease Classification using TensorFlow',
    emotion: 'Emotion AI Chatbot',
    speech: 'Speech-to-Speech Interactive Translator',
    printing: '3D Printing Optimization (Retraction Reduction)',
    hive: 'Hive Robotics – Hierarchical Control System for Multi-Agent Collaboration'
  }
  return titles[type] || ''
}

const getProjectOverview = (type) => {
  const overviews = {
    fraud: 'Developed a comprehensive machine learning pipeline to identify fraudulent insurance claims using advanced ensemble methods and data balancing techniques. The system processes large datasets to detect patterns and anomalies that indicate potential fraud.',
    dashboard: 'Created an integrated analytics dashboard that consolidates data from multiple business units to provide real-time insights into financial performance. The solution automates reporting processes and enables data-driven decision making.',
    churn: 'Built an intelligent customer retention system that predicts churn probability and automates personalized retention campaigns. The platform integrates machine learning with real-time data processing to identify at-risk customers.',
    chatbot: 'Developed an advanced document intelligence system that enables natural language querying over personal documents. Uses retrieval-augmented generation (RAG) to provide accurate, contextual answers from uploaded PDFs.',
    news: 'Created a specialized LLM agent for financial market analysis that processes news articles and provides intelligent insights. The system ranks information by relevance and credibility to support investment decisions.',
    hr: 'Built a comprehensive onboarding automation system that streamlines the employee onboarding process across multiple departments. The solution reduces manual work and ensures consistent onboarding experiences.',
    redis: 'Designed a robust distributed computing system that simulates real-world task processing scenarios. The system handles concurrent job execution with fault tolerance and automatic recovery mechanisms.',
    logs: 'Engineered a high-performance log processing system capable of handling massive volumes of log data in real-time. The solution provides anomaly detection and trend analysis for system monitoring.',
    resume: 'Developed an intelligent recruitment tool that uses natural language processing to match candidates with job requirements. The system evaluates semantic similarity rather than simple keyword matching.',
    voting: 'Built a secure electronic voting platform with enterprise-grade security features. The system ensures vote integrity while maintaining voter privacy and providing audit capabilities.',
    brain: 'Created a medical AI system for neurological disease detection using deep learning on brain imaging data. The model provides interpretable results to assist healthcare professionals in diagnosis.',
    emotion: 'Developed an empathetic conversational AI that adapts responses based on user emotional state. The system combines computer vision and audio analysis for comprehensive emotion recognition.',
    speech: 'Built a real-time multilingual communication tool that enables seamless conversation across language barriers. The system provides high-accuracy translation with natural voice synthesis.',
    printing: 'Optimized 3D printing processes through advanced simulation and parameter tuning. The solution reduces material waste and printing time while improving print quality.',
    hive: 'Developed a swarm robotics system where multiple autonomous agents collaborate to complete complex tasks. The system demonstrates emergent behavior and collective intelligence principles.'
  }
  return overviews[type] || ''
}

const getProjectFeatures = (type) => {
  const features = {
    fraud: [
      'Applied SMOTE for class balancing to handle imbalanced fraud datasets',
      'Engineered custom fraud risk metrics and integrated feature correlation insights',
      'Deployed ensemble VotingClassifier with feature stacking for improved accuracy',
      'Achieved 85.4% fraud detection accuracy through advanced model optimization',
      'Created Streamlit dashboards with KPI tracking and fraud heatmaps',
      'Implemented trend analytics and cross-regional anomaly detection',
      'Reduced manual triaging time by 30% through intelligent case prioritization',
      'Standardized auditor decision-making based on dynamic evidence scoring'
    ],
    dashboard: [
      'Integrated HR, Logistics, and Finance data pipelines for comprehensive analytics',
      'Used DAX calculations and interactive slicers for dynamic data exploration',
      'Implemented hierarchical drilldowns to surface over 12 critical metrics',
      'Enabled real-time trend evaluation with dynamic charts and conditional formatting',
      'Automated data refresh cycle and report distribution using Power Automate',
      'Enabled live KPI monitoring with triggered report emails to 10+ department heads',
      'Linked to Microsoft Teams for enhanced collaboration and communication',
      'Reduced manual reporting effort by 40% through automation'
    ],
    churn: [
      'Created robust churn prediction pipeline using XGBoost on 12,000+ customer records',
      'Incorporated demographic features, purchase trends, and engagement frequency',
      'Built Flask-based frontend interfaced with MongoDB for real-time querying',
      'Implemented dynamic churn probability tracking for CRM teams',
      'Added campaign automation and A/B testing modules for retention offers',
      'Included retraining scheduler via CRON jobs for model freshness',
      'Implemented concept drift detection for model performance monitoring',
      'Achieved 19% reduction in customer churn and boosted re-engagement rates'
    ],
    chatbot: [
      'Implemented semantic chunking and document metadata tagging for better retrieval',
      'Used FAISS vector database for efficient similarity search',
      'Integrated OpenAI embeddings for high-quality document representations',
      'Added conversational memory persistence for sustained dialogue context',
      'Created interactive Streamlit UI with citation highlighting',
      'Implemented real-time memory updates and multi-question thread support',
      'Improved lookup speed by 70% through optimized vector operations',
      'Enabled accurate insight extraction from legal, academic, and financial documents'
    ],
    news: [
      'Scraped over 200 financial articles per day from multiple sources',
      'Generated vector embeddings using Hugging Face transformer models',
      'Ranked answers by topic relevance, sentiment, and source credibility',
      'Used cosine similarity for accurate content matching and retrieval',
      'Offered customized news feeds categorized by risk and volatility',
      'Enabled industry sector-specific news filtering and analysis',
      'Helped analysts identify news impact zones during market events',
      'Improved market awareness during critical economic events and volatility spikes'
    ],
    hr: [
      'Built logic-driven task assignment based on department and role requirements',
      'Implemented automated notifications and escalation workflows',
      'Created triggers for missed onboarding actions and deadline management',
      'Integrated dashboards to track progress across HR, IT, and Facilities',
      'Reduced onboarding turnaround time by 45% through automation',
      'Eliminated over 60% of email-based follow-ups through centralized workflows',
      'Standardized checklist handoffs between departments',
      'Enabled centralized visibility into onboarding status and bottlenecks'
    ],
    redis: [
      'Designed Redis pub/sub architecture for distributed message passing',
      'Implemented TTL-based retry mechanisms for failed job recovery',
      'Created Python scripts for multi-threaded worker orchestration',
      'Ensured system resilience through failure scenario injection',
      'Built comprehensive recovery logic for various failure modes',
      'Used Seaborn for task distribution and failure recovery visualization',
      'Provided testing tools for microservice stress testing',
      'Enabled horizontal scaling configuration refinement'
    ],
    logs: [
      'Engineered high-speed parser processing 1M+ log lines per minute',
      'Used memory mapping and multiprocessing for optimal performance',
      'Added severity filtering and anomaly clustering capabilities',
      'Implemented dynamic log segmentation for real-time event correlation',
      'Streamed parsed metrics into InfluxDB-Grafana pipeline',
      'Enabled alert thresholds and visual dashboard creation',
      'Provided incident trend mapping and predictive alerting',
      'Reduced SRE response time and improved MTTR significantly'
    ],
    resume: [
      'Used OpenAI embeddings for semantic similarity calculation',
      'Implemented spaCy NLP for advanced text processing and analysis',
      'Created section-level similarity scoring between resumes and job descriptions',
      'Designed algorithm prioritizing skills and experience over keyword matching',
      'Processed 100+ resumes per batch with automated ranking',
      'Generated comprehensive summary reports for HR teams',
      'Reduced manual screening time by 70% through automation',
      'Increased diversity in shortlisted candidates through capability-based evaluation'
    ],
    voting: [
      'Built secure electronic voting system using Java and JDBC',
      'Incorporated AES encryption for voter record protection',
      'Implemented OTP-based user authentication for security',
      'Created admin-controlled dashboards for real-time vote monitoring',
      'Designed SQL logs for complete voting action traceability',
      'Achieved high data integrity through access role modeling',
      'Validated edge scenarios during mock events with 1,000+ participants',
      'Ensured audit-readiness and compliance with election standards'
    ],
    brain: [
      'Trained CNNs on brain MRI datasets for disease classification',
      'Applied data augmentation and image normalization techniques',
      'Used dropout regularization to improve model generalization',
      'Achieved over 92% test accuracy on disease detection',
      'Employed Grad-CAM for model interpretability and visualization',
      'Enabled physicians to visualize brain regions influencing predictions',
      'Improved clinical trust through transparent AI decision-making',
      'Enhanced diagnostic clarity for Alzheimer\'s and Parkinson\'s detection'
    ],
    emotion: [
      'Combined facial expression detection via OpenCV with voice analysis',
      'Integrated real-time NLP backend for mood-adaptive responses',
      'Implemented emotional mirroring for natural conversation flow',
      'Created personalized dialogue flows based on user emotional state',
      'Improved user engagement by 25% through empathetic interactions',
      'Enabled human-like responses in therapy and education scenarios',
      'Built comprehensive emotion recognition pipeline',
      'Demonstrated practical applications in mental health and learning'
    ],
    speech: [
      'Integrated Google Cloud APIs for speech recognition and synthesis',
      'Implemented auto-language detection for seamless user experience',
      'Added real-time transcription with high accuracy rates',
      'Included tone adaptation for natural-sounding translations',
      'Supported smooth bilingual interactions across multiple languages',
      'Achieved over 94% transcription precision through testing',
      'Consistently outperformed rule-based solutions in speed and relevance',
      'Evaluated across five languages with structured testing methodology'
    ],
    printing: [
      'Simulated nozzle movements and print paths in Fusion 360',
      'Modified slicing parameters in Cura for optimal printing',
      'Optimized retractions to reduce stringing and layer failures',
      'Resulted in 28% improvement in print duration',
      'Achieved 30% reduction in material waste',
      'Enabled faster, cleaner prototyping for iterative design',
      'Improved print quality across multiple test scenarios',
      'Enhanced lab environment prototyping efficiency'
    ],
    hive: [
      'Developed swarm robotics with decentralized navigation logic',
      'Implemented A* pathfinding for obstacle avoidance',
      'Ensured task redundancy through distributed coordination',
      'Used wireless broadcast protocols for agent communication',
      'Validated system using MATLAB and Gazebo simulations',
      'Showed 25% improvement in mission throughput in obstacle-dense scenarios',
      'Demonstrated applications in warehouse management and surveillance',
      'Paved way for collaborative robotics in industrial settings'
    ]
  }
  return features[type] || []
}

const getProjectTech = (type) => {
  const tech = {
    fraud: ['Python', 'pandas', 'scikit-learn', 'SMOTE', 'VotingClassifier', 'Streamlit', 'Machine Learning', 'Data Analytics'],
    dashboard: ['Power BI', 'DAX', 'Power Automate', 'Microsoft Teams', 'Data Integration', 'Business Intelligence', 'KPI Dashboards'],
    churn: ['XGBoost', 'Flask', 'MongoDB', 'Python', 'CRON', 'A/B Testing', 'CRM Integration', 'Predictive Analytics'],
    chatbot: ['LangChain', 'FAISS', 'OpenAI', 'Streamlit', 'RAG', 'Vector Embeddings', 'NLP', 'Document Processing'],
    news: ['LLM', 'Hugging Face', 'Vector Embeddings', 'Cosine Similarity', 'Web Scraping', 'Sentiment Analysis', 'Financial APIs'],
    hr: ['SharePoint', 'Power Automate', 'Workflow Automation', 'Microsoft 365', 'Process Optimization', 'Dashboard Development'],
    redis: ['Redis', 'Python', 'Pub/Sub', 'TTL', 'Multiprocessing', 'Seaborn', 'Distributed Systems', 'Microservices'],
    logs: ['Python', 'Multiprocessing', 'InfluxDB', 'Grafana', 'Memory Mapping', 'Real-time Processing', 'Anomaly Detection'],
    resume: ['OpenAI', 'spaCy', 'NLP', 'Semantic Analysis', 'Python', 'HR Tech', 'Machine Learning', 'Text Processing'],
    voting: ['Java', 'JDBC', 'AES Encryption', 'OTP Authentication', 'SQL', 'Security', 'Database Design', 'Web Development'],
    brain: ['TensorFlow', 'CNN', 'Grad-CAM', 'Medical Imaging', 'Deep Learning', 'Data Augmentation', 'Computer Vision'],
    emotion: ['OpenCV', 'NLP', 'Facial Recognition', 'Voice Analysis', 'Machine Learning', 'Real-time Processing', 'AI Chatbot'],
    speech: ['Google Cloud APIs', 'Speech Recognition', 'Voice Synthesis', 'Real-time Translation', 'Multi-language Support'],
    printing: ['Fusion 360', 'Cura', '3D Printing', 'CAD', 'Simulation', 'Manufacturing Optimization', 'Prototyping'],
    hive: ['MATLAB', 'Gazebo', 'A* Algorithm', 'Swarm Robotics', 'Wireless Communication', 'Multi-agent Systems', 'Simulation']
  }
  return tech[type] || []
}

const getProjectImpact = (type) => {
  const impacts = {
    fraud: 'The fraud detection platform significantly improved insurance claim processing efficiency by enabling audit teams to focus on high-risk cases. The 30% reduction in claim review time and improved fraud pattern detection consistency resulted in substantial cost savings and enhanced fraud prevention capabilities.',
    dashboard: 'The Power BI dashboard transformed financial decision-making by providing real-time visibility into key business metrics. The 40% reduction in manual reporting effort and automated distribution to department heads enabled faster, data-driven decisions and improved cross-departmental collaboration.',
    churn: 'The customer retention platform delivered measurable business value through a 19% reduction in customer churn and significantly boosted user re-engagement rates. The automated campaign system and predictive analytics enabled proactive customer relationship management.',
    chatbot: 'The document Q&A system revolutionized information retrieval by enabling users to quickly extract insights from complex documents. The 70% improvement in lookup speed and high accuracy made it invaluable for legal, academic, and financial document analysis.',
    news: 'The financial news analysis tool enhanced market awareness and decision-making capabilities for analysts and traders. By processing 200+ articles daily and providing credibility-scored insights, it improved response times during critical market events.',
    hr: 'The automated onboarding solution transformed the employee experience by reducing onboarding time by 45% and eliminating 60% of manual follow-ups. This resulted in improved employee satisfaction and reduced administrative burden on HR teams.',
    redis: 'The distributed task queue simulator provided valuable testing capabilities for backend teams, enabling them to stress-test microservices under concurrent loads and optimize horizontal scaling configurations for production environments.',
    logs: 'The scalable log analyzer significantly improved system monitoring capabilities by processing over 1 million log lines per minute. The predictive alerting and reduced MTTR helped SRE teams maintain system reliability and performance.',
    resume: 'The AI resume screening assistant transformed recruitment processes by reducing manual screening time by 70% while increasing diversity in candidate selection. The semantic analysis approach improved hiring quality by focusing on actual capabilities.',
    voting: 'The secure voting system demonstrated enterprise-grade security and scalability by successfully handling 1,000+ test participants while maintaining complete audit trails and data integrity for institutional elections.',
    brain: 'The brain disease classification system achieved 92% accuracy in detecting neurological conditions, providing valuable diagnostic support to healthcare professionals. The interpretable AI approach improved clinical trust and diagnostic clarity.',
    emotion: 'The emotion AI chatbot improved user engagement by 25% through empathetic interactions, demonstrating practical applications in therapy and education scenarios where emotional understanding is crucial for effective communication.',
    speech: 'The speech translation system achieved 94% transcription precision across five languages, enabling seamless cross-cultural communication and demonstrating superior performance compared to rule-based translation solutions.',
    printing: 'The 3D printing optimization resulted in 28% faster print times and 30% material waste reduction, significantly improving prototyping efficiency and reducing costs in laboratory and manufacturing environments.',
    hive: 'The swarm robotics system demonstrated 25% improvement in mission throughput in complex environments, paving the way for practical applications in warehouse automation, surveillance, and collaborative robotics scenarios.'
  }
  return impacts[type] || ''
}

// Keyboard event handling
onMounted(() => {
  const handleKeydown = (event) => {
    if (event.key === 'Escape') {
      if (activeExperienceModal.value) {
        closeExperienceModal()
      }
      if (activeProjectModal.value) {
        closeProjectModal()
      }
    }
  }
  
  document.addEventListener('keydown', handleKeydown)
  
  onUnmounted(() => {
    document.removeEventListener('keydown', handleKeydown)
    document.body.style.overflow = 'auto'
  })
})

// SEO and meta tags
useHead({
  title: 'Vamsi Jakkula - AI Engineer',
  meta: [
    { name: 'description', content: 'AI Engineer with expertise in machine learning, cloud computing, and cybersecurity. AWS Certified with Masters in IT.' },
    { name: 'keywords', content: 'AI, AWS, Python, TensorFlow, Cloud Computing, Cybersecurity' },
    { property: 'og:title', content: 'Vamsi Jakkula - AI Engineer' },
    { property: 'og:description', content: 'Professional portfolio showcasing AI projects, and cloud computing expertise' },
    { property: 'og:type', content: 'website' }
  ]
})
</script>

<style>
/* Add these styles to your CSS file */
.rotating-halo {
  width: 120%;
  height: 120%;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(251,146,60,0.2) 0%, rgba(251,146,60,0) 70%);
  animation: rotate 8s linear infinite;
}

.text-3d-glow {
  text-shadow: 
    0 0 5px rgba(251, 146, 60, 0.5),
    0 0 10px rgba(251, 146, 60, 0.3),
    0 0 15px rgba(251, 146, 60, 0.1),
    1px 1px 0px rgba(0, 0, 0, 0.8),
    2px 2px 0px rgba(0, 0, 0, 0.7),
    3px 3px 0px rgba(0, 0, 0, 0.6),
    4px 4px 0px rgba(0, 0, 0, 0.5);
}

.animate-fade-in {
  animation: fadeIn 1s ease-out forwards;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
</style>
