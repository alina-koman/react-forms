import {type SyntheticEvent, useRef} from "react"

const UncontrolledForm = () => {
  const usernameRef = useRef<HTMLInputElement>(null)
  const commentRef = useRef<HTMLTextAreaElement>(null)

  const handleFormRef = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = {
      username: usernameRef.current?.value,
      comment: commentRef.current?.value
    }

    console.log(`Данні з неконтрольованої форми:`, formData)
    e.currentTarget.reset()
  }

  return (
      <form onSubmit={handleFormRef}>
        <h3>Uncontrolled Form</h3>
        <div className="input-container">
          <label htmlFor="usernameRef">usernameRef</label>
          <input
              type={"text"}
              id="usernameRef"
              ref={usernameRef}
              name="usernameRef"
              placeholder={'Enter username...'}
          />
        </div>
        <div className="input-container">
          <label htmlFor="commentRef">commentRef</label>
          <textarea
              ref={commentRef}
              id="commentRef"
              name="commentRef"
              placeholder={'Enter comment...'}
          />
        </div>
        <button type={"submit"}>Send</button>
      </form>
  )

}

export default UncontrolledForm
