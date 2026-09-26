import type { FlowStage } from "@/components/FlowDiagram";

// Step-by-step "how work moves" flows shown across the site.
// Keep every stage consistent with commitments stated elsewhere on the site.

type Flow = { eyebrow: string; tagline: string; stages: FlowStage[] };

export const homeFlow: Flow = {
  eyebrow: "How work moves",
  tagline: "Automation-assisted. Partner-reviewed. Your sign-off.",
  stages: [
    { label: "Source data", sub: "Bank feeds, bills, payroll exports", icon: "data" },
    { label: "Automated matching", sub: "Rules-based categorization & reconciliation", icon: "spark" },
    { label: "Partner review", sub: "Every file checked by a named partner", icon: "person" },
    { label: "Your sign-off", sub: "Review-ready for your CPA or EA", icon: "check" },
  ],
};

export const serviceFlows: Record<string, Flow> = {
  bookkeeping: {
    eyebrow: "How bookkeeping moves",
    tagline: "From raw feeds to a documented close.",
    stages: [
      { label: "Bank & card feeds", sub: "Pulled from the platform your client already uses", icon: "data" },
      { label: "Matching & coding", sub: "Rules-based categorization and reconciliation", icon: "spark" },
      { label: "Partner review", sub: "Exceptions flagged, every file checked", icon: "person" },
      { label: "Close pack to you", sub: "Reconciled books ready for your review", icon: "check" },
    ],
  },
  "payables-receivables": {
    eyebrow: "How payables & receivables move",
    tagline: "Cash in and out, without adding headcount.",
    stages: [
      { label: "Bills & invoices in", sub: "Vendor bills and client billing captured", icon: "doc" },
      { label: "Coding & routing", sub: "Entered, coded, and routed for approval", icon: "spark" },
      { label: "Follow-up", sub: "Collections and aging kept current", icon: "chat" },
      { label: "Reconciled", sub: "Statements tied out to the ledger", icon: "check" },
    ],
  },
  payroll: {
    eyebrow: "How payroll moves",
    tagline: "Inside the payroll platform you already run.",
    stages: [
      { label: "Changes in", sub: "Hours, new hires, and terminations", icon: "data" },
      { label: "Run prepared", sub: "Payroll processed on schedule", icon: "calendar" },
      { label: "Partner check", sub: "Reviewed before anything is final", icon: "person" },
      { label: "Payslips out", sub: "Tax filing support coordinated with your firm", icon: "check" },
    ],
  },
  "tax-preparation": {
    eyebrow: "How a return moves",
    tagline: "We prepare. You review, sign, and file.",
    stages: [
      { label: "Source documents", sub: "Organized and checked for gaps", icon: "doc" },
      { label: "Workpapers & draft", sub: "Prepared to your firm's standards", icon: "spark" },
      { label: "Partner review", sub: "Checked before it reaches you", icon: "person" },
      { label: "Your CPA signs", sub: "You stay the professional of record", icon: "check" },
    ],
  },
  "sales-tax-preparation": {
    eyebrow: "How sales tax moves",
    tagline: "Multi-state, prepared for your sign-off.",
    stages: [
      { label: "Sales data", sub: "Collected across channels and states", icon: "data" },
      { label: "Nexus & taxability", sub: "Economic nexus tracked, products mapped", icon: "scale" },
      { label: "Reconcile", sub: "Collected vs. remitted tax tied out", icon: "spark" },
      { label: "Filing-ready", sub: "Returns handed back for your review", icon: "check" },
    ],
  },
  "1099-w2-preparation": {
    eyebrow: "How year-end forms move",
    tagline: "The January spike, handled.",
    stages: [
      { label: "Payments reviewed", sub: "Vendors screened for 1099 eligibility", icon: "data" },
      { label: "W-9s & TINs", sub: "Collection tracked, TINs matched", icon: "link" },
      { label: "Draft forms", sub: "1099s and W-2s prepared", icon: "doc" },
      { label: "You file", sub: "Ready for your firm's review and filing", icon: "check" },
    ],
  },
  "entity-setup-software-migration": {
    eyebrow: "How a migration moves",
    tagline: "Nothing lost in the transition.",
    stages: [
      { label: "Map the old setup", sub: "Chart of accounts and history reviewed", icon: "data" },
      { label: "Convert", sub: "Historical data moved to the new platform", icon: "refresh" },
      { label: "Parallel run", sub: "Old and new tested side by side", icon: "scale" },
      { label: "Go live", sub: "Bank feeds and apps connected", icon: "check" },
    ],
  },
  "advisory-reporting": {
    eyebrow: "How reporting moves",
    tagline: "From closed books to decisions.",
    stages: [
      { label: "Closed books", sub: "A clean, reconciled month-end", icon: "check" },
      { label: "Analysis", sub: "KPIs, variances, and cash-flow forecast", icon: "chart" },
      { label: "Partner review", sub: "Numbers checked and explained", icon: "person" },
      { label: "Client-ready pack", sub: "Board- and investor-ready reporting", icon: "doc" },
    ],
  },
  "ecommerce-accounting": {
    eyebrow: "How ecommerce books move",
    tagline: "Every channel, every payout, matched.",
    stages: [
      { label: "Channel payouts", sub: "Shopify, Amazon, Etsy, Walmart", icon: "cart" },
      { label: "Settlement matching", sub: "Payouts tied to orders, fees, and refunds", icon: "spark" },
      { label: "Inventory & COGS", sub: "Cost of goods kept in step with sales", icon: "data" },
      { label: "Reconciled books", sub: "Ready for your review", icon: "check" },
    ],
  },
};

export const platformFlows: Record<"quickbooks" | "xero", Flow> = {
  quickbooks: {
    eyebrow: "How work moves inside QuickBooks",
    tagline: "No migration required to bring us on.",
    stages: [
      { label: "User invite", sub: "Access through QuickBooks' own permissions", icon: "lock" },
      { label: "Bank feed rules", sub: "Review and categorization rules set up", icon: "spark" },
      { label: "Partner review", sub: "Reconciliations checked every close", icon: "person" },
      { label: "Reports in QBO", sub: "Built where your team already looks", icon: "chart" },
    ],
  },
  xero: {
    eyebrow: "How work moves inside Xero",
    tagline: "Inside your existing Xero setup, not around it.",
    stages: [
      { label: "User invite", sub: "Access through Xero's own permissions", icon: "lock" },
      { label: "Feeds & apps", sub: "Bank feeds, A2X, Gusto, and other integrations", icon: "link" },
      { label: "Partner review", sub: "Reconciliations checked every close", icon: "person" },
      { label: "Reports in Xero", sub: "Custom reporting in Xero's suite", icon: "chart" },
    ],
  },
};

export const engagementFlow: Flow = {
  eyebrow: "How an engagement moves",
  tagline: "No procurement cycle. No staff contract.",
  stages: [
    { label: "Discovery call", sub: "Your workflow, software, and pressure points", icon: "chat" },
    { label: "Scope & pricing", sub: "Per client, hour, or return — agreed upfront", icon: "scale" },
    { label: "Secure onboarding", sub: "NDA first, then client-by-client access", icon: "lock" },
    { label: "Ongoing delivery", sub: "A direct line to your partner", icon: "person" },
  ],
};

export const pricingFlow: Flow = {
  eyebrow: "How pricing works",
  tagline: "Agreed before any work starts.",
  stages: [
    { label: "Scope the workload", sub: "Clients, volume, and complexity", icon: "data" },
    { label: "Pick a model", sub: "Per client, per hour, or per return", icon: "scale" },
    { label: "Work delivered", sub: "Billed on the model you chose", icon: "check" },
    { label: "Scale up or down", sub: "Busy season in, quieter months out", icon: "refresh" },
  ],
};

export const staffingFlow: Flow = {
  eyebrow: "How we staff your work",
  tagline: "One partner owns every engagement.",
  stages: [
    { label: "Your workload", sub: "Tax, bookkeeping, or ecommerce", icon: "data" },
    { label: "Matched to a partner", sub: "The partner best suited to the work", icon: "link" },
    { label: "Partner owns delivery", sub: "Not a rotating offshore queue", icon: "person" },
    { label: "One point of contact", sub: "You always know who is doing the work", icon: "chat" },
  ],
};

export const securityFlow: Flow = {
  eyebrow: "How your data is handled",
  tagline: "Nothing moves before the paperwork.",
  stages: [
    { label: "NDA signed", sub: "Before onboarding begins", icon: "doc" },
    { label: "§7216 consent", sub: "In place wherever tax data is involved", icon: "shield" },
    { label: "Scoped access", sub: "Client-by-client, via your platform's invites", icon: "lock" },
    { label: "Named partner", sub: "Accountable for every engagement", icon: "person" },
  ],
};

export const switchFlow: Flow = {
  eyebrow: "How a switch moves",
  tagline: "A phased handover, not a hard cutover.",
  stages: [
    { label: "Map what you do now", sub: "Scope and pricing based on today's work", icon: "data" },
    { label: "NDA & consent", sub: "Paperwork before any data moves", icon: "shield" },
    { label: "Pilot 1–2 clients", sub: "Confirm the quality bar first", icon: "flag" },
    { label: "Expand at your pace", sub: "You control how fast it grows", icon: "refresh" },
  ],
};

export const gulfFlow: Flow = {
  eyebrow: "How we onboard Gulf clients",
  tagline: "Direct support for your business.",
  stages: [
    { label: "Intro call", sub: "Your business type and region", icon: "chat" },
    { label: "Scope & quote", sub: "Based on your volume and setup", icon: "scale" },
    { label: "Set up in your software", sub: "Access through your own platform", icon: "lock" },
    { label: "Monthly delivery", sub: "Books, payroll, and reporting", icon: "calendar" },
  ],
};

export const contactFlow: Flow = {
  eyebrow: "What happens after you reach out",
  tagline: "No obligation at any step.",
  stages: [
    { label: "You send details", sub: "A message or a call request", icon: "chat" },
    { label: "Partner replies", sub: "Within one business day", icon: "person" },
    { label: "Discovery call", sub: "Your workflow and where you're stretched", icon: "calendar" },
    { label: "Scope & pricing", sub: "Agreed before any work starts", icon: "scale" },
  ],
};
