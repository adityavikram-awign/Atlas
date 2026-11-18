/* ============================================================
   All site copy (EN + HI + KN + MR) and launch config.
   English is the default language. Every language has the same keys.
   ============================================================ */

const I18N = {
  "en": {
    "themeLabel": "Switch theme",
    "heroEyebrow": "Atlas Project · India",
    "heroTitle": "Get paid to record the housework you already do.",
    "heroLede": "Record short first-person videos of simple everyday tasks — cooking, cleaning, pouring, organising — and earn for every hour that passes the quality check.",
    "heroCta": "Join the WhatsApp group",
    "groupSoon": "Group link coming soon",
    "aboutTitle": "What is the Atlas Project?",
    "aboutBody": "The Atlas Project collects high-quality videos of people doing simple, everyday tasks at home. These videos train AI and robotics systems to recognise and copy human hand movements, the order of steps in a task, and real-world actions.",
    "eligTitle": "Who can join",
    "eligBody": "Check all seven before you start. Recordings that don't meet them won't pass the quality check.",
    "elig": [
      {
        "t": "iPhone 12 or newer",
        "d": "Android phones and older iPhones are not supported."
      },
      {
        "t": "A stable indoor space",
        "d": "A real home where you can record everyday tasks — not a warehouse, Airbnb or a set made for filming."
      },
      {
        "t": "A head-mount — mandatory",
        "d": "The phone sits on your head in landscape, so the video stays steady and both hands stay in view."
      },
      {
        "t": "Comfortable with household tasks",
        "d": "You can do the work naturally, with clear movements and both hands in frame."
      },
      {
        "t": "1 to 5 approved hours a day",
        "d": "Submit at least 1 hour and at most 5 hours of approved video every day."
      },
      {
        "t": "A tidy space",
        "d": "Keep the area as clutter-free as you can, so the task is easy to see."
      },
      {
        "t": "Follow the guidelines",
        "d": "The SOP and the hand-visibility rules are followed strictly, in every video."
      }
    ],
    "ddTitle": "Do's and don'ts",
    "ddBody": "The quick version. The full list of rejection and flagging reasons is right below.",
    "doTitle": "Do",
    "do": [
      "Keep both hands visible in the frame",
      "Do the activity naturally",
      "Work at your normal pace",
      "Follow the task instructions",
      "Wear the head-mount and record in landscape",
      "Stand, or sit on a chair at a table or counter"
    ],
    "dontTitle": "Don't",
    "dont": [
      "Record without a head-mount",
      "Pretend to work or slow down on purpose",
      "Record in warehouses, Airbnbs or set-ups made for filming",
      "Let your hands go outside the frame",
      "Sit on the floor when the task doesn't need it",
      "Show children, IDs or screens with personal details"
    ],
    "rejTitle": "Why videos get rejected or flagged",
    "rejBody": "Every video goes through a quality check. Rejected videos are not paid. Flagged videos are still paid, but you must fix the issue in your next recordings.",
    "p0Title": "Rejected — not paid",
    "p0Sub": "Must be avoided completely",
    "p1Title": "Flagged — still paid",
    "p1Sub": "Must be improved",
    "grpTask": "Task content",
    "grpCamera": "Camera and setup",
    "p0Task": [
      {
        "t": "Not suitable for work (NSFW)",
        "d": "Nudity (partial or full), sexual or explicit content, bathroom use, vulgar gestures or inappropriate actions."
      },
      {
        "t": "Violent or gory imagery",
        "d": "Weapons (guns, ammunition, assembly), visible blood, injuries or open wounds, animal carcasses at a butcher."
      },
      {
        "t": "Unethical tasks",
        "d": "Controversial or unethical tasks because of how they are done — e.g. bird's nest, dog meat, foie gras production."
      },
      {
        "t": "Illegal substances or activity",
        "d": "Smoking cigarettes or vaping, drugs or illegal substances, or any illegal activity."
      },
      {
        "t": "Personal information (PII)",
        "d": "IDs, passports, licences, documents with names, addresses or phone numbers, screens showing personal or financial data."
      },
      {
        "t": "Inactivity or test video",
        "d": "No real task happening, eating or using your phone while recording, long idle periods, idle time while a machine runs."
      },
      {
        "t": "Fake task / bad actor",
        "d": "Unrealistic, staged or meaningless tasks, farming for hours, repeating actions — e.g. spraying an empty bottle, stacking and unstacking plates."
      },
      {
        "t": "Poor image quality",
        "d": "Poor lighting, grainy noise, a blurry lens."
      },
      {
        "t": "Children in frame",
        "d": "Any child visible in the frame, or the person recording is a child. Videos with children under 18 are never used."
      },
      {
        "t": "Hands not in frame",
        "d": "Hands fully missing, blocked by objects or leaving the frame during the task. Heavy gloves that hide finger movement (thin, snug gloves are fine unless they match the background)."
      }
    ],
    "p0Camera": [
      {
        "t": "Tripod or no head-mount",
        "d": "The camera is on a tripod or anywhere other than your head."
      },
      {
        "t": "Camera covered",
        "d": "The lens is covered or blocked — black screen, partly blocked, objects over the lens."
      },
      {
        "t": "Camera broken",
        "d": "Severe distortion, missing picture, corrupted playback, streaks."
      }
    ],
    "p1Task": [
      {
        "t": "Low-priority task",
        "d": "An environment, task or job marked as low priority when you recorded it, including tasks on the banned list."
      },
      {
        "t": "Wrong task details",
        "d": "The task, category or place chosen doesn't match the video — e.g. labelled as car repair but you're cooking."
      },
      {
        "t": "Barefoot",
        "d": "No shoes, or sandals or open-toed footwear — for you and anyone else in the video."
      },
      {
        "t": "Touching animals",
        "d": "Flagged only if you touch or handle an animal. Animals simply nearby are fine."
      },
      {
        "t": "Sitting on the floor",
        "d": "Sitting on the ground, cross-legged (even on a chair) or lying on a bed. Stand, or sit on a chair at a table or counter. Brief squatting is fine if the task needs it."
      },
      {
        "t": "Too much shaking",
        "d": "Camera movement so strong that the video is hard to use."
      }
    ],
    "p1Camera": [
      {
        "t": "Bad lighting",
        "d": "Too bright or too dark, so hands and objects are hard to see."
      },
      {
        "t": "Bad angle",
        "d": "The camera points too high or too low, so hands keep leaving the frame."
      },
      {
        "t": "Head-strap visible",
        "d": "The strap, mount or a cap is clearly visible in the frame."
      },
      {
        "t": "Adjusting the camera",
        "d": "You are seen adjusting the camera or touching your face during the task."
      },
      {
        "t": "Wrong camera orientation",
        "d": "The phone is mounted or turned the wrong way."
      }
    ],
    "payTitle": "Quality check and payment",
    "payBody": "All videos go through a quality check (QC). You are paid only for QC-approved production hours.",
    "payRate": "₹250",
    "payRateL": "per QC-approved production hour",
    "payPoints": [
      "Payment is based only on QC-approved hours.",
      "Rejected hours are not paid.",
      "Flagged videos are still paid — fix the issue in your next recordings.",
      "Payouts go to the bank account you add in the Awign app, so keep those details correct."
    ],
    "faqTitle": "Questions",
    "faq": [
      {
        "q": "Which phone do I need?",
        "a": "An iPhone 12 or newer. Android phones and older iPhones are not supported."
      },
      {
        "q": "How much will I earn?",
        "a": "₹250 for every QC-approved production hour. Rejected hours are not paid."
      },
      {
        "q": "How many hours should I record?",
        "a": "At least 1 hour and at most 5 hours of approved video every day."
      },
      {
        "q": "What's the difference between the Awign app and Atlas Capture?",
        "a": "The Awign app is for registration, the offer letter and your bank details. Atlas Capture is where you record your videos."
      },
      {
        "q": "I didn't get the OTP. What now?",
        "a": "Check that you're entering the same mobile number you shared with our team. If it still doesn't come, send a screenshot in the WhatsApp group."
      },
      {
        "q": "What's the difference between rejected and flagged?",
        "a": "A rejected video is not paid. A flagged video is still paid, but you need to fix the issue in your next videos."
      },
      {
        "q": "Where can I record?",
        "a": "In a real home, indoors, in a tidy space. Not in warehouses, Airbnbs or set-ups made for filming."
      },
      {
        "q": "Do I need the head-mount?",
        "a": "Yes, always. Without a head-mount the video is rejected."
      },
      {
        "q": "Why do you need my PAN and bank details?",
        "a": "To pay you. Enter them only inside the Awign app — never send them to anyone in chat."
      },
      {
        "q": "Does Awign ever ask for money?",
        "a": "Never. There is no fee or deposit at any stage. If someone asks you for money in Awign's name, don't pay, and tell us in the group."
      }
    ],
    "ctaTitle": "Ready to start?",
    "ctaBody": "Join the WhatsApp group, then follow the steps above. We're there to help if you get stuck.",
    "footTag": "First-person video data for AI and robotics. Atlas Project, India.",
    "fRules": "Rules",
    "fPay": "Payment",
    "footRights": "© 2026 Awign AI Operations. Part of the Mynavi Group. All rights reserved.",
    "heroStart": "Start onboarding",
    "heroRules": "See the rules",
    "rateTitle": "What you can earn",
    "calcLabel": "Approved hours a day",
    "calcDay": "a day",
    "calc30": "in 30 days at this pace",
    "calcNote": "Only QC-approved hours are paid.",
    "chips": [
      "iPhone 12 or newer",
      "Head-mount, landscape",
      "1–5 hours a day",
      "Work from home"
    ],
    "stepsTitle": "How to start",
    "stepsBody": "Do these steps in order. Stuck anywhere? Send a screenshot in the WhatsApp group and we'll guide you.",
    "stepsNoteT": "Use the same mobile number",
    "stepsNote": "Log in with the mobile number you shared with our team, and fill in every detail carefully. A mismatch can delay your onboarding or payouts.",
    "steps": [
      {
        "t": "Join the WhatsApp group",
        "d": "Tasks, updates and help are all shared in the group."
      },
      {
        "t": "Install the Awign app",
        "d": "Your registration, offer letter and bank details are all handled in the Awign app."
      },
      {
        "t": "Log in with OTP",
        "list": [
          "Open the Awign app.",
          "Enter the mobile number you shared with our team.",
          "Type in the OTP you receive on that number."
        ]
      },
      {
        "t": "Sign the offer letter",
        "d": "Open the offer letter link and complete the process."
      },
      {
        "t": "Add your bank details",
        "d": "After the offer letter is signed:",
        "list": [
          "In the Awign app, go to Earnings → Beneficiary.",
          "Upload a photo of your PAN card and enter your PAN number.",
          "Add your bank account details.",
          "Check everything, then submit."
        ]
      },
      {
        "t": "Confirm in the group",
        "d": "Post in the WhatsApp group that you're done. Stuck at any step? Share a screenshot there and we'll guide you step by step."
      }
    ],
    "btnApp": "Get the Awign app",
    "btnOffer": "Open the offer letter",
    "rulesTitle": "Before you record",
    "rulesBody": "Check these before your first video. Recordings that miss them won't pass the quality check.",
    "tapHint": "Tap a reason to see examples.",
    "payTipT": "Avoid the common mistakes",
    "payTip": "Most rejections come from hands out of frame, no head-mount, the wrong place, sitting on the floor without need, and fake or slowed-down work.",
    "footProgram": "Programme",
    "footCompany": "Company",
    "footSupport": "Support",
    "fSteps": "How to start",
    "fReasons": "Rejection reasons",
    "fFaq": "Questions",
    "fAwign": "Awign.com",
    "fAwignApp": "Awign app",
    "fGroup": "WhatsApp group",
    "fPrivacy": "Privacy",
    "fTerms": "Terms",
    "exTitle": "See what the work looks like",
    "exBody": "Ordinary tasks, filmed from where your eyes are. Below are six real recordings: three that passed review and three that were rejected.",
    "workCap": [
      "Washing up",
      "Sorting and organising",
      "Cleaning a surface",
      "Making something by hand"
    ],
    "goodTag": "Do it like this",
    "goodHeading": "Footage that passes",
    "goodClips": [
      "Folding clothes",
      "Cleaning utensils",
      "Ironing clothes"
    ],
    "badTag": "Never do this",
    "badHeading": "Footage that gets rejected",
    "badClips": [
      "Not a meaningful task",
      "Intentionally slow",
      "Poor lighting"
    ],
    "fExamples": "Examples"
  },
  "hi": {
    "themeLabel": "थीम बदलें",
    "heroEyebrow": "एटलस प्रोजेक्ट · भारत",
    "heroTitle": "घर के जो काम आप रोज़ करते हैं, उन्हें रिकॉर्ड करके कमाइए।",
    "heroLede": "रोज़मर्रा के आसान कामों — खाना बनाना, सफ़ाई, कुछ डालना, सामान जमाना — के छोटे फ़र्स्ट-पर्सन वीडियो रिकॉर्ड करें और क्वालिटी चेक में पास होने वाले हर घंटे के पैसे पाएँ।",
    "heroCta": "WhatsApp ग्रुप से जुड़ें",
    "groupSoon": "ग्रुप लिंक जल्द आएगा",
    "aboutTitle": "एटलस प्रोजेक्ट क्या है?",
    "aboutBody": "एटलस प्रोजेक्ट में लोगों के घर पर रोज़मर्रा के आसान काम करते हुए अच्छी क्वालिटी के वीडियो इकट्ठा किए जाते हैं। इन वीडियो से AI और रोबोटिक्स सिस्टम इंसानी हाथों की हरकतें, काम के स्टेप्स का क्रम और असली दुनिया की गतिविधियाँ पहचानना और दोहराना सीखते हैं।",
    "eligTitle": "कौन जुड़ सकता है",
    "eligBody": "शुरू करने से पहले ये सातों बातें जाँच लें। जो रिकॉर्डिंग इन पर खरी नहीं उतरती, वह क्वालिटी चेक में पास नहीं होगी।",
    "elig": [
      {
        "t": "iPhone 12 या उससे नया",
        "d": "Android फ़ोन और पुराने iPhone नहीं चलेंगे।"
      },
      {
        "t": "घर के अंदर स्थिर जगह",
        "d": "असली घर जहाँ आप रोज़ के काम रिकॉर्ड कर सकें — गोदाम, Airbnb या शूटिंग के लिए बनाया सेट नहीं।"
      },
      {
        "t": "हेड-माउंट — ज़रूरी",
        "d": "फ़ोन सिर पर लैंडस्केप में लगा हो, ताकि वीडियो स्थिर रहे और दोनों हाथ दिखते रहें।"
      },
      {
        "t": "घर के काम आराम से कर सकें",
        "d": "काम स्वाभाविक तरीके से करें, साफ़ हरकतों के साथ और दोनों हाथ फ़्रेम में रखते हुए।"
      },
      {
        "t": "रोज़ 1 से 5 अप्रूव्ड घंटे",
        "d": "हर दिन कम से कम 1 घंटा और ज़्यादा से ज़्यादा 5 घंटे का अप्रूव्ड वीडियो जमा करें।"
      },
      {
        "t": "साफ़-सुथरी जगह",
        "d": "जगह को जितना हो सके बिखराव से मुक्त रखें, ताकि काम साफ़ दिखे।"
      },
      {
        "t": "दिशानिर्देशों का पालन",
        "d": "हर वीडियो में SOP और हाथ दिखाने के नियमों का सख़्ती से पालन करें।"
      }
    ],
    "ddTitle": "क्या करें और क्या न करें",
    "ddBody": "छोटा सार। रिजेक्शन और फ़्लैग होने के पूरे कारण ठीक नीचे हैं।",
    "doTitle": "करें",
    "do": [
      "दोनों हाथ फ़्रेम में दिखते रहें",
      "काम स्वाभाविक तरीके से करें",
      "अपनी सामान्य रफ़्तार से काम करें",
      "टास्क के निर्देशों का पालन करें",
      "हेड-माउंट पहनें और लैंडस्केप में रिकॉर्ड करें",
      "खड़े रहें, या टेबल/काउंटर पर कुर्सी पर बैठें"
    ],
    "dontTitle": "न करें",
    "dont": [
      "बिना हेड-माउंट के रिकॉर्ड करना",
      "काम करने का दिखावा करना या जानबूझकर धीरे करना",
      "गोदाम, Airbnb या शूटिंग के सेट पर रिकॉर्ड करना",
      "हाथों को फ़्रेम से बाहर जाने देना",
      "बिना ज़रूरत ज़मीन पर बैठना",
      "बच्चे, पहचान पत्र या निजी जानकारी वाली स्क्रीन दिखाना"
    ],
    "rejTitle": "वीडियो रिजेक्ट या फ़्लैग क्यों होते हैं",
    "rejBody": "हर वीडियो की क्वालिटी जाँच होती है। रिजेक्ट हुए वीडियो के पैसे नहीं मिलते। फ़्लैग हुए वीडियो के पैसे मिलते हैं, लेकिन अगली रिकॉर्डिंग में वह कमी ठीक करनी होगी।",
    "p0Title": "रिजेक्ट — भुगतान नहीं",
    "p0Sub": "इनसे पूरी तरह बचें",
    "p1Title": "फ़्लैग — भुगतान मिलेगा",
    "p1Sub": "इनमें सुधार ज़रूरी है",
    "grpTask": "काम से जुड़े",
    "grpCamera": "कैमरा और सेटअप",
    "p0Task": [
      {
        "t": "काम के लिए अनुचित (NSFW)",
        "d": "नग्नता (आंशिक या पूरी), यौन या अश्लील सामग्री, बाथरूम का उपयोग, अभद्र इशारे या अनुचित हरकतें।"
      },
      {
        "t": "हिंसक या खून-ख़राबे वाले दृश्य",
        "d": "हथियार (बंदूक, गोला-बारूद, उन्हें जोड़ना), दिखता खून, चोट या खुले घाव, कसाई की दुकान पर जानवरों के शव।"
      },
      {
        "t": "अनैतिक काम",
        "d": "ऐसे विवादित या अनैतिक काम जो जिस तरह किए जाते हैं उसकी वजह से गलत हैं — जैसे बर्ड्स नेस्ट, कुत्ते का मांस, फ़ोई ग्रा बनाना।"
      },
      {
        "t": "अवैध पदार्थ या गतिविधि",
        "d": "सिगरेट या वेप पीना, नशीले या अवैध पदार्थ, या कोई भी अवैध गतिविधि।"
      },
      {
        "t": "निजी जानकारी (PII)",
        "d": "पहचान पत्र, पासपोर्ट, लाइसेंस, नाम/पता/फ़ोन नंबर वाले दस्तावेज़, निजी या आर्थिक जानकारी दिखाती स्क्रीन।"
      },
      {
        "t": "निष्क्रियता या टेस्ट वीडियो",
        "d": "कोई असली काम न होना, रिकॉर्ड करते हुए खाना या फ़ोन चलाना, लंबे समय तक कुछ न करना, मशीन चलते समय खाली खड़े रहना।"
      },
      {
        "t": "नकली काम / ग़लत नीयत",
        "d": "अवास्तविक, दिखावटी या बेमतलब काम, घंटे बढ़ाने के लिए रिकॉर्डिंग, एक ही काम दोहराना — जैसे खाली बोतल से स्प्रे करना, प्लेटें बार-बार रखना-उठाना।"
      },
      {
        "t": "ख़राब तस्वीर",
        "d": "कम रोशनी, दानेदार तस्वीर, धुंधला लेंस।"
      },
      {
        "t": "फ़्रेम में बच्चे",
        "d": "फ़्रेम में कोई भी बच्चा दिखे, या रिकॉर्ड करने वाला ख़ुद बच्चा हो। 18 साल से कम उम्र के बच्चों वाले वीडियो कभी इस्तेमाल नहीं होते।"
      },
      {
        "t": "हाथ फ़्रेम में नहीं",
        "d": "हाथ बिल्कुल न दिखें, चीज़ों के पीछे छिप जाएँ या काम के दौरान फ़्रेम से बाहर चले जाएँ। मोटे दस्ताने जिनसे उंगलियों की हरकत न दिखे (पतले, फ़िट दस्ताने ठीक हैं, अगर वे पृष्ठभूमि के रंग के न हों)।"
      }
    ],
    "p0Camera": [
      {
        "t": "ट्राइपॉड या बिना हेड-माउंट",
        "d": "कैमरा ट्राइपॉड पर या सिर के अलावा कहीं और लगा है।"
      },
      {
        "t": "कैमरा ढका हुआ",
        "d": "लेंस ढका या रुका हुआ है — काली स्क्रीन, आंशिक रुकावट, लेंस पर कोई चीज़।"
      },
      {
        "t": "कैमरा ख़राब",
        "d": "तस्वीर बहुत बिगड़ी हुई, तस्वीर ग़ायब, वीडियो ख़राब चलना, धारियाँ।"
      }
    ],
    "p1Task": [
      {
        "t": "कम प्राथमिकता वाला काम",
        "d": "रिकॉर्डिंग के समय जिस जगह, काम या जॉब को कम प्राथमिकता बताया गया था, जिसमें प्रतिबंधित सूची के काम भी शामिल हैं।"
      },
      {
        "t": "ग़लत टास्क जानकारी",
        "d": "चुना गया टास्क, कैटेगरी या जगह वीडियो से मेल नहीं खाती — जैसे लेबल कार मरम्मत का है लेकिन आप खाना बना रहे हैं।"
      },
      {
        "t": "नंगे पैर",
        "d": "जूते न पहनना, या चप्पल/खुले पंजे वाले जूते — आपके और वीडियो में दिख रहे किसी और के लिए भी।"
      },
      {
        "t": "जानवरों को छूना",
        "d": "सिर्फ़ तब फ़्लैग होता है जब आप किसी जानवर को छूते या पकड़ते हैं। आसपास जानवर का होना ठीक है।"
      },
      {
        "t": "ज़मीन पर बैठना",
        "d": "ज़मीन पर बैठना, पालथी मारकर बैठना (कुर्सी पर भी) या बिस्तर पर लेटना। खड़े रहें, या टेबल/काउंटर पर कुर्सी पर बैठें। ज़रूरत हो तो थोड़ी देर उकड़ूँ बैठना ठीक है।"
      },
      {
        "t": "बहुत ज़्यादा हिलना",
        "d": "कैमरा इतना हिले कि वीडियो काम का न रहे।"
      }
    ],
    "p1Camera": [
      {
        "t": "ख़राब रोशनी",
        "d": "बहुत ज़्यादा या बहुत कम रोशनी, जिससे हाथ और चीज़ें साफ़ न दिखें।"
      },
      {
        "t": "ग़लत एंगल",
        "d": "कैमरा बहुत ऊपर या बहुत नीचे है, जिससे हाथ बार-बार फ़्रेम से बाहर जाते हैं।"
      },
      {
        "t": "हेड-स्ट्रैप दिखना",
        "d": "स्ट्रैप, माउंट या टोपी फ़्रेम में साफ़ दिख रही है।"
      },
      {
        "t": "कैमरा ठीक करना",
        "d": "काम के दौरान आप कैमरा ठीक करते या चेहरा छूते दिख रहे हैं।"
      },
      {
        "t": "कैमरे की ग़लत दिशा",
        "d": "फ़ोन ग़लत तरीके से लगा या घुमाया हुआ है।"
      }
    ],
    "payTitle": "क्वालिटी चेक और भुगतान",
    "payBody": "सभी वीडियो की क्वालिटी जाँच (QC) होती है। भुगतान सिर्फ़ QC-अप्रूव्ड प्रोडक्शन घंटों का होता है।",
    "payRate": "₹250",
    "payRateL": "हर QC-अप्रूव्ड प्रोडक्शन घंटे के लिए",
    "payPoints": [
      "भुगतान सिर्फ़ QC-अप्रूव्ड घंटों पर होता है।",
      "रिजेक्ट हुए घंटों का भुगतान नहीं होता।",
      "फ़्लैग हुए वीडियो का भुगतान होता है — अगली रिकॉर्डिंग में गलती सुधारें।",
      "पेमेंट उसी बैंक खाते में आता है जो आप Awign ऐप में जोड़ते हैं, इसलिए डिटेल्स सही रखें।"
    ],
    "faqTitle": "सवाल-जवाब",
    "faq": [
      {
        "q": "कौन सा फ़ोन चाहिए?",
        "a": "iPhone 12 या नया। Android फ़ोन और पुराने iPhone सपोर्टेड नहीं हैं।"
      },
      {
        "q": "कितनी कमाई होगी?",
        "a": "हर QC-अप्रूव्ड प्रोडक्शन घंटे के ₹250। रिजेक्ट हुए घंटों का भुगतान नहीं होता।"
      },
      {
        "q": "रोज़ कितने घंटे रिकॉर्ड करने हैं?",
        "a": "रोज़ कम से कम 1 और ज़्यादा से ज़्यादा 5 घंटे का अप्रूव्ड वीडियो।"
      },
      {
        "q": "Awign ऐप और Atlas Capture में क्या फ़र्क है?",
        "a": "Awign ऐप में रजिस्ट्रेशन, ऑफ़र लेटर और बैंक डिटेल्स होते हैं। Atlas Capture में आप वीडियो रिकॉर्ड करते हैं।"
      },
      {
        "q": "OTP नहीं आया तो क्या करें?",
        "a": "देखें कि आप वही मोबाइल नंबर डाल रहे हैं जो आपने हमारी टीम को दिया है। फिर भी न आए तो WhatsApp ग्रुप में स्क्रीनशॉट भेजें।"
      },
      {
        "q": "रिजेक्ट और फ़्लैग में क्या फ़र्क है?",
        "a": "रिजेक्ट हुए वीडियो का भुगतान नहीं होता। फ़्लैग हुए वीडियो का भुगतान होता है, लेकिन अगले वीडियो में गलती सुधारनी होगी।"
      },
      {
        "q": "कहाँ रिकॉर्ड कर सकते हैं?",
        "a": "असली घर में, अंदर, साफ़-सुथरी जगह पर। वेयरहाउस, Airbnb या शूटिंग के लिए बनाए सेट-अप में नहीं।"
      },
      {
        "q": "क्या हेड-माउंट ज़रूरी है?",
        "a": "हाँ, हमेशा। हेड-माउंट के बिना वीडियो रिजेक्ट हो जाता है।"
      },
      {
        "q": "PAN और बैंक डिटेल्स क्यों चाहिए?",
        "a": "आपको भुगतान करने के लिए। ये डिटेल्स सिर्फ़ Awign ऐप के अंदर भरें — चैट में कभी किसी को न भेजें।"
      },
      {
        "q": "क्या Awign कभी पैसे माँगता है?",
        "a": "कभी नहीं। किसी भी स्टेप पर कोई फ़ीस या डिपॉज़िट नहीं है। अगर कोई Awign के नाम पर पैसे माँगे, तो न दें और ग्रुप में बताएँ।"
      }
    ],
    "ctaTitle": "शुरू करने के लिए तैयार?",
    "ctaBody": "WhatsApp ग्रुप से जुड़ें, फिर ऊपर दिए स्टेप पूरे करें। अटकने पर हम मदद के लिए वहीं हैं।",
    "footTag": "AI और रोबोटिक्स के लिए फ़र्स्ट-पर्सन वीडियो डेटा। एटलस प्रोजेक्ट, भारत।",
    "fRules": "नियम",
    "fPay": "भुगतान",
    "footRights": "© 2026 Awign AI Operations. Mynavi Group का हिस्सा। सर्वाधिकार सुरक्षित।",
    "heroStart": "ऑनबोर्डिंग शुरू करें",
    "heroRules": "नियम देखें",
    "rateTitle": "आप कितना कमा सकते हैं",
    "calcLabel": "रोज़ के अप्रूव्ड घंटे",
    "calcDay": "प्रति दिन",
    "calc30": "इसी रफ़्तार से 30 दिनों में",
    "calcNote": "सिर्फ़ QC-अप्रूव्ड घंटों का भुगतान होता है।",
    "chips": [
      "iPhone 12 या नया",
      "हेड-माउंट, लैंडस्केप",
      "रोज़ 1–5 घंटे",
      "घर से काम"
    ],
    "stepsTitle": "शुरू कैसे करें",
    "stepsBody": "ये स्टेप क्रम से करें। कहीं अटकें तो WhatsApp ग्रुप में स्क्रीनशॉट भेजें — हम आपकी मदद करेंगे।",
    "stepsNoteT": "वही मोबाइल नंबर इस्तेमाल करें",
    "stepsNote": "उसी मोबाइल नंबर से लॉगिन करें जो आपने हमारी टीम को दिया है, और हर जानकारी ध्यान से भरें। गड़बड़ी होने पर ऑनबोर्डिंग या पेमेंट में देरी हो सकती है।",
    "steps": [
      {
        "t": "WhatsApp ग्रुप से जुड़ें",
        "d": "टास्क, अपडेट और मदद — सब ग्रुप में मिलते हैं।"
      },
      {
        "t": "Awign ऐप इंस्टॉल करें",
        "d": "रजिस्ट्रेशन, ऑफ़र लेटर और बैंक डिटेल्स — सब Awign ऐप में होते हैं।"
      },
      {
        "t": "OTP से लॉगिन करें",
        "list": [
          "Awign ऐप खोलें।",
          "वह मोबाइल नंबर डालें जो आपने हमारी टीम को दिया है।",
          "उस नंबर पर आया OTP डालें।"
        ]
      },
      {
        "t": "ऑफ़र लेटर साइन करें",
        "d": "ऑफ़र लेटर का लिंक खोलें और प्रक्रिया पूरी करें।"
      },
      {
        "t": "बैंक डिटेल्स जोड़ें",
        "d": "ऑफ़र लेटर साइन होने के बाद:",
        "list": [
          "Awign ऐप में Earnings → Beneficiary पर जाएँ।",
          "अपने PAN कार्ड की फ़ोटो अपलोड करें और PAN नंबर डालें।",
          "अपने बैंक खाते की डिटेल्स जोड़ें।",
          "सब कुछ जाँचें, फिर सबमिट करें।"
        ]
      },
      {
        "t": "ग्रुप में बताएँ",
        "d": "काम पूरा होने पर WhatsApp ग्रुप में बताएँ। किसी स्टेप पर अटके हैं? वहाँ स्क्रीनशॉट भेजें, हम आपको स्टेप-बाय-स्टेप गाइड करेंगे।"
      }
    ],
    "btnApp": "Awign ऐप डाउनलोड करें",
    "btnOffer": "ऑफ़र लेटर खोलें",
    "rulesTitle": "रिकॉर्ड करने से पहले",
    "rulesBody": "पहला वीडियो बनाने से पहले ये देख लें। इनका पालन न करने वाली रिकॉर्डिंग क्वालिटी चेक पास नहीं करेगी।",
    "tapHint": "उदाहरण देखने के लिए किसी कारण पर टैप करें।",
    "payTipT": "आम गलतियों से बचें",
    "payTip": "ज़्यादातर रिजेक्शन इन कारणों से होते हैं: हाथ फ़्रेम से बाहर, हेड-माउंट नहीं, गलत जगह, बिना ज़रूरत ज़मीन पर बैठना, और नकली या जानबूझकर धीमा काम।",
    "footProgram": "प्रोग्राम",
    "footCompany": "कंपनी",
    "footSupport": "सहायता",
    "fSteps": "शुरू कैसे करें",
    "fReasons": "रिजेक्शन के कारण",
    "fFaq": "सवाल-जवाब",
    "fAwign": "Awign.com",
    "fAwignApp": "Awign ऐप",
    "fGroup": "WhatsApp ग्रुप",
    "fPrivacy": "प्राइवेसी",
    "fTerms": "शर्तें",
    "exTitle": "काम कैसा दिखता है",
    "exBody": "आम घरेलू काम, आपकी आँखों की नज़र से रिकॉर्ड किए गए। नीचे छह असली रिकॉर्डिंग हैं: तीन जो पास हुईं और तीन जो रिजेक्ट हुईं।",
    "workCap": [
      "बर्तन धोना",
      "चीज़ें छाँटना और जमाना",
      "सतह साफ़ करना",
      "हाथ से कुछ बनाना"
    ],
    "goodTag": "ऐसे करें",
    "goodHeading": "जो रिकॉर्डिंग पास होती है",
    "goodClips": [
      "कपड़े तह करना",
      "बर्तन साफ़ करना",
      "कपड़े इस्त्री करना"
    ],
    "badTag": "ऐसा कभी न करें",
    "badHeading": "जो रिकॉर्डिंग रिजेक्ट होती है",
    "badClips": [
      "कोई सार्थक काम नहीं",
      "जानबूझकर धीमा काम",
      "कम रोशनी"
    ],
    "fExamples": "उदाहरण"
  },
  "kn": {
    "themeLabel": "ಥೀಮ್ ಬದಲಿಸಿ",
    "heroEyebrow": "ಅಟ್ಲಾಸ್ ಪ್ರಾಜೆಕ್ಟ್ · ಭಾರತ",
    "heroTitle": "ನೀವು ಪ್ರತಿದಿನ ಮಾಡುವ ಮನೆಗೆಲಸವನ್ನು ರೆಕಾರ್ಡ್ ಮಾಡಿ ಹಣ ಗಳಿಸಿ.",
    "heroLede": "ದಿನನಿತ್ಯದ ಸರಳ ಕೆಲಸಗಳ — ಅಡುಗೆ, ಸ್ವಚ್ಛತೆ, ಸುರಿಯುವುದು, ವಸ್ತುಗಳನ್ನು ಜೋಡಿಸುವುದು — ಚಿಕ್ಕ ಫಸ್ಟ್-ಪರ್ಸನ್ ವೀಡಿಯೊಗಳನ್ನು ರೆಕಾರ್ಡ್ ಮಾಡಿ, ಗುಣಮಟ್ಟ ಪರಿಶೀಲನೆಯಲ್ಲಿ ಪಾಸ್ ಆಗುವ ಪ್ರತಿ ಗಂಟೆಗೆ ಹಣ ಪಡೆಯಿರಿ.",
    "heroCta": "WhatsApp ಗುಂಪಿಗೆ ಸೇರಿ",
    "groupSoon": "ಗುಂಪಿನ ಲಿಂಕ್ ಶೀಘ್ರದಲ್ಲೇ",
    "aboutTitle": "ಅಟ್ಲಾಸ್ ಪ್ರಾಜೆಕ್ಟ್ ಎಂದರೇನು?",
    "aboutBody": "ಅಟ್ಲಾಸ್ ಪ್ರಾಜೆಕ್ಟ್ ಜನರು ಮನೆಯಲ್ಲಿ ಸರಳ ದಿನನಿತ್ಯದ ಕೆಲಸಗಳನ್ನು ಮಾಡುವ ಉತ್ತಮ ಗುಣಮಟ್ಟದ ವೀಡಿಯೊಗಳನ್ನು ಸಂಗ್ರಹಿಸುತ್ತದೆ. ಈ ವೀಡಿಯೊಗಳಿಂದ AI ಮತ್ತು ರೋಬೋಟಿಕ್ಸ್ ವ್ಯವಸ್ಥೆಗಳು ಮಾನವರ ಕೈ ಚಲನೆಗಳು, ಕೆಲಸದ ಹಂತಗಳ ಕ್ರಮ ಮತ್ತು ನೈಜ ಜಗತ್ತಿನ ಕ್ರಿಯೆಗಳನ್ನು ಗುರುತಿಸಲು ಮತ್ತು ಅನುಕರಿಸಲು ಕಲಿಯುತ್ತವೆ.",
    "eligTitle": "ಯಾರು ಸೇರಬಹುದು",
    "eligBody": "ಪ್ರಾರಂಭಿಸುವ ಮೊದಲು ಈ ಏಳನ್ನೂ ಪರಿಶೀಲಿಸಿ. ಇವುಗಳಿಗೆ ಹೊಂದದ ರೆಕಾರ್ಡಿಂಗ್ ಗುಣಮಟ್ಟ ಪರಿಶೀಲನೆಯಲ್ಲಿ ಪಾಸ್ ಆಗುವುದಿಲ್ಲ.",
    "elig": [
      {
        "t": "iPhone 12 ಅಥವಾ ಹೊಸದು",
        "d": "Android ಫೋನ್‌ಗಳು ಮತ್ತು ಹಳೆಯ iPhoneಗಳಿಗೆ ಬೆಂಬಲವಿಲ್ಲ."
      },
      {
        "t": "ಮನೆಯೊಳಗೆ ಸ್ಥಿರವಾದ ಸ್ಥಳ",
        "d": "ದಿನನಿತ್ಯದ ಕೆಲಸಗಳನ್ನು ರೆಕಾರ್ಡ್ ಮಾಡಬಹುದಾದ ನಿಜವಾದ ಮನೆ — ಗೋದಾಮು, Airbnb ಅಥವಾ ಚಿತ್ರೀಕರಣಕ್ಕಾಗಿ ಮಾಡಿದ ಸೆಟ್ ಅಲ್ಲ."
      },
      {
        "t": "ಹೆಡ್-ಮೌಂಟ್ — ಕಡ್ಡಾಯ",
        "d": "ಫೋನ್ ನಿಮ್ಮ ತಲೆಯ ಮೇಲೆ ಲ್ಯಾಂಡ್‌ಸ್ಕೇಪ್‌ನಲ್ಲಿರಬೇಕು, ಇದರಿಂದ ವೀಡಿಯೊ ಸ್ಥಿರವಾಗಿರುತ್ತದೆ ಮತ್ತು ಎರಡೂ ಕೈಗಳು ಕಾಣುತ್ತವೆ."
      },
      {
        "t": "ಮನೆಗೆಲಸಗಳನ್ನು ಆರಾಮವಾಗಿ ಮಾಡಬಲ್ಲಿರಿ",
        "d": "ಸ್ಪಷ್ಟ ಚಲನೆಗಳೊಂದಿಗೆ, ಎರಡೂ ಕೈಗಳನ್ನು ಫ್ರೇಮ್‌ನಲ್ಲಿಟ್ಟು ಸಹಜವಾಗಿ ಕೆಲಸ ಮಾಡಿ."
      },
      {
        "t": "ದಿನಕ್ಕೆ 1 ರಿಂದ 5 ಅನುಮೋದಿತ ಗಂಟೆ",
        "d": "ಪ್ರತಿದಿನ ಕನಿಷ್ಠ 1 ಗಂಟೆ ಮತ್ತು ಗರಿಷ್ಠ 5 ಗಂಟೆಗಳ ಅನುಮೋದಿತ ವೀಡಿಯೊ ಸಲ್ಲಿಸಿ."
      },
      {
        "t": "ಅಚ್ಚುಕಟ್ಟಾದ ಸ್ಥಳ",
        "d": "ಕೆಲಸ ಸ್ಪಷ್ಟವಾಗಿ ಕಾಣಲು ಸ್ಥಳವನ್ನು ಸಾಧ್ಯವಾದಷ್ಟು ಗೊಂದಲರಹಿತವಾಗಿಡಿ."
      },
      {
        "t": "ಮಾರ್ಗಸೂಚಿಗಳನ್ನು ಪಾಲಿಸಿ",
        "d": "ಪ್ರತಿ ವೀಡಿಯೊದಲ್ಲೂ SOP ಮತ್ತು ಕೈ ಕಾಣುವ ನಿಯಮಗಳನ್ನು ಕಟ್ಟುನಿಟ್ಟಾಗಿ ಪಾಲಿಸಿ."
      }
    ],
    "ddTitle": "ಮಾಡಬೇಕಾದ್ದು ಮತ್ತು ಮಾಡಬಾರದ್ದು",
    "ddBody": "ಸಂಕ್ಷಿಪ್ತ ರೂಪ. ತಿರಸ್ಕಾರ ಮತ್ತು ಫ್ಲ್ಯಾಗ್ ಆಗುವ ಸಂಪೂರ್ಣ ಕಾರಣಗಳು ಕೆಳಗಿವೆ.",
    "doTitle": "ಮಾಡಿ",
    "do": [
      "ಎರಡೂ ಕೈಗಳು ಫ್ರೇಮ್‌ನಲ್ಲಿ ಕಾಣುವಂತಿರಲಿ",
      "ಕೆಲಸವನ್ನು ಸಹಜವಾಗಿ ಮಾಡಿ",
      "ನಿಮ್ಮ ಸಾಮಾನ್ಯ ವೇಗದಲ್ಲಿ ಕೆಲಸ ಮಾಡಿ",
      "ಟಾಸ್ಕ್ ಸೂಚನೆಗಳನ್ನು ಪಾಲಿಸಿ",
      "ಹೆಡ್-ಮೌಂಟ್ ಧರಿಸಿ ಲ್ಯಾಂಡ್‌ಸ್ಕೇಪ್‌ನಲ್ಲಿ ರೆಕಾರ್ಡ್ ಮಾಡಿ",
      "ನಿಂತುಕೊಳ್ಳಿ, ಅಥವಾ ಟೇಬಲ್/ಕೌಂಟರ್ ಬಳಿ ಕುರ್ಚಿಯಲ್ಲಿ ಕುಳಿತುಕೊಳ್ಳಿ"
    ],
    "dontTitle": "ಮಾಡಬೇಡಿ",
    "dont": [
      "ಹೆಡ್-ಮೌಂಟ್ ಇಲ್ಲದೆ ರೆಕಾರ್ಡ್ ಮಾಡುವುದು",
      "ಕೆಲಸ ಮಾಡುತ್ತಿರುವಂತೆ ನಟಿಸುವುದು ಅಥವಾ ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ ನಿಧಾನಿಸುವುದು",
      "ಗೋದಾಮು, Airbnb ಅಥವಾ ಚಿತ್ರೀಕರಣದ ಸೆಟ್‌ನಲ್ಲಿ ರೆಕಾರ್ಡ್ ಮಾಡುವುದು",
      "ಕೈಗಳನ್ನು ಫ್ರೇಮ್‌ನಿಂದ ಹೊರಗೆ ಹೋಗಲು ಬಿಡುವುದು",
      "ಅಗತ್ಯವಿಲ್ಲದೆ ನೆಲದ ಮೇಲೆ ಕುಳಿತುಕೊಳ್ಳುವುದು",
      "ಮಕ್ಕಳು, ಗುರುತಿನ ಚೀಟಿಗಳು ಅಥವಾ ವೈಯಕ್ತಿಕ ಮಾಹಿತಿಯ ಸ್ಕ್ರೀನ್ ತೋರಿಸುವುದು"
    ],
    "rejTitle": "ವೀಡಿಯೊಗಳು ಏಕೆ ತಿರಸ್ಕೃತ ಅಥವಾ ಫ್ಲ್ಯಾಗ್ ಆಗುತ್ತವೆ",
    "rejBody": "ಪ್ರತಿ ವೀಡಿಯೊಗೂ ಗುಣಮಟ್ಟ ಪರಿಶೀಲನೆ ಇರುತ್ತದೆ. ತಿರಸ್ಕೃತ ವೀಡಿಯೊಗಳಿಗೆ ಹಣ ಸಿಗುವುದಿಲ್ಲ. ಫ್ಲ್ಯಾಗ್ ಆದ ವೀಡಿಯೊಗಳಿಗೆ ಹಣ ಸಿಗುತ್ತದೆ, ಆದರೆ ಮುಂದಿನ ರೆಕಾರ್ಡಿಂಗ್‌ಗಳಲ್ಲಿ ಆ ದೋಷವನ್ನು ಸರಿಪಡಿಸಬೇಕು.",
    "p0Title": "ತಿರಸ್ಕೃತ — ಹಣ ಇಲ್ಲ",
    "p0Sub": "ಸಂಪೂರ್ಣವಾಗಿ ತಪ್ಪಿಸಿ",
    "p1Title": "ಫ್ಲ್ಯಾಗ್ — ಹಣ ಸಿಗುತ್ತದೆ",
    "p1Sub": "ಸುಧಾರಣೆ ಅಗತ್ಯ",
    "grpTask": "ಕೆಲಸದ ವಿಷಯ",
    "grpCamera": "ಕ್ಯಾಮೆರಾ ಮತ್ತು ಸೆಟಪ್",
    "p0Task": [
      {
        "t": "ಕೆಲಸಕ್ಕೆ ಅನುಚಿತ (NSFW)",
        "d": "ನಗ್ನತೆ (ಭಾಗಶಃ ಅಥವಾ ಪೂರ್ಣ), ಲೈಂಗಿಕ ಅಥವಾ ಅಶ್ಲೀಲ ವಿಷಯ, ಸ್ನಾನಗೃಹದ ಬಳಕೆ, ಅಸಭ್ಯ ಸನ್ನೆಗಳು ಅಥವಾ ಅನುಚಿತ ಕ್ರಿಯೆಗಳು."
      },
      {
        "t": "ಹಿಂಸಾತ್ಮಕ ಅಥವಾ ರಕ್ತಸಿಕ್ತ ದೃಶ್ಯಗಳು",
        "d": "ಆಯುಧಗಳು (ಬಂದೂಕು, ಮದ್ದುಗುಂಡು, ಜೋಡಣೆ), ಕಾಣುವ ರಕ್ತ, ಗಾಯಗಳು ಅಥವಾ ತೆರೆದ ಗಾಯಗಳು, ಕಟುಕನ ಅಂಗಡಿಯಲ್ಲಿ ಪ್ರಾಣಿಗಳ ಶವಗಳು."
      },
      {
        "t": "ಅನೈತಿಕ ಕೆಲಸಗಳು",
        "d": "ಮಾಡುವ ವಿಧಾನದಿಂದಾಗಿ ವಿವಾದಾತ್ಮಕ ಅಥವಾ ಅನೈತಿಕವಾದ ಕೆಲಸಗಳು — ಉದಾ. ಬರ್ಡ್ಸ್ ನೆಸ್ಟ್, ನಾಯಿ ಮಾಂಸ, ಫೊಯ್ ಗ್ರಾ ತಯಾರಿಕೆ."
      },
      {
        "t": "ಅಕ್ರಮ ವಸ್ತುಗಳು ಅಥವಾ ಚಟುವಟಿಕೆ",
        "d": "ಸಿಗರೇಟ್ ಅಥವಾ ವೇಪ್ ಸೇದುವುದು, ಮಾದಕ ಅಥವಾ ಅಕ್ರಮ ವಸ್ತುಗಳು, ಅಥವಾ ಯಾವುದೇ ಅಕ್ರಮ ಚಟುವಟಿಕೆ."
      },
      {
        "t": "ವೈಯಕ್ತಿಕ ಮಾಹಿತಿ (PII)",
        "d": "ಗುರುತಿನ ಚೀಟಿ, ಪಾಸ್‌ಪೋರ್ಟ್, ಲೈಸೆನ್ಸ್, ಹೆಸರು/ವಿಳಾಸ/ಫೋನ್ ಸಂಖ್ಯೆ ಇರುವ ದಾಖಲೆಗಳು, ವೈಯಕ್ತಿಕ ಅಥವಾ ಹಣಕಾಸು ಮಾಹಿತಿ ತೋರಿಸುವ ಸ್ಕ್ರೀನ್‌ಗಳು."
      },
      {
        "t": "ನಿಷ್ಕ್ರಿಯತೆ ಅಥವಾ ಪರೀಕ್ಷಾ ವೀಡಿಯೊ",
        "d": "ನಿಜವಾದ ಕೆಲಸ ನಡೆಯದಿರುವುದು, ರೆಕಾರ್ಡ್ ಮಾಡುವಾಗ ತಿನ್ನುವುದು ಅಥವಾ ಫೋನ್ ಬಳಸುವುದು, ದೀರ್ಘ ಸಮಯ ಏನೂ ಮಾಡದಿರುವುದು, ಯಂತ್ರ ಚಲಿಸುವಾಗ ಸುಮ್ಮನಿರುವುದು."
      },
      {
        "t": "ನಕಲಿ ಕೆಲಸ / ದುರುದ್ದೇಶ",
        "d": "ಅವಾಸ್ತವಿಕ, ನಾಟಕೀಯ ಅಥವಾ ಅರ್ಥಹೀನ ಕೆಲಸಗಳು, ಗಂಟೆಗಳನ್ನು ಹೆಚ್ಚಿಸಲು ರೆಕಾರ್ಡಿಂಗ್, ಒಂದೇ ಕ್ರಿಯೆ ಪುನರಾವರ್ತನೆ — ಉದಾ. ಖಾಲಿ ಬಾಟಲಿಯಿಂದ ಸ್ಪ್ರೇ ಮಾಡುವುದು, ತಟ್ಟೆಗಳನ್ನು ಪದೇ ಪದೇ ಇಟ್ಟು ತೆಗೆಯುವುದು."
      },
      {
        "t": "ಕಳಪೆ ಚಿತ್ರ ಗುಣಮಟ್ಟ",
        "d": "ಕಡಿಮೆ ಬೆಳಕು, ಧಾನ್ಯದಂತಹ ಚಿತ್ರ, ಮಸುಕಾದ ಲೆನ್ಸ್."
      },
      {
        "t": "ಫ್ರೇಮ್‌ನಲ್ಲಿ ಮಕ್ಕಳು",
        "d": "ಫ್ರೇಮ್‌ನಲ್ಲಿ ಯಾವುದೇ ಮಗು ಕಂಡರೆ, ಅಥವಾ ರೆಕಾರ್ಡ್ ಮಾಡುವವರೇ ಮಗುವಾಗಿದ್ದರೆ. 18 ವರ್ಷದೊಳಗಿನ ಮಕ್ಕಳಿರುವ ವೀಡಿಯೊಗಳನ್ನು ಎಂದಿಗೂ ಬಳಸುವುದಿಲ್ಲ."
      },
      {
        "t": "ಕೈಗಳು ಫ್ರೇಮ್‌ನಲ್ಲಿಲ್ಲ",
        "d": "ಕೈಗಳು ಸಂಪೂರ್ಣವಾಗಿ ಕಾಣದಿರುವುದು, ವಸ್ತುಗಳ ಹಿಂದೆ ಮರೆಯಾಗುವುದು ಅಥವಾ ಕೆಲಸದ ಮಧ್ಯೆ ಫ್ರೇಮ್‌ನಿಂದ ಹೊರಹೋಗುವುದು. ಬೆರಳ ಚಲನೆ ಮರೆಮಾಡುವ ದಪ್ಪ ಕೈಗವಸುಗಳು (ತೆಳುವಾದ, ಬಿಗಿಯಾದ ಕೈಗವಸುಗಳು ಸರಿ, ಹಿನ್ನೆಲೆಯ ಬಣ್ಣದಲ್ಲಿ ಇಲ್ಲದಿದ್ದರೆ)."
      }
    ],
    "p0Camera": [
      {
        "t": "ಟ್ರೈಪಾಡ್ ಅಥವಾ ಹೆಡ್-ಮೌಂಟ್ ಇಲ್ಲ",
        "d": "ಕ್ಯಾಮೆರಾ ಟ್ರೈಪಾಡ್ ಮೇಲೆ ಅಥವಾ ತಲೆಯನ್ನು ಬಿಟ್ಟು ಬೇರೆಲ್ಲೋ ಇದೆ."
      },
      {
        "t": "ಕ್ಯಾಮೆರಾ ಮುಚ್ಚಿದೆ",
        "d": "ಲೆನ್ಸ್ ಮುಚ್ಚಿದೆ ಅಥವಾ ಅಡ್ಡಿಯಾಗಿದೆ — ಕಪ್ಪು ಸ್ಕ್ರೀನ್, ಭಾಗಶಃ ಅಡ್ಡಿ, ಲೆನ್ಸ್ ಮೇಲೆ ವಸ್ತುಗಳು."
      },
      {
        "t": "ಕ್ಯಾಮೆರಾ ಹಾಳಾಗಿದೆ",
        "d": "ತೀವ್ರ ವಿರೂಪ, ಚಿತ್ರ ಕಾಣೆಯಾಗುವುದು, ಹಾಳಾದ ಪ್ಲೇಬ್ಯಾಕ್, ಗೆರೆಗಳು."
      }
    ],
    "p1Task": [
      {
        "t": "ಕಡಿಮೆ ಆದ್ಯತೆಯ ಕೆಲಸ",
        "d": "ರೆಕಾರ್ಡ್ ಮಾಡುವಾಗ ಕಡಿಮೆ ಆದ್ಯತೆ ಎಂದು ತಿಳಿಸಲಾದ ಸ್ಥಳ, ಕೆಲಸ ಅಥವಾ ಜಾಬ್, ನಿಷೇಧಿತ ಪಟ್ಟಿಯ ಕೆಲಸಗಳೂ ಸೇರಿ."
      },
      {
        "t": "ತಪ್ಪಾದ ಟಾಸ್ಕ್ ವಿವರಗಳು",
        "d": "ಆಯ್ಕೆ ಮಾಡಿದ ಟಾಸ್ಕ್, ವರ್ಗ ಅಥವಾ ಸ್ಥಳ ವೀಡಿಯೊಗೆ ಹೊಂದುವುದಿಲ್ಲ — ಉದಾ. ಕಾರು ರಿಪೇರಿ ಎಂದು ಲೇಬಲ್, ಆದರೆ ನೀವು ಅಡುಗೆ ಮಾಡುತ್ತಿದ್ದೀರಿ."
      },
      {
        "t": "ಬರಿಗಾಲು",
        "d": "ಶೂ ಇಲ್ಲದಿರುವುದು, ಅಥವಾ ಚಪ್ಪಲಿ/ತೆರೆದ ಕಾಲ್ಬೆರಳಿನ ಪಾದರಕ್ಷೆ — ನಿಮಗೂ ವೀಡಿಯೊದಲ್ಲಿ ಕಾಣುವ ಇತರರಿಗೂ."
      },
      {
        "t": "ಪ್ರಾಣಿಗಳನ್ನು ಮುಟ್ಟುವುದು",
        "d": "ನೀವು ಪ್ರಾಣಿಯನ್ನು ಮುಟ್ಟಿದರೆ ಅಥವಾ ಹಿಡಿದರೆ ಮಾತ್ರ ಫ್ಲ್ಯಾಗ್. ಪ್ರಾಣಿಗಳು ಹತ್ತಿರ ಇರುವುದು ಸರಿ."
      },
      {
        "t": "ನೆಲದ ಮೇಲೆ ಕುಳಿತುಕೊಳ್ಳುವುದು",
        "d": "ನೆಲದ ಮೇಲೆ ಕುಳಿತುಕೊಳ್ಳುವುದು, ಚಕ್ಕಳ-ಮಕ್ಕಳ ಹಾಕಿ ಕುಳಿತುಕೊಳ್ಳುವುದು (ಕುರ್ಚಿಯ ಮೇಲೂ) ಅಥವಾ ಹಾಸಿಗೆಯ ಮೇಲೆ ಮಲಗುವುದು. ನಿಂತುಕೊಳ್ಳಿ, ಅಥವಾ ಟೇಬಲ್/ಕೌಂಟರ್ ಬಳಿ ಕುರ್ಚಿಯಲ್ಲಿ ಕುಳಿತುಕೊಳ್ಳಿ. ಕೆಲಸಕ್ಕೆ ಬೇಕಾದರೆ ಸ್ವಲ್ಪ ಹೊತ್ತು ಕುಕ್ಕರಗಾಲಿನಲ್ಲಿ ಕೂರುವುದು ಸರಿ."
      },
      {
        "t": "ಅತಿಯಾದ ಅಲುಗಾಟ",
        "d": "ವೀಡಿಯೊ ಬಳಸಲಾಗದಷ್ಟು ಕ್ಯಾಮೆರಾ ಅಲುಗಾಡುವುದು."
      }
    ],
    "p1Camera": [
      {
        "t": "ಕಳಪೆ ಬೆಳಕು",
        "d": "ತುಂಬಾ ಹೆಚ್ಚು ಅಥವಾ ತುಂಬಾ ಕಡಿಮೆ ಬೆಳಕು, ಕೈಗಳು ಮತ್ತು ವಸ್ತುಗಳು ಸ್ಪಷ್ಟವಾಗಿ ಕಾಣುವುದಿಲ್ಲ."
      },
      {
        "t": "ತಪ್ಪಾದ ಕೋನ",
        "d": "ಕ್ಯಾಮೆರಾ ತುಂಬಾ ಮೇಲೆ ಅಥವಾ ತುಂಬಾ ಕೆಳಗೆ ಇದೆ, ಕೈಗಳು ಪದೇ ಪದೇ ಫ್ರೇಮ್‌ನಿಂದ ಹೊರಹೋಗುತ್ತವೆ."
      },
      {
        "t": "ಹೆಡ್-ಸ್ಟ್ರಾಪ್ ಕಾಣುತ್ತದೆ",
        "d": "ಸ್ಟ್ರಾಪ್, ಮೌಂಟ್ ಅಥವಾ ಟೋಪಿ ಫ್ರೇಮ್‌ನಲ್ಲಿ ಸ್ಪಷ್ಟವಾಗಿ ಕಾಣುತ್ತದೆ."
      },
      {
        "t": "ಕ್ಯಾಮೆರಾ ಸರಿಪಡಿಸುವುದು",
        "d": "ಕೆಲಸದ ಮಧ್ಯೆ ನೀವು ಕ್ಯಾಮೆರಾ ಸರಿಪಡಿಸುವುದು ಅಥವಾ ಮುಖ ಮುಟ್ಟುವುದು ಕಾಣುತ್ತದೆ."
      },
      {
        "t": "ಕ್ಯಾಮೆರಾದ ತಪ್ಪು ದಿಕ್ಕು",
        "d": "ಫೋನ್ ತಪ್ಪಾಗಿ ಅಳವಡಿಸಲಾಗಿದೆ ಅಥವಾ ತಿರುಗಿಸಲಾಗಿದೆ."
      }
    ],
    "payTitle": "ಗುಣಮಟ್ಟ ಪರಿಶೀಲನೆ ಮತ್ತು ಪಾವತಿ",
    "payBody": "ಎಲ್ಲಾ ವೀಡಿಯೊಗಳಿಗೂ ಗುಣಮಟ್ಟ ಪರಿಶೀಲನೆ (QC) ಇರುತ್ತದೆ. QC-ಅನುಮೋದಿತ ಪ್ರೊಡಕ್ಷನ್ ಗಂಟೆಗಳಿಗೆ ಮಾತ್ರ ಪಾವತಿ.",
    "payRate": "₹250",
    "payRateL": "ಪ್ರತಿ QC-ಅನುಮೋದಿತ ಪ್ರೊಡಕ್ಷನ್ ಗಂಟೆಗೆ",
    "payPoints": [
      "ಪಾವತಿ QC-ಅನುಮೋದಿತ ಗಂಟೆಗಳ ಆಧಾರದ ಮೇಲೆ ಮಾತ್ರ.",
      "ತಿರಸ್ಕರಿಸಿದ ಗಂಟೆಗಳಿಗೆ ಪಾವತಿ ಇಲ್ಲ.",
      "ಫ್ಲ್ಯಾಗ್ ಆದ ವೀಡಿಯೊಗಳಿಗೆ ಪಾವತಿ ಇದೆ — ಮುಂದಿನ ರೆಕಾರ್ಡಿಂಗ್‌ಗಳಲ್ಲಿ ತಪ್ಪನ್ನು ಸರಿಪಡಿಸಿ.",
      "ಪಾವತಿ ನೀವು Awign ಆ್ಯಪ್‌ನಲ್ಲಿ ಸೇರಿಸುವ ಬ್ಯಾಂಕ್ ಖಾತೆಗೆ ಬರುತ್ತದೆ, ಆದ್ದರಿಂದ ವಿವರಗಳು ಸರಿಯಾಗಿರಲಿ."
    ],
    "faqTitle": "ಪ್ರಶ್ನೆಗಳು",
    "faq": [
      {
        "q": "ಯಾವ ಫೋನ್ ಬೇಕು?",
        "a": "iPhone 12 ಅಥವಾ ಹೊಸದು. Android ಫೋನ್‌ಗಳು ಮತ್ತು ಹಳೆಯ iPhone ಗಳು ಬೆಂಬಲಿತವಲ್ಲ."
      },
      {
        "q": "ಎಷ್ಟು ಗಳಿಸಬಹುದು?",
        "a": "ಪ್ರತಿ QC-ಅನುಮೋದಿತ ಪ್ರೊಡಕ್ಷನ್ ಗಂಟೆಗೆ ₹250. ತಿರಸ್ಕರಿಸಿದ ಗಂಟೆಗಳಿಗೆ ಪಾವತಿ ಇಲ್ಲ."
      },
      {
        "q": "ದಿನಕ್ಕೆ ಎಷ್ಟು ಗಂಟೆ ರೆಕಾರ್ಡ್ ಮಾಡಬೇಕು?",
        "a": "ಪ್ರತಿದಿನ ಕನಿಷ್ಠ 1 ಮತ್ತು ಗರಿಷ್ಠ 5 ಗಂಟೆಗಳ ಅನುಮೋದಿತ ವೀಡಿಯೊ."
      },
      {
        "q": "Awign ಆ್ಯಪ್ ಮತ್ತು Atlas Capture ನಡುವಿನ ವ್ಯತ್ಯಾಸವೇನು?",
        "a": "Awign ಆ್ಯಪ್‌ನಲ್ಲಿ ನೋಂದಣಿ, ಆಫರ್ ಲೆಟರ್ ಮತ್ತು ಬ್ಯಾಂಕ್ ವಿವರಗಳು. Atlas Capture ನಲ್ಲಿ ನೀವು ವೀಡಿಯೊ ರೆಕಾರ್ಡ್ ಮಾಡುತ್ತೀರಿ."
      },
      {
        "q": "OTP ಬರದಿದ್ದರೆ ಏನು ಮಾಡಬೇಕು?",
        "a": "ನಮ್ಮ ತಂಡಕ್ಕೆ ನೀಡಿದ ಅದೇ ಮೊಬೈಲ್ ಸಂಖ್ಯೆಯನ್ನು ನಮೂದಿಸುತ್ತಿದ್ದೀರಾ ಎಂದು ಪರಿಶೀಲಿಸಿ. ಆದರೂ ಬರದಿದ್ದರೆ WhatsApp ಗುಂಪಿನಲ್ಲಿ ಸ್ಕ್ರೀನ್‌ಶಾಟ್ ಕಳುಹಿಸಿ."
      },
      {
        "q": "ತಿರಸ್ಕೃತ ಮತ್ತು ಫ್ಲ್ಯಾಗ್ ನಡುವಿನ ವ್ಯತ್ಯಾಸವೇನು?",
        "a": "ತಿರಸ್ಕೃತ ವೀಡಿಯೊಗೆ ಪಾವತಿ ಇಲ್ಲ. ಫ್ಲ್ಯಾಗ್ ಆದ ವೀಡಿಯೊಗೆ ಪಾವತಿ ಇದೆ, ಆದರೆ ಮುಂದಿನ ವೀಡಿಯೊಗಳಲ್ಲಿ ತಪ್ಪನ್ನು ಸರಿಪಡಿಸಬೇಕು."
      },
      {
        "q": "ಎಲ್ಲಿ ರೆಕಾರ್ಡ್ ಮಾಡಬಹುದು?",
        "a": "ನಿಜವಾದ ಮನೆಯೊಳಗೆ, ಅಚ್ಚುಕಟ್ಟಾದ ಸ್ಥಳದಲ್ಲಿ. ಗೋದಾಮು, Airbnb ಅಥವಾ ಚಿತ್ರೀಕರಣಕ್ಕಾಗಿ ಮಾಡಿದ ಸೆಟ್‌ಗಳಲ್ಲಿ ಅಲ್ಲ."
      },
      {
        "q": "ಹೆಡ್-ಮೌಂಟ್ ಕಡ್ಡಾಯವೇ?",
        "a": "ಹೌದು, ಯಾವಾಗಲೂ. ಹೆಡ್-ಮೌಂಟ್ ಇಲ್ಲದ ವೀಡಿಯೊ ತಿರಸ್ಕೃತವಾಗುತ್ತದೆ."
      },
      {
        "q": "PAN ಮತ್ತು ಬ್ಯಾಂಕ್ ವಿವರಗಳು ಏಕೆ ಬೇಕು?",
        "a": "ನಿಮಗೆ ಪಾವತಿ ಮಾಡಲು. ಈ ವಿವರಗಳನ್ನು Awign ಆ್ಯಪ್‌ನೊಳಗೆ ಮಾತ್ರ ಭರ್ತಿ ಮಾಡಿ — ಚಾಟ್‌ನಲ್ಲಿ ಯಾರಿಗೂ ಕಳುಹಿಸಬೇಡಿ."
      },
      {
        "q": "Awign ಎಂದಾದರೂ ಹಣ ಕೇಳುತ್ತದೆಯೇ?",
        "a": "ಎಂದಿಗೂ ಇಲ್ಲ. ಯಾವುದೇ ಹಂತದಲ್ಲಿ ಶುಲ್ಕ ಅಥವಾ ಠೇವಣಿ ಇಲ್ಲ. ಯಾರಾದರೂ Awign ಹೆಸರಿನಲ್ಲಿ ಹಣ ಕೇಳಿದರೆ, ಕೊಡಬೇಡಿ ಮತ್ತು ಗುಂಪಿನಲ್ಲಿ ತಿಳಿಸಿ."
      }
    ],
    "ctaTitle": "ಆರಂಭಿಸಲು ಸಿದ್ಧರಿದ್ದೀರಾ?",
    "ctaBody": "WhatsApp ಗುಂಪಿಗೆ ಸೇರಿ, ನಂತರ ಮೇಲಿನ ಹಂತಗಳನ್ನು ಅನುಸರಿಸಿ. ಸಿಲುಕಿದರೆ ಸಹಾಯಕ್ಕೆ ನಾವು ಅಲ್ಲಿದ್ದೇವೆ.",
    "footTag": "AI ಮತ್ತು ರೋಬೋಟಿಕ್ಸ್‌ಗಾಗಿ ಫಸ್ಟ್-ಪರ್ಸನ್ ವೀಡಿಯೊ ಡೇಟಾ. ಅಟ್ಲಾಸ್ ಪ್ರಾಜೆಕ್ಟ್, ಭಾರತ.",
    "fRules": "ನಿಯಮಗಳು",
    "fPay": "ಪಾವತಿ",
    "footRights": "© 2026 Awign AI Operations. Mynavi Group ನ ಭಾಗ. ಎಲ್ಲ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.",
    "heroStart": "ಆನ್‌ಬೋರ್ಡಿಂಗ್ ಆರಂಭಿಸಿ",
    "heroRules": "ನಿಯಮಗಳನ್ನು ನೋಡಿ",
    "rateTitle": "ನೀವು ಎಷ್ಟು ಗಳಿಸಬಹುದು",
    "calcLabel": "ದಿನಕ್ಕೆ ಅನುಮೋದಿತ ಗಂಟೆಗಳು",
    "calcDay": "ದಿನಕ್ಕೆ",
    "calc30": "ಇದೇ ವೇಗದಲ್ಲಿ 30 ದಿನಗಳಲ್ಲಿ",
    "calcNote": "QC-ಅನುಮೋದಿತ ಗಂಟೆಗಳಿಗೆ ಮಾತ್ರ ಪಾವತಿ.",
    "chips": [
      "iPhone 12 ಅಥವಾ ಹೊಸದು",
      "ಹೆಡ್-ಮೌಂಟ್, ಲ್ಯಾಂಡ್‌ಸ್ಕೇಪ್",
      "ದಿನಕ್ಕೆ 1–5 ಗಂಟೆ",
      "ಮನೆಯಿಂದಲೇ ಕೆಲಸ"
    ],
    "stepsTitle": "ಹೇಗೆ ಆರಂಭಿಸುವುದು",
    "stepsBody": "ಈ ಹಂತಗಳನ್ನು ಕ್ರಮವಾಗಿ ಮಾಡಿ. ಎಲ್ಲಾದರೂ ಸಿಲುಕಿದರೆ WhatsApp ಗುಂಪಿನಲ್ಲಿ ಸ್ಕ್ರೀನ್‌ಶಾಟ್ ಕಳುಹಿಸಿ — ನಾವು ಸಹಾಯ ಮಾಡುತ್ತೇವೆ.",
    "stepsNoteT": "ಅದೇ ಮೊಬೈಲ್ ಸಂಖ್ಯೆಯನ್ನು ಬಳಸಿ",
    "stepsNote": "ನಮ್ಮ ತಂಡಕ್ಕೆ ನೀಡಿದ ಮೊಬೈಲ್ ಸಂಖ್ಯೆಯಿಂದಲೇ ಲಾಗಿನ್ ಮಾಡಿ, ಮತ್ತು ಪ್ರತಿಯೊಂದು ವಿವರವನ್ನು ಎಚ್ಚರಿಕೆಯಿಂದ ಭರ್ತಿ ಮಾಡಿ. ತಪ್ಪಾದರೆ ಆನ್‌ಬೋರ್ಡಿಂಗ್ ಅಥವಾ ಪಾವತಿ ತಡವಾಗಬಹುದು.",
    "steps": [
      {
        "t": "WhatsApp ಗುಂಪಿಗೆ ಸೇರಿ",
        "d": "ಕಾರ್ಯಗಳು, ಅಪ್‌ಡೇಟ್‌ಗಳು ಮತ್ತು ಸಹಾಯ — ಎಲ್ಲವೂ ಗುಂಪಿನಲ್ಲಿ ಸಿಗುತ್ತದೆ."
      },
      {
        "t": "Awign ಆ್ಯಪ್ ಇನ್‌ಸ್ಟಾಲ್ ಮಾಡಿ",
        "d": "ನೋಂದಣಿ, ಆಫರ್ ಲೆಟರ್ ಮತ್ತು ಬ್ಯಾಂಕ್ ವಿವರಗಳು — ಎಲ್ಲವೂ Awign ಆ್ಯಪ್‌ನಲ್ಲಿ."
      },
      {
        "t": "OTP ಮೂಲಕ ಲಾಗಿನ್ ಮಾಡಿ",
        "list": [
          "Awign ಆ್ಯಪ್ ತೆರೆಯಿರಿ.",
          "ನಮ್ಮ ತಂಡಕ್ಕೆ ನೀಡಿದ ಮೊಬೈಲ್ ಸಂಖ್ಯೆಯನ್ನು ನಮೂದಿಸಿ.",
          "ಆ ಸಂಖ್ಯೆಗೆ ಬಂದ OTP ನಮೂದಿಸಿ."
        ]
      },
      {
        "t": "ಆಫರ್ ಲೆಟರ್‌ಗೆ ಸಹಿ ಮಾಡಿ",
        "d": "ಆಫರ್ ಲೆಟರ್ ಲಿಂಕ್ ತೆರೆದು ಪ್ರಕ್ರಿಯೆಯನ್ನು ಪೂರ್ಣಗೊಳಿಸಿ."
      },
      {
        "t": "ಬ್ಯಾಂಕ್ ವಿವರಗಳನ್ನು ಸೇರಿಸಿ",
        "d": "ಆಫರ್ ಲೆಟರ್‌ಗೆ ಸಹಿ ಮಾಡಿದ ನಂತರ:",
        "list": [
          "Awign ಆ್ಯಪ್‌ನಲ್ಲಿ Earnings → Beneficiary ಗೆ ಹೋಗಿ.",
          "ನಿಮ್ಮ PAN ಕಾರ್ಡ್‌ನ ಫೋಟೋ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ ಮತ್ತು PAN ಸಂಖ್ಯೆ ನಮೂದಿಸಿ.",
          "ನಿಮ್ಮ ಬ್ಯಾಂಕ್ ಖಾತೆಯ ವಿವರಗಳನ್ನು ಸೇರಿಸಿ.",
          "ಎಲ್ಲವನ್ನೂ ಪರಿಶೀಲಿಸಿ, ನಂತರ ಸಬ್ಮಿಟ್ ಮಾಡಿ."
        ]
      },
      {
        "t": "ಗುಂಪಿನಲ್ಲಿ ತಿಳಿಸಿ",
        "d": "ಮುಗಿದ ನಂತರ WhatsApp ಗುಂಪಿನಲ್ಲಿ ತಿಳಿಸಿ. ಯಾವುದಾದರೂ ಹಂತದಲ್ಲಿ ಸಿಲುಕಿದ್ದೀರಾ? ಅಲ್ಲಿ ಸ್ಕ್ರೀನ್‌ಶಾಟ್ ಹಂಚಿಕೊಳ್ಳಿ, ನಾವು ಹಂತ ಹಂತವಾಗಿ ಮಾರ್ಗದರ್ಶನ ನೀಡುತ್ತೇವೆ."
      }
    ],
    "btnApp": "Awign ಆ್ಯಪ್ ಪಡೆಯಿರಿ",
    "btnOffer": "ಆಫರ್ ಲೆಟರ್ ತೆರೆಯಿರಿ",
    "rulesTitle": "ರೆಕಾರ್ಡ್ ಮಾಡುವ ಮೊದಲು",
    "rulesBody": "ಮೊದಲ ವೀಡಿಯೊಗೆ ಮುನ್ನ ಇವುಗಳನ್ನು ಪರಿಶೀಲಿಸಿ. ಇವುಗಳನ್ನು ಪಾಲಿಸದ ರೆಕಾರ್ಡಿಂಗ್‌ಗಳು ಗುಣಮಟ್ಟ ಪರಿಶೀಲನೆಯಲ್ಲಿ ಪಾಸ್ ಆಗುವುದಿಲ್ಲ.",
    "tapHint": "ಉದಾಹರಣೆಗಳನ್ನು ನೋಡಲು ಯಾವುದೇ ಕಾರಣದ ಮೇಲೆ ಟ್ಯಾಪ್ ಮಾಡಿ.",
    "payTipT": "ಸಾಮಾನ್ಯ ತಪ್ಪುಗಳನ್ನು ತಪ್ಪಿಸಿ",
    "payTip": "ಹೆಚ್ಚಿನ ತಿರಸ್ಕಾರಗಳಿಗೆ ಕಾರಣಗಳು: ಕೈಗಳು ಫ್ರೇಮ್‌ನಿಂದ ಹೊರಗೆ, ಹೆಡ್-ಮೌಂಟ್ ಇಲ್ಲದಿರುವುದು, ತಪ್ಪಾದ ಸ್ಥಳ, ಅಗತ್ಯವಿಲ್ಲದೆ ನೆಲದ ಮೇಲೆ ಕುಳಿತುಕೊಳ್ಳುವುದು, ಮತ್ತು ನಕಲಿ ಅಥವಾ ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ ನಿಧಾನವಾದ ಕೆಲಸ.",
    "footProgram": "ಪ್ರೋಗ್ರಾಂ",
    "footCompany": "ಕಂಪನಿ",
    "footSupport": "ಸಹಾಯ",
    "fSteps": "ಹೇಗೆ ಆರಂಭಿಸುವುದು",
    "fReasons": "ತಿರಸ್ಕಾರದ ಕಾರಣಗಳು",
    "fFaq": "ಪ್ರಶ್ನೆಗಳು",
    "fAwign": "Awign.com",
    "fAwignApp": "Awign ಆ್ಯಪ್",
    "fGroup": "WhatsApp ಗುಂಪು",
    "fPrivacy": "ಗೌಪ್ಯತೆ",
    "fTerms": "ಷರತ್ತುಗಳು",
    "exTitle": "ಕೆಲಸ ಹೇಗೆ ಕಾಣುತ್ತದೆ",
    "exBody": "ಸಾಮಾನ್ಯ ಮನೆಗೆಲಸಗಳು, ನಿಮ್ಮ ಕಣ್ಣಿನ ನೋಟದಿಂದ ರೆಕಾರ್ಡ್ ಮಾಡಲಾಗಿದೆ. ಕೆಳಗೆ ಆರು ನಿಜವಾದ ರೆಕಾರ್ಡಿಂಗ್‌ಗಳಿವೆ: ಪಾಸ್ ಆದ ಮೂರು ಮತ್ತು ತಿರಸ್ಕೃತವಾದ ಮೂರು.",
    "workCap": [
      "ಪಾತ್ರೆ ತೊಳೆಯುವುದು",
      "ವಸ್ತುಗಳನ್ನು ವಿಂಗಡಿಸಿ ಜೋಡಿಸುವುದು",
      "ಮೇಲ್ಮೈ ಸ್ವಚ್ಛಗೊಳಿಸುವುದು",
      "ಕೈಯಿಂದ ಏನನ್ನಾದರೂ ತಯಾರಿಸುವುದು"
    ],
    "goodTag": "ಹೀಗೆ ಮಾಡಿ",
    "goodHeading": "ಪಾಸ್ ಆಗುವ ರೆಕಾರ್ಡಿಂಗ್",
    "goodClips": [
      "ಬಟ್ಟೆ ಮಡಚುವುದು",
      "ಪಾತ್ರೆ ಸ್ವಚ್ಛಗೊಳಿಸುವುದು",
      "ಬಟ್ಟೆ ಇಸ್ತ್ರಿ ಮಾಡುವುದು"
    ],
    "badTag": "ಹೀಗೆ ಎಂದಿಗೂ ಮಾಡಬೇಡಿ",
    "badHeading": "ತಿರಸ್ಕೃತವಾಗುವ ರೆಕಾರ್ಡಿಂಗ್",
    "badClips": [
      "ಅರ್ಥಪೂರ್ಣ ಕೆಲಸವಲ್ಲ",
      "ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ ನಿಧಾನ",
      "ಕಡಿಮೆ ಬೆಳಕು"
    ],
    "fExamples": "ಉದಾಹರಣೆಗಳು"
  },
  "mr": {
    "themeLabel": "थीम बदला",
    "heroEyebrow": "अ‍ॅटलस प्रोजेक्ट · भारत",
    "heroTitle": "तुम्ही रोज करत असलेली घरकामं रेकॉर्ड करा आणि पैसे कमवा.",
    "heroLede": "रोजच्या सोप्या कामांचे — स्वयंपाक, साफसफाई, ओतणे, वस्तू लावणे — छोटे फर्स्ट-पर्सन व्हिडिओ रेकॉर्ड करा आणि गुणवत्ता तपासणीत पास होणाऱ्या प्रत्येक तासाचे पैसे मिळवा.",
    "heroCta": "WhatsApp ग्रुपमध्ये सामील व्हा",
    "groupSoon": "ग्रुपची लिंक लवकरच",
    "aboutTitle": "अ‍ॅटलस प्रोजेक्ट म्हणजे काय?",
    "aboutBody": "अ‍ॅटलस प्रोजेक्टमध्ये लोक घरी रोजची सोपी कामं करताना त्यांचे उच्च दर्जाचे व्हिडिओ गोळा केले जातात. या व्हिडिओंमधून AI आणि रोबोटिक्स प्रणाली माणसाच्या हातांच्या हालचाली, कामातील पायऱ्यांचा क्रम आणि प्रत्यक्ष जगातील क्रिया ओळखायला आणि करायला शिकतात.",
    "eligTitle": "कोण सामील होऊ शकतं",
    "eligBody": "सुरू करण्यापूर्वी या सातही गोष्टी तपासा. ज्या रेकॉर्डिंग यात बसत नाहीत, त्या गुणवत्ता तपासणीत पास होणार नाहीत.",
    "elig": [
      {
        "t": "iPhone 12 किंवा त्यापेक्षा नवीन",
        "d": "Android फोन आणि जुने iPhone चालणार नाहीत."
      },
      {
        "t": "घरात स्थिर जागा",
        "d": "खरं घर जिथे तुम्ही रोजची कामं रेकॉर्ड करू शकता — गोदाम, Airbnb किंवा शूटिंगसाठी केलेला सेट नाही."
      },
      {
        "t": "हेड-माउंट — आवश्यक",
        "d": "फोन डोक्यावर लँडस्केपमध्ये असावा, म्हणजे व्हिडिओ स्थिर राहतो आणि दोन्ही हात दिसत राहतात."
      },
      {
        "t": "घरकामं सहज करता यावीत",
        "d": "स्पष्ट हालचालींसह, दोन्ही हात फ्रेममध्ये ठेवून काम नैसर्गिकपणे करा."
      },
      {
        "t": "दररोज 1 ते 5 मंजूर तास",
        "d": "दररोज किमान 1 तास आणि जास्तीत जास्त 5 तासांचा मंजूर व्हिडिओ सबमिट करा."
      },
      {
        "t": "नीटनेटकी जागा",
        "d": "काम स्पष्ट दिसावं म्हणून जागा शक्य तितकी पसाराविरहित ठेवा."
      },
      {
        "t": "मार्गदर्शक तत्त्वांचे पालन",
        "d": "प्रत्येक व्हिडिओत SOP आणि हात दिसण्याचे नियम काटेकोरपणे पाळा."
      }
    ],
    "ddTitle": "काय करावं आणि काय करू नये",
    "ddBody": "थोडक्यात. नाकारले जाण्याची आणि फ्लॅग होण्याची संपूर्ण कारणं खाली आहेत.",
    "doTitle": "करा",
    "do": [
      "दोन्ही हात फ्रेममध्ये दिसत राहू द्या",
      "काम नैसर्गिकपणे करा",
      "तुमच्या नेहमीच्या वेगाने काम करा",
      "टास्कच्या सूचना पाळा",
      "हेड-माउंट घाला आणि लँडस्केपमध्ये रेकॉर्ड करा",
      "उभे राहा, किंवा टेबल/काउंटरजवळ खुर्चीवर बसा"
    ],
    "dontTitle": "करू नका",
    "dont": [
      "हेड-माउंटशिवाय रेकॉर्ड करणे",
      "काम करण्याचं नाटक करणे किंवा मुद्दाम हळू करणे",
      "गोदाम, Airbnb किंवा शूटिंगच्या सेटवर रेकॉर्ड करणे",
      "हात फ्रेमबाहेर जाऊ देणे",
      "गरज नसताना जमिनीवर बसणे",
      "मुलं, ओळखपत्रं किंवा वैयक्तिक माहिती असलेली स्क्रीन दाखवणे"
    ],
    "rejTitle": "व्हिडिओ नाकारले किंवा फ्लॅग का होतात",
    "rejBody": "प्रत्येक व्हिडिओची गुणवत्ता तपासणी होते. नाकारलेल्या व्हिडिओंचे पैसे मिळत नाहीत. फ्लॅग झालेल्या व्हिडिओंचे पैसे मिळतात, पण पुढच्या रेकॉर्डिंगमध्ये ती चूक सुधारावी लागते.",
    "p0Title": "नाकारले — पैसे नाहीत",
    "p0Sub": "पूर्णपणे टाळा",
    "p1Title": "फ्लॅग — पैसे मिळतात",
    "p1Sub": "सुधारणा आवश्यक",
    "grpTask": "कामाशी संबंधित",
    "grpCamera": "कॅमेरा आणि सेटअप",
    "p0Task": [
      {
        "t": "कामासाठी अयोग्य (NSFW)",
        "d": "नग्नता (अंशतः किंवा पूर्ण), लैंगिक किंवा अश्लील मजकूर, बाथरूमचा वापर, असभ्य हावभाव किंवा अयोग्य कृती."
      },
      {
        "t": "हिंसक किंवा रक्तरंजित दृश्यं",
        "d": "शस्त्रं (बंदूक, दारूगोळा, जोडणी), दिसणारं रक्त, जखमा किंवा उघड्या जखमा, कसायाच्या दुकानातील प्राण्यांचे मृतदेह."
      },
      {
        "t": "अनैतिक कामं",
        "d": "ज्या पद्धतीने केली जातात त्यामुळे वादग्रस्त किंवा अनैतिक ठरणारी कामं — उदा. बर्ड्स नेस्ट, कुत्र्याचं मांस, फोई ग्रा बनवणे."
      },
      {
        "t": "बेकायदेशीर पदार्थ किंवा कृती",
        "d": "सिगारेट किंवा वेप ओढणे, अमली किंवा बेकायदेशीर पदार्थ, किंवा कोणतीही बेकायदेशीर कृती."
      },
      {
        "t": "वैयक्तिक माहिती (PII)",
        "d": "ओळखपत्रं, पासपोर्ट, परवाने, नाव/पत्ता/फोन नंबर असलेली कागदपत्रं, वैयक्तिक किंवा आर्थिक माहिती दाखवणाऱ्या स्क्रीन."
      },
      {
        "t": "निष्क्रियता किंवा चाचणी व्हिडिओ",
        "d": "प्रत्यक्ष काम न होणे, रेकॉर्ड करताना खाणे किंवा फोन वापरणे, बराच वेळ काहीही न करणे, मशीन चालू असताना नुसतं उभं राहणे."
      },
      {
        "t": "बनावट काम / वाईट हेतू",
        "d": "अवास्तव, दिखाऊ किंवा निरर्थक कामं, तास वाढवण्यासाठी रेकॉर्डिंग, एकच कृती पुन्हा पुन्हा — उदा. रिकाम्या बाटलीने स्प्रे करणे, ताटं पुन्हा पुन्हा रचणे-उचलणे."
      },
      {
        "t": "खराब चित्र",
        "d": "कमी प्रकाश, दाणेदार चित्र, धूसर लेन्स."
      },
      {
        "t": "फ्रेममध्ये मुलं",
        "d": "फ्रेममध्ये कोणतंही मूल दिसणे, किंवा रेकॉर्ड करणारी व्यक्तीच मूल असणे. 18 वर्षांखालील मुलं असलेले व्हिडिओ कधीही वापरले जात नाहीत."
      },
      {
        "t": "हात फ्रेममध्ये नाहीत",
        "d": "हात अजिबात न दिसणे, वस्तूंमागे लपणे किंवा कामादरम्यान फ्रेमबाहेर जाणे. बोटांची हालचाल लपवणारे जाड हातमोजे (पातळ, घट्ट हातमोजे चालतील, जर ते पार्श्वभूमीच्या रंगाचे नसतील तर)."
      }
    ],
    "p0Camera": [
      {
        "t": "ट्रायपॉड किंवा हेड-माउंट नाही",
        "d": "कॅमेरा ट्रायपॉडवर किंवा डोक्याव्यतिरिक्त इतर कुठेतरी लावलेला आहे."
      },
      {
        "t": "कॅमेरा झाकलेला",
        "d": "लेन्स झाकलेली किंवा अडलेली — काळी स्क्रीन, अंशतः अडथळा, लेन्सवर वस्तू."
      },
      {
        "t": "कॅमेरा बिघडलेला",
        "d": "चित्र खूप विकृत होणे, चित्र गायब होणे, व्हिडिओ नीट न चालणे, रेषा येणे."
      }
    ],
    "p1Task": [
      {
        "t": "कमी प्राधान्याचं काम",
        "d": "रेकॉर्डिंगच्या वेळी कमी प्राधान्याचं म्हणून सांगितलेली जागा, काम किंवा जॉब, बंदी असलेल्या यादीतील कामांसह."
      },
      {
        "t": "चुकीची टास्क माहिती",
        "d": "निवडलेला टास्क, श्रेणी किंवा जागा व्हिडिओशी जुळत नाही — उदा. लेबल कार दुरुस्तीचं, पण तुम्ही स्वयंपाक करत आहात."
      },
      {
        "t": "अनवाणी",
        "d": "बूट नसणे, किंवा चपला/उघड्या बोटांची पादत्राणं — तुमच्यासाठी आणि व्हिडिओत दिसणाऱ्या इतर कोणासाठीही."
      },
      {
        "t": "प्राण्यांना हात लावणे",
        "d": "तुम्ही प्राण्याला हात लावला किंवा धरलं तरच फ्लॅग होतं. प्राणी जवळपास असणं चालतं."
      },
      {
        "t": "जमिनीवर बसणे",
        "d": "जमिनीवर बसणे, मांडी घालून बसणे (खुर्चीवरही) किंवा बेडवर झोपणे. उभे राहा, किंवा टेबल/काउंटरजवळ खुर्चीवर बसा. कामासाठी गरज असल्यास थोडा वेळ उकिडवं बसणं चालतं."
      },
      {
        "t": "जास्त हलणे",
        "d": "व्हिडिओ वापरता येणार नाही इतका कॅमेरा हलणे."
      }
    ],
    "p1Camera": [
      {
        "t": "खराब प्रकाश",
        "d": "खूप जास्त किंवा खूप कमी प्रकाश, त्यामुळे हात आणि वस्तू नीट दिसत नाहीत."
      },
      {
        "t": "चुकीचा कोन",
        "d": "कॅमेरा खूप वर किंवा खूप खाली, त्यामुळे हात वारंवार फ्रेमबाहेर जातात."
      },
      {
        "t": "हेड-स्ट्रॅप दिसणे",
        "d": "स्ट्रॅप, माउंट किंवा टोपी फ्रेममध्ये स्पष्टपणे दिसते."
      },
      {
        "t": "कॅमेरा सरळ करणे",
        "d": "कामादरम्यान तुम्ही कॅमेरा सरळ करताना किंवा चेहऱ्याला हात लावताना दिसता."
      },
      {
        "t": "कॅमेऱ्याची चुकीची दिशा",
        "d": "फोन चुकीच्या पद्धतीने लावलेला किंवा फिरवलेला आहे."
      }
    ],
    "payTitle": "गुणवत्ता तपासणी आणि पेमेंट",
    "payBody": "सर्व व्हिडिओंची गुणवत्ता तपासणी (QC) होते. पेमेंट फक्त QC-मंजूर प्रोडक्शन तासांचं होतं.",
    "payRate": "₹250",
    "payRateL": "प्रत्येक QC-मंजूर प्रोडक्शन तासासाठी",
    "payPoints": [
      "पेमेंट फक्त QC-मंजूर तासांवर आधारित असते.",
      "नाकारलेल्या तासांचे पैसे मिळत नाहीत.",
      "फ्लॅग झालेल्या व्हिडिओंचे पैसे मिळतात — पुढच्या रेकॉर्डिंगमध्ये चूक सुधारा.",
      "पेमेंट तुम्ही Awign अ‍ॅपमध्ये जोडलेल्या बँक खात्यात येते, म्हणून तपशील बरोबर ठेवा."
    ],
    "faqTitle": "प्रश्नोत्तरं",
    "faq": [
      {
        "q": "कोणता फोन लागतो?",
        "a": "iPhone 12 किंवा नवीन. Android फोन आणि जुने iPhone चालत नाहीत."
      },
      {
        "q": "किती कमाई होईल?",
        "a": "प्रत्येक QC-मंजूर प्रोडक्शन तासाला ₹250. नाकारलेल्या तासांचे पैसे मिळत नाहीत."
      },
      {
        "q": "दररोज किती तास रेकॉर्ड करायचे?",
        "a": "दररोज किमान 1 आणि जास्तीत जास्त 5 तासांचा मंजूर व्हिडिओ."
      },
      {
        "q": "Awign अ‍ॅप आणि Atlas Capture मध्ये फरक काय?",
        "a": "Awign अ‍ॅपमध्ये नोंदणी, ऑफर लेटर आणि बँक तपशील असतात. Atlas Capture मध्ये तुम्ही व्हिडिओ रेकॉर्ड करता."
      },
      {
        "q": "OTP आला नाही तर काय करायचे?",
        "a": "आमच्या टीमला दिलेलाच मोबाइल नंबर टाकत आहात का ते तपासा. तरीही न आल्यास WhatsApp ग्रुपमध्ये स्क्रीनशॉट पाठवा."
      },
      {
        "q": "नाकारलेले आणि फ्लॅग झालेले यात फरक काय?",
        "a": "नाकारलेल्या व्हिडिओचे पैसे मिळत नाहीत. फ्लॅग झालेल्या व्हिडिओचे पैसे मिळतात, पण पुढच्या व्हिडिओमध्ये चूक सुधारावी लागते."
      },
      {
        "q": "रेकॉर्डिंग कुठे करायचे?",
        "a": "खऱ्या घरात, आत, नीटनेटक्या जागी. गोदाम, Airbnb किंवा शूटिंगसाठी बनवलेल्या सेटमध्ये नाही."
      },
      {
        "q": "हेड-माउंट आवश्यक आहे का?",
        "a": "हो, नेहमी. हेड-माउंटशिवाय व्हिडिओ नाकारला जातो."
      },
      {
        "q": "PAN आणि बँक तपशील का लागतात?",
        "a": "तुम्हाला पैसे देण्यासाठी. हे तपशील फक्त Awign अ‍ॅपमध्येच भरा — चॅटमध्ये कधीही कोणाला पाठवू नका."
      },
      {
        "q": "Awign कधी पैसे मागते का?",
        "a": "कधीच नाही. कोणत्याही टप्प्यावर फी किंवा डिपॉझिट नाही. कोणी Awign च्या नावाने पैसे मागितले तर देऊ नका आणि ग्रुपमध्ये कळवा."
      }
    ],
    "ctaTitle": "सुरू करायला तयार?",
    "ctaBody": "WhatsApp ग्रुपमध्ये सामील व्हा, मग वरील पायऱ्या पूर्ण करा. अडकलात तर मदतीसाठी आम्ही तिथेच आहोत.",
    "footTag": "AI आणि रोबोटिक्ससाठी फर्स्ट-पर्सन व्हिडिओ डेटा. अ‍ॅटलस प्रोजेक्ट, भारत.",
    "fRules": "नियम",
    "fPay": "पेमेंट",
    "footRights": "© 2026 Awign AI Operations. Mynavi Group चा भाग. सर्व हक्क राखीव.",
    "heroStart": "ऑनबोर्डिंग सुरू करा",
    "heroRules": "नियम पाहा",
    "rateTitle": "तुम्ही किती कमवू शकता",
    "calcLabel": "दररोज मंजूर तास",
    "calcDay": "दररोज",
    "calc30": "याच वेगाने 30 दिवसांत",
    "calcNote": "फक्त QC-मंजूर तासांचेच पैसे मिळतात.",
    "chips": [
      "iPhone 12 किंवा नवीन",
      "हेड-माउंट, लँडस्केप",
      "दररोज 1–5 तास",
      "घरून काम"
    ],
    "stepsTitle": "सुरुवात कशी करायची",
    "stepsBody": "या पायऱ्या क्रमाने करा. कुठे अडकलात तर WhatsApp ग्रुपमध्ये स्क्रीनशॉट पाठवा — आम्ही मदत करू.",
    "stepsNoteT": "तोच मोबाइल नंबर वापरा",
    "stepsNote": "आमच्या टीमला दिलेल्या मोबाइल नंबरनेच लॉगिन करा आणि प्रत्येक माहिती काळजीपूर्वक भरा. चूक झाल्यास ऑनबोर्डिंग किंवा पेमेंटला उशीर होऊ शकतो.",
    "steps": [
      {
        "t": "WhatsApp ग्रुपमध्ये सामील व्हा",
        "d": "टास्क, अपडेट्स आणि मदत — सगळं ग्रुपमध्ये मिळतं."
      },
      {
        "t": "Awign अ‍ॅप इन्स्टॉल करा",
        "d": "नोंदणी, ऑफर लेटर आणि बँक तपशील — सगळं Awign अ‍ॅपमध्ये होतं."
      },
      {
        "t": "OTP ने लॉगिन करा",
        "list": [
          "Awign अ‍ॅप उघडा.",
          "आमच्या टीमला दिलेला मोबाइल नंबर टाका.",
          "त्या नंबरवर आलेला OTP टाका."
        ]
      },
      {
        "t": "ऑफर लेटरवर सही करा",
        "d": "ऑफर लेटरची लिंक उघडा आणि प्रक्रिया पूर्ण करा."
      },
      {
        "t": "बँक तपशील जोडा",
        "d": "ऑफर लेटरवर सही झाल्यानंतर:",
        "list": [
          "Awign अ‍ॅपमध्ये Earnings → Beneficiary वर जा.",
          "तुमच्या PAN कार्डचा फोटो अपलोड करा आणि PAN नंबर टाका.",
          "तुमच्या बँक खात्याचे तपशील जोडा.",
          "सर्व काही तपासा, मग सबमिट करा."
        ]
      },
      {
        "t": "ग्रुपमध्ये कळवा",
        "d": "पूर्ण झाल्यावर WhatsApp ग्रुपमध्ये कळवा. एखाद्या पायरीवर अडकलात? तिथे स्क्रीनशॉट शेअर करा, आम्ही टप्प्याटप्प्याने मार्गदर्शन करू."
      }
    ],
    "btnApp": "Awign अ‍ॅप मिळवा",
    "btnOffer": "ऑफर लेटर उघडा",
    "rulesTitle": "रेकॉर्ड करण्यापूर्वी",
    "rulesBody": "पहिल्या व्हिडिओपूर्वी हे तपासा. याचे पालन न करणारी रेकॉर्डिंग क्वालिटी चेक पास होणार नाही.",
    "tapHint": "उदाहरणे पाहण्यासाठी कोणत्याही कारणावर टॅप करा.",
    "payTipT": "नेहमीच्या चुका टाळा",
    "payTip": "बहुतेक व्हिडिओ या कारणांमुळे नाकारले जातात: हात फ्रेमबाहेर, हेड-माउंट नाही, चुकीची जागा, गरज नसताना जमिनीवर बसणे, आणि खोटे किंवा मुद्दाम हळू केलेले काम.",
    "footProgram": "प्रोग्राम",
    "footCompany": "कंपनी",
    "footSupport": "मदत",
    "fSteps": "सुरुवात कशी करायची",
    "fReasons": "नाकारण्याची कारणे",
    "fFaq": "प्रश्नोत्तरं",
    "fAwign": "Awign.com",
    "fAwignApp": "Awign अ‍ॅप",
    "fGroup": "WhatsApp ग्रुप",
    "fPrivacy": "गोपनीयता",
    "fTerms": "अटी",
    "exTitle": "काम कसं दिसतं",
    "exBody": "रोजची घरकामं, तुमच्या डोळ्यांच्या नजरेतून रेकॉर्ड केलेली. खाली सहा खरी रेकॉर्डिंग आहेत: पास झालेली तीन आणि नाकारलेली तीन.",
    "workCap": [
      "भांडी धुणे",
      "वस्तूंची वर्गवारी करून लावणे",
      "पृष्ठभाग स्वच्छ करणे",
      "हाताने काहीतरी बनवणे"
    ],
    "goodTag": "असं करा",
    "goodHeading": "पास होणारी रेकॉर्डिंग",
    "goodClips": [
      "कपड्यांच्या घड्या घालणे",
      "भांडी स्वच्छ करणे",
      "कपड्यांना इस्त्री करणे"
    ],
    "badTag": "असं कधीच करू नका",
    "badHeading": "नाकारली जाणारी रेकॉर्डिंग",
    "badClips": [
      "अर्थपूर्ण काम नाही",
      "मुद्दाम हळू केलेले काम",
      "कमी प्रकाश"
    ],
    "fExamples": "उदाहरणे"
  }
};

/* ============================================================
   Launch config
   ============================================================ */

const CONFIG = {
  // WhatsApp group invite link (https://chat.whatsapp.com/...).
  // If blank, the join buttons show "Group link coming soon".
  GROUP_URL: "https://chat.whatsapp.com/JJIFuLknb7cLDCPbifiTNq",

  // Awign app (registration, OTP login, offer letter, bank details).
  AWIGN_APP_URL: "https://share.google/6koR1WfRlLWUo4PqW",
  OFFER_LETTER_URL: "https://www.awign.com/categories/sales_and_marketing/jobs/abc_video_data_collection",
  AWIGN_URL: "https://www.awign.com/",

  RATE: 250,

  // Example images (what the work looks like) and approved / rejected clips.
  WORK_IMAGES: ["assets/img/pov-dishes.jpg", "assets/img/pov-sorting.jpg", "assets/img/pov-wiping.jpg", "assets/img/pov-crafting.jpg"],
  VIDEO: {
    good: ["assets/video/good/1-clothes-folding.mp4", "assets/video/good/2-cleaning-utensils.mp4", "assets/video/good/3-ironing-clothes.mp4"],
    bad: ["assets/video/bad/1-not-a-meaningful-task.mp4", "assets/video/bad/2-intentionally-slow.mp4", "assets/video/bad/3-poor-lighting.mp4"],
  },

  SOCIAL: {
    instagram: "https://www.instagram.com/awign_india/",
    facebook: "https://www.facebook.com/awign.work",
    twitter: "https://twitter.com/awign_india/",
  },

  ANALYTICS_ENDPOINT: "",
};
