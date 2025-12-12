// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "Publications in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "A selection of projects showcasing my recent work and interests.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "Repositories",
          description: "A collection of my academic and AI/ML projects — automatically fetched from my GitHub profiles.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "Summary of courses taught and instructional roles across multiple institutions.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "dropdown-blogs",
              title: "Blogs",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/urdu/blogs/";
              },
            },{id: "dropdown-poetry",
              title: "Poetry",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/urdu/poetry/";
              },
            },{id: "post-how-machines-learn-to-rebuild-particle-showers",
        
          title: "How Machines Learn to Rebuild Particle Showers",
        
        description: "An intuitive explainer on how AI models evaluate reconstruction quality — using ARI, Purity, and Efficiency.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/ai-reconstructs-particle-showers/";
          
        },
      },{id: "post-dark-matter",
        
          title: "Dark Matter",
        
        description: "Understanding the invisible mass of the universe — its evidence, classification, and candidates from baryonic MACHOs to supersymmetric WIMPs.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/dark-matter-evolution-history-of-universe/";
          
        },
      },{id: "post-evolution-history-of-universe-from-10-seconds-to-10-billion-years",
        
          title: "Evolution History of Universe: From 10 Seconds to 10 Billion Years",
        
        description: "From the photon epoch to the formation of galaxies — tracing how the universe evolved from seconds to billions of years.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/evolution-history-of-universe-10-seconds-to-10-billion-years/";
          
        },
      },{id: "post-evolution-history-of-universe-a-story-from-zero-to-ten-seconds",
        
          title: "Evolution History of Universe: A Story from Zero to Ten Seconds",
        
        description: "From the Planck era to the lepton epoch — how our universe evolved in its first ten seconds.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/evolution-history-of-universe-zero-to-ten-seconds/";
          
        },
      },{id: "post-causal-metric-hypothesis-i",
        
          title: "Causal Metric Hypothesis–I",
        
        description: "Exploring the causal metric hypothesis, its philosophical roots, and its role in defining the discrete structure of spacetime within causal set theory.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/causal-metric-hypothesis-I/";
          
        },
      },{id: "post-a-picture-and-an-equation",
        
          title: "A Picture and an Equation",
        
        description: "Exploring the connection between equations and diagrams — from Feynman’s visualization to causal structures in discrete spacetime.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/a-picture-and-an-equation/";
          
        },
      },{id: "post-why-do-we-need-quantum-gravity",
        
          title: "Why do we need “Quantum Gravity”?",
        
        description: "Motivation behind quantum gravity and causal sets.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/why-do-we-need-quantum-gravity/";
          
        },
      },{id: "post-riazuddin-the-self-effacing-quintessential-physicist-of-pakistan",
        
          title: "Riazuddin: The Self-Effacing Quintessential Physicist of Pakistan",
        
        description: "Tribute article on Professor Riazuddin — one of Pakistan’s greatest theoretical physicists and a close collaborator of Abdus Salam.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2019/Riazuddin/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{id: "projects-when-spacetime-becomes-countable-causal-sets-and-the-fluctuating-lambda",
          title: 'When Spacetime Becomes Countable: Causal Sets and the Fluctuating Lambda',
          description: "How discreteness, causality, and quantum uncertainty might explain the ever-changing cosmological constant.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/project_cst_fluctuating_lambda/";
            },},{id: "projects-how-the-universe-learned-to-expand-the-story-of-the-friedmann-equations",
          title: 'How the Universe Learned to Expand: The Story of the Friedmann Equations',
          description: "A brief journey through the insight that turned Einstein’s geometry into the heartbeat of an evolving cosmos.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/project_friedmann_equations/";
            },},{id: "projects-when-quantum-became-geometry-the-hidden-shape-of-hilbert-space",
          title: 'When Quantum Became Geometry: The Hidden Shape of Hilbert Space',
          description: "A journey into the deep structure of quantum mechanics — where complex vectors curve into geometry and Schrödinger’s equation becomes a Hamiltonian flow.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/project_geometry_of_qm/";
            },},{id: "projects-the-strange-symmetry-of-majorana-fermions",
          title: 'The Strange Symmetry of Majorana Fermions',
          description: "From coffee mugs to quantum computers — how topology meets superconductivity in the hunt for self-conjugate particles.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/project_majorana/";
            },},{id: "projects-spine-camera-synchronization-multi-view-event-display-sync",
          title: 'SPINE Camera Synchronization: Multi-View Event Display Sync',
          description: "A lightweight JavaScript patch for synchronizing camera motion between reconstructed and truth 3D scenes in SPINE/Plotly visualizations",
          section: "Projects",handler: () => {
              window.location.href = "/projects/project_spine_camera_synchronization_patch/";
            },},{id: "projects-how-big-is-everything-the-geometry-and-volume-of-a-closed-universe",
          title: 'How Big Is Everything? The Geometry and Volume of a Closed Universe',
          description: "A story about the universe’s possible shapes — open, flat, or closed — and how its very volume might whisper secrets about the quantum nature of spacetime.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/project_volume_of_closed_universe/";
            },},{id: "urdu_poetry-اونچا-ہے-مرا-سر-کہ-میں-مقتل-میں-کھڑا-ہوں",
          title: 'اونچا ہے مرا سر کہ میں مقتل میں کھڑا ہوں',
          description: "",
          section: "Urdu_poetry",handler: () => {
              window.location.href = "/urdu/poetry/ghazal-ocha-hai-mera-sar/";
            },},{id: "urdu_poetry-واقعہ-ہے-کہ-مر-گیا-ہوں-میں",
          title: 'واقعہ ہے کہ مر گیا ہوں میں',
          description: "",
          section: "Urdu_poetry",handler: () => {
              window.location.href = "/urdu/poetry/ghazal-waqia-hai-ke-mar-gaya-hoon/";
            },},{id: "urdu_poetry-جان-تیری-جہان-تیرا-ہے",
          title: 'جان تیری، جہان تیرا ہے',
          description: "",
          section: "Urdu_poetry",handler: () => {
              window.location.href = "/urdu/poetry/ghazal-jaan-teri-jahaan-tera/";
            },},{id: "urdu_poetry-ایک-جگنو-ہے-کہ-منزل-کے-حوالے-مانگے",
          title: 'ایک جگنو ہے کہ منزل کے حوالے مانگے',
          description: "",
          section: "Urdu_poetry",handler: () => {
              window.location.href = "/urdu/poetry/ghazal-aik-jugnu-hai/";
            },},{id: "urdu_poetry-دل-بھٹکتا-ہی-رہا-خوابوں-میں-کیا-جانے-کہاں",
          title: 'دل بھٹکتا ہی رہا خوابوں میں کیا جانے کہاں',
          description: "",
          section: "Urdu_poetry",handler: () => {
              window.location.href = "/urdu/poetry/ghazal-dil-bhatakta-hi-raha-khawabon-mein/";
            },},{id: "urdu_poetry-یوں-تو-وہ-ساتھ-ساتھ-ہے-میرے",
          title: 'یوں تو وہ ساتھ ساتھ ہے میرے',
          description: "",
          section: "Urdu_poetry",handler: () => {
              window.location.href = "/urdu/poetry/ghazal-yoon-to-wo-sath-sath-hai-mere/";
            },},{id: "urdu_poetry-جیسے-بکھرے-ہوئے-گیسو",
          title: 'جیسے بکھرے ہوئے گیسو',
          description: "",
          section: "Urdu_poetry",handler: () => {
              window.location.href = "/urdu/poetry/nazm-jaise-bikhre-hue-gesu/";
            },},{id: "urdu_poetry-جن-کے-انداز-تھے-ساون-کی-گھٹاؤں-والے",
          title: 'جن کے انداز تھے ساون کی گھٹاؤں والے',
          description: "",
          section: "Urdu_poetry",handler: () => {
              window.location.href = "/urdu/poetry/ghazal-jin-ke-andaz-the/";
            },},{id: "urdu_poetry-آؤ-روٹھے-ہوئے-لوگوں-کو-منائیں-ہم-بھی",
          title: 'آؤ روٹھے ہوئے لوگوں کو منائیں ہم بھی',
          description: "",
          section: "Urdu_poetry",handler: () => {
              window.location.href = "/urdu/poetry/ghazal-aao-roothay-hue-logon/";
            },},{id: "urdu_poetry-عذاب-آشنا-چہرہ-لئے-جو-پھرتا-ہے",
          title: 'عذاب آشنا چہرہ لئے جو پھرتا ہے',
          description: "",
          section: "Urdu_poetry",handler: () => {
              window.location.href = "/urdu/poetry/ghazal-azab-ashna-chehra-liye-jo-phirta-hai/";
            },},{id: "urdu_poetry-کچھ-ایسی-اب-کے-چلی-شہر-میں-ہوائے-ہجر",
          title: 'کچھ ایسی اب کے چلی شہر میں ہوائے ہجر',
          description: "",
          section: "Urdu_poetry",handler: () => {
              window.location.href = "/urdu/poetry/ghazal-kuch-aisi-ab-ke-chali/";
            },},{id: "urdu_poetry-آگ-ہے-سلسلہ-محبت-کا",
          title: 'آگ ہے سلسلہ محبت کا',
          description: "",
          section: "Urdu_poetry",handler: () => {
              window.location.href = "/urdu/poetry/ghazal-aag-hai-silsila/";
            },},{id: "urdu_poetry-چنچل-متوالی-راتوں-میں-مَیں-یاد-آؤں-گا",
          title: 'چنچل متوالی راتوں میں، مَیں یاد آؤں گا',
          description: "",
          section: "Urdu_poetry",handler: () => {
              window.location.href = "/urdu/poetry/ghazal-chanchal-matwali-raaton/";
            },},{id: "urdu_poetry-دیوانہ-ہوں-پتھر-سے-وفا-مانگ-رہا-ہوں",
          title: 'دیوانہ ہوں، پتھر سے وفا مانگ رہا ہوں',
          description: "",
          section: "Urdu_poetry",handler: () => {
              window.location.href = "/urdu/poetry/ghazal-deewana-hoon-pathar-se/";
            },},{id: "urdu_poetry-ان-جاگتی-آنکھوں-نے-دیکھا-اک-خواب-سنہرے-موسم-کا",
          title: 'ان جاگتی آنکھوں نے دیکھا، اک خواب سنہرے موسم کا',
          description: "",
          section: "Urdu_poetry",handler: () => {
              window.location.href = "/urdu/poetry/ghazal-in-jagti-ankhon-ne-dekha/";
            },},{id: "urdu_poetry-اس-بار-سمندر-کا-کنارہ-بھی-نہیں-تھا",
          title: 'اس بار سمندر کا کنارہ بھی نہیں تھا',
          description: "",
          section: "Urdu_poetry",handler: () => {
              window.location.href = "/urdu/poetry/ghazal-is-baar-samandar/";
            },},{id: "urdu_poetry-کبھی-زندگی-سے-ملا-چاہتا-ہوں",
          title: 'کبھی زندگی سے ملا چاہتا ہوں',
          description: "",
          section: "Urdu_poetry",handler: () => {
              window.location.href = "/urdu/poetry/ghazal-kabhi-zindagi-se-mila/";
            },},{id: "urdu_poetry-کون-جانے-تری-جدائی-میں",
          title: 'کون جانے تری جدائی میں',
          description: "",
          section: "Urdu_poetry",handler: () => {
              window.location.href = "/urdu/poetry/ghazal-kon-janay-teri-judai-mein/";
            },},{id: "urdu_poetry-میری-وحشت-کا-سبب-پوچھو-گے",
          title: 'میری وحشت کا سبب پوچھو گے',
          description: "",
          section: "Urdu_poetry",handler: () => {
              window.location.href = "/urdu/poetry/ghazal-meri-wahshat-ka-sabab/";
            },},{id: "urdu_poetry-سوکھا-ہوا-جنگل-ہوں-مجھے-آگ-لگا-دو",
          title: 'سوکھا ہوا جنگل ہوں، مجھے آگ لگا دو',
          description: "",
          section: "Urdu_poetry",handler: () => {
              window.location.href = "/urdu/poetry/ghazal-sookha-hua-jangal-hoon/";
            },},{id: "urdu_poetry-پھر-دل-میں-سلگ-اٹھی-زنجیر-کی-خواہش",
          title: 'پھر دل میں سلگ اٹھی زنجیر کی خواہش',
          description: "",
          section: "Urdu_poetry",handler: () => {
              window.location.href = "/urdu/poetry/ghazal-phir-dil-mein-salag-uthi/";
            },},{id: "urdu_poetry-دل-گرفتہ-ہی-سہی-بزم-سجا-لی-جائے",
          title: 'دل گرفتہ ہی سہی، بزم سجا لی جائے',
          description: "",
          section: "Urdu_poetry",handler: () => {
              window.location.href = "/urdu/poetry/ghazal-dil-girifta-hi-sahi-bazm-saja-li-jaye/";
            },},{id: "urdu_poetry-اس-دل-کی-بند-کتابوں-میں-کوئی-شخص-تمہارے-بعد-نہیں",
          title: 'اس دل کی بند کتابوں میں، کوئی شخص تمہارے بعد نہیں',
          description: "",
          section: "Urdu_poetry",handler: () => {
              window.location.href = "/urdu/poetry/ghazal-is-dil-ki-band-kitabon/";
            },},{id: "urdu_poetry-میں-نے-بھی-سوچ-لیا-تھا-نہیں-ملنا-اُس-سے",
          title: 'میں نے بھی سوچ لیا تھا، نہیں ملنا اُس سے',
          description: "",
          section: "Urdu_poetry",handler: () => {
              window.location.href = "/urdu/poetry/ghazal-tere-ishq-ne-meri-adat-kar-di/";
            },},{id: "urdu_poetry-پھولوں-کو-مسل-ڈالو",
          title: 'پھولوں کو مسل ڈالو',
          description: "",
          section: "Urdu_poetry",handler: () => {
              window.location.href = "/urdu/poetry/nazm-phoolon-ko-masal-dalo/";
            },},{id: "urdu_poetry-عنوان-ہو-تم-جاناں",
          title: 'عنوان ہو تم جاناں',
          description: "",
          section: "Urdu_poetry",handler: () => {
              window.location.href = "/urdu/poetry/nazm-unwan-ho-tum-janan/";
            },},{id: "urdu_poetry-ہو-جائے-کسی-طور-جو-تکمیلِ-تمنا",
          title: 'ہو جائے کسی طور جو تکمیلِ تمنا',
          description: "",
          section: "Urdu_poetry",handler: () => {
              window.location.href = "/urdu/poetry/ghazal-takmeel-e-tamanna/";
            },},{id: "urdu_poetry-ہم-ترے-خوابوں-کو-تعبیر-جدا-بخشیں-گے",
          title: 'ہم ترے خوابوں کو تعبیر جدا بخشیں گے',
          description: "",
          section: "Urdu_poetry",handler: () => {
              window.location.href = "/urdu/poetry/nazm-hum-tere-khwabon-ko-tabeer-juda-bakhshein-ge/";
            },},{id: "urdu_poetry-بیقراری-سی-بیقراری-ہے",
          title: 'بیقراری سی بیقراری ہے',
          description: "",
          section: "Urdu_poetry",handler: () => {
              window.location.href = "/urdu/poetry/ghazal-beqarari-si-beqarari-hai/";
            },},{id: "urdu_poetry-یوں-ہی-سہی",
          title: 'یوں ہی سہی',
          description: "",
          section: "Urdu_poetry",handler: () => {
              window.location.href = "/urdu/poetry/nazm-yoon-hi-sahi/";
            },},{id: "urdu_poetry-ضدی-بلا-کا-تھا-وہ-شکایت-اُسے-بھی-تھی",
          title: 'ضدی بلا کا تھا وہ، شکایت اُسے بھی تھی',
          description: "",
          section: "Urdu_poetry",handler: () => {
              window.location.href = "/urdu/poetry/ghazal-usay-bhi-thi/";
            },},{id: "urdu_poetry-جو-ترے-آستاں-سے-اٹھتا-ہے",
          title: 'جو ترے آستاں سے اٹھتا ہے',
          description: "",
          section: "Urdu_poetry",handler: () => {
              window.location.href = "/urdu/poetry/ghazal-jo-tere-aastan-se-uthta-hai/";
            },},{id: "urdu_poetry-جاں-گسل-مہر-بہ-لب-ٹھہری-ہے",
          title: 'جاں گسل، مہر بہ لب ٹھہری ہے',
          description: "",
          section: "Urdu_poetry",handler: () => {
              window.location.href = "/urdu/poetry/ghazal-jaan-gusal-mehr/";
            },},{id: "urdu_poetry-تیری-خوشبو-کو-بھی-زنجیر-نہیں-کر-سکتا",
          title: 'تیری خوشبو کو بھی زنجیر نہیں کر سکتا',
          description: "",
          section: "Urdu_poetry",handler: () => {
              window.location.href = "/urdu/poetry/ghazal-teri-khushboo-ko/";
            },},{id: "urdu_poetry-وقتِ-رخصت-تھی-گھٹن-دل-میں-نمی-آنکھوں-میں",
          title: 'وقتِ رخصت تھی گھٹن دل میں، نمی آنکھوں میں',
          description: "",
          section: "Urdu_poetry",handler: () => {
              window.location.href = "/urdu/poetry/ghazal-tune-jate-hue-ankhon-mein-kahi/";
            },},{id: "urdu_poetry-نور-کا-ہالہ-مرے-دھیان-میں-اترا-اکثر",
          title: 'نور کا ہالہ مرے دھیان میں اترا اکثر',
          description: "",
          section: "Urdu_poetry",handler: () => {
              window.location.href = "/urdu/poetry/ghazal-noor-ka-hala-mere-dhiyan-mein-utra/";
            },},{id: "urdu_poetry-عشق-گرداب-کی-صورت-ہے-سہارے-واجب",
          title: 'عشق گرداب کی صورت ہے سہارے واجب',
          description: "",
          section: "Urdu_poetry",handler: () => {
              window.location.href = "/urdu/poetry/ghazal-ishq-girdab-ki-surat/";
            },},{id: "urdu_poetry-نے-دوست-ملے-ہم-کو-نہ-اغیار-مکمل",
          title: 'نے دوست ملے ہم کو، نہ اغیار مکمل',
          description: "",
          section: "Urdu_poetry",handler: () => {
              window.location.href = "/urdu/poetry/ghazal-ne-dost-mile-humko-na-aghyar-mukammal/";
            },},{id: "urdu_poetry-ہے-ترا-ہجر-مسلسل-مری-وحشت-کے-لئے",
          title: 'ہے ترا ہجر مسلسل مری وحشت کے لئے',
          description: "",
          section: "Urdu_poetry",handler: () => {
              window.location.href = "/urdu/poetry/ghazal-hai-tera-hijr-musalsal/";
            },},{id: "urdu_poetry-کل-شب-سنا-ہواؤں-کے-تیور-بدل-گئے",
          title: 'کل شب سنا ہواؤں کے تیور بدل گئے',
          description: "",
          section: "Urdu_poetry",handler: () => {
              window.location.href = "/urdu/poetry/ghazal-kal-shab-suna-hawaon-ke-tewar/";
            },},{id: "urdu_poetry-جب-بھی-چاہا-انہیں-لے-جائے-گا",
          title: 'جب بھی چاہا، انہیں لے جائے گا',
          description: "",
          section: "Urdu_poetry",handler: () => {
              window.location.href = "/urdu/poetry/ghazal-jab-bhi-chaha-unhain-le-jayega/";
            },},{id: "urdu_poetry-پھر-شوقِ-محبت-نے-کہیں-کا-نہیں-چھوڑا",
          title: 'پھر شوقِ محبت نے کہیں کا نہیں چھوڑا',
          description: "",
          section: "Urdu_poetry",handler: () => {
              window.location.href = "/urdu/poetry/ghazal-phir-shauq-e-mohabbat/";
            },},{id: "urdu_poetry-جب-عمر-بھر-نہ-آئیں-نبھانی-محبتیں",
          title: 'جب عمر بھر نہ آئیں نبھانی محبتیں',
          description: "",
          section: "Urdu_poetry",handler: () => {
              window.location.href = "/urdu/poetry/ghazal-jab-umr-bhar-na-aain/";
            },},{id: "urdu_poetry-روز-ملنے-سے-تجھے-دل-کو-سکوں-ملتا-ہے",
          title: 'روز ملنے سے تجھے، دل کو سکوں ملتا ہے',
          description: "",
          section: "Urdu_poetry",handler: () => {
              window.location.href = "/urdu/poetry/ghazal-roz-milne-se-tujhe/";
            },},{id: "urdu_poetry-جو-سر-سناں-پہ-سجے-وہ-جھکاؤ-چاہتے-ہیں",
          title: 'جو سر سناں پہ سجے، وہ جھکاؤ چاہتے ہیں',
          description: "",
          section: "Urdu_poetry",handler: () => {
              window.location.href = "/urdu/poetry/ghazal-jo-sar-sinan-pe-saje/";
            },},{id: "urdu_poetry-موت-جب-ہاتھ-مَلا-کرتی-ہے",
          title: 'موت جب ہاتھ مَلا کرتی ہے',
          description: "",
          section: "Urdu_poetry",handler: () => {
              window.location.href = "/urdu/poetry/ghazal-maut-jab-haath-mila-karti-hai/";
            },},{id: "urdu_poetry-اُس-کے-ہاتھوں-میں-بھی-تیشہ-نہ-رہا-میرے-بعد",
          title: 'اُس کے ہاتھوں میں بھی تیشہ نہ رہا میرے بعد',
          description: "",
          section: "Urdu_poetry",handler: () => {
              window.location.href = "/urdu/poetry/ghazal-us-ke-hathon-mein/";
            },},{id: "urdu_poetry-وہ-جس-کی-آنکھیں-روشن-تھیں-وہ-جس-کا-چہرہ-سندر-تھا",
          title: 'وہ جس کی آنکھیں روشن تھیں، وہ جس کا چہرہ سندر تھا',
          description: "",
          section: "Urdu_poetry",handler: () => {
              window.location.href = "/urdu/poetry/ghazal-wo-jis-ki-ankhen-roshan-theen/";
            },},{id: "urdu_poetry-یزیدِ-وقت-نے-جب-بھی-فجورِ-عام-کیا",
          title: 'یزیدِ وقت نے جب بھی فجورِ عام کیا',
          description: "",
          section: "Urdu_poetry",handler: () => {
              window.location.href = "/urdu/poetry/ghazal-karbala-hum-ne/";
            },},{id: "urdu_poetry-شامِ-وحشت-سے-کہو-دے-مجھے-لمحوں-کا-حساب",
          title: 'شامِ وحشت سے کہو، دے مجھے لمحوں کا حساب',
          description: "",
          section: "Urdu_poetry",handler: () => {
              window.location.href = "/urdu/poetry/nazm-shaam-e-wahshat-se-kaho/";
            },},{id: "urdu_poetry-یہ-دھوپ-چھاؤں-سی-گردش-جو-روزگار-میں-ہے",
          title: 'یہ دھوپ چھاؤں سی گردش جو روزگار میں ہے',
          description: "",
          section: "Urdu_poetry",handler: () => {
              window.location.href = "/urdu/poetry/ghazal-ye-dhoop-chhaon-si-gardish/";
            },},{id: "urdu_poetry-ڈر-لگتا-ہے",
          title: 'ڈر لگتا ہے۔۔۔',
          description: "",
          section: "Urdu_poetry",handler: () => {
              window.location.href = "/urdu/poetry/nazm-dar-lagta-hai/";
            },},{id: "urdu_poetry-ظلمت-کدے-کے-سارے-خداؤں-کے-فیصلے",
          title: 'ظلمت کدے کے سارے خداؤں کے فیصلے',
          description: "",
          section: "Urdu_poetry",handler: () => {
              window.location.href = "/urdu/poetry/ghazal-zulmat-kaday-ke-saare/";
            },},{id: "urdu_poetry-شبِ-ظلمت-کو-نئی-راہ-دکھاتے-ہوئے-آئے",
          title: 'شبِ ظلمت کو نئی راہ دکھاتے ہوئے آئے',
          description: "",
          section: "Urdu_poetry",handler: () => {
              window.location.href = "/urdu/poetry/ghazal-shab-e-zulmat-ko-nai-rah/";
            },},{id: "urdu_poetry-دیکھنے-سے-ڈرتا-ہوں",
          title: 'دیکھنے سے ڈرتا ہوں',
          description: "",
          section: "Urdu_poetry",handler: () => {
              window.location.href = "/urdu/poetry/nazm-dekhne-se-darta-hoon/";
            },},{id: "urdu_poetry-وقتِ-موہوم-سے-معلوم-نیا-کیا-کرنا",
          title: 'وقتِ موہوم سے معلوم نیا کیا کرنا',
          description: "",
          section: "Urdu_poetry",handler: () => {
              window.location.href = "/urdu/poetry/ghazal-wakt-e-mohum-se-maloom-naya-kya-karna/";
            },},{id: "urdu_poetry-عمر-بھر-ہاتھ-نہ-امروز-نہ-فردا-آیا",
          title: 'عمر بھر ہاتھ نہ امروز نہ فردا آیا',
          description: "",
          section: "Urdu_poetry",handler: () => {
              window.location.href = "/urdu/poetry/ghazal-umr-bhar-hath-na-aaya/";
            },},{id: "urdu_poetry-ایک-دنیا-ہے-مرے-درپئے-آزار-جدا",
          title: 'ایک دنیا ہے مرے درپئے آزار جدا',
          description: "",
          section: "Urdu_poetry",handler: () => {
              window.location.href = "/urdu/poetry/ghazal-aik-dunya/";
            },},{id: "urdu_poetry-چاند-نکلا-شبِ-رفتہ-نہ-ستارے-نکلے",
          title: 'چاند نکلا شبِ رفتہ، نہ ستارے نکلے',
          description: "",
          section: "Urdu_poetry",handler: () => {
              window.location.href = "/urdu/poetry/ghazal-chaand-nikla-shab-e-rafta/";
            },},{id: "urdu_poetry-آج-موسم-بھی-عجب-موسم-ہے",
          title: 'آج موسم بھی عجب موسم ہے',
          description: "",
          section: "Urdu_poetry",handler: () => {
              window.location.href = "/urdu/poetry/ghazal-aaj-mausam/";
            },},{id: "urdu_poetry-میں-ہمہ-وقت-رہا-گم-شدہ-اپنے-جنوں-میں",
          title: 'میں ہمہ وقت رہا گم شدہ اپنے جنوں میں',
          description: "",
          section: "Urdu_poetry",handler: () => {
              window.location.href = "/urdu/poetry/ghazal-main-hama-waqt-raha-gum-shuda/";
            },},{id: "urdu_poetry-پھر-شام-ہوئی-اور-ڈرانے-مجھے-آئے",
          title: 'پھر شام ہوئی اور ڈرانے مجھے آئے',
          description: "",
          section: "Urdu_poetry",handler: () => {
              window.location.href = "/urdu/poetry/ghazal-phir-shaam-hui/";
            },},{id: "urdu_poetry-عرصۂ-خواب-کے-پردے-میں-چھپا-لگتا-ہے",
          title: 'عرصۂ خواب کے پردے میں چھپا لگتا ہے',
          description: "",
          section: "Urdu_poetry",handler: () => {
              window.location.href = "/urdu/poetry/ghazal-arsah-khawab-ke-parday/";
            },},{id: "urdu_poetry-مجھ-کو-امکان-کی-سرحد-سے-پرے-جانا-تھا",
          title: 'مجھ کو امکان کی سرحد سے پرے جانا تھا',
          description: "",
          section: "Urdu_poetry",handler: () => {
              window.location.href = "/urdu/poetry/ghazal-mujh-ko-imkan-ki-sarhad/";
            },},{id: "urdu_poetry-چراغ-لے-کے-نکلنا-یا-شب-بسر-کرنا",
          title: 'چراغ لے کے نکلنا یا شب بسر کرنا',
          description: "",
          section: "Urdu_poetry",handler: () => {
              window.location.href = "/urdu/poetry/ghazal-chiragh-le-ke-nikalna/";
            },},{id: "urdu_poetry-اب-تو-ہر-سمت-فرشتے-نظر-آتے-ہیں-مجھے",
          title: 'اب تو ہر سمت فرشتے نظر آتے ہیں مجھے',
          description: "",
          section: "Urdu_poetry",handler: () => {
              window.location.href = "/urdu/poetry/ghazal-ab-to-har-simt/";
            },},{id: "urdu_poetry-بوجھل-سی-طبیعت-ہے-کوئی-کام-نہیں-ہے",
          title: 'بوجھل سی طبیعت ہے، کوئی کام نہیں ہے',
          description: "",
          section: "Urdu_poetry",handler: () => {
              window.location.href = "/urdu/poetry/ghazal-bojhal-si-tabiyat/";
            },},{id: "urdu_poetry-راز-ہوں-راز-ہی-رہنا-ہے-مجھے",
          title: 'راز ہوں راز ہی رہنا ہے مجھے',
          description: "",
          section: "Urdu_poetry",handler: () => {
              window.location.href = "/urdu/poetry/ghazal-raaz-hoon-raaz-hi-rehna/";
            },},{id: "urdu_poetry-اب-ہے-تعبیر-کے-دھوکے-میں-سرابوں-کا-سفر",
          title: 'اب ہے تعبیر کے دھوکے میں سرابوں کا سفر',
          description: "",
          section: "Urdu_poetry",handler: () => {
              window.location.href = "/urdu/poetry/ghazal-ab-hai-tabeer/";
            },},{id: "urdu_posts-سائنس-کیا-ہے",
          title: 'سائنس کیا ہے؟',
          description: "سائنس کیا ہے اور کیسے کام کرتی ہے",
          section: "Urdu_posts",handler: () => {
              window.location.href = "/urdu/blogs/urdu-what-is-science/";
            },},{id: "urdu_posts-میری-پہلی-اردو-تحریر",
          title: 'میری پہلی اردو تحریر',
          description: "",
          section: "Urdu_posts",handler: () => {
              window.location.href = "/urdu/blogs/urdu-sample/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%61%7A%61%6D@%61%6E%6C.%67%6F%76", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/mbilalazam", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/2047024", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/muhammad-bilal-azam", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-0272-8287", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=WfHM6RIAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/teckyonAI", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
