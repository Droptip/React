import ColorBox from "./components/ColorBox";
import Greeting from "./components/Greeting";
import AdultChecker from "./components/AdultChecker";
import NotificationCount from "./components/NotificationCount";
import Hero from "./components/Hero";

const App = () => {
  return (
    <div>
      <Greeting isLoggedIn={false} />
      <ColorBox color="red" />
      <ColorBox color="blue" />
      <ColorBox color="yellow" />
      <AdultChecker age={15} />
      <AdultChecker age={25} />
      <NotificationCount count={50} />
      <NotificationCount count={150} />
      <Hero title="Info Hero" subtitle="Info subtitle" />
    </div>
  );
};

export default App;