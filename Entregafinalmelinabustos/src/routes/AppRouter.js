import { LoginContext } from "../context/LoginContext"
import { BrowserRouter } from "react-router-dom";
import { useContext } from 'react';
import PrivateRoutes from "../routes/PrivateRoutes"
import PublicRoutes from "../routes/PublicRoutes"

const AppRouter = () => {

    const { user } = useContext(LoginContext)

    return (
        <div>
            <BrowserRouter>

                {
                    user.logged
                        ? <PrivateRoutes />
                        : <PublicRoutes />
                }
            </BrowserRouter>
        </div>
    )
}

export default AppRouter