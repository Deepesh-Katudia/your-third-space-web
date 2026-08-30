export const siteConfig = {
  name: "Your Third Space",
  wordmark: "THIRDSPACE",
  tagline: "Your third space awaits you.",
  description:
    "Not home. Not work. Find real events near you across all five NYC boroughs, join in one tap, and land in the group chat with everyone else going.",
  url: "https://www.yourthirdspace.co",
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
  { value: "10", label: "Kinds of things to do" },
  {
    value: String(siteConfig.pointsPerEvent),
    label: "Points every time you show up",
  },
  { value: "0", label: "Cost to join an event" },
] as const;

export const steps = [
  {
    number: "01",
    title: "Find your plan",
    body: "Search by name, venue or neighbourhood. Filter by category, by date, by borough. Every event is posted by a real venue and appears the moment it goes up.",
  },
  {
    number: "02",
    title: "Join, and you're in",
    body: "Registering drops you straight into the group chat, everyone going plus the host. You walk in already knowing faces, not a room of strangers. Plans change. Just try to update your RSVP so the host isn't left guessing.",
  },
  {
    number: "03",
    title: "Show up. Stay in touch.",
    body: "Earn points for turning up, follow the people you actually clicked with, and keep the thread going. One event becomes a group you know.",
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
    body: "A first message to someone new waits in Requests until they accept. Decline and it disappears. They're never told.",
  },
  {
    title: "Points & badges",
    body: `${siteConfig.pointsPerEvent} points every time you show up, and badges for the things that hold a community together.`,
  },
  {
    title: "Connections",
    body: "Follow anyone you meet. Follow each other and you're connected. A one-off event turns into someone you know.",
  },
  {
    title: "Host announcements",
    body: "Hosts broadcast to everyone registered. It lands pinned on the event page and highlighted in the group chat.",
  },
] as const;

/** Screens in the stacking showcase, in the order they stack. */
export const appScreens = [
  {
    key: "discover",
    step: "01",
    title: "Find your plan",
    body: "Search, then narrow it down: category, today or this weekend, your neighbourhood. The count updates as you go.",
  },
  {
    key: "chat",
    step: "02",
    title: "Land in the group chat",
    body: "Registering puts you in the room before the room. Everyone going, plus the host, in real time.",
  },
  {
    key: "requests",
    step: "03",
    title: "Messages with a gate",
    body: "A first message from someone new waits in Requests until you accept. Decline and it disappears. They're never told.",
  },
  {
    key: "connections",
    step: "04",
    title: "Keep the people",
    body: "Follow anyone you meet. Follow each other and you're connected. A one-off event turns into someone you know.",
  },
  {
    key: "reward",
    step: "05",
    title: "Collect the badge",
    body: "Showing up and hosting both count. Points land the moment the moment does, and the badge is yours to keep.",
  },
] as const;

export const tiers = [
  { name: "Newcomer", requirement: "First event", highlight: false },
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
  { name: "Speed friending", description: "Meet a handful of people, fast" },
  { name: "Date night", description: "Occasional, not the focus" },
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
