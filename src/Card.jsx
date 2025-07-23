
import profilePic from "./assets/profile.jpeg";

function Card() {
  return (
    <div className='card'>
        <img className="card-image"src={profilePic} alt="profile pic"></img>
        <h2>Picture</h2>
        <p>I am learning JS react</p>
    </div>
  );
}

export default Card