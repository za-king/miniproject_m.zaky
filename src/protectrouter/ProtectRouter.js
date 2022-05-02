
import {Navigate,Outlet} from'react-router-dom'

import Cookies from 'universal-cookie';
const cookies = new Cookies();
 const ProtectRouter = ({ children }) => {
  const auth = cookies.get('auth')
  

    if (!auth ) {
      return <Navigate to="/login" replace />;
    }
  
    return children ? children : <Outlet />;
  };

  export default ProtectRouter