import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Dashboard } from "./pages/dashboard";
import { Auth } from "./pages/auth";
import { FinancialRecordsProvider } from "./contexts/financial-record-context";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

function App() {
  return (
    <Router>
      <div className="app-container">
        <div className="navbar">
          <Link to="/">Dashboard</Link>

          <SignedIn>
            <UserButton afterSignOutUrl="/auth" />
          </SignedIn>
        </div>

        <Routes>
          {/*  Protected Dashboard */}
          <Route
            path="/"
            element={
              <>
                <SignedIn>
                  <FinancialRecordsProvider>
                    <Dashboard />
                  </FinancialRecordsProvider>
                </SignedIn>

                <SignedOut>
                  <Auth />
                </SignedOut>
              </>
            }

          />

          {/*  Auth Route */}
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
