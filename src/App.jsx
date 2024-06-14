import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Dashboard from "./pages/Dashboard";
import SalesmanDashboard from "./pages/SalesmanDashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/salesman-dashboard" element={<SalesmanDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
