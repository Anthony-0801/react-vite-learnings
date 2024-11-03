import LevelOne from "./components/levels/LevelOne";
import LevelTwo from "./components/levels/LevelTwo";
import NavBar from "./components/NavBar";

export default function App() {
  return (
    <>
      <NavBar />
      <LevelOne name={"Anthony"} emoji={"👋"}/>
      <LevelTwo />
    </>
  )
}