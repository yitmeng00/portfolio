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
];
