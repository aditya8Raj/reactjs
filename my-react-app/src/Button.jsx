function Button() {
  const styles = {
    button: {
      backgroundColor: "blue",
      color: "white",
      padding: "10px",
      borderRadius: "5px",
      border: "none",
      cursor: "pointer",
    },
  };

  return (
    <div>
      <button style={styles.button}>Click Me</button>
    </div>
  );
}

export default Button;
