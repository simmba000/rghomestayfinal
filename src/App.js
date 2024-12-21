import './App.css';
import AppRoutes from './AppRoutes';
import { SearchProvider } from './context/SearchContext';
function App() {
   return <SearchProvider> <AppRoutes /> </SearchProvider>;
}

export default App;
// 
// function App() {
//   return <AppRoutes />;
// }