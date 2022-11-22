import MyNav from "./components/MyNav";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import LatestRelease from "./components/LatestRelease";

function App() {
  return (
    <div className="main-div">
      <MyNav />
      <Welcome />
      <LatestRelease />
      <MyFooter FooterText="This is the footer" />
    </div>
  );
}

export default App;
