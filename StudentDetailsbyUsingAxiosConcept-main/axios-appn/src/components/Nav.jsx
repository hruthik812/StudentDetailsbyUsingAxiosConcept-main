import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav style={{ textAlign: "center", padding: "10px", borderBottom: "1px solid black" }}>
      <Link to="/add-consumer">AddConsumer</Link> | 
      <Link to="/update-consumer"> UpdateConsumer </Link> | 
      <Link to="/delete-consumer"> DeleteConsumer </Link> | 
      <Link to="/view-all-consumers"> ViewAllConsumers </Link> | 
      <Link to="/view-one-consumer"> ViewOneConsumer </Link>
    </nav>
  );
};

export default Nav;
