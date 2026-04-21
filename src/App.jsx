import "./index.css";
import LiquidGlass from "./components/LiquidGlass";

export default function App() {
  return (
    <div className="app-container">
      <div className="top-row">

        <LiquidGlass id="glass1">
          <h1
            className="chromatic fisheye wobble"
            data-text="Alberto Martí Llorens"
          >
            Alberto Martí Llorens
          </h1>
        </LiquidGlass>

        <LiquidGlass id="glass2">
          <h2
            className="chromatic fisheye wobble"
            data-text="IES El Caminàs"
          >
            IES El Caminàs
          </h2>
        </LiquidGlass>

        <LiquidGlass id="glass3">
          <h2
            className="chromatic fisheye wobble"
            data-text="DAW"
          >
            DAW
          </h2>
        </LiquidGlass>

      </div>

      <LiquidGlass id="glass4">
        <h2
          className="chromatic fisheye wobble"
          data-text="Lenguajes de programación"
        >
          Lenguajes de programación
        </h2>
      </LiquidGlass>
    </div>
  );
}
