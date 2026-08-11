repo: Deepesh-Katudia/the-third-space
branch: feature/role-dashboards

## Last sync
date: 2026-08-11T19:53:18Z

### Updated in this project
- Reward section shows a real achievement (First Event — "It begins" / 50 pts) with its real mascot figure transcribed verbatim from constants/mascotFigures.ts (170×170 comp coordinates, body gradient, orbit ring, held ticket).
- Fixed the unlock glow centering (glowPulse keyframes were dropping the centering translate).
- Checked assets/icon.png, splash-icon.png, android-icon-foreground.png: all Expo placeholder art, not brand art. Not used; the comps' 3-circle mark stays as the wordmark lockup.

## Sync history

### 2026-08-11T19:47:45Z
- Built the marketing page from the app's real design tokens (two-tone orange ticket system, Bebas Neue / Inter / IBM Plex Mono, all-caps display).
- Feature copy grounded in the founder progress report: discover & filters, group chats, request-gated DMs, points & badges, connections, host announcements.
- Real product data used: 8 event categories, 5 NYC boroughs, 50 points per event, Newcomer / Regular / Insider tiers.

## Screen map
| Screen | Built from |
|---|---|
| Third Space Marketing.dc.html | thirdspace-app/constants/design.ts, thirdspace-app/constants/categories.ts, thirdspace-app/utils/points.ts, thirdspace-app/utils/boroughs.ts, docs/ambient-background-splash-and-home.html, docs/events-redesign-mockup.html, docs/FOUNDER-PROGRESS-REPORT.md, thirdspace-app/constants/achievements.ts, thirdspace-app/constants/mascotFigures.ts |
