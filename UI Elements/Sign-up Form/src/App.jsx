import { useState } from "react";

function App() {
  const [formData, setformData] = useState({
    emailAdress: "",
    Password: "",
    PasswordConfirm: "",
    news: "",
  });

  function changeHandler(event) {
    const { name, type, value, checked } = event.target;
    setformData((prevFormdata) => {
      return {
        ...prevFormdata,
        [name]: type == "checkbox" ? checked : value,
      };
    });

    console.log(formData);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (formData.Password == formData.PasswordConfirm) {
      console.log("Login Successful");
    } else {
      console.log("Insuccesful");
    }

    if (formData.news) {
      console.log("Oj");
    }
  }
  return (
    <div className="h-screen flex justify-center items-center bg-back">
      <div className="bg-white h-[21rem] w-96 rounded-3xl shadow-2xl flex justify-center">
        <form
          className="mt-12 flex flex-col gap-5 items-center items"
          onSubmit={handleSubmit}
        >
          <input
            className=" w-64 outline-none p-2 border-[1px] border-solid border-gray-900 rounded-lg"
            type="text"
            placeholder="Email Adress"
            onChange={changeHandler}
            name="emailAdress"
            value={formData.emailAdress}
          />

          <input
            className=" w-64 outline-none p-2 border-[1px] border-solid border-gray-900 rounded-lg"
            type="password"
            placeholder="Password"
            onChange={changeHandler}
            name="Password"
            value={formData.Password}
          />

          <input
            className=" w-64 outline-none p-2 border-[1px] border-solid border-gray-900 rounded-lg"
            type="password"
            placeholder="Confirm Password"
            onChange={changeHandler}
            name="PasswordConfirm"
            value={formData.PasswordConfirm}
          />
          <div>
            <input
              id="okaytoemail"
              type="checkbox"
              onChange={changeHandler}
              name="news"
              value={formData.news}
            />
            <label htmlFor="okaytoemail"> I want to join newsletter</label>
          </div>

          <button className="bg-blue-900 py-2 px-0 w-28 text-white font-semibold rounded-md ">
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
