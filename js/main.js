/* ============================================
   SANAD — Digital · Engineering · Design
   Bilingual · Theme · Scalable Architecture
   ============================================ */
(function () {
  'use strict';

  /* ==========================================
     DATA LAYER — قابل للتوسع بإضافة عناصر جديدة
     ========================================== */
  const DATA = {

    // إحصائيات الهيرو
    stats: [
      { key: 'stats.1', count: 5, suffix: '+' },
      { key: 'stats.2', count: 360, suffix: '°' },
      { key: 'stats.3', count: null, text: true }
    ],

    // الخدمات — أضف خدمة جديدة هنا فقط
    services: [
      {
        id: 'tech', color: '#1E90FF', en: 'SANAD TECH',
        i18nKey: 'services.cards.tech',
        items: ['services.cards.tech_l1','services.cards.tech_l2','services.cards.tech_l3','services.cards.tech_l4']
      },
      {
        id: 'design', color: '#5DCAA5', en: 'SANAD DESIGN',
        i18nKey: 'services.cards.design',
        items: ['services.cards.design_l1','services.cards.design_l2','services.cards.design_l3','services.cards.design_l4']
      },
      {
        id: 'media', color: '#F2A623', en: 'SANAD MEDIA',
        i18nKey: 'services.cards.media',
        items: ['services.cards.media_l1','services.cards.media_l2','services.cards.media_l3','services.cards.media_l4']
      },
      {
        id: 'arch', color: '#AFA9EC', en: 'SANAD ARCH',
        i18nKey: 'services.cards.arch',
        items: ['services.cards.arch_l1','services.cards.arch_l2','services.cards.arch_l3','services.cards.arch_l4']
      },
      {
        id: 'eng', color: '#F0997B', en: 'SANAD ENG',
        i18nKey: 'services.cards.eng',
        items: ['services.cards.eng_l1','services.cards.eng_l2','services.cards.eng_l3']
      },
      {
        id: 'mobile', color: '#7C3AED', en: 'SANAD MOBILE',
        i18nKey: 'services.cards.mobile',
        items: ['services.cards.mobile_l1','services.cards.mobile_l2','services.cards.mobile_l3','services.cards.mobile_l4']
      },
      {
        id: 'full', color: '#FFFFFF', en: 'FULL PACKAGE',
        i18nKey: 'services.cards.full',
        full: true,
        items: []
      }
    ],

    // لماذا سند
    why: [
      { icon: 'fa-medal', i18nKey: 'why.cards.0' },
      { icon: 'fa-handshake', i18nKey: 'why.cards.1' },
      { icon: 'fa-microchip', i18nKey: 'why.cards.2' }
    ],

    // خطوات العمل
    process: [
      { num: '01', i18nKey: 'process.steps.0' },
      { num: '02', i18nKey: 'process.steps.1' },
      { num: '03', i18nKey: 'process.steps.2' },
      { num: '04', i18nKey: 'process.steps.3' }
    ],

    // تصنيفات الفلترة
    portfolioFilters: [
      { id: 'all', i18nKey: 'portfolio.filter.all' },
      { id: 'arch', i18nKey: 'portfolio.filter.arch', color: '#AFA9EC' },
      { id: 'decor', i18nKey: 'portfolio.filter.decor', color: '#5DCAA5' },
      { id: 'facad', i18nKey: 'portfolio.filter.facad', color: '#1E90FF' },
      { id: 'graphic', i18nKey: 'portfolio.filter.graphic', color: '#F2A623' },
      { id: 'uiux', i18nKey: 'portfolio.filter.uiux', color: '#F0997B' },
      { id: 'software', i18nKey: 'portfolio.filter.software', color: '#1E90FF' }
    ],

    // المشاريع الحقيقية — أضف مشروعاً جديداً بإضافة عنصر واحد
    projects: [
      {
        id: 'interior-decor', filter: 'decor', service: 'ARCH', count: 24,
        cover: 'decor/decor1.jpg',
        images: [
          'decor/00.jpg','decor/22_1.jpg','decor/decor1.jpg','decor/decor2.jpg',
          'decor/decor 2.jpg','decor/decor3.jpg','decor/decor4.jpg','decor/decor5.jpg',
          'decor/decor6.jpg','decor/decor7.jpg','decor/decor8.jpg','decor/decor9.jpg',
          'decor/decor10.jpg','decor/decor11.jpg','decor/decor12.jpg','decor/decor13.jpg',
          'decor/decor14.jpg','decor/decor15.jpg','decor/decor16.jpg','decor/decor20.jpg',
          'decor/decor21.jpg','decor/decor30.jpg','decor/decor31.jpg','decor/decor32.jpg'
        ]
      },
      {
        id: 'villa-design', filter: 'arch', service: 'ARCH', count: 15,
        cover: 'villa/villa.jpg',
        images: [
          'villa/villa.jpg','villa/villa2.jpg','villa/villa3.jpg','villa/villad.jpg',
          'villa/villfg.jpg','villa/villa jg.jpg','villa/hdjd.jpg',
          'villa/villaali3.jpg','villa/villaali11.jpg','villa/villaali12.jpg','villa/villaali14.jpg',
          'villa/villa ali 1.jpg','villa/villa ali3.jpg','villa/villa ali4.jpg','villa/villa ali 5.jpg'
        ]
      },
      {
        id: 'facade-design', filter: 'facad', service: 'ARCH', count: 13,
        cover: 'facad/facad1ali.jpg',
        images: [
          'facad/0facadk.jpg','facad/0facadl.jpg','facad/facad0hj.jpg','facad/facad1ali.jpg',
          'facad/end1.jpg','facad/endd.jpg','facad/hmod1.jpg','facad/hmod2.jpg','facad/hmod3.jpg',
          'facad/hmod 4.jpg','facad/6مطعم اصل العرب_٠٨١٤١١.jpg',
          'facad/واجهه العماره العقيد احمد سند نموذج 1.pdf','facad/واجهه العماره العقيد احمد سند نموذج 2.pdf'
        ]
      },
      {
        id: 'arch-plans', filter: 'facad', service: 'ENG', count: 5,
        cover: 'plan/الدور الاول.pdf',
        images: [
          'plan/villa.pdf','plan/villa plan.pdf','plan/villaplan.pdf','plan/الدور الاول.pdf',
          'plan/المخطط المعماري.psdا...psdالدكتورة كريمة.jpg'
        ]
      },
      {
        id: 'brand-identity', filter: 'graphic', service: 'DESIGN', count: 16,
        cover: 'graphic/شعار العيادة-01.jpg',
        images: [
          'graphic/1-01.jpg','graphic/2.jpg','graphic/3.jpg','graphic/Artboard 1.jpg',
          'graphic/New Project.png','graphic/POSTER 2.jpg','graphic/wahas.jpg',
          'graphic/1ربيع.png2.png','graphic/الجمعه ااعياده.jpg','graphic/تهنئة 1.jpg',
          'graphic/دعوة زفاف.jpg','graphic/دعوة زفاف عبالله صالح.jpg','graphic/شعار العيادة-01.jpg',
          'graphic/لوحه1.jpg','graphic/مولود.jpg','graphic/Business card.pdf'
        ]
      },
      {
        id: 'ui-design', filter: 'uiux', service: 'DESIGN', count: 7,
        cover: 'uiux/Screenshot from 2025-12-16 09-34-15.png',
        images: [
          'uiux/Screenshot from 2025-12-16 09-34-15.png',
          'uiux/Screenshot from 2025-12-16 09-34-31.png',
          'uiux/Screenshot from 2025-12-16 09-34-41.png',
          'uiux/Screenshot from 2025-12-16 09-35-04.png',
          'uiux/Screenshot from 2025-12-16 09-35-26.png',
          'uiux/Screenshot from 2025-12-16 09-35-36.png',
          'uiux/Screenshot from 2025-12-16 09-35-55.png'
        ]
      },
      {
        id: 'motion-video', filter: 'uiux', service: 'MEDIA', count: 1,
        cover: 'uiux/Screenshot from 2025-12-16 09-35-04.png',
        images: ['uiux/video.webm']
      },
      {
        id: 'ibrahim-app', filter: 'software', service: 'TECH', count: 1,
        cover: 'software/ibrahim_app_icon.png',
        images: ['software/ibrahim_app_icon.png']
      },
      {
        id: 'portfolio-website', filter: 'software', service: 'TECH', count: 1,
        images: []
      },
      {
        id: 'gallery-generator', filter: 'software', service: 'TECH', count: 1,
        images: []
      }
    ],

    // رقم واتساب للتواصل
    whatsappNumber: '967774561368',

    // آراء العملاء
    testimonials: [
      { nameKey: 'testimonials.0.name', companyKey: 'testimonials.0.company',
        quoteKey: 'testimonials.0.quote', avatar: 'م', avatarColor: '#1E90FF', stars: 5 },
      { nameKey: 'testimonials.1.name', companyKey: 'testimonials.1.company',
        quoteKey: 'testimonials.1.quote', avatar: 'أ', avatarColor: '#5DCAA5', stars: 5 },
      { nameKey: 'testimonials.2.name', companyKey: 'testimonials.2.company',
        quoteKey: 'testimonials.2.quote', avatar: 'س', avatarColor: '#F2A623', stars: 5 }
    ]
  };

  /* ==========================================
     الترجمة (i18n)
     ========================================== */
  const I18N = {
    ar: {
      'meta.title': 'SANAD — سند | تقنية · هندسة · تصميم',
      'meta.desc': 'SANAD — شركة رقمية وهندسية وتصميمية يمنية. نبني أفكارك… واقعًا.',
      'nav.services': 'الخدمات',
      'nav.portfolio': 'الأعمال',
      'nav.about': 'من نحن',
      'nav.contact': 'تواصل',
      'nav.cta': 'ابدأ مشروعك',
      'hero.title': 'حيث يلتقي الكود بالبناء',
      'hero.subtitle': 'Where Code Meets Architecture',
      'hero.desc': 'نحن في <strong>سند</strong> نجمع بين الخبرة الهندسية والتقنية الرقمية لنحوّل أفكارك إلى مشاريع متكاملة — من التصميم إلى التنفيذ.',
      'hero.btn1': 'اكتشف خدماتنا',
      'hero.btn2': 'تواصل معنا',
      'stats.1': 'أقسام متخصصة',
      'stats.2': 'حلول متكاملة',
      'stats.3': 'فريق واحد · من الفكرة للتنفيذ',
      'services.subtitle': 'Our Services',
      'services.title': 'خدماتنا',
      'services.cards.tech': 'التقنية',
      'services.cards.tech_l1': 'تطوير المواقع',
      'services.cards.tech_l2': 'متاجر إلكترونية',
      'services.cards.tech_l3': 'أنظمة إدارية',
      'services.cards.tech_l4': 'حلول مخصصة',
      'services.cards.design': 'التصميم',
      'services.cards.design_l1': 'هويات بصرية',
      'services.cards.design_l2': 'سوشيال ميديا',
      'services.cards.design_l3': 'بروشورات',
      'services.cards.design_l4': 'موشن جرافيك',
      'services.cards.media': 'الإعلام',
      'services.cards.media_l1': 'تصوير إعلاني',
      'services.cards.media_l2': 'مونتاج',
      'services.cards.media_l3': 'Reels / TikTok',
      'services.cards.media_l4': 'فيديو تسويقي',
      'services.cards.arch': 'الهندسة المعمارية',
      'services.cards.arch_l1': 'تصميم معماري',
      'services.cards.arch_l2': 'ديكور داخلي',
      'services.cards.arch_l3': 'مخططات تنفيذية',
      'services.cards.arch_l4': 'BIM',
      'services.cards.eng': 'الهندسة الإنشائية',
      'services.cards.mobile': 'تطوير التطبيقات',
      'services.cards.mobile_l1': 'تطبيقات Flutter',
      'services.cards.mobile_l2': 'تطبيقات iOS',
      'services.cards.mobile_l3': 'تطبيقات أندرويد',
      'services.cards.mobile_l4': 'API وتكامل',
      'services.cards.eng_l1': 'تصميم إنشائي',
      'services.cards.eng_l2': 'إشراف هندسي',
      'services.cards.eng_l3': 'دراسات الجدوى',
      'services.cards.full': 'الحزمة المتكاملة',
      'services.cards.full_desc': 'من الفكرة للتنفيذ — نغطي كل شيء',
      'why.subtitle': 'Why SANAD',
      'why.title': 'لماذا SANAD؟',
      'why.cards.0.title': 'الجودة أولاً',
      'why.cards.0.text': 'نعمل حتى يكون المشروع جاهزاً ليمثّلنا. كل تفصيل صغير يحظى باهتمامنا لأن جودة العمل هي بصمتنا.',
      'why.cards.1.title': 'شراكة حقيقية',
      'why.cards.1.text': 'نستثمر في نجاحك كأنه نجاحنا. نفهم رؤيتك ونعمل كفريق واحد لتحقيق أهدافك.',
      'why.cards.2.title': 'الابتكار المستمر',
      'why.cards.2.text': 'أحدث التقنيات في حلول عملية. نواكب التطور الرقمي لنقدم لك أفضل ما في العالم الحديث.',
      'process.subtitle': 'Our Process',
      'process.title': 'كيف نعمل',
      'process.steps.0.title': 'الاستماع والفهم',
      'process.steps.0.text': 'نبدأ بفهم رؤيتك وأهدافك لنحدد معًا مسار المشروع.',
      'process.steps.1.title': 'التخطيط والاستراتيجية',
      'process.steps.1.text': 'نضع خارطة طريق واضحة ومتكاملة لكل مراحل العمل.',
      'process.steps.2.title': 'التصميم والتطوير',
      'process.steps.2.text': 'ننفذ المشروع بدقة وإبداع مع متابعة مستمرة.',
      'process.steps.3.title': 'التسليم والدعم',
      'process.steps.3.text': 'نسلم المشروع بكامل الوثائق والدعم الفني المستمر.',
      'portfolio.subtitle': 'Our Work',
      'portfolio.title': 'أحدث أعمالنا',
      'portfolio.cta': 'عرض جميع الأعمال',

      'testimonials.subtitle': 'Testimonials',
      'testimonials.title': 'قالوا عنا',
      'testimonials.0.quote': '"فريق SANAD قدّم لنا موقعاً إلكترونياً متكاملاً باحترافية عالية. التزامهم بالمواعيد ودقة التنفيذ كانت مذهلة."',
      'testimonials.0.name': 'م. محمد العنسي',
      'testimonials.0.company': 'شركة العنسي للمقاولات',
      'testimonials.1.quote': '"تصميم الهوية البصرية للمتجر كان أكثر من رائع. حصلنا على إعجاب الجميع بفضل إبداع فريق SANAD DESIGN."',
      'testimonials.1.name': 'أحمد السقاف',
      'testimonials.1.company': 'متجر السقاف للتجارة',
      'testimonials.2.quote': '"ما يميز SANAD هو فهمهم العميق لاحتياجات العملاء. كانوا شركاء حقيقيين في نجاح مشروعنا."',
      'testimonials.2.name': 'سارة الحداد',
      'testimonials.2.company': 'مؤسسة الحداد للتطوير',
      'portfolio.filter.all': 'الكل',
      'portfolio.filter.arch': 'عمارة',
      'portfolio.filter.decor': 'ديكور',
      'portfolio.filter.facad': 'واجهات',
      'portfolio.filter.graphic': 'جرافيك',
      'portfolio.filter.uiux': 'UI/UX',
      'portfolio.filter.software': 'برمجيات',
      'portfolio.project.interior-decor': 'تصميم ديكور داخلي',
      'portfolio.project.villa-design': 'تصميم فيلا سكنية',
      'portfolio.project.facade-design': 'تصميم واجهات',
      'portfolio.project.arch-plans': 'مخططات معمارية',
      'portfolio.project.brand-identity': 'هويات بصرية و brand identity',
      'portfolio.project.ui-design': 'تصميم واجهات تطبيقات',
      'portfolio.project.motion-video': 'موشن جرافيك',
      'portfolio.project.ibrahim-app': 'تطبيق إبراهيم الإسلامي',
      'portfolio.project.portfolio-website': 'موقع أعمال تفاعلي',
      'portfolio.project.gallery-generator': 'أداة توليد البيانات',
      'portfolio.items': 'ملف',
      'portfolio.lightbox.close': 'إغلاق',
      'portfolio.lightbox.of': 'من',
      'portfolio.no_images': 'لا يوجد معرض لهذا المشروع',
      'cta.title': 'جاهز لتحويل فكرتك إلى واقع؟',
      'cta.subtitle': 'فريق SANAD في انتظارك',
      'cta.btn': 'ابدأ الآن',
      'footer.slogan': 'نبني أفكارك… واقعًا',
      'footer.col1.title': 'الشركة',
      'footer.col1.link1': 'من نحن',
      'footer.col1.link2': 'خدماتنا',
      'footer.col1.link3': 'أعمالنا',
      'footer.col2.title': 'الخدمات',
      'footer.col3.title': 'التواصل',
      'footer.col4.title': 'متابعة',
      'modal.title': 'اختر الخدمة المناسبة',
      'modal.subtitle': 'اختر الخدمة التي تريدها وسنرسل طلبك عبر واتساب',
      'modal.back': 'رجوع',
      'modal.send': 'أرسل عبر واتساب',
      'modal.request': 'مرحباً، أنا مهتم بخدمة',
      'footer.copyright': '© 2025 SANAD · جميع الحقوق محفوظة'
    },
    en: {
      'meta.title': 'SANAD — Digital · Engineering · Design',
      'meta.desc': 'SANAD — A Yemen-based digital, engineering & design company. We Build Your Ideas Into Reality.',
      'nav.services': 'Services',
      'nav.portfolio': 'Portfolio',
      'nav.about': 'About',
      'nav.contact': 'Contact',
      'nav.cta': 'Start Project',
      'hero.title': 'Where Code Meets Architecture',
      'hero.subtitle': 'حيث يلتقي الكود بالبناء',
      'hero.desc': 'At <strong>SANAD</strong>, we merge engineering expertise with digital technology to transform your ideas into integrated projects — from design to execution.',
      'hero.btn1': 'Discover Services',
      'hero.btn2': 'Contact Us',
      'stats.1': 'Specialized Divisions',
      'stats.2': '360° Solutions',
      'stats.3': 'One Team · Idea to Reality',
      'services.subtitle': 'خدماتنا',
      'services.title': 'Our Services',
      'services.cards.tech': 'Technology',
      'services.cards.tech_l1': 'Web Development',
      'services.cards.tech_l2': 'E-commerce',
      'services.cards.tech_l3': 'Management Systems',
      'services.cards.tech_l4': 'Custom Solutions',
      'services.cards.design': 'Design',
      'services.cards.design_l1': 'Brand Identity',
      'services.cards.design_l2': 'Social Media',
      'services.cards.design_l3': 'Brochures',
      'services.cards.design_l4': 'Motion Graphics',
      'services.cards.media': 'Media',
      'services.cards.media_l1': 'Commercial Photography',
      'services.cards.media_l2': 'Editing',
      'services.cards.media_l3': 'Reels / TikTok',
      'services.cards.media_l4': 'Marketing Video',
      'services.cards.arch': 'Architecture',
      'services.cards.arch_l1': 'Architectural Design',
      'services.cards.arch_l2': 'Interior Design',
      'services.cards.arch_l3': 'Execution Plans',
      'services.cards.arch_l4': 'BIM',
      'services.cards.eng': 'Structural Engineering',
      'services.cards.mobile': 'Mobile Development',
      'services.cards.mobile_l1': 'Flutter Apps',
      'services.cards.mobile_l2': 'iOS Apps',
      'services.cards.mobile_l3': 'Android Apps',
      'services.cards.mobile_l4': 'API & Integration',
      'services.cards.eng_l1': 'Structural Design',
      'services.cards.eng_l2': 'Engineering Supervision',
      'services.cards.eng_l3': 'Feasibility Studies',
      'services.cards.full': 'Full Package',
      'services.cards.full_desc': 'From idea to execution — we cover it all',
      'why.subtitle': 'لماذا SANAD',
      'why.title': 'Why SANAD?',
      'why.cards.0.title': 'Quality First',
      'why.cards.0.text': 'We work until the project is ready to represent us. Every small detail gets our attention because quality is our signature.',
      'why.cards.1.title': 'True Partnership',
      'why.cards.1.text': 'We invest in your success as if it were our own. We understand your vision and work as one team to achieve your goals.',
      'why.cards.2.title': 'Constant Innovation',
      'why.cards.2.text': 'Latest technologies in practical solutions. We keep up with digital evolution to bring you the best of the modern world.',
      'process.subtitle': 'كيف نعمل',
      'process.title': 'How We Work',
      'process.steps.0.title': 'Listen & Understand',
      'process.steps.0.text': 'We begin by understanding your vision and goals to define the project path together.',
      'process.steps.1.title': 'Plan & Strategize',
      'process.steps.1.text': 'We create a clear, integrated roadmap for every stage of the work.',
      'process.steps.2.title': 'Design & Develop',
      'process.steps.2.text': 'We execute with precision and creativity while maintaining continuous follow-up.',
      'process.steps.3.title': 'Deliver & Support',
      'process.steps.3.text': 'We deliver the project with full documentation and ongoing technical support.',
      'portfolio.subtitle': 'أحدث أعمالنا',
      'portfolio.title': 'Our Recent Work',
      'portfolio.cta': 'View All Projects',
      'portfolio.filter.all': 'All',
      'portfolio.filter.arch': 'Architecture',
      'portfolio.filter.decor': 'Interior',
      'portfolio.filter.facad': 'Facades',
      'portfolio.filter.graphic': 'Graphic',
      'portfolio.filter.uiux': 'UI/UX',
      'portfolio.filter.software': 'Software',
      'portfolio.project.interior-decor': 'Interior Design',
      'portfolio.project.villa-design': 'Villa Design',
      'portfolio.project.facade-design': 'Facade Design',
      'portfolio.project.arch-plans': 'Architectural Plans',
      'portfolio.project.brand-identity': 'Brand Identity',
      'portfolio.project.ui-design': 'App UI Design',
      'portfolio.project.motion-video': 'Motion Graphics',
      'portfolio.project.ibrahim-app': 'Ibrahim Islamic App',
      'portfolio.project.portfolio-website': 'Interactive Portfolio Website',
      'portfolio.project.gallery-generator': 'Gallery Data Generator',
      'portfolio.items': 'files',
      'portfolio.lightbox.close': 'Close',
      'portfolio.lightbox.of': 'of',
      'portfolio.no_images': 'No gallery for this project',
      'testimonials.subtitle': 'قالوا عنا',
      'testimonials.title': 'Testimonials',
      'testimonials.0.quote': '"SANAD delivered a fully integrated website with exceptional professionalism. Their commitment to deadlines and execution accuracy was impressive."',
      'testimonials.0.name': 'Eng. Mohammed Al-Ansi',
      'testimonials.0.company': 'Al-Ansi Contracting Co.',
      'testimonials.1.quote': '"The brand identity design for our store was outstanding. Everyone admired it thanks to the creativity of the SANAD DESIGN team."',
      'testimonials.1.name': 'Ahmed Al-Saqqaf',
      'testimonials.1.company': 'Al-Saqqaf Trading Store',
      'testimonials.2.quote': '"What sets SANAD apart is their deep understanding of client needs. They were true partners in our project\'s success."',
      'testimonials.2.name': 'Sara Al-Haddad',
      'testimonials.2.company': 'Al-Haddad Development Est.',
      'cta.title': 'Ready to Turn Your Idea Into Reality?',
      'cta.subtitle': 'The SANAD team is waiting for you',
      'cta.btn': 'Start Now',
      'footer.slogan': 'We Build Your Ideas Into Reality',
      'footer.col1.title': 'Company',
      'footer.col1.link1': 'About Us',
      'footer.col1.link2': 'Our Services',
      'footer.col1.link3': 'Our Work',
      'footer.col2.title': 'Services',
      'footer.col3.title': 'Contact',
      'footer.col4.title': 'Follow Us',
      'modal.title': 'Choose Your Service',
      'modal.subtitle': 'Select the service you need and we will send your request via WhatsApp',
      'modal.back': 'Back',
      'modal.send': 'Send via WhatsApp',
      'modal.request': 'Hello, I am interested in',
      'footer.copyright': '© 2025 SANAD · All Rights Reserved'
    }
  };

  /* ==========================================
     STATE
     ========================================== */
  const STATE = {
    lang: localStorage.getItem('sanad-lang') || 'ar',
    theme: localStorage.getItem('sanad-theme') || 'dark',
    loading: document.getElementById('loading-screen'),
    navbar: document.getElementById('navbar'),
    hero: document.querySelector('.hero'),
    gsapReady: typeof gsap !== 'undefined'
  };

  /* ==========================================
     I18N ENGINE
     ========================================== */
  function t(key) {
    return I18N[STATE.lang]?.[key] || I18N['ar']?.[key] || key;
  }

  function applyLanguage() {
    const lang = STATE.lang;
    const html = document.documentElement;

    html.setAttribute('lang', lang);
    html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

    // Update all data-i18n elements
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      const key = el.getAttribute('data-i18n');
      if (el.tagName === 'META') {
        el.setAttribute('content', t(key));
      } else {
        el.innerHTML = t(key);
      }
    });

    // Lang button
    const langBtn = document.getElementById('lang-toggle');
    if (langBtn) {
      langBtn.querySelector('.lang-label').textContent = lang === 'ar' ? 'EN' : 'ع';
    }

    // Theme-color meta
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) {
      meta.setAttribute('content', STATE.theme === 'dark' ? '#0A1F44' : '#FFFFFF');
    }

    localStorage.setItem('sanad-lang', lang);
  }

  /* ==========================================
     THEME ENGINE
     ========================================== */
  function applyTheme() {
    const html = document.documentElement;
    html.setAttribute('data-theme', STATE.theme);

    const icon = document.querySelector('#theme-toggle i');
    if (icon) {
      icon.className = STATE.theme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
    }

    // Navbar scrolled state color
    if (STATE.theme === 'light' && window.scrollY > 80) {
      STATE.navbar?.classList.add('scrolled');
    }

    localStorage.setItem('sanad-theme', STATE.theme);
  }

  /* ==========================================
     TOGGLE HANDLERS
     ========================================== */
  function toggleLanguage() {
    STATE.lang = STATE.lang === 'ar' ? 'en' : 'ar';
    applyLanguage();
    renderDynamicContent();
    if (STATE.gsapReady) ScrollTrigger.refresh();
  }

  function toggleTheme() {
    STATE.theme = STATE.theme === 'dark' ? 'light' : 'dark';
    applyTheme();
  }

  /* ==========================================
     RENDER ENGINE — يُنشئ المحتوى من DATA
     ========================================== */
  function renderStats() {
    const container = document.getElementById('hero-stats');
    if (!container) return;
    container.innerHTML = DATA.stats.map(function (s, i) {
      const isLast = i === DATA.stats.length - 1;
      let inner;
      if (s.text) {
        inner = '<span class="stat-label-wide">' + t(s.key) + '</span>';
      } else {
        inner = '<span class="stat-num" data-count="' + s.count + '">0</span>'
          + (s.suffix === '+' ? '<span class="stat-plus">+</span>' : s.suffix === '°' ? '<span class="stat-deg">°</span>' : '')
          + '<span class="stat-label">' + t(s.key) + '</span>';
      }
      return '<div class="stat-item">' + inner + '</div>'
        + (isLast ? '' : '<div class="stat-divider"></div>');
    }).join('');
  }

  function renderServices() {
    const container = document.getElementById('services-grid');
    if (!container) return;
    container.innerHTML = DATA.services.map(function (s) {
      const isFull = s.full;
      const title = s.i18nKey;
      var itemsHtml = '';
      if (isFull) {
        itemsHtml = '<p class="card-full-text">' + t(title + '_desc') + '</p>';
      } else {
        itemsHtml = '<ul class="card-list">' + s.items.map(function (item) {
          return '<li>' + t(item) + '</li>';
        }).join('') + '</ul>';
      }
      return '<div class="service-card' + (isFull ? ' card-full' : '') + '" style="--card-color: ' + s.color + ';">'
        + '<div class="card-dot"></div>'
        + '<h3 class="card-title-en">' + s.en + '</h3>'
        + '<h4 class="card-title-ar">' + t(title) + '</h4>'
        + itemsHtml
        + '</div>';
    }).join('');
  }

  function renderWhy() {
    const container = document.getElementById('why-grid');
    if (!container) return;
    container.innerHTML = DATA.why.map(function (w) {
      return '<div class="why-card">'
        + '<div class="why-icon"><i class="fas ' + w.icon + '"></i></div>'
        + '<h3 class="why-title">' + t(w.i18nKey + '.title') + '</h3>'
        + '<p class="why-text">' + t(w.i18nKey + '.text') + '</p>'
        + '</div>';
    }).join('');
  }

  function renderProcess() {
    const container = document.getElementById('process-timeline');
    if (!container) return;
    // Keep the process-line div
    const lineDiv = container.querySelector('.process-line') || document.createElement('div');
    container.innerHTML = '';
    container.appendChild(lineDiv);

    DATA.process.forEach(function (p) {
      const div = document.createElement('div');
      div.className = 'process-step';
      div.innerHTML = '<div class="step-num">' + p.num + '</div>'
        + '<h3 class="step-title">' + t(p.i18nKey + '.title') + '</h3>'
        + '<p class="step-text">' + t(p.i18nKey + '.text') + '</p>';
      container.appendChild(div);
    });
  }

  // حالة البرتفليو
  var activeFilter = 'all';
  var lightboxOpen = false;

  function getProjectCover(proj) {
    if (!proj.cover) return null;
    if (proj.cover.endsWith('.pdf')) return null;
    return 'images/portfolio/' + proj.cover;
  }

  function isImage(path) {
    return /\.(jpg|jpeg|png|gif|webp)$/i.test(path);
  }

  function renderPortfolioFilters() {
    var container = document.getElementById('portfolio-filters');
    if (!container) return;
    container.innerHTML = DATA.portfolioFilters.map(function (f) {
      return '<button class="filter-btn' + (activeFilter === f.id ? ' active' : '') + '" data-filter="' + f.id + '">'
        + t(f.i18nKey) + '</button>';
    }).join('');
  }

  function renderPortfolio() {
    var container = document.getElementById('portfolio-grid');
    if (!container) return;

    var filtered = activeFilter === 'all'
      ? DATA.projects
      : DATA.projects.filter(function (p) { return p.filter === activeFilter; });

    container.innerHTML = filtered.map(function (proj) {
      var cover = getProjectCover(proj);
      var style = cover
        ? 'background-image: url(' + cover + '); background-size: cover; background-position: center;'
        : 'background: linear-gradient(135deg, #0A1F44, #1E90FF);';
      var serviceColors = {
        'ARCH': '#AFA9EC', 'ENG': '#F0997B', 'DESIGN': '#5DCAA5', 'MEDIA': '#F2A623', 'TECH': '#1E90FF'
      };
      var color = serviceColors[proj.service] || '#1E90FF';
      return '<div class="portfolio-card" data-project="' + proj.id + '">'
        + '<div class="portfolio-img" style="' + style + '">'
        + '<div class="portfolio-overlay">'
        + '<span class="portfolio-tag" style="border-color: ' + color + '; color: ' + color + ';">' + proj.service + '</span>'
        + '<h3 class="portfolio-name">' + t('portfolio.project.' + proj.id) + '</h3>'
        + '<span class="portfolio-count">' + proj.count + ' ' + t('portfolio.items') + '</span>'
        + '</div></div></div>';
    }).join('');
  }

  function renderLightbox() {
    var existing = document.getElementById('portfolio-lightbox');
    if (existing) existing.remove();
    var lb = document.createElement('div');
    lb.id = 'portfolio-lightbox';
    lb.className = 'lightbox';
    var isRtl = document.documentElement.getAttribute('dir') === 'rtl';
    lb.innerHTML = '<button class="lightbox-close" id="lb-close">&times;</button>'
      + '<button class="lightbox-nav lightbox-prev" id="lb-prev">' + (isRtl ? '&#8250;' : '&#8249;') + '</button>'
      + '<button class="lightbox-nav lightbox-next" id="lb-next">' + (isRtl ? '&#8249;' : '&#8250;') + '</button>'
      + '<div class="lightbox-content" id="lb-content"></div>'
      + '<div class="lightbox-counter" id="lb-counter"></div>';
    document.body.appendChild(lb);
  }

  var lbProject = null;
  var lbIndex = 0;

  function openLightbox(projectId, imgIndex) {
    for (var i = 0; i < DATA.projects.length; i++) {
      if (DATA.projects[i].id === projectId) {
        lbProject = DATA.projects[i];
        lbIndex = imgIndex || 0;
        break;
      }
    }
    if (!lbProject) return;
    lightboxOpen = true;
    var lb = document.getElementById('portfolio-lightbox');
    if (!lb) renderLightbox();
    lb = document.getElementById('portfolio-lightbox');
    lb.classList.add('active');
    document.body.style.overflow = 'hidden';
    showLightboxItem();
  }

  function showLightboxItem() {
    if (!lbProject) return;
    var content = document.getElementById('lb-content');
    var counter = document.getElementById('lb-counter');
    if (!content || !counter) return;
    if (!lbProject.images || !lbProject.images.length) {
      content.innerHTML = '<div style="color:rgba(255,255,255,0.5);font-size:18px;text-align:center;">' + t('portfolio.no_images') + '</div>';
      counter.textContent = '';
      return;
    }
    var item = lbProject.images[lbIndex];
    var path = 'images/portfolio/' + item;
    if (isImage(path)) {
      content.innerHTML = '<img src="' + path + '" alt="" class="lightbox-img">';
    } else if (path.endsWith('.pdf')) {
      content.innerHTML = '<iframe src="' + path + '" class="lightbox-iframe"></iframe>';
    } else if (path.endsWith('.webm') || path.endsWith('.mp4')) {
      content.innerHTML = '<video src="' + path + '" class="lightbox-video" controls autoplay></video>';
    }
    counter.textContent = (lbIndex + 1) + ' ' + t('portfolio.lightbox.of') + ' ' + lbProject.images.length;
  }

  function closeLightbox() {
    lightboxOpen = false;
    var lb = document.getElementById('portfolio-lightbox');
    if (lb) lb.classList.remove('active');
    document.body.style.overflow = '';
    lbProject = null;
  }

  function initPortfolioEvents() {
    // Filter buttons
    document.addEventListener('click', function (e) {
      var btn = e.target.closest('.filter-btn');
      if (btn) {
        activeFilter = btn.getAttribute('data-filter');
        renderPortfolioFilters();
        renderPortfolio();
        if (typeof gsap !== 'undefined') ScrollTrigger.refresh();
        return;
      }
      // Portfolio card click → lightbox
      var card = e.target.closest('.portfolio-card');
      if (card) {
        var pid = card.getAttribute('data-project');
        openLightbox(pid, 0);
        return;
      }
      // Lightbox close
      if (e.target.closest('#lb-close') || e.target.closest('.lightbox') && !e.target.closest('.lightbox-content') && !e.target.closest('.lightbox-nav')) {
        if (lightboxOpen) closeLightbox();
        return;
      }
      // Lightbox nav
      if (e.target.closest('#lb-prev')) {
        if (lbProject) { lbIndex = (lbIndex - 1 + lbProject.images.length) % lbProject.images.length; showLightboxItem(); }
        return;
      }
      if (e.target.closest('#lb-next')) {
        if (lbProject) { lbIndex = (lbIndex + 1) % lbProject.images.length; showLightboxItem(); }
        return;
      }
    });

    // Keyboard nav
    document.addEventListener('keydown', function (e) {
      if (!lightboxOpen || !lbProject) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') { lbIndex = (lbIndex - 1 + lbProject.images.length) % lbProject.images.length; showLightboxItem(); }
      if (e.key === 'ArrowRight') { lbIndex = (lbIndex + 1) % lbProject.images.length; showLightboxItem(); }
    });
  }

  /* ==========================================
     SERVICE MODAL
     ========================================== */
  function renderModalServices() {
    var container = document.getElementById('modal-services');
    if (!container) return;
    var isRtl = document.documentElement.getAttribute('dir') === 'rtl';
    container.innerHTML = DATA.services.map(function (s) {
      if (s.full) return '';
      return '<button class="modal-service-card" data-service="' + s.id + '" style="--card-color: ' + s.color + ';">'
        + '<span class="modal-service-dot" style="background:' + s.color + ';"></span>'
        + '<span class="modal-service-en">' + s.en + '</span>'
        + '<span class="modal-service-ar">' + t(s.i18nKey) + '</span>'
        + '<i class="fas fa-chevron-' + (isRtl ? 'left' : 'right') + '"></i>'
        + '</button>';
    }).join('');
  }

  function openServiceModal() {
    var modal = document.getElementById('service-modal');
    if (!modal) return;
    modal.setAttribute('aria-hidden', 'false');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    // Reset to list view
    document.getElementById('modal-step-list').style.display = '';
    document.getElementById('modal-step-detail').style.display = 'none';
  }

  function closeServiceModal() {
    var modal = document.getElementById('service-modal');
    if (!modal) return;
    modal.setAttribute('aria-hidden', 'true');
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  function showServiceDetail(serviceId) {
    var service = null;
    for (var i = 0; i < DATA.services.length; i++) {
      if (DATA.services[i].id === serviceId) { service = DATA.services[i]; break; }
    }
    if (!service || service.full) return;

    document.getElementById('modal-step-list').style.display = 'none';
    document.getElementById('modal-step-detail').style.display = '';

    var badge = document.getElementById('modal-detail-badge');
    var title = document.getElementById('modal-detail-title');
    var list = document.getElementById('modal-detail-list');
    var whatsappBtn = document.getElementById('modal-whatsapp-btn');

    badge.textContent = service.en;
    badge.style.background = service.color;
    title.textContent = t(service.i18nKey);

    list.innerHTML = service.items.map(function (key) {
      return '<li><i class="fas fa-check-circle" style="color:' + service.color + ';"></i> ' + t(key) + '</li>';
    }).join('');

    // Build WhatsApp message
    var lang = document.documentElement.getAttribute('dir') === 'rtl' ? 'ar' : 'en';
    var msg = t('modal.request') + ' ' + service.en + ':\n';
    service.items.forEach(function (key) {
      msg += '- ' + t(key) + '\n';
    });
    msg += '\n' + (lang === 'ar' ? 'أرجو التواصل معي' : 'Please contact me');
    var url = 'https://wa.me/' + DATA.whatsappNumber + '?text=' + encodeURIComponent(msg);
    whatsappBtn.href = url;
  }

  function initServiceModal() {
    renderModalServices();

    // Modal service card click
    document.getElementById('modal-services')?.addEventListener('click', function (e) {
      var card = e.target.closest('.modal-service-card');
      if (card) showServiceDetail(card.getAttribute('data-service'));
    });

    // Close button
    document.getElementById('modal-close')?.addEventListener('click', closeServiceModal);
    document.getElementById('modal-overlay')?.addEventListener('click', closeServiceModal);

    // Back button
    document.getElementById('modal-back')?.addEventListener('click', function () {
      document.getElementById('modal-step-list').style.display = '';
      document.getElementById('modal-step-detail').style.display = 'none';
    });

    // ESC close
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeServiceModal();
    });

    // Modal trigger buttons
    document.querySelectorAll('.modal-trigger').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        openServiceModal();
      });
    });
  }

  function renderTestimonials() {
    const container = document.getElementById('testimonials-grid');
    if (!container) return;
    container.innerHTML = DATA.testimonials.map(function (tst) {
      var stars = '';
      for (var i = 0; i < tst.stars; i++) stars += '<i class="fas fa-star"></i>';
      return '<div class="testimonial-card">'
        + '<div class="testi-stars">' + stars + '</div>'
        + '<p class="testi-quote">' + t(tst.quoteKey) + '</p>'
        + '<div class="testi-author">'
        + '<div class="testi-avatar" style="background: ' + tst.avatarColor + ';">' + tst.avatar + '</div>'
        + '<div>'
        + '<h4 class="testi-name">' + t(tst.nameKey) + '</h4>'
        + '<p class="testi-company">' + t(tst.companyKey) + '</p>'
        + '</div></div></div>';
    }).join('');
  }

  function renderFooterServices() {
    const container = document.getElementById('footer-services');
    if (!container) return;
    container.innerHTML = DATA.services.map(function (s) {
      return '<li><a href="#services">' + s.en + '</a></li>';
    }).join('');
  }

  function renderDynamicContent() {
    renderStats();
    renderServices();
    renderWhy();
    renderProcess();
    renderPortfolioFilters();
    renderPortfolio();
    renderTestimonials();
    renderFooterServices();
    renderModalServices();
  }

  /* ==========================================
     GSAP ANIMATIONS
     ========================================== */
  function initGsapAnimations() {
    if (!STATE.gsapReady) return;
    var loading = STATE.loading;
    var loaderImg = document.querySelector('.loader-img');
    var navbar = STATE.navbar;

    // Loading screen
    if (loading && loaderImg) {
      var tl = gsap.timeline();
      tl
        .fromTo(loaderImg, { scale: 0, rotation: -180, opacity: 0 },
          { scale: 1, rotation: 0, opacity: 1, duration: 1.2, ease: 'elastic.out(1,0.5)' })
        .fromTo('.loader-ar', { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, ease: 'power3.out' }, '-=0.6')
        .fromTo('.loader-en', { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.4, ease: 'power3.out' }, '-=0.3')
        .to(loading, {
          y: '-100%', duration: 0.8, ease: 'power4.inOut', delay: 0.4,
          onComplete: function () { loading.style.display = 'none'; }
        });
    }

    // Navbar entrance
    if (navbar) {
      gsap.fromTo('.nav-logo', { x: -40, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 1.6 });
      gsap.fromTo('.nav-link', { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: 'power3.out', stagger: 0.08, delay: 1.7 });
      gsap.fromTo('.nav-cta', { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, ease: 'back.out(2)', delay: 2.1 });
    }

    // Hero
    var heroTl = gsap.timeline({ delay: 2.2 });
    heroTl
      .fromTo('.hero-badge', { y: -40, opacity: 0, scale: 0.8 },
        { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: 'power3.out' })
      .fromTo('.hero-title', { y: 80, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power4.out' }, '-=0.4')
      .fromTo('.hero-subtitle', { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' }, '-=0.5')
      .fromTo('.hero-desc', { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' }, '-=0.3')
      .fromTo('.hero-buttons .btn', { y: 30, opacity: 0, scale: 0.9 },
        { y: 0, opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(1.7)', stagger: 0.12 }, '-=0.2')
      .fromTo('.stat-item', { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out', stagger: 0.1 }, '-=0.2');

    // Stats counter
    ScrollTrigger.create({
      trigger: '.hero-stats',
      start: 'top 85%',
      onEnter: function () {
        document.querySelectorAll('.stat-num').forEach(function (el) {
          var target = parseInt(el.getAttribute('data-count'));
          if (isNaN(target)) return;
          var obj = { val: 0 };
          gsap.to(obj, {
            val: target, duration: 2, ease: 'power3.out',
            onUpdate: function () { el.textContent = Math.floor(obj.val); }
          });
        });
      },
      once: true
    });

    // Hero parallax
    if (STATE.hero) {
      gsap.to('.hero-content', {
        y: function () { return STATE.hero.offsetHeight * 0.15; },
        ease: 'none',
        scrollTrigger: {
          trigger: STATE.hero, start: 'top top', end: 'bottom top',
          scrub: true, invalidateOnRefresh: true
        }
      });
    }

    // Section headers reveal
    document.querySelectorAll('.section-header').forEach(function (header) {
      gsap.fromTo(header.querySelector('.section-subtitle'),
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out',
          scrollTrigger: { trigger: header, start: 'top 80%' } });
      gsap.fromTo(header.querySelector('.section-title'),
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out',
          scrollTrigger: { trigger: header, start: 'top 78%' } });
      gsap.fromTo(header.querySelector('.section-line'),
        { width: 0, opacity: 0 },
        { width: 60, opacity: 1, duration: 0.6, ease: 'power3.out',
          scrollTrigger: { trigger: header, start: 'top 75%' } });
    });

    // Services cards
    gsap.fromTo('.service-card',
      { y: 80, opacity: 0, scale: 0.9 },
      { y: 0, opacity: 1, scale: 1, duration: 0.7, ease: 'power3.out', stagger: 0.1,
        scrollTrigger: { trigger: '.services-grid', start: 'top 82%', once: true } });

    // Why cards
    gsap.fromTo('.why-card',
      { y: 60, opacity: 0, rotateX: 10 },
      { y: 0, opacity: 1, rotateX: 0, duration: 0.7, ease: 'power3.out', stagger: 0.15,
        scrollTrigger: { trigger: '.why-grid', start: 'top 82%', once: true } });

    // Process line + steps
    var pLine = document.querySelector('.process-line');
    if (pLine) {
      gsap.fromTo(pLine, { scaleX: 0 },
        { scaleX: 1, duration: 1.5, ease: 'power3.inOut',
          scrollTrigger: { trigger: '.process-timeline', start: 'top 75%' } });
    }
    gsap.fromTo('.process-step',
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out', stagger: 0.15,
        scrollTrigger: { trigger: '.process-timeline', start: 'top 75%', once: true } });
    gsap.fromTo('.step-num', { scale: 0 },
      { scale: 1, duration: 0.5, ease: 'back.out(2)', stagger: 0.2,
        scrollTrigger: { trigger: '.process-timeline', start: 'top 72%', once: true } });

    // Portfolio
    gsap.fromTo('.portfolio-card',
      { y: 60, opacity: 0, scale: 0.92 },
      { y: 0, opacity: 1, scale: 1, duration: 0.7, ease: 'power3.out', stagger: 0.1,
        scrollTrigger: { trigger: '.portfolio-grid', start: 'top 82%', once: true } });

    // Testimonials
    gsap.fromTo('.testimonial-card',
      { y: 50, opacity: 0, scale: 0.95 },
      { y: 0, opacity: 1, scale: 1, duration: 0.6, ease: 'power3.out', stagger: 0.12,
        scrollTrigger: { trigger: '.testimonials-grid', start: 'top 82%', once: true } });

    // CTA
    gsap.fromTo('.cta-title', { y: 50, opacity: 0, scale: 0.9 },
      { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: '.cta-banner', start: 'top 80%' } });
    gsap.fromTo('.cta-subtitle', { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out',
        scrollTrigger: { trigger: '.cta-banner', start: 'top 78%' } });
    gsap.fromTo('.btn-cta', { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.6, ease: 'back.out(2)',
        scrollTrigger: { trigger: '.cta-banner', start: 'top 75%' } });

    // Footer
    gsap.fromTo('.footer-col', { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out', stagger: 0.1,
        scrollTrigger: { trigger: '.footer-grid', start: 'top 85%', once: true } });

    // 3D tilt on service cards
    document.querySelectorAll('.service-card').forEach(function (card) {
      card.addEventListener('mousemove', function (e) {
        var rect = card.getBoundingClientRect();
        var x = e.clientX - rect.left;
        var y = e.clientY - rect.top;
        var rx = (y - rect.height / 2) / 12;
        var ry = (rect.width / 2 - x) / 12;
        gsap.to(card, { rotateX: rx, rotateY: ry, duration: 0.4, ease: 'power2.out', overwrite: 'auto' });
        card.style.setProperty('--glow-x', (x / rect.width) * 100 + '%');
        card.style.setProperty('--glow-y', (y / rect.height) * 100 + '%');
      });
      card.addEventListener('mouseleave', function () {
        gsap.to(card, { rotateX: 0, rotateY: 0, duration: 0.6, ease: 'power2.out' });
      });
    });

    // 3D tilt on portfolio
    document.querySelectorAll('.portfolio-card').forEach(function (card) {
      card.addEventListener('mousemove', function (e) {
        var rect = card.getBoundingClientRect();
        var x = e.clientX - rect.left;
        var y = e.clientY - rect.top;
        var rx = (y - rect.height / 2) / 20;
        var ry = (rect.width / 2 - x) / 20;
        gsap.to(card.querySelector('.portfolio-img'), {
          rotateX: rx, rotateY: ry, scale: 1.06, duration: 0.4, ease: 'power2.out', overwrite: 'auto'
        });
      });
      card.addEventListener('mouseleave', function () {
        gsap.to(card.querySelector('.portfolio-img'), {
          rotateX: 0, rotateY: 0, scale: 1, duration: 0.6, ease: 'power2.out'
        });
      });
    });

    ScrollTrigger.refresh();
  }

  /* ==========================================
     MOUSE FOLLOWER
     ========================================== */
  function initMouseFollower() {
    if (!STATE.gsapReady || 'ontouchstart' in window) return;
    var follower = document.createElement('div');
    follower.className = 'cursor-follower';
    document.body.appendChild(follower);

    var mx = 0, my = 0, fx = 0, fy = 0;
    document.addEventListener('mousemove', function (e) { mx = e.clientX; my = e.clientY; });
    gsap.ticker.add(function () {
      fx += (mx - fx) * 0.08;
      fy += (my - fy) * 0.08;
      gsap.set(follower, { x: fx - 12, y: fy - 12 });
    });
  }

  /* ==========================================
     PARTICLES CANVAS
     ========================================== */
  function initParticles() {
    var canvas = document.getElementById('particles-canvas');
    if (!canvas) return;
    var ctx = canvas.getContext('2d');
    var particles = [];
    var mx = -1000, my = -1000;
    var frame = 0;
    var animId;

    function resize() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
    window.addEventListener('resize', resize, { passive: true });
    resize();

    function Dot() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.r = Math.random() * 2.2 + 0.8;
      this.sx = (Math.random() - 0.5) * 0.3;
      this.sy = (Math.random() - 0.5) * 0.3;
      this.o = Math.random() * 0.4 + 0.1;
      this.pulse = Math.random() * 0.02 + 0.005;
      this.phase = Math.random() * Math.PI * 2;
    }
    Dot.prototype.update = function () {
      this.x += this.sx; this.y += this.sy;
      if (this.x < 0 || this.x > canvas.width) this.sx *= -1;
      if (this.y < 0 || this.y > canvas.height) this.sy *= -1;
      var dx = this.x - mx, dy = this.y - my, dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 120) { var f = (120 - dist) / 120; this.x += dx * f * 0.008; this.y += dy * f * 0.008; }
    };
    Dot.prototype.draw = function () {
      var a = Math.sin(frame * this.pulse + this.phase) * 0.3 + 0.7;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(30,144,255,' + (this.o * a) + ')';
      ctx.fill();
    };

    var count = Math.min(Math.floor((canvas.width * canvas.height) / 9000), 100);
    for (var i = 0; i < count; i++) particles.push(new Dot());

    canvas.addEventListener('mousemove', function (e) {
      var rect = canvas.getBoundingClientRect();
      mx = e.clientX - rect.left; my = e.clientY - rect.top;
    });
    canvas.addEventListener('mouseleave', function () { mx = -1000; my = -1000; });

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      frame++;
      for (var i = 0; i < particles.length; i++) { particles[i].update(); particles[i].draw(); }
      for (var i = 0; i < particles.length; i++) {
        for (var j = i + 1; j < particles.length; j++) {
          var dx = particles[i].x - particles[j].x;
          var dy = particles[i].y - particles[j].y;
          var dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = 'rgba(30,144,255,' + ((1 - dist / 100) * 0.1) + ')';
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    }
    draw();
    document.addEventListener('visibilitychange', function () {
      if (document.hidden) cancelAnimationFrame(animId); else draw();
    });
  }

  /* ==========================================
     NAVBAR SCROLL
     ========================================== */
  function initNavbarScroll() {
    var navbar = STATE.navbar;
    if (!navbar) return;
    function onScroll() {
      navbar.classList.toggle('scrolled', window.scrollY > 80);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ==========================================
     MOBILE NAV
     ========================================== */
  function initMobileNav() {
    var toggle = document.getElementById('nav-toggle');
    var navLinks = document.getElementById('nav-links');
    if (!toggle || !navLinks) return;
    toggle.addEventListener('click', function () {
      toggle.classList.toggle('active');
      navLinks.classList.toggle('active');
      document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    });
    document.querySelectorAll('.nav-link').forEach(function (link) {
      link.addEventListener('click', function () {
        toggle.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }

  /* ==========================================
     SMOOTH SCROLL
     ========================================== */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
      anchor.addEventListener('click', function (e) {
        var id = this.getAttribute('href');
        if (id === '#') return;
        var target = document.querySelector(id);
        if (!target) return;
        e.preventDefault();
        var navH = STATE.navbar ? STATE.navbar.offsetHeight : 80;
        var pos = target.getBoundingClientRect().top + window.pageYOffset - navH;
        if (STATE.gsapReady) {
          gsap.to(window, { scrollTo: { y: pos, autoKill: false }, duration: 1.2, ease: 'power4.inOut' });
        } else {
          window.scrollTo({ top: pos, behavior: 'smooth' });
        }
      });
    });
  }

  /* ==========================================
     INIT
     ========================================== */
  function init() {
    // Load saved state
    applyLanguage();
    applyTheme();

    // Render dynamic content
    renderDynamicContent();

    // Hide loading after 5s fallback
    setTimeout(function () {
      if (STATE.loading && !STATE.loading.classList.contains('hidden')) {
        STATE.loading.classList.add('hidden');
      }
    }, 5000);

    if (!STATE.gsapReady) {
      console.warn('GSAP not loaded — basic mode');
      if (STATE.loading) STATE.loading.classList.add('hidden');
    }

    // Bootstrap
    initNavbarScroll();
    initMobileNav();
    initParticles();
    initSmoothScroll();
    initMouseFollower();
    initPortfolioEvents();
    initServiceModal();
    initGsapAnimations();

    // Toggle events
    document.getElementById('lang-toggle')?.addEventListener('click', toggleLanguage);
    document.getElementById('theme-toggle')?.addEventListener('click', toggleTheme);
  }

  // Start
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
