import UserGreeting from "./UserGreeting";

function App() {
  return (
    <>
      {/* <h1>Welcome to my React App</h1> */}
      <UserGreeting isLogedIn={false} username="user1" />
    </>
  );
}

export default App;
