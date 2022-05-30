/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";

function Registration({ onClose }) {
  const [userName, setUserName] = useState("");
  console.log("RENDER REGISTRATION");

  const onChangeUserName = (event) => {
    if (event.target.value.length < 6) {
      setUserName(event.target.value);
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();

    alert("Data sended");

    onClose();
  };

  return (
    <form
      onSubmit={onSubmit}
      css={css`
        max-width: 300px;
        padding: 15px;

        input,
        select {
          width: 100%;
          margin-bottom: 15px;
          box-sizing: border-box;
        }
      `}
    >
      <div id="user-name">USER VALUE:{userName}</div>

      <input
        onChange={onChangeUserName}
        name="username"
        type="text"
        placeholder="Enter user name"
        value={userName}
      />

      <input name="phone" type="text" placeholder="Enter user phone" />
      <input name="email" type="text" placeholder="Enter user email" />

      <select name="city">
        <option>Select city</option>
        <option>Kyiv</option>
        <option>Odessa</option>
        <option>Dnipo</option>
        <option>Lviv</option>
        <option>Chornobaivka 18</option>
      </select>

      <label
        css={css`
          display: flex;
          width: 100px;
        `}
      >
        Subscibe
        <input name="subscibe" type="checkbox" />
      </label>

      <div
        css={css`
          display: flex;
          margin-bottom: 15px;

          label {
            display: flex;
            align-items: center;
            width: 70px;
          }

          input {
            margin: 0;
          }
        `}
      >
        <label>
          Male
          <input name="gender" value="male" type="radio" />
        </label>
        <label>
          Female
          <input name="gender" value="female" type="radio" />
        </label>
      </div>

      <button
        css={css`
          background: #4b4bfa;
          color: #fff;
          text-transform: uppercase;
          border: none;
          padding: 5px 15px;
          border-radius: 3px;
          cursor: pointer;
        `}
      >
        Confirm
      </button>
    </form>
  );
}

export default Registration;
