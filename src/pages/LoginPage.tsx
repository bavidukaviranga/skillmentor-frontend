import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router";

export default function LoginPage() {
  const expectedPassword = "password123";
  let [searchParams] = useSearchParams();

  searchParams.get("error") && alert(searchParams.get("error")!);

  const [userDetails, setUserDetails] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setUserDetails((prev) => ({ ...prev, [name]: value }));
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (userDetails.password === expectedPassword) {
      navigate("/dashboard");
    } else {
      navigate("/login?error=Invalid%20credentials");
    }
  };

  return (
    <section className="min-h-[100vh] ">
      <h1>Enter your login credentials</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            className="bg-black text-white"
            value={userDetails.username}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            className="bg-black text-white"
            value={userDetails.password}
            onChange={handleInputChange}
          />
        </label>

        <br />
        <br />
        <br />

        <Button variant="secondary">Login</Button>
      </form>
    </section>
  );
}