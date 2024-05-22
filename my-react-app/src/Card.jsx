import profilePic from "./assets/pfp-img.png";

function Card() {
  return (
    <div className="card">
      <img src={profilePic} alt="my-img" className="cardImg" />
      <h2 className="cardTitle">Aditya Raj</h2>
      <p className="cardText">Hi! Nice to meet you.</p>
    </div>
  );
}

export default Card;
