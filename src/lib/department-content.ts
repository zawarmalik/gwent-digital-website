// Supplementary copy for each /services/[slug] detail page. departments.ts (name,
// summary, 3 bullets) stays the source of truth for what each department covers —
// this file only expands on it for the detail-page template. Keep everything here
// factual and generic: no invented client names, results, or numbers. See CLAUDE
// context for the site (no fabricated testimonials/metrics, no price figures).

export type DepartmentContent = {
  outcome: string;
  problem: string[];
  deliverables: string[];
  process: string[];
  tools: string;
  relatedWork: {
    blurb: string;
    linkLabel: string;
  };
  faqs: { q: string; a: string }[];
};

export const DEPARTMENT_CONTENT: Record<string, DepartmentContent> = {
  "web-design": {
    outcome:
      "A website that works properly on a phone, loads quickly, and is ready to go live the day it's finished.",
    problem: [
      "If your website was built years ago, doesn't work properly on a phone, or you don't have one at all, you're losing customers before they even pick up the phone. People check online first — if the site looks broken or out of date, they assume the business is too.",
      "We build or rebuild it, and hand it over ready to host — no half-finished builds, no waiting months for a developer who's moved on to another job.",
    ],
    deliverables: [
      "Marketing site or landing pages, built around what you actually sell",
      "Full rebuilds of an existing site that's slow, broken, or hard to update",
      "Mobile-first design — checked on phone, tablet and desktop before launch",
      "Basic on-page SEO so the site is set up to be found on Google",
      "A simple way to update text, images and prices yourself, or we do it for you",
      "Hosting-ready delivery — the site is live and working the day it's finished",
    ],
    process: [
      "Free consultation — we look at what you have now (if anything) and what you need",
      "Fixed-price quote in writing before any work starts",
      "Design draft for you to review and give feedback on",
      "Build and testing across devices",
      "Launch, plus a walkthrough of how to update it yourself",
    ],
    tools:
      "We build on Next.js, hosted on Vercel — a modern setup that's fast to load and doesn't rely on plugins that break every time a theme updates.",
    relatedWork: {
      blurb: "See examples of website builds we've done, including a full site build for a local business.",
      linkLabel: "See our work",
    },
    faqs: [
      {
        q: "Do I need to know how to code to update my own site afterwards?",
        a: "No. We set things up so you can update text, images and prices yourself, or we can do it for you as part of a maintenance plan.",
      },
      {
        q: "Can you just fix parts of my existing site rather than a full rebuild?",
        a: "Yes — we'll audit what you have and tell you honestly whether it needs a full rebuild, targeted fixes, or leaving alone.",
      },
      {
        q: "How long does a website normally take to build?",
        a: "A straightforward marketing site typically takes a few weeks from consultation to launch. We'll give you a realistic timeline before you commit, based on the scope in your quote.",
      },
      {
        q: "Will my new site actually work on mobile?",
        a: "Yes. Every site we build is checked on phone, tablet and desktop before it goes live, since most of your customers will be finding you on a phone.",
      },
    ],
  },

  ecommerce: {
    outcome:
      "An online shop where stock, prices and orders stay in sync — instead of three lists that quietly disagree with each other.",
    problem: [
      "Selling online usually means juggling a website, a till, and a stock list that all need updating separately. Miss one, and you sell something you don't have, or a price is wrong.",
      "We build shops where the website, payments and stock levels talk to each other, so what a customer sees online matches what's actually on the shelf.",
    ],
    deliverables: [
      "Online shop with product listings, categories and search",
      "Card payments set up and tested",
      "Stock levels that sync between the website and however you currently track stock",
      "Order notifications and a simple way to manage orders as they come in",
      "Mobile-friendly checkout — most online shopping now happens on a phone",
      "Basic reporting on what's selling",
    ],
    process: [
      "Free consultation to understand your product range and how you currently sell",
      "Fixed-price quote covering the shop build and stock/payment integration",
      "Product catalogue set up, from what you provide",
      "Build, payment testing and stock-sync testing",
      "Launch, plus training on managing orders and stock day to day",
    ],
    tools:
      "Built on the same Next.js foundation as our website work, with a payment provider such as Stripe handling card payments securely. Stock syncing connects to whatever you already use, or we set one up from scratch if you don't have one.",
    relatedWork: {
      blurb: "We've done website and systems work for a mobile phone retailer — see the work page for details.",
      linkLabel: "See our work",
    },
    faqs: [
      {
        q: "Can you connect the shop to my existing till or stock system?",
        a: "In most cases, yes — we'll check what you use during the free consultation and tell you honestly if something isn't possible.",
      },
      {
        q: "Which payment provider do you use?",
        a: "We typically set up Stripe, which covers card payments and is straightforward for customers to use. If you already use a different provider, tell us and we'll see if it fits.",
      },
      {
        q: "Do I need a separate till if I also sell online?",
        a: "Not necessarily — that depends on how you currently sell in person. We'll talk through your setup before recommending anything.",
      },
      {
        q: "What happens if something goes out of stock?",
        a: "Once stock sync is in place, the site can show items as out of stock automatically, so you're not selling something you don't have.",
      },
    ],
  },

  "ai-automation": {
    outcome:
      "Less time spent on repetitive admin — replies, bookings and paperwork handled automatically where it actually makes sense.",
    problem: [
      "A lot of small business admin is the same task done over and over: answering the same questions, chasing the same paperwork, typing the same data into two different systems. That's time that could go into running the business instead.",
      "We look at where the repetition actually is, and automate that specific part — not a general \"AI will fix everything\" pitch.",
    ],
    deliverables: [
      "Chatbots or AI assistants for answering common customer questions",
      "Document processing — pulling information out of forms, invoices or emails automatically",
      "Workflow automation connecting the tools you already use, so data moves between them without you retyping it",
      "Enquiry or booking handling that works outside office hours",
      "A plain-English explanation of what's automated and what still needs a human",
    ],
    process: [
      "Free consultation to map out where your time actually goes",
      "We identify one or two specific tasks worth automating first, rather than everything at once",
      "Fixed-price quote for that scope",
      "Build and test against real examples from your business",
      "Handover with a plain explanation of how it works, and how to switch it off if needed",
    ],
    tools:
      "We use established AI providers' APIs and connect them to the tools you already use, rather than locking you into a single all-in-one platform.",
    relatedWork: {
      blurb: "Automation and AI chat & voice assistant work is one of our standing capabilities — see the work page.",
      linkLabel: "See our work",
    },
    faqs: [
      {
        q: "Will this replace me answering the phone or emails myself?",
        a: "No — it handles the repetitive first step, like answering common questions or logging an enquiry, and hands anything that needs judgement over to you.",
      },
      {
        q: "Is my data safe if I use an AI tool?",
        a: "We'll talk through exactly what data goes where before building anything, and avoid sending anything sensitive to a third party without your knowledge.",
      },
      {
        q: "What if the automation gets something wrong?",
        a: "We build in a review step for anything important, and test against real examples from your business before it goes live.",
      },
      {
        q: "Do I need any technical knowledge to use this day to day?",
        a: "No. We design it to fit into how you already work, and walk you through it at handover.",
      },
    ],
  },

  "custom-systems-erp": {
    outcome:
      "Stock, orders and admin tracked in one place that's built around how you actually work — not a generic template you have to bend your business to fit.",
    problem: [
      "Off-the-shelf software is built for how a typical business works, not how yours actually works. You end up with systems that don't talk to each other, or workarounds built on top of workarounds.",
      "We build the specific tool your business needs — stock control, order management, invoicing — around your actual process, not the other way round.",
    ],
    deliverables: [
      "Stock control and ordering systems",
      "Invoicing and admin tools",
      "POS (point of sale) integrations",
      "Custom dashboards for the day-to-day numbers that matter to you",
      "Data migration from your current spreadsheets or system, where possible",
    ],
    process: [
      "Free consultation to understand your current process, including the workarounds",
      "We map out what the system needs to do before writing anything",
      "Fixed-price quote for the agreed scope",
      "Build in stages, with working versions to check along the way rather than a single handover at the end",
      "Launch, plus training and a support arrangement for changes afterwards",
    ],
    tools:
      "Built as a system specific to your business rather than a licensed off-the-shelf package — so there's no recurring licence fee to a third party, and it can be extended later as your needs change.",
    relatedWork: {
      blurb:
        "We've built a custom stock and ordering system for a South Wales retailer, and systems work for a mobile phone retailer — see the work page for details.",
      linkLabel: "See our work",
    },
    faqs: [
      {
        q: "How is this different from buying off-the-shelf software?",
        a: "Off-the-shelf software is built for the average business. We build around your actual process, so you're not bending your workflow to fit the software.",
      },
      {
        q: "What happens if my business changes after the system is built?",
        a: "We build these to be extended — new features can usually be added later rather than needing a full rebuild.",
      },
      {
        q: "Can you connect it to my existing till or accounting software?",
        a: "In most cases, yes. We'll check what you use during the consultation and tell you honestly if something isn't possible.",
      },
      {
        q: "Is this only worthwhile for larger businesses?",
        a: "No — we scope these to the size of the problem, not a minimum business size. A single stock-tracking tool is as valid a project as a full system.",
      },
    ],
  },

  "data-analytics": {
    outcome:
      "A clear view of what's actually happening in your business — which days, products or customers matter most — instead of guessing.",
    problem: [
      "Most small businesses are already sitting on data — till reports, booking records, website visits — but it's scattered across systems and nobody has time to pull it together into something useful.",
      "We build dashboards and reports around whatever your business already tracks, so you can see patterns without doing the analysis by hand.",
    ],
    deliverables: [
      "Sales and customer analysis using your existing records",
      "Dashboards showing the numbers that matter to your business, updated automatically",
      "Regular reporting, so you're not pulling numbers together manually",
      "Help identifying what to track if you're not currently tracking much at all",
    ],
    process: [
      "Free consultation to see what data you already have, wherever it currently lives",
      "We agree what questions the dashboard or reports need to answer",
      "Fixed-price quote for the build",
      "Build, and check the numbers against what you already know to be true",
      "Handover with a walkthrough of how to read and use it",
    ],
    tools:
      "Dashboards built around whatever your business already tracks — till exports, spreadsheets, booking systems — rather than requiring you to adopt a new platform just to get insight.",
    relatedWork: {
      blurb: "See examples of the systems and reporting work we've done.",
      linkLabel: "See our work",
    },
    faqs: [
      {
        q: "I don't really track anything at the moment — can you still help?",
        a: "Yes. Part of the consultation is working out what's worth tracking for your business, then setting up a simple way to capture it.",
      },
      {
        q: "Do I need to buy new software to get a dashboard?",
        a: "Not necessarily. We build around what you already use where we can, rather than pushing a new platform on you.",
      },
      {
        q: "How often is the data updated?",
        a: "That depends on the source and what you need, from real-time to a weekly summary. We'll agree what makes sense during the consultation.",
      },
      {
        q: "Can I see the dashboard on my phone?",
        a: "Yes, dashboards are built to be viewable on mobile as well as desktop.",
      },
    ],
  },

  "seo-local-search": {
    outcome:
      "Showing up when people nearby search for what you do — so your next customer finds you before they find a competitor.",
    problem: [
      "A lot of local businesses have a website that nobody finds, because it's never been set up to actually rank on Google, or the Google Business Profile is out of date or missing entirely.",
      "We fix the technical basics and get the local listing right, so people searching for what you do in your area can actually find you.",
    ],
    deliverables: [
      "Google Business Profile set up or cleaned up — hours, photos, categories",
      "Local ranking work — making sure your area and services are clear to Google",
      "Technical SEO — page speed, mobile-friendliness, and the behind-the-scenes settings that affect ranking",
      "Guidance on gathering genuine customer reviews",
    ],
    process: [
      "Free consultation and an honest look at your current visibility on Google",
      "Fixed-price quote covering what actually needs fixing",
      "Google Business Profile setup or clean-up",
      "Technical fixes to the site itself",
      "A plain-English summary of what changed and what to expect",
    ],
    tools:
      "We work directly with Google Business Profile and standard technical SEO practice — no paid directory schemes or guaranteed-ranking promises, because nobody can honestly guarantee a Google ranking.",
    relatedWork: {
      blurb: "See examples of website work we've done, including the technical foundations SEO relies on.",
      linkLabel: "See our work",
    },
    faqs: [
      {
        q: "Can you guarantee a number 1 ranking on Google?",
        a: "No, and anyone who promises that isn't being straight with you. We can make sure the technical basics are right and your listing is accurate, which is what's within our control.",
      },
      {
        q: "How long does this take to show results?",
        a: "Local search changes tend to show up faster than general SEO — often a matter of weeks for the Google Business Profile side, longer for organic ranking. We'll be upfront about realistic timelines.",
      },
      {
        q: "Do I need a new website for this to work?",
        a: "Not necessarily. A lot of local search improvement comes from your Google Business Profile and technical fixes to your existing site.",
      },
      {
        q: "How is this different from paid Google ads?",
        a: "This is about being found for free in normal search results and Google Maps. Paid ads are a separate, ongoing cost — we can talk about whether that's worth it for you during the consultation.",
      },
    ],
  },

  "branding-design": {
    outcome:
      "A look — logo, colours, materials — that's consistent everywhere a customer sees your business, from the sign above the door to the menu on the table.",
    problem: [
      "A lot of independent businesses end up with a logo from a previous owner, mismatched signage, and print materials nobody's quite happy with but nobody's had time to fix. It adds up to looking less established than the business actually is.",
      "We build a simple, consistent identity and apply it everywhere it needs to show up, rather than a one-off logo with nothing else to back it up.",
    ],
    deliverables: [
      "Logo and brand identity — colours, fonts, and how they're used",
      "Print materials — menus, signage, business cards, flyers",
      "Social media templates so your posts look consistent without redesigning each one",
      "A short brand guidelines document, so anyone working on your materials later gets it right",
    ],
    process: [
      "Free consultation to understand your business and who you're trying to reach",
      "Fixed-price quote for the agreed scope",
      "Initial concepts for you to react to",
      "Refinement based on your feedback",
      "Final files delivered in the formats you need, plus guidelines for future use",
    ],
    tools:
      "Standard design tools and file formats — print-ready PDFs and editable source files — so whatever we hand over works with any printer or future designer, not just us.",
    relatedWork: {
      blurb: "See examples of work we've done.",
      linkLabel: "See our work",
    },
    faqs: [
      {
        q: "Do I own the logo and files once it's done?",
        a: "Yes — everything we design for you is yours, delivered in the file formats you need, with no ongoing licence fee.",
      },
      {
        q: "Can you just redesign my logo without touching everything else?",
        a: "Yes, a project can be scoped as narrowly as one logo or as broadly as a full identity across signage and print — we'll price it to match what you actually need.",
      },
      {
        q: "I already have a logo I like — can you build materials around it?",
        a: "Yes, we don't require starting from scratch if there's an existing logo worth keeping.",
      },
      {
        q: "How many design concepts do I get to choose from?",
        a: "We'll agree the number of initial concepts and revision rounds as part of the quote, so there's no ambiguity before work starts.",
      },
    ],
  },

  "support-maintenance": {
    outcome: "A website that keeps working after launch, with someone to call when something breaks or needs updating.",
    problem: [
      "A website isn't finished the day it launches — software needs updating, security needs checking, and content goes out of date. Most independent businesses don't have time to keep on top of that, and a site left unmaintained gets slower and less secure over time.",
      "We handle the ongoing side, so the site keeps working without you having to think about it.",
    ],
    deliverables: [
      "Hosting, kept running and monitored",
      "Software and security updates applied as needed",
      "Monthly retainers covering an agreed amount of update time",
      "Monitoring, so we know about a problem before your customers do",
      "A direct line to us rather than a support ticket queue",
    ],
    process: [
      "Free consultation to agree what level of cover you actually need",
      "Fixed monthly or one-off pricing, agreed in writing",
      "Site moved onto monitored hosting, or your existing hosting checked over",
      "Ongoing updates and monitoring",
      "You contact us directly for anything ad hoc — no obligation to stay on a retainer if it's not adding value",
    ],
    tools:
      "Hosting on infrastructure such as Vercel, with monitoring to catch problems early. We don't require a long contract to get support.",
    relatedWork: {
      blurb: "See examples of website work we've done and currently support.",
      linkLabel: "See our work",
    },
    faqs: [
      {
        q: "Do I have to sign up for a monthly retainer to get support?",
        a: "No — retainers are optional. You can also come to us for one-off fixes as needed.",
      },
      {
        q: "What happens if my site goes down?",
        a: "Monitoring flags problems as they happen. If you're on a retainer, fixing it is covered as part of that; without one, we'll quote a one-off fix.",
      },
      {
        q: "Can you take over support for a site you didn't build?",
        a: "In most cases, yes — we'll need a look at how it's built first, and we'll tell you honestly if it's not something we can safely take on.",
      },
      {
        q: "What's included in a typical month of maintenance?",
        a: "That's agreed upfront and depends on the plan — typically software updates, security checks and an agreed amount of time for content changes. We'll set out exactly what's included before you commit.",
      },
    ],
  },
};
