export interface Project {
  id: string;
  title: string;
  shortDesc: string;
  image: string;
  tags: string[];
  story: string[];
  githubUrl: string;
}

export const PROJECTS_DATA: Project[] = [
  {
    id: "careshift",
    title: "CareShift",
    shortDesc:
      "A full-stack clinical staff scheduling platform with real-time shift management, leave workflows, and two-stage swap approvals.",
    image: "/assets/projects/careshift.png",
    tags: [
      "ASP.NET Core 10",
      "React 19",
      "TypeScript",
      "PostgreSQL",
      "SignalR",
      "Redux Toolkit",
      "Tailwind CSS",
      "Clean Architecture",
      "CQRS",
    ],
    story: [
      "This was my most ambitious project — building a complete clinical scheduling platform end-to-end. I committed fully to Clean Architecture on the backend, which forced me to reason carefully about boundaries: the domain knows nothing about HTTP, handlers stay thin, and infrastructure concerns never leak inward. Adopting CQRS with MediatR made me realize how freeing it is to treat every operation as a discrete, testable request object.",
      "The real challenge was the real-time layer. WebSocket connections can't carry custom headers, so the JWT had to ride in the query string — something I only discovered after a long debugging session. That constraint shaped the entire SignalR auth setup. Designing the two-stage shift swap flow also taught me to think in proper state machines: every transition writes an audit entry, and the system stays consistent regardless of where it fails.",
      "Enforcing role-based access across six different staff roles made it clear that authorization can't live only in the UI. Every API endpoint has to guard itself independently — hiding a button is cosmetic, not secure.",
    ],
    githubUrl: "https://github.com/yitmeng00/clinical-scheduler-platform",
  },
  {
    id: "ledgr",
    title: "Ledgr",
    shortDesc:
      "A full-stack personal finance tracker with transaction management, budget tracking, statistics, and multi-account support — built as a React + Express monorepo.",
    image: "/assets/projects/budget-tracker.png",
    tags: [
      "React 19",
      "TypeScript",
      "Vite",
      "Tailwind CSS v4",
      "TanStack Query",
      "Node.js",
      "Express 5",
      "MySQL",
      "Docker",
    ],
    story: [
      "Ledgr started as a question: what does full-stack actually mean when you own every layer? I built it as a monorepo with a React client and an Express API, which forced me to think carefully about where logic belongs. The API validates with Zod, queries MySQL directly with no ORM, and the client never touches raw response shapes — everything gets transformed into clean UI state before it reaches a component.",
      "The statistics page was the most interesting engineering problem. Monthly and annual charts, category breakdowns, budget surplus calculations — each requires a different query shape, and getting them to feel instant meant thinking about what TanStack Query caches and what it refetches. I also had to design the budget system carefully: default monthly limits with per-month overrides meant the resolution logic had to be explicit and predictable.",
      "The responsive design pushed me to treat mobile as a first-class target, not an afterthought. Bottom navigation, bottom-sheet modals, and a layout that genuinely works at 375px all required deliberate decisions at the component level, not just media query patches on top of a desktop-first layout.",
    ],
    githubUrl: "https://github.com/yitmeng00/budget-tracker",
  },
  {
    id: "ledgr-mobile",
    title: "Ledgr Mobile",
    shortDesc:
      "A React Native finance tracker for iOS and Android with on-device SQLite, recurring transactions, CSV import/export, and full offline support.",
    image: "/assets/projects/budget-tracker-mobile.png",
    tags: [
      "React Native",
      "Expo SDK 56",
      "TypeScript",
      "SQLite",
      "TanStack Query",
      "NativeWind",
      "Expo Router",
    ],
    story: [
      "I've had a habit of recording every transaction for monthly budget planning, but every app I tried either had paywalled features or interrupted me with ads just to log a coffee. So I built my own. Having a real personal use case changed how I made decisions — every friction point I felt as a user became something I fixed as the developer.",
      "Building the mobile version of Ledgr after the web version was a study in how different the constraints are. Everything is on-device: a single SQLite file, no network calls, no backend to offload logic to. That meant the data layer had to be rock-solid — the schema is versioned, the seed runs exactly once on first launch, and every query is a plain TypeScript function with no framework magic underneath.",
      "The recurring transactions engine was the most algorithmically interesting part. On every app launch, the root layout checks all active rules against today's date and creates any due transactions before the first render. Getting the schedule logic right across daily, biweekly, end-of-month, and annual intervals — especially across month and year boundaries — required careful test cases rather than intuition.",
      "Localization across four languages (English, Bahasa Melayu, Simplified and Traditional Chinese) taught me that i18n can't be bolted on at the end. Every string that touches the UI has to go through the translation layer from day one. The backup and restore system — a full JSON export of every row in every table — was also a reminder that user data portability is a feature, not an afterthought.",
    ],
    githubUrl: "https://github.com/yitmeng00/budget-tracker-mobile",
  },
  {
    id: "inventrack",
    title: "InvenTrack",
    shortDesc:
      "A role-based inventory management system with JWT auth via httpOnly cookies, CSV bulk import, and live KPI dashboards.",
    image: "/assets/projects/inventrack.png",
    tags: ["PHP 8.1", "MySQL", "Tailwind CSS v4", "Vanilla JavaScript", "JWT", "DataTables"],
    story: [
      "I built InvenTrack to understand what web development looks like without a framework doing the heavy lifting. Writing JWT authentication from scratch in PHP — encoding the token, setting an httpOnly cookie, validating it on every request, handling token refresh — gave me a deep appreciation for what libraries quietly handle for you.",
      "Without an ORM, every query was handwritten SQL. That friction was valuable: I had to think explicitly about joins, indexes, and transaction boundaries. The CSV bulk import was the trickiest piece — you can't INSERT row by row and hope for the best. I had to validate the entire file first, then wrap the inserts in a transaction so a single bad row rolls everything back cleanly.",
      "Role enforcement at the API layer, with no middleware framework to lean on, made me realize how easy it is to accidentally leave a door open. Writing every permission check manually gives you a new respect for what authorization libraries abstract away.",
    ],
    githubUrl: "https://github.com/yitmeng00/inventory-mgmt-sys",
  },
  {
    id: "chatroom",
    title: "Chat Room",
    shortDesc:
      "A minimalist real-time chat application built on raw WebSockets — no Socket.io, just the protocol.",
    image: "/assets/projects/chatroom.png",
    tags: ["Node.js", "Express v5", "WebSocket", "Tailwind CSS v4", "Vanilla JavaScript"],
    story: [
      "I built this to understand WebSockets at the protocol level — no Socket.io, just the raw `ws` library. The server is a Map of active connections, and every inbound message gets stamped with metadata and broadcast to all peers. Adding an `isSelf` flag to each outgoing message — so clients can style their own messages differently — was a small detail that clicked something about how stateful servers reason about identity.",
      "The presence system — tracking joins, leaves, and live user counts — taught me the WebSocket connection lifecycle. Connections drop silently, and your server has to handle the `close` event gracefully, or the online count gets stuck. Handling that edge case cleanly was more satisfying than any UI work on the project.",
      "It was eye-opening to see how little infrastructure real-time actually needs when you strip the abstractions away. The whole server is under 100 lines.",
    ],
    githubUrl: "https://github.com/yitmeng00/chat-room",
  },
  {
    id: "weatherhub",
    title: "WeatherHub",
    shortDesc:
      "A responsive weather app with current conditions, 3-hourly forecasts, and auto location detection powered by OpenWeather.",
    image: "/assets/projects/weatherhub.png",
    tags: ["React 19", "TypeScript", "Tailwind CSS v4", "OpenWeather API", "Vite"],
    story: [
      "WeatherHub was deliberate fundamentals practice in React. Working with the OpenWeather API taught me about response shapes, error states, and the discipline of transforming raw API data into clean UI state before it ever touches a component. I spent more time on the data layer than the UI itself.",
      "The geolocation feature was more nuanced than I expected. The browser permission request is async, the user can deny it at any time, and you need a graceful fallback for every failure mode — permission denied, position unavailable, timeout. Handling all of those paths explicitly made the feature feel solid.",
      "It was also my first real encounter with Vite's environment variable system for keeping API keys out of source. Even in client-side code where the key ends up in the bundle regardless, the habit of never hardcoding secrets is worth building early.",
    ],
    githubUrl: "https://github.com/yitmeng00/weather-app",
  },
  {
    id: "mytasks",
    title: "MyTasks",
    shortDesc:
      "A client-side task manager built with pure HTML, CSS, and Vanilla JavaScript — no build step, no dependencies, just localStorage.",
    image: "/assets/projects/mytasks.png",
    tags: ["HTML5", "CSS3", "Vanilla JavaScript", "localStorage", "Font Awesome"],
    story: [
      "MyTasks was a deliberate exercise in constraint. No framework, no build tool, no npm — just a single HTML file you open in a browser. That constraint forced every architectural decision to be explicit. I ended up structuring the JavaScript into discrete modules: `StorageManager`, `State`, `Renderer`, `EventHandlers`, `ModalService`, `NotificationService`, and an `App` entry point. The patterns that React and Vue abstract away — you still need them, you just write them yourself.",
      "The v2 rewrite was where the interesting thinking happened. I replaced dynamic modal construction (building DOM nodes in JavaScript every time) with a static modal overlay that gets toggled and populated, which is cheaper and easier to reason about. I also added a real-time search, filter tabs, sort options, priority levels, categories, and due dates — all layered onto a state object that drives a full re-render on every change.",
      "Working without any tooling sharpens your eye for what browsers actually give you. The custom `<select>` chevron using `appearance: none` with an SVG background, the `min` date constraint preventing past-due selection, the responsive breakpoints at 768px, 375px, and 320px — nothing is automatic. You notice every browser default you're fighting.",
    ],
    githubUrl: "https://github.com/yitmeng00/my-tasks-to-do-app",
  },
];
