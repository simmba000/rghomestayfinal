import './App.css';
import AppRoutes from './AppRoutes';
import { AuthProvider } from './context/AuthContext';
import { SearchProvider } from './context/SearchContext';
function App() {
   return <AuthProvider> <SearchProvider> <AppRoutes /> </SearchProvider> </AuthProvider>;
}

export default App;
// 
// function App() {
//   return <AppRoutes />;
// }