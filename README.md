# Unplug Life — MVP

A polished, responsive Expo app for digital wellbeing and nomophobia awareness. Runs on Android, iOS and web.

## Run locally
1. Install Node.js LTS (20 recommended).
2. Extract this folder and run `npm install`.
3. Run `npx expo start`.
4. Press `w` for web, `a` for Android (with emulator/device), or `i` for iOS (macOS + simulator).

## MVP included
- Welcome/onboarding with age group and wellbeing goal selection
- Home dashboard with daily intention, streak, progress and quick actions
- Learn library with searchable topic cards
- 5-question self-reflection check-in (educational, not diagnostic)
- 7-day reset plan with interactive daily tasks
- Profile/settings and privacy-first product messaging
- Local persistence for onboarding, check-in answers and completed tasks

## Important
This is a runnable front-end MVP with local device storage and sample content. It does **not** yet connect to Appwrite, provide clinical diagnosis, or read device-wide screen-time data. The assessment is a nonvalidated self-reflection and must not be represented as NMP-Q or a clinical instrument. Before public release, add secure backend rules, guardian consent flows for minors, privacy/legal review, accessibility testing, and production analytics/monitoring.

## Structure
- `app/` Expo Router screens and tabs
- `components/` reusable UI
- `constants/` theme and sample content
- `lib/` local persistence helpers
