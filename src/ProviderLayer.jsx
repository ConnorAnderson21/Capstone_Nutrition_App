import { AuthProvider, useFirebaseApp } from "reactfire";
import App from "./App";
// import DataProvider from "./context/DataProvider";

import { getAuth } from "firebase/auth";


const ProviderLayer = () => {
    const app = useFirebaseApp();
    
    const auth = getAuth(app);


    return (
        
            <AuthProvider sdk={auth}>
                
                    <App />
                
            </AuthProvider>
        
    )
}
export default ProviderLayer;