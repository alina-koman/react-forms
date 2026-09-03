import {type ChangeEvent, type SyntheticEvent, useState} from "react";

const ControlledForm = () => {
  const [userName, setUserName] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [email, setEmail] = useState<string>('')

  const handleControlledSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()

    const data = {
      usernameRef: userName,
      password: password,
      email: email,
    }

    console.log(`Данні з неконтрольованої форми:`, data)

      setUserName('')
      setPassword('')
      setEmail('')
  }

  return (
      <form onSubmit={handleControlledSubmit}>
        <h3>Controlled Form</h3>
        <div className={"block-user"}>
          <label htmlFor="username">Name:</label>
          <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter name..."
              value={userName}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setUserName(e.target.value)}
          />
        </div>

        <div className={"block-user"}>
          <label htmlFor="password">Password:</label>
          <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter password..."
              value={password}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
          />
        </div>

        <div className={"block-user"}>
          <label htmlFor="email">Email:</label>
          <input
              type="text"
              id="email"
              name="email"
              placeholder="Enter email..."
              value={email}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
          />
        </div>

        <button type={"submit"}>Send</button>
      </form>
  )
}

export default ControlledForm