export const siteConfig = {
  name: "Ardafis Partners",
  tagline: "Your Outsourced Accounts & Finance Team, Built on Precision",
  description:
    "Ardafis Partners provides outsourced bookkeeping, payroll, and tax-prep support to US CPA firms and solo practitioners — ACCA-qualified, QuickBooks & Xero Certified, and built to scale with your busy season.",
  email: "contact@ardafispartners.com",
};

export type NavLink = { label: string; href: string };

export const navLinks: NavLink[] = [
  { label: "Services", href: "/services" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Pricing", href: "/pricing" },
  { label: "Insights", href: "/insights" },
  { label: "About", href: "/about" },
  { label: "Security", href: "/security" },
  { label: "Contact", href: "/contact" },
];

export type ServiceTier = {
  name: string;
  items: string[];
};

export type ServiceIconKey =
  | "book"
  | "exchange"
  | "users"
  | "file-text"
  | "receipt"
  | "file-check"
  | "building"
  | "trending-up"
  | "cart";

export type ServiceCategory = "Bookkeeping & Operations" | "Tax & Compliance" | "Advisory & Specialty";

export type Service = {
  slug: string;
  title: string;
  shortDesc: string;
  heroDesc: string;
  keywords: string;
  bullets: string[];
  software: string[];
  category: ServiceCategory;
  icon: ServiceIconKey;
  tiers?: ServiceTier[];
  complianceNote?: boolean;
};

export const services: Service[] = [
  {
    slug: "bookkeeping",
    title: "Bookkeeping & Cleanup",
    shortDesc:
      "Historical books cleanup, monthly bookkeeping, and bank & credit card reconciliation.",
    heroDesc:
      "Outsourced bookkeeping for US CPA firms and their small-business clients — from monthly maintenance to full historical cleanup and platform migration.",
    keywords: "outsourced bookkeeping for CPA firms, offshore bookkeeper, QuickBooks cleanup service",
    bullets: [
      "Monthly bookkeeping and general ledger maintenance",
      "Bank, credit card, and merchant account reconciliation",
      "Historical books cleanup and catch-up bookkeeping",
      "Migration between QuickBooks, Xero, Sage, and Odoo",
      "Chart of accounts setup and cleanup",
    ],
    software: ["QuickBooks Online", "QuickBooks Desktop", "Xero", "Sage", "Odoo"],
    category: "Bookkeeping & Operations",
    icon: "book",
  },
  {
    slug: "payables-receivables",
    title: "Payables & Receivables",
    shortDesc: "AP/AR management, vendor bill processing, invoicing, and collections.",
    heroDesc:
      "Keep cash moving without adding headcount — we manage the day-to-day accounts payable and receivable workflow so your team can focus on client relationships.",
    keywords: "outsourced accounts payable, accounts receivable management, invoice processing service",
    bullets: [
      "Vendor bill entry, coding, and approval routing",
      "Invoice generation and client billing",
      "Collections follow-up and aging report management",
      "Vendor and customer statement reconciliation",
    ],
    software: ["QuickBooks Online", "Bill.com", "Xero", "Odoo"],
    category: "Bookkeeping & Operations",
    icon: "exchange",
  },
  {
    slug: "payroll",
    title: "Payroll Processing",
    shortDesc: "Payroll processing and payslips via Gusto, Zoho Payroll, or your existing platform.",
    heroDesc:
      "Accurate, on-time payroll processing for your clients' teams — we work inside the payroll platform you already use.",
    keywords: "outsourced payroll processing, payroll support for CPA firms",
    bullets: [
      "Bi-weekly, semi-monthly, and monthly payroll runs",
      "New hire and termination processing",
      "Payslip generation and distribution",
      "Payroll tax filing support in coordination with your firm",
    ],
    software: ["Gusto", "Zoho Payroll", "QuickBooks Payroll", "ADP"],
    category: "Bookkeeping & Operations",
    icon: "users",
  },
  {
    slug: "tax-preparation",
    title: "Tax Prep Support",
    shortDesc:
      "Return preparation support for CPA firms during busy season — you file, we handle the workload.",
    heroDesc:
      "A dependable extra set of hands during tax season — we prepare returns to your firm's standards so you can take on more clients without burning out your staff.",
    keywords: "outsourced tax preparation for CPA firms, offshore tax preparer, 1040 outsourcing",
    bullets: [
      "Individual return preparation (Form 1040 and schedules)",
      "Business return preparation support (1120S, 1065)",
      "Source document organization and workpaper preparation",
      "Review-ready files handed back to your reviewing CPA",
    ],
    software: ["Drake Tax", "UltraTax", "Lacerte", "ProSeries"],
    category: "Tax & Compliance",
    icon: "file-text",
    complianceNote: true,
  },
  {
    slug: "sales-tax-preparation",
    title: "Sales & Use Tax Preparation",
    shortDesc: "Multi-state sales and use tax return preparation, including nexus tracking.",
    heroDesc:
      "Multi-state sales tax has become its own full-time job for a lot of firms — we prepare the returns so your reviewing CPA can focus on sign-off, not data entry.",
    keywords: "outsourced sales tax preparation, multi-state sales tax support for CPA firms, use tax return prep",
    bullets: [
      "Multi-state sales and use tax return preparation",
      "Economic nexus tracking across states",
      "Taxability mapping by product or service line",
      "Reconciliation of collected vs. remitted tax",
      "Review-ready filings handed back to your firm",
    ],
    software: ["Avalara", "TaxJar", "QuickBooks Online", "Xero"],
    category: "Tax & Compliance",
    icon: "receipt",
    complianceNote: true,
  },
  {
    slug: "1099-w2-preparation",
    title: "1099 & W-2 Preparation Support",
    shortDesc: "Vendor and employee year-end form preparation, TIN matching, and draft filings.",
    heroDesc:
      "Year-end 1099 and W-2 season creates a spike of low-complexity, high-penalty-risk work — we handle the volume so your team isn't chasing W-9s in January.",
    keywords: "1099 preparation outsourcing, W-2 preparation service, TIN matching support for CPA firms",
    bullets: [
      "Vendor payment review and 1099-NEC/1099-MISC eligibility screening",
      "W-9 collection tracking and TIN matching",
      "Draft form preparation for your firm's review and filing",
      "Employee W-2 preparation support alongside payroll processing",
    ],
    software: ["QuickBooks Online", "Gusto", "Track1099", "Xero"],
    category: "Tax & Compliance",
    icon: "file-check",
    complianceNote: true,
  },
  {
    slug: "entity-setup-software-migration",
    title: "Entity Setup & Software Migration",
    shortDesc: "New-entity chart of accounts setup and migration between accounting platforms.",
    heroDesc:
      "Whether it's a brand-new entity or a client switching off a legacy platform, we handle the setup and data migration so nothing gets lost in the transition.",
    keywords: "QuickBooks migration service, Xero setup for new business, chart of accounts setup outsourcing",
    bullets: [
      "Chart of accounts design for new entities",
      "Migration between QuickBooks, Xero, Sage, and Odoo",
      "Historical data conversion and parallel-run testing",
      "Class, location, and multi-entity tracking setup",
      "App and bank-feed connection setup",
    ],
    software: ["QuickBooks Online", "Xero", "Sage", "Odoo"],
    category: "Bookkeeping & Operations",
    icon: "building",
  },
  {
    slug: "advisory-reporting",
    title: "Advisory, Controller & CFO Services",
    shortDesc: "A tiered ladder from month-end close up through fractional CFO-level strategy.",
    heroDesc:
      "Not every client needs a CFO, and not every client needs just a bookkeeper. This is structured as a ladder so you can place each client at the depth they actually need.",
    keywords: "outsourced controller services, virtual CFO support, management reporting outsourcing",
    bullets: [
      "Month-end close checklists and reporting packages",
      "KPI dashboards tailored to the client's industry",
      "Cash-flow forecasting and budget-to-actual analysis",
      "Board-ready and investor-ready financial packages",
    ],
    software: ["QuickBooks Online", "Xero", "Google Sheets", "Excel"],
    category: "Advisory & Specialty",
    icon: "trending-up",
    tiers: [
      {
        name: "Month-End Close & Accounting",
        items: [
          "Full-cycle reconciliations and GL maintenance",
          "Standard monthly reporting package",
          "Close checklist ownership",
        ],
      },
      {
        name: "Controller-Level Oversight",
        items: [
          "Review and sign-off on the close process",
          "Cash-flow forecasting and budget-to-actual analysis",
          "Custom KPI dashboards",
        ],
      },
      {
        name: "Fractional CFO",
        items: [
          "Strategic financial planning and scenario modeling",
          "Board- and investor-ready reporting packages",
          "Coordination with outside advisors on financing or transactions",
        ],
      },
    ],
  },
  {
    slug: "ecommerce-accounting",
    title: "Ecommerce Accounting",
    shortDesc: "Multi-channel reconciliation, inventory & COGS tracking, and marketplace settlement matching.",
    heroDesc:
      "Ecommerce books get messy fast — multiple channels, settlement delays, and inventory that never quite matches. This is where our team's automation background pays off.",
    keywords: "ecommerce bookkeeping service, Shopify Amazon accounting, marketplace settlement reconciliation",
    bullets: [
      "Multi-channel sales reconciliation (Shopify, Amazon, Etsy, Walmart)",
      "Inventory and cost-of-goods-sold tracking",
      "Marketplace settlement and payout matching",
      "Sales tax mapping support across channels",
    ],
    software: ["Shopify", "A2X", "QuickBooks Online", "Xero"],
    category: "Advisory & Specialty",
    icon: "cart",
  },
];

export const serviceCategoryOrder: ServiceCategory[] = [
  "Bookkeeping & Operations",
  "Tax & Compliance",
  "Advisory & Specialty",
];

export const trustStats = [
  { value: "10+", label: "Years Combined Industry Experience" },
  { value: "100%", label: "ACCA-Qualified Team" },
  { value: "5+", label: "Accounting Platforms Supported" },
  { value: "1", label: "Business Day Response Time" },
];

export type Industry = {
  title: string;
  desc: string;
};

export const industries: Industry[] = [
  {
    title: "Real Estate",
    desc: "Property management accounting, rent-roll reconciliation, and owner reporting for real estate clients your firm serves.",
  },
  {
    title: "Ecommerce & Retail",
    desc: "Multi-channel sales, inventory, and settlement reconciliation for online and brick-and-mortar retail clients.",
  },
  {
    title: "Freelancers & Gig Economy",
    desc: "Simplified bookkeeping and quarterly-estimate-ready records for 1099 and self-employed clients.",
  },
  {
    title: "Small Business & SME",
    desc: "Full-cycle bookkeeping and advisory support for the small and mid-sized businesses that make up most of your client base.",
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Discovery call",
    desc: "We learn your firm's workflow, software stack, and where the workload is heaviest — no obligation.",
  },
  {
    step: "02",
    title: "Scope & pricing",
    desc: "We agree on per-client, hourly, or per-return pricing based on the actual work, not a fixed package you don't need.",
  },
  {
    step: "03",
    title: "Secure onboarding",
    desc: "Access is granted client-by-client under NDA, using the accounting and tax software you already run.",
  },
  {
    step: "04",
    title: "Ongoing delivery",
    desc: "Work is completed on your schedule with a direct line to the partner overseeing your account — not a rotating queue.",
  },
];

export type Insight = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
};

export const insights: Insight[] = [
  {
    slug: "cost-of-outsourced-bookkeeping-for-cpa-firms",
    title: "What Outsourced Bookkeeping Actually Costs a CPA Firm",
    excerpt:
      "A breakdown of per-client, hourly, and per-return pricing models — and how to tell which one fits your firm's workload.",
    date: "2026-09-24",
  },
  {
    slug: "quickbooks-vs-xero-vs-sage-outsourcing",
    title: "QuickBooks vs. Xero vs. Sage: What Matters When You're Outsourcing",
    excerpt:
      "The platform your firm already uses usually matters more than which one is 'best' — here's how to think about it.",
    date: "2026-09-24",
  },
  {
    slug: "tax-season-overflow-without-hiring",
    title: "Handling Tax Season Overflow Without a Seasonal Hire",
    excerpt:
      "Seasonal staff are expensive to train and hard to retain. Here's how firms cover the busy-season spike without it.",
    date: "2026-09-24",
  },
];

export const pricingTiers = [
  {
    name: "Per-Client Bookkeeping",
    price: "$180–$350",
    unit: "/ month",
    desc: "Flat monthly bookkeeping for one of your clients — you keep the relationship, we do the work.",
  },
  {
    name: "Hourly Support",
    price: "$12–$22",
    unit: "/ hour",
    desc: "Flexible hourly bookkeeping ($12–$18) or tax prep & review ($18–$22) for overflow work.",
    highlight: true,
  },
  {
    name: "Per-Return (Tax Season)",
    price: "$35–$220",
    unit: "/ return",
    desc: "Simple individual returns from $35, business returns (1120S/1065) from $120.",
  },
];
