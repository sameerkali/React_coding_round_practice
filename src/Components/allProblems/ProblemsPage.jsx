import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";

// const categories = [
//   {
//     easy: [
//       {
//         id: 1,
//         title: "Color Changing Button",
//         date: "06 July 2024",
//         author: "sameerkali",
//         link: "https://github.com/sameerkali/React_coding_round_practice",
//         description: "Create a button that changes color when clicked or hovered over."
//       },
//       {
//         id: 2,
//         title: "Stop Watch",
//         date: "06 July 2024",
//         author: "sameerkali",
//         link: "https://github.com/sameerkali/React_coding_round_practice",
//         description: "Develop a functional stopwatch with start, stop, and reset features."
//       },
//       {
//         id: 3,
//         title: "Password Generator",
//         date: "06 July 2024",
//         author: "sameerkali",
//         link: "https://github.com/sameerkali/React_coding_round_practice",
//         description: "Build a tool that generates secure, random passwords based on user-defined criteria."
//       },
//       {
//         id: 4,
//         title: "Tabs Composition",
//         date: "06 July 2024",
//         author: "sameerkali",
//         link: "https://github.com/sameerkali/React_coding_round_practice",
//         description: "Implement a tabbed interface component for organizing and displaying content."
//       },
//       {
//         id: 5,
//         title: "Breadcrumbs",
//         date: "06 July 2024",
//         author: "sameerkali",
//         link: "https://github.com/sameerkali/React_coding_round_practice",
//         description: "Create a breadcrumb navigation component to improve website navigation."
//       },
//       {
//         id: 6,
//         title: "Progress Bar",
//         date: "06 July 2024",
//         author: "sameerkali",
//         link: "https://github.com/sameerkali/React_coding_round_practice",
//         description: "Design and implement a progress bar to visualize task completion or loading status."
//       },
//       {
//         id: 7,
//         title: "Holy Grail Layout",
//         date: "06 July 2024",
//         author: "sameerkali",
//         link: "https://github.com/sameerkali/React_coding_round_practice",
//         description: "Implement the classic 'Holy Grail' layout using modern CSS techniques."
//       },
//       {
//         id: 8,
//         title: "Blink Game",
//         date: "06 July 2024",
//         author: "sameerkali",
//         link: "https://github.com/sameerkali/React_coding_round_practice",
//         description: "Develop a simple reaction-based game where elements blink and users must click quickly."
//       }
//     ]
//   },
//   {
//     medium: [
//       {
//         id: 9,
//         title: "Stepper Component",
//         date: "06 July 2024",
//         author: "sameerkali",
//         link: "https://github.com/sameerkali/React_coding_round_practice",
//         description: "Create a multi-step form or wizard interface using a stepper component."
//       },
//       {
//         id: 10,
//         title: "Quiz App",
//         date: "06 July 2024",
//         author: "sameerkali",
//         link: "https://github.com/sameerkali/React_coding_round_practice",
//         description: "Build an interactive quiz application with multiple-choice questions and scoring."
//       },
//       {
//         id: 11,
//         title: "Drag and Drop Notes",
//         date: "06 July 2024",
//         author: "sameerkali",
//         link: "https://github.com/sameerkali/React_coding_round_practice",
//         description: "Implement a drag-and-drop interface for organizing and rearranging notes or tasks."
//       },
//       {
//         id: 12,
//         title: "Tic Tac Toe",
//         date: "06 July 2024",
//         author: "sameerkali",
//         link: "https://github.com/sameerkali/React_coding_round_practice",
//         description: "Create a functional Tic Tac Toe game with win detection and player turn management."
//       },
//       {
//         id: 13,
//         title: "Website Walk-through Helper",
//         date: "06 July 2024",
//         author: "sameerkali",
//         link: "https://github.com/sameerkali/React_coding_round_practice",
//         description: "Develop a step-by-step guide system to help users navigate through a website or application."
//       },
//       {
//         id: 14,
//         title: "Overlapping Circles Detector",
//         date: "06 July 2024",
//         author: "sameerkali",
//         link: "https://github.com/sameerkali/React_coding_round_practice",
//         description: "Create a function to detect and visualize overlapping circles on a canvas."
//       },
//       {
//         id: 15,
//         title: "OTP Login System",
//         date: "06 July 2024",
//         author: "sameerkali",
//         link: "https://github.com/sameerkali/React_coding_round_practice",
//         description: "Implement a One-Time Password (OTP) based login system for enhanced security."
//       },
//       {
//         id: 16,
//         title: "Dark Mode Toggle",
//         date: "06 July 2024",
//         author: "sameerkali",
//         link: "https://github.com/sameerkali/React_coding_round_practice",
//         description: "Create a toggle switch to switch between dark and light modes in a web application."
//       },
//       {
//         id: 17,
//         title: "Selectable Grid",
//         date: "06 July 2024",
//         author: "sameerkali",
//         link: "https://github.com/sameerkali/React_coding_round_practice",
//         description: "Build a grid where users can select multiple cells, similar to spreadsheet functionality."
//       },
//       {
//         id: 18,
//         title: "Search Suggestions",
//         date: "06 July 2024",
//         author: "sameerkali",
//         link: "https://github.com/sameerkali/React_coding_round_practice",
//         description: "Implement a search bar with auto-complete suggestions as the user types."
//       },
//       {
//         id: 19,
//         title: "Modal Component",
//         date: "06 July 2024",
//         author: "sameerkali",
//         link: "https://github.com/sameerkali/React_coding_round_practice",
//         description: "Create a reusable modal component as a functional component in React."
//       },
//       {
//         id: 20,
//         title: "Like Button",
//         date: "06 July 2024",
//         author: "sameerkali",
//         link: "https://github.com/sameerkali/React_coding_round_practice",
//         description: "Implement an interactive 'like' button with animations and state management."
//       }
//     ]
//   },
//   {
//     hard: [
//       {
//         id: 21,
//         title: "Job Board with API Integration",
//         date: "06 July 2024",
//         author: "sameerkali",
//         link: "https://github.com/sameerkali/React_coding_round_practice",
//         description: "Build a job board application that fetches and displays job listings using the Hacker News API."
//       },
//       {
//         id: 22,
//         title: "Infinite Scroll Implementation",
//         date: "06 July 2024",
//         author: "sameerkali",
//         link: "https://github.com/sameerkali/React_coding_round_practice",
//         description: "Create an infinite scroll feature to load content dynamically as the user scrolls."
//       },
//       {
//         id: 23,
//         title: "useEffect Hook Polyfill",
//         date: "06 July 2024",
//         author: "sameerkali",
//         link: "https://github.com/sameerkali/React_coding_round_practice",
//         description: "Implement a polyfill for React's useEffect hook to understand its inner workings."
//       },
//       {
//         id: 24,
//         title: "useMemo Hook Polyfill",
//         date: "06 July 2024",
//         author: "sameerkali",
//         link: "https://github.com/sameerkali/React_coding_round_practice",
//         description: "Create a custom implementation of React's useMemo hook for optimizing performance."
//       },
//       {
//         id: 25,
//         title: "useThrottle Hook",
//         date: "06 July 2024",
//         author: "sameerkali",
//         link: "https://github.com/sameerkali/React_coding_round_practice",
//         description: "Develop a custom React hook for throttling function calls to improve performance."
//       },
//       {
//         id: 26,
//         title: "Multi-Select Search Component",
//         date: "06 July 2024",
//         author: "sameerkali",
//         link: "https://github.com/sameerkali/React_coding_round_practice",
//         description: "Build a search component that allows users to select multiple items from search results."
//       },
//       {
//         id: 27,
//         title: "Recursive Comment Section",
//         date: "06 July 2024",
//         author: "sameerkali",
//         link: "https://github.com/sameerkali/React_coding_round_practice",
//         description: "Implement a nested comment section using recursion and depth-first search in React."
//       }
//     ]
//   }
// ]

const categories = [
  {
    id: "easy",
    name: "Easy",
    posts: [
      {
        id: 1,
        title: "Color Changing Button",
        date: "06 July 2024",
        author: "sameerkali",
        link: "https://github.com/sameerkali/React_coding_round_practice",
        description: "Create a button that changes color when clicked or hovered over."
      },
      // ... other easy tasks
    ]
  },
  {
    id: "medium",
    name: "Medium",
    posts: [
      {
        id: 9,
        title: "Stepper Component",
        date: "06 July 2024",
        author: "sameerkali",
        link: "https://github.com/sameerkali/React_coding_round_practice",
        description: "Create a multi-step form or wizard interface using a stepper component."
      },
      // ... other medium tasks
    ]
  },
  {
    id: "hard",
    name: "Hard",
    posts: [
      {
        id: 21,
        title: "Job Board with API Integration",
        date: "06 July 2024",
        author: "sameerkali",
        link: "https://github.com/sameerkali/React_coding_round_practice",
        description: "Build a job board application that fetches and displays job listings using the Hacker News API."
      },
      // ... other hard tasks
    ]
  }
];

export default function ProblemsPage() {
  return (
    <div className="flex h-screen w-full justify-center pt-24 px-4 bwgradient">
      <div className="w-full max-w-md">
        <h1 className="text-2xl font-bold text-white mb-4">Problems Page</h1>
        <p className="text-white mb-6">Browse through the different categories of problems, each with a detailed description.</p>
        <TabGroup>
          <TabList className="flex gap-4">
            {categories.map(({ id, name }) => (
              <Tab
                key={id}
                className="rounded-full py-1 px-3 text-sm/6 font-semibold text-white focus:outline-none data-[selected]:bg-white/10 data-[hover]:bg-white/5 data-[selected]:data-[hover]:bg-white/10 data-[focus]:outline-1 data-[focus]:outline-white"
              >
                {name}
              </Tab>
            ))}
          </TabList>
          <TabPanels className="mt-3">
            {categories.map(({ id, name, posts }) => (
              <TabPanel key={id} className="rounded-xl bg-white/5 p-3">
                <ul>
                  {posts.map(post => (
                    <li
                      key={post.id}
                      className="relative rounded-md p-3 text-sm/6 transition hover:bg-white/5"
                    >
                      <a href={post.link} className="font-semibold text-white">
                        <span className="absolute inset-0" />
                        {post.title}
                      </a>
                      <p className="text-white/75">{post.description}</p>
                      <ul
                        className="flex gap-2 text-white/50 mt-1"
                        aria-hidden="true"
                      >
                        <li>{post.date}</li>
                        <li aria-hidden="true">&middot;</li>
                        <li>{post.author}</li>
                      </ul>
                    </li>
                  ))}
                </ul>
              </TabPanel>
            ))}
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  );
}