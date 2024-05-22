function Student(props) {
  return (
    <div className="student">
      <p>Name: {props.name}</p>
      <p>Roll Number: {props.rollNumber}</p>
      <p>Branch: {props.branch}</p>
      <p>Year: {props.year}</p>
      <p>Age: {props.age}</p>
    </div>
  );
}

export default Student;
