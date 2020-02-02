import React from "react";
import useInput from "../hooks/useInput";

const UseForm = () => {
  const [firstName, bindFirstName, resetFirstName] = useInput('')
  const [lastName, bindLastName, resetLastName] = useInput('')

  const submitHandler = (e) => {
    e.preventDefault()

    alert(`Hello ${firstName} ${lastName}!`)

    resetFirstName()
    resetLastName()
  }

  return (
    <>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="firstName">
            <input
              type="text"
              name="firstName"
              {...bindFirstName}
            />
          </label>
        </div>

        <div>
          <label htmlFor="lastName">
            <input
              type="text"
              name="lastName"
              {...bindLastName}
            />
          </label>
        </div>

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default UseForm;
