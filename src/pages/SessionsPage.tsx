import { Link } from "react-router";

export default function SessionsPage() {
  const sessions = [
    {
      id: 1,
      title: "React Basics",
      description: "Learn the fundamentals of React.js",
    },
    {
      id: 2,
      title: "Advanced React",
      description: "Dive deeper into React.js and learn advanced concepts",
    },
    {
      id: 3,
      title: "State Management",
      description: "Learn how to manage state in React applications",
    },
    {
      id: 4,
      title: "React Hooks",
      description: "Understand how to use React Hooks effectively",
    },
  ];

  return (
    <section className="min-h-[100vh]">
      <h1>Session Page</h1>
      <ul className="list-disc pl-5">
        {sessions.map((session) => (
          <li key={session.id}>
            <Link
              className="text-cyan-700 hover:text-cyan-500"
              to={`/sessions/${session.id}/details/${session.title}`}
            >
              {session.title} - {session.description}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}