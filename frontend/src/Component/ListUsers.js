import React, { useEffect } from 'react'
import './ListUsers.css'
import { useDispatch, useSelector } from 'react-redux';
import { GetUsers, deletUser } from './Redux/Action';
 
function ListUsers() {
    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(GetUsers())
    }, [])
    const usersFromState = useSelector((state) => state.users.users);
  console.log(usersFromState);
  return (
    <>
    <div style={{ display: "flex", gap: "20px", flexWrap: "nowrap" ,justifyContent: "space-around"}}>
      {usersFromState.map((e) => (
    
        <div className="container d-flex justify-content-center mt-5">
    <div className="card">
      <div className="top-container">
        <img
          src="https://i.imgur.com/G1pXs7D.jpg"
          className="img-fluid profile-image"
          width={70}
        />
        <div className="ml-3">
          <h5 className="name">{e.name}</h5>
          <p className="mail">{e.email}</p>
        </div>
      </div>
       
      <div className="recent-border mt-4">
        <span className="recent-orders">Recent orders</span>
      </div>
      <div className="wishlist-border pt-2">
        <span className="wishlist">Wishlist</span>
      </div>
      <div className="fashion-studio-border pt-2">
        <span className="fashion-studio" onClick={()=>dispatch(deletUser(e._id))}>Delete user</span>
        <button onClick={()=>dispatch(deletUser(e._id))}>Delete</button>

      </div>
    </div>
  </div>
   ))}
   </div>
  
    </>
  )
}

export default ListUsers