# Anchor

Anchor is our team project for UC Berkeley's CS 160: User Interface Design and Development (Summer 2026). We designed and built it to help people move through the overwhelm and task-initiation paralysis that can happen when obligations are scattered across email, calendars, and personal lists.

Instead of adding another unbounded to-do list, Anchor gathers tasks from Gmail, Google Calendar, and manual entry into one place. A morning briefing helps people choose three priorities for the day, pairs each priority with a small first step, and supports focused work, evening reflection, and rollover of unfinished tasks. Completed focus sessions also grow a personal garden, making progress visible without relying only on self-reported checkboxes.

## Our design process

We developed Anchor over six weeks through an iterative, team-based process:

1. **Needfinding:** We observed and interviewed seven students and recent graduates managing ADHD, anxiety, or depression while they began real work in their own environments. We found that vague tasks without clear boundaries often remained undone, while downscoping them to concrete first steps helped people begin.
2. **Ideation:** Each team member explored multiple concepts across software, wearables, smart glasses, and physical devices. We narrowed 14 rough ideas to three concepts and selected a unified daily briefing centered on three bounded priorities.
3. **Lo-fi prototyping:** We compared a structured dashboard with a conversational co-pilot through paper-prototype testing. Participants preferred the dashboard's visibility and control, but their feedback led us to simplify flows, clarify affordances, and reduce the feeling of adding another planning burden.
4. **Hi-fi prototyping:** Three teammates independently designed visual directions. We selected and refined a calm sage-based system, built an interactive Figma prototype, and added clearer navigation, progress feedback, reflection, and multiple accent themes in response to testing.
5. **Implementation:** We shipped a working browser-based application and iteratively fixed issues involving task rollover, focus-timer persistence, ambient audio, and date handling.
6. **Evaluation:** Five participants completed planning, focus, and reflection tasks in the working app, followed by a usability survey and interview.

## Key evaluation findings

- All five participants completed daily planning without assistance, and planning and day-closing tasks met the team's two-minute target.
- Starting a focus session was the main usability bottleneck: only two of five participants completed it unaided on their first attempt, and the task exceeded the time target.
- Labels such as **Focus** and **Garden** did not consistently communicate their destinations; participants suggested clearer action-oriented wording and stronger navigation cues.
- The Garden and Reflection experiences received the warmest reactions, but participants often discovered them late or only after prompting.
- Participants valued the constrained three-task plan and visible progress, while asking for more calendar context, clearer Google integration feedback, and more control over task editing and timer behavior.

## Technology

The Anchor app is a React 18 single-page application built with Vite and React Router and deployed on GitHub Pages. It uses Supabase for authentication, synchronization, and row-level security; `localStorage` provides an offline-first experience. Read-only Google Calendar and Gmail integrations use Google OAuth with PKCE. The design journal in this repository is a static HTML, CSS, and JavaScript site.

## Team Hi-Five Senses

- Sampurn Bhowmick
- Na Mi Kim
- Madison Lee
- Thanhbinh Nguyen
- Reed Yalouh

## Project links

- [Live design journal](https://sane24.github.io/Anchor-Design-Journal)
- [Live Anchor app](https://sane24.github.io/Anchor-App)
- [Anchor app repository](https://github.com/Sane24/Anchor-App)
- [Figma prototype](https://www.figma.com/design/1gJt2z5PtBEJMhIZtZ9dQI/Anchor-App)
