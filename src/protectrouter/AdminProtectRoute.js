import {Navigate,Outlet} from'react-router-dom'



 const AdminProtectRoute = ({ children }) => {
    
    const isauth = true

    if (!isauth) {
      return <Navigate to="/login" replace />;
    }
  
    return children ? children : <Outlet />;
  };

  export default AdminProtectRoute