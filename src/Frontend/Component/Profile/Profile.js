// import "./Header.css";
import PropTypes from "prop-types";

function ProfileComp(User) {

    
 
console.log(User);

// 
  return (
    <div>
    <h3>Hello i am {User.Userdetails.name}</h3>
    
    <p>address: {User.Userdetails.address}</p>
    <p>city: {User.Userdetails.city}</p>
    <p>created_at: {User.Userdetails.created_at}</p>
    <p>email: {User.Userdetails.email}</p>
    <p>id: {User.Userdetails.id}</p>
    <p>phone_number: {User.Userdetails.phone_number}</p>
    <p>profile_pic: <img src={User.Userdetails.profile_pic} alt="Profile Pic" /></p>
    <p>updated_at: {User.Userdetails.updated_at}</p>
    <p>user_role_id: {User.Userdetails.user_role_id}</p>
    <p>zip_code: {User.Userdetails.zip_code}</p>


    </div>
  );
}

ProfileComp.propTypes = {

  User: PropTypes.object,
  
};

export default ProfileComp;
