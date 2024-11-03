import LevelOne from "./components/levels/LevelOne";
import LevelThree from "./components/levels/LevelThree";
import LevelTwo from "./components/levels/LevelTwo";
import NavBar from "./components/NavBar";

export default function App() {
  return (
    <>
      <NavBar />
      <LevelOne name={"Anthony"} emoji={"👋"}/>
      <LevelTwo />
      <LevelThree />
    </>
  )
}