import "./index.css";
import LiquidGlass from "./components/LiquidGlass";

export default function App() {
  return (
    <div className="app-container">
      <div className="top-row">
        <LiquidGlass id="glass1">Alberto Martí Llorens</LiquidGlass>
        <LiquidGlass id="glass2">IES El Caminàs</LiquidGlass>
        <LiquidGlass id="glass3">DAW</LiquidGlass>
      </div>

      <LiquidGlass id="glass4">
        Lenguajes de programación:
      </LiquidGlass>
    </div>
  );
}
