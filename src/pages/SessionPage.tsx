import { useParams } from "react-router";

export default function SessionPage() {
  const { sessionId, sessionTitle } = useParams();

  console.log("Session ID is", sessionId);
  console.log("Session Title is", sessionTitle);

  return (
    <section>
      <h1>Session Details Page</h1>
      <p>This page will show the details of a specific session.</p>

      <br />
      <br />
      <p>Session ID is: {sessionId}</p>
      <p>Session Title is: {sessionTitle}</p>
    </section>
  );
}