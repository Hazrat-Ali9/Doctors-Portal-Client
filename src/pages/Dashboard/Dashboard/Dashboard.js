import React from "react";
import { Link, Outlet } from "react-router-dom";
import useAdmin from './../../../hooks/useAdmin';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../../firebase/Firebase.init';

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user)

  return (
    <div className="drawer drawer-mobile px-6 lg:px-12">
      <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content "> 
        <h1 className="text-2xl text-purple-600">Welcome to your Dashboard</h1>
        <Outlet></Outlet> 
      </div>
      
      <div className="drawer-side">
        <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content"> 
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/dashboard/review">My Review</Link>
          </li>
          {admin && <li>
            <Link to="/dashboard/user">All Users</Link>
          </li>}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
