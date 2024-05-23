function UserGreeting(props) {
  const welcomeMessage = (
    <h2 className="welcome-message">Welcome back {props.username}</h2>
  );

  const logInPrompt = (
    <h2 className="logIn-propmt">Please log in to continue</h2>
  );

  return props.isLogedIn ? welcomeMessage : logInPrompt;
}

export default UserGreeting;
