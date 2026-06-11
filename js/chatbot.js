(function () {
  'use strict';

  /* ==========================================
     SANAD AI Chatbot
     جاهز لـ OpenAI API — حالياً بردود مسبقة
     ========================================== */

  const WHATSAPP_NUMBER = '967774561368';

  const BOT_REPLIES = {
    ar: {
      greetings: ['مرحباً بك في SANAD 👋', 'أهلاً بك في سند', 'مرحباً! كيف يمكنني مساعدتك؟'],
      unknown: 'لم أفهم سؤالك. يمكنك اختيار أحد الخيارات أدناه أو الكتابة مباشرة.',
      contact: 'يمكنك التواصل معنا على:\n📞 +967 774 561 368\n📞 +967 779 833 023\n📞 +967 776 038 766\n💬 واتساب: ' + WHATSAPP_NUMBER,
      location: '📍 اليمن',
      hours: '🕐 نعمل طوال أيام الأسبوع من ٨ صباحاً إلى ١٠ مساءً',
      thanks: 'العفو 😊 هل هناك شيء آخر يمكنني مساعدتك به؟',
      project: 'نعم! تواصل معنا عبر واتساب وشاركنا فكرتك وفريقنا سيعود إليك بعرض سعر خلال ٢٤ ساعة.',
      price: 'الأسعار تختلف حسب نوع وحجم المشروع. يرجى التواصل معنا وسنقدم لك عرض سعر مناسب.',
    },
    en: {
      greetings: ['Welcome to SANAD 👋', 'Hello! Welcome to SANAD', 'Hi! How can I help you?'],
      unknown: "I didn't understand your question. Please choose one of the options below or type directly.",
      contact: 'You can reach us at:\n📞 +967 774 561 368\n📞 +967 779 833 023\n📞 +967 776 038 766\n💬 WhatsApp: ' + WHATSAPP_NUMBER,
      location: '📍 Yemen',
      hours: '🕐 We work all week from 8 AM to 10 PM',
      thanks: "You're welcome 😊 Is there anything else I can help you with?",
      project: 'Yes! Contact us via WhatsApp and share your idea, and our team will get back to you with a quote within 24 hours.',
      price: 'Pricing depends on the type and scope of the project. Please contact us and we will provide a suitable quote.',
    }
  };

  const BOT_CONFIG = {
    ar: {
      title: 'سند | مساعد SANAD',
      subtitle: 'كيف يمكنني مساعدتك؟',
      inputPlaceholder: 'اكتب رسالتك...',
      sendBtn: 'إرسال',
      startBtn: 'ابدأ المحادثة',
      services: 'خدماتنا',
      contact: 'التواصل',
      project: 'أبدأ مشروع',
      price: 'الأسعار',
    },
    en: {
      title: 'SANAD Assistant',
      subtitle: 'How can I help you?',
      inputPlaceholder: 'Type a message...',
      sendBtn: 'Send',
      startBtn: 'Start Chat',
      services: 'Our Services',
      contact: 'Contact',
      project: 'Start Project',
      price: 'Pricing',
    }
  };

  const SERVICES_LIST = {
    ar: [
      { label: 'SANAD TECH — تطوير المواقع والأنظمة', id: 'tech' },
      { label: 'SANAD DESIGN — التصميم والهوية البصرية', id: 'design' },
      { label: 'SANAD MEDIA — التصوير والمونتاج', id: 'media' },
      { label: 'SANAD ARCH — الهندسة المعمارية', id: 'arch' },
      { label: 'SANAD ENG — الهندسة الإنشائية', id: 'eng' },
      { label: 'SANAD MOBILE — تطبيقات الجوال', id: 'mobile' },
      { label: 'الحزمة المتكاملة — من الفكرة للتنفيذ', id: 'full' },
    ],
    en: [
      { label: 'SANAD TECH — Web & Systems', id: 'tech' },
      { label: 'SANAD DESIGN — Brand Identity', id: 'design' },
      { label: 'SANAD MEDIA — Photography & Editing', id: 'media' },
      { label: 'SANAD ARCH — Architecture', id: 'arch' },
      { label: 'SANAD ENG — Structural Engineering', id: 'eng' },
      { label: 'SANAD MOBILE — Mobile Apps', id: 'mobile' },
      { label: 'Full Package — Idea to Execution', id: 'full' },
    ]
  };

  const SERVICE_DETAILS = {
    ar: {
      tech: 'SANAD TECH:\n• تطوير مواقع ومتاجر إلكترونية\n• أنظمة إدارية وحلول مخصصة\n• استضافة ونطاقات\n• دعم فني مستمر',
      design: 'SANAD DESIGN:\n• هويات بصرية وشعارات\n• تصاميم سوشيال ميديا\n• بروشورات ومواد تسويقية\n• موشن جرافيك',
      media: 'SANAD MEDIA:\n• تصوير إعلاني ومنتجات\n• مونتاج فيديو\n• Reels و TikTok\n• فيديوهات تسويقية',
      arch: 'SANAD ARCH:\n• تصميم معماري\n• ديكور داخلي\n• مخططات تنفيذية\n• BIM',
      eng: 'SANAD ENG:\n• تصميم إنشائي\n• إشراف هندسي\n• دراسات جدوى',
      mobile: 'SANAD MOBILE:\n• تطبيقات Flutter\n• تطبيقات iOS\n• تطبيقات أندرويد\n• API وتكامل',
      full: 'الحزمة المتكاملة:\nنغطي كل شيء من الفكرة إلى التنفيذ — استشارة، تصميم، تطوير، وتسليم.',
    },
    en: {
      tech: 'SANAD TECH:\n• Web & E-commerce Development\n• Management & Custom Systems\n• Hosting & Domains\n• Ongoing Support',
      design: 'SANAD DESIGN:\n• Brand Identity & Logos\n• Social Media Designs\n• Brochures & Marketing\n• Motion Graphics',
      media: 'SANAD MEDIA:\n• Commercial Photography\n• Video Editing\n• Reels & TikTok\n• Marketing Videos',
      arch: 'SANAD ARCH:\n• Architectural Design\n• Interior Design\n• Execution Plans\n• BIM',
      eng: 'SANAD ENG:\n• Structural Design\n• Engineering Supervision\n• Feasibility Studies',
      mobile: 'SANAD MOBILE:\n• Flutter Apps\n• iOS Apps\n• Android Apps\n• API & Integration',
      full: 'Full Package:\nWe cover everything from idea to execution — consulting, design, development, and delivery.',
    }
  };

  function getLang() {
    var html = document.documentElement;
    return html.getAttribute('lang') === 'en' ? 'en' : 'ar';
  }

  function pickRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function getServicesText(lang) {
    return SERVICES_LIST[lang].map(function (s, i) {
      return (i + 1) + '. ' + s.label;
    }).join('\n');
  }

  function handleChatMessage(input) {
    var lang = getLang();
    var text = input.trim().toLowerCase();
    var replies = BOT_REPLIES[lang];
    var details = SERVICE_DETAILS[lang];

    // Check for service number
    var num = parseInt(text);
    if (num >= 1 && num <= 7) {
      var keys = ['tech', 'design', 'media', 'arch', 'eng', 'mobile', 'full'];
      return details[keys[num - 1]];
    }

    // Greetings
    if (/^(مرحب|السلام|hello|hi|مرحبا|اهل)/.test(text)) {
      return pickRandom(replies.greetings);
    }

    // Services
    if (/(خدمات|خدمة|services|offer)/.test(text) && !/(سعر|price|كم)/.test(text)) {
      return getServicesText(lang) + '\n\n' + (lang === 'ar' ? 'اختر رقم الخدمة للمزيد' : 'Choose a service number for details');
    }

    // Contact
    if (/(تواصل|اتصال|رقم|هاتف|جوال|phone|contact|call)/.test(text)) {
      return replies.contact;
    }

    // WhatsApp
    if (/(واتس|whatsapp|wa)/.test(text)) {
      return replies.contact;
    }

    // Project / Start
    if (/(مشروع|ابدأ|project|start|طلب|request)/.test(text)) {
      return replies.project;
    }

    // Pricing
    if (/(سعر|كم|تكلفة|price|cost|pricing)/.test(text)) {
      return replies.price;
    }

    // Location
    if (/(موقع|مكان|عنوان|location|where|address)/.test(text)) {
      return replies.location;
    }

    // Hours
    if (/(دوام|ساعات|وقت|hours|time|مواعيد)/.test(text)) {
      return replies.hours;
    }

    // Thanks
    if (/(شكر|thanks|thank|ok|تمام)/.test(text)) {
      return replies.thanks;
    }

    // Unknown
    return replies.unknown + '\n\n' + (lang === 'ar'
      ? 'يمكنك اختيار:\n1️⃣ الخدمات\n2️⃣ التواصل\n3️⃣ أبدأ مشروع\n4️⃣ الأسعار'
      : 'You can choose:\n1️⃣ Services\n2️⃣ Contact\n3️⃣ Start Project\n4️⃣ Pricing');
  }

  /* === OpenAI READY ===
     لتفعيل OpenAI، عدّل الدالة التالية:
     async function handleChatMessage(input) {
       const response = await fetch('https://api.openai.com/v1/chat/completions', {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json',
           'Authorization': 'Bearer YOUR_API_KEY_HERE'
         },
         body: JSON.stringify({
           model: 'gpt-3.5-turbo',
           messages: [
             { role: 'system', content: 'You are SANAD assistant...' },
             { role: 'user', content: input }
           ]
         })
       });
       const data = await response.json();
       return data.choices[0].message.content;
     }
  */

  /* ==========================================
     UI
     ========================================== */

  var state = {
    open: false,
    messages: [],
    lang: getLang(),
  };

  function createChatbot() {
    if (document.getElementById('sanad-chatbot')) return;

    var container = document.createElement('div');
    container.id = 'sanad-chatbot';

    var button = document.createElement('button');
    button.className = 'chatbot-toggle';
    button.id = 'chatbot-toggle';
    button.setAttribute('aria-label', 'Toggle chatbot');
    button.innerHTML = '<i class="fas fa-comment-dots"></i>';

    var panel = document.createElement('div');
    panel.className = 'chatbot-panel';
    panel.id = 'chatbot-panel';

    var lang = getLang();
    var cfg = BOT_CONFIG[lang];

    panel.innerHTML =
      '<div class="chatbot-header">' +
        '<div class="chatbot-header-info">' +
          '<div class="chatbot-avatar"><img src="images/logo.png" alt="SANAD"></div>' +
          '<div>' +
            '<div class="chatbot-title">' + cfg.title + '</div>' +
            '<div class="chatbot-subtitle">' + cfg.subtitle + '</div>' +
          '</div>' +
        '</div>' +
        '<button class="chatbot-close" id="chatbot-close" aria-label="Close">&times;</button>' +
      '</div>' +
      '<div class="chatbot-messages" id="chatbot-messages">' +
        '<div class="chatbot-msg bot welcome-msg">' +
          '<div class="msg-content">' + pickRandom(BOT_REPLIES[lang].greetings) + '</div>' +
          '<div class="msg-actions">' +
            '<button class="chat-action" data-action="services">💼 ' + cfg.services + '</button>' +
            '<button class="chat-action" data-action="contact">📞 ' + cfg.contact + '</button>' +
            '<button class="chat-action" data-action="project">🚀 ' + cfg.project + '</button>' +
            '<button class="chat-action" data-action="price">💰 ' + cfg.price + '</button>' +
          '</div>' +
        '</div>' +
      '</div>' +
      '<div class="chatbot-input-area">' +
        '<input type="text" class="chatbot-input" id="chatbot-input" placeholder="' + cfg.inputPlaceholder + '" autocomplete="off">' +
        '<button class="chatbot-send" id="chatbot-send" aria-label="' + cfg.sendBtn + '"><i class="fas fa-paper-plane"></i></button>' +
      '</div>';

    container.appendChild(button);
    container.appendChild(panel);
    document.body.appendChild(container);
  }

  function toggleChat(open) {
    var panel = document.getElementById('chatbot-panel');
    var btn = document.getElementById('chatbot-toggle');
    if (!panel || !btn) return;
    state.open = open !== undefined ? open : !state.open;
    panel.classList.toggle('active', state.open);
    btn.classList.toggle('active', state.open);

    if (state.open) {
      var input = document.getElementById('chatbot-input');
      if (input) setTimeout(function () { input.focus(); }, 300);
    }
  }

  function scrollToBottom() {
    var msgs = document.getElementById('chatbot-messages');
    if (msgs) msgs.scrollTop = msgs.scrollHeight;
  }

  function addMessage(text, isBot) {
    state.messages.push({ text: text, bot: isBot });
    var msgs = document.getElementById('chatbot-messages');
    if (!msgs) return;

    var div = document.createElement('div');
    div.className = 'chatbot-msg ' + (isBot ? 'bot' : 'user');

    var content = document.createElement('div');
    content.className = 'msg-content';
    content.textContent = text;
    div.appendChild(content);

    msgs.appendChild(div);
    scrollToBottom();
  }

  function showBotReply(text) {
    addMessage(text, true);

    // Show quick actions for certain responses
    var msgs = document.getElementById('chatbot-messages');
    if (!msgs) return;

    var lang = getLang();
    var cfg = BOT_CONFIG[lang];
    var isGreeting = BOT_REPLIES[lang].greetings.some(function (g) {
      return text === g;
    });
    var isUnknown = text === BOT_REPLIES[lang].unknown ||
                    text.indexOf(BOT_REPLIES[lang].unknown) === 0;

    if (isGreeting || isUnknown) {
      var actions = document.createElement('div');
      actions.className = 'chatbot-msg bot';
      var actContent = document.createElement('div');
      actContent.className = 'msg-actions';
      actContent.innerHTML =
        '<button class="chat-action" data-action="services">💼 ' + cfg.services + '</button>' +
        '<button class="chat-action" data-action="contact">📞 ' + cfg.contact + '</button>' +
        '<button class="chat-action" data-action="project">🚀 ' + cfg.project + '</button>' +
        '<button class="chat-action" data-action="price">💰 ' + cfg.price + '</button>';
      actions.appendChild(actContent);
      msgs.appendChild(actions);
    }

    scrollToBottom();
  }

  function handleSend() {
    var input = document.getElementById('chatbot-input');
    if (!input) return;
    var text = input.value.trim();
    if (!text) return;

    input.value = '';
    addMessage(text, false);

    // Simulate typing
    var msgs = document.getElementById('chatbot-messages');
    if (msgs) {
      var typing = document.createElement('div');
      typing.className = 'chatbot-msg bot typing-indicator';
      typing.innerHTML = '<div class="msg-content"><span></span><span></span><span></span></div>';
      typing.id = 'chatbot-typing';
      msgs.appendChild(typing);
      scrollToBottom();
    }

    setTimeout(function () {
      var typingEl = document.getElementById('chatbot-typing');
      if (typingEl) typingEl.remove();

      var reply = handleChatMessage(text);
      showBotReply(reply);
    }, 600 + Math.random() * 400);
  }

  function initEvents() {
    document.addEventListener('click', function (e) {
      // Toggle button
      if (e.target.closest('#chatbot-toggle')) {
        toggleChat();
        return;
      }

      // Close button
      if (e.target.closest('#chatbot-close')) {
        toggleChat(false);
        return;
      }

      // Send button
      if (e.target.closest('#chatbot-send')) {
        handleSend();
        return;
      }

      // Quick action buttons
      var actionBtn = e.target.closest('.chat-action');
      if (actionBtn) {
        var action = actionBtn.getAttribute('data-action');
        var lang = getLang();
        var replies = BOT_REPLIES[lang];

        switch (action) {
          case 'services':
            handleSendText(lang === 'ar' ? 'الخدمات' : 'services');
            break;
          case 'contact':
            handleSendText(lang === 'ar' ? 'التواصل' : 'contact');
            break;
          case 'project':
            handleSendText(lang === 'ar' ? 'أبدأ مشروع' : 'start project');
            break;
          case 'price':
            handleSendText(lang === 'ar' ? 'الأسعار' : 'pricing');
            break;
        }
        return;
      }
    });

    // Enter key
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') {
        var input = document.getElementById('chatbot-input');
        if (input && document.activeElement === input) {
          handleSend();
        }
      }
    });
  }

  function handleSendText(text) {
    var input = document.getElementById('chatbot-input');
    if (input) {
      input.value = text;
      handleSend();
    }
  }

  /* ==========================================
     INIT
     ========================================== */
  function init() {
    createChatbot();
    initEvents();

    // Listen for language changes to update UI
    var langBtn = document.getElementById('lang-toggle');
    if (langBtn) {
      var observer = new MutationObserver(function () {
        state.lang = getLang();
      });
      observer.observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
