import proccessingMatch from "./components/ProccessingMatch";
import MatchesTable from "./components/MatchesTable";
import RoundesTable from "./components/RoundesTable";

// Process the matches before rendering the App
proccessingMatch();

// Main App component
const App = () => {
  return (
    <div>
      <RoundesTable />
      <MatchesTable />
    </div>
  );
};

export default App;
