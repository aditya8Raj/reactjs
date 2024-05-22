import Student from "./Student";

function App() {
  return (
    <>
      <h1 style={{ textAlign: "center", fontFamily: "monospace" }}>
        Student Details
      </h1>
      <Student
        name="Aditya Raj"
        rollNumber="2301020442"
        branch="CSE (IOT & Cyber Security)"
        year="2nd"
        age={20}
      />
      <Student
        name="Ujjwal Rai"
        rollNumber="2301020457"
        branch="CSE Core"
        year="2nd"
        age={19}
      />
    </>
  );
}

export default App;
