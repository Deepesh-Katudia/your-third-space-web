export const siteConfig = {
  name: "The Third Space",
  wordmark: "THIRDSPACE",
  tagline: "Your third space awaits you.",
  description:
    "Not home. Not work. Find real events near you across all five NYC boroughs, join in one tap, and land in the group chat with everyone else going.",
  url: "https://thethirdspace.app",
  /** Points awarded for attending an event. Mirrors utils/points.ts in the app. */
  pointsPerEvent: 50,
  /** Toggles the "For venues & organisers" band. */
  showHostBand: true,
  appStoreHref: "#get",
  googlePlayHref: "#get",
} as const;

export const navLinks = [
  { href: "#how", label: "How it works" },
  { href: "#features", label: "Features" },
  { href: "#rewards", label: "Rewards" },
  { href: "#nyc", label: "The city" },
] as const;

export const stats = [
  { value: "5", label: "Boroughs covered" },
  { value: "8", label: "Kinds of night out" },
  {
    value: String(siteConfig.pointsPerEvent),
    label: "Points every time you show up",
  },
  { value: "0", label: "Cost to join an event" },
] as const;

export const steps = [
  {
    number: "01",
    title: "Find your night",
    body: "Search by name, venue or neighbourhood. Filter by category, by date, by borough. Every event is posted by a real venue and appears the moment it goes up.",
  },
  {
    number: "02",
    title: "Join, and you're in",
    body: "Registering puts you straight into the event's group chat with everyone else going and the host. No awkward walk-in alone. Change your mind and you leave quietly.",
  },
  {
    number: "03",
    title: "Show up. Stay in touch.",
    body: "Earn points for turning up, follow the people you actually clicked with, and keep the thread going. One night becomes a group you know.",
  },
] as const;

export const features = [
  {
    title: "Discover & filters",
    body: "Search, then narrow it down: category, today or this weekend, your neighbourhood, 21+ hidden. The count updates as you go.",
  },
  {
    title: "Event group chats",
    body: "Register and you're in the room before the room. Everyone going, plus the host, in real time.",
  },
  {
    title: "Messages with a gate",
    body: "A first message to someone new waits in Requests until they accept. Decline and it disappears — they're never told.",
  },
  {
    title: "Points & badges",
    body: `${siteConfig.pointsPerEvent} points every time you show up, and badges for the things that hold a community together.`,
  },
  {
    title: "Connections",
    body: "Follow anyone you meet. Follow each other and you're connected — a one-off night turns into someone you know.",
  },
  {
    title: "Host announcements",
    body: "Hosts broadcast to everyone registered. It lands pinned on the event page and highlighted in the group chat.",
  },
] as const;

export const tiers = [
  { name: "Newcomer", requirement: "First night out", highlight: false },
  { name: "Regular", requirement: "500 points", highlight: false },
  { name: "Insider", requirement: "1,500 points", highlight: true },
] as const;

export const boroughs = [
  { name: "Brooklyn", selected: true },
  { name: "Manhattan", selected: false },
  { name: "Queens", selected: false },
  { name: "Bronx", selected: false },
  { name: "Staten Island", selected: false },
] as const;

export const categories = [
  { name: "Make", description: "Art, sewing, painting" },
  { name: "Learn", description: "Talks and workshops" },
  { name: "Stage", description: "Stand-up, live sets, open mics" },
  { name: "Eat", description: "Tastings, dinners, supper clubs" },
  { name: "Touch grass", description: "Hikes just outside the city" },
  { name: "Game night", description: "Arcades and gaming sessions" },
  { name: "Slow down", description: "Sound baths and real rest" },
  { name: "Networking", description: "Career and business nights" },
] as const;

export const hostFeatures = [
  {
    title: "Post an event",
    body: "Date, category, neighbourhood, photo. It's in the feed instantly.",
  },
  {
    title: "See who's coming",
    body: "A real guest list with real profiles, updating as people register.",
  },
  {
    title: "Broadcast",
    body: "One announcement reaches everyone registered, twice over.",
  },
  {
    title: "Verified venue",
    body: "Set up your venue once and attendees know who they're meeting.",
  },
] as const;

export const footerColumns = [
  {
    heading: "App",
    links: [
      { href: "#get", label: "App Store" },
      { href: "#get", label: "Google Play" },
      { href: "#features", label: "Features" },
    ],
  },
  {
    heading: "Hosts",
    links: [
      { href: "#host", label: "Become a host" },
      { href: "#host", label: "Venue setup" },
      { href: "#nyc", label: "Coverage" },
    ],
  },
  {
    heading: "Company",
    links: [
      { href: "#get", label: "Contact" },
      { href: "#get", label: "Privacy" },
      { href: "#get", label: "Terms" },
    ],
  },
] as const;
