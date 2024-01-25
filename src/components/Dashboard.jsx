import React, { useEffect, useState } from 'react';
import useLogout from '../hooks/useLogout.jsx';


function Dashboard() {
  const logout = useLogout()
  const [userName, setUserName] = useState("")

  useEffect(() => {
    let userName = sessionStorage.getItem("userName")
    if (userName) {
      setUserName(userName)
    }
  }, [])


return (
    <div className="sign " id='sign' style={{ paddingBottom: "180px" }} >
      <div className='wel'>
        Welcome have a wonderful day!!.  <br /> Thank you for a login.
      </div>
      <div style={{ position: 'absolute', marginTop: "50px" }}>
        <span className="flicker">{userName}</span>
      </div>
      <button id='log' style={{ position: 'absolute', marginTop: "500px" }}>
        <span onClick={logout} >LOGOUT</span>
      </button>
    </div>
  );
}
export default Dashboard;
