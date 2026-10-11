import VisionHero from "../components/vision/VisionHero";
import VisionContent from "../components/vision/VisionContent";
import VisionGoals from "../components/vision/VisionGoals";
import "../index.css";
import "../App.css";
import "../assets/css/main.css"; // Reference your main UI styling
import "../assets/css/fontawesome-all.min.css"; // Reference your noscript styling
import "./Vision.css";

function Vision() {
  return (
    <div id="wrapper" className="vision-wrapper">
      {/* Main Banner */}
      <VisionHero />

      {/* Mission / About / Vision */}
      <VisionContent />

      {/* Goals */}
      <VisionGoals />
    </div>
  );
}

export default Vision;