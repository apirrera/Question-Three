import Header from "./Header/Header.js";
import Card from "./Cards/Card.js"

function App() {
  return (
    <div> 

    <Header />

    <img src="../images/headerimage.png" alt="Header" className="headerimage" />

    <div className="App">
      
      <Card
      img="../images/gameimage.png"
      title="Blueberry Magic"
      alt="Blueberry Magic Game"
      git="https://github.com/apirrera/blueberry-magic-game"
      site="https://itkweens.itch.io/blueberry-magic"
      />

      <Card
      img="../images/reservationwebsite.png"
      title="Reservation Website"
      alt="Reservation Website"
      git="https://github.com/apirrera/Restaurant-Reservation-Website"
      site="https://restaurant-reserve-client.herokuapp.com/"
      />

      <Card
      img="../images/toneruxproject.png"
      title="UX Design Project"
      alt="Toner UX Design Project"
      site="https://uxdesignerportfolio.weebly.com/inventory-app.html"
      />

      <Card
      img="../images/quizmaster.png"
      title="Quiz Master App"
      alt="Quiz Master Phone App"
      git="https://github.com/apirrera/Quiz-Master"
      />

      
      <Card
      img="../images/scorekeeperapp.png"
      title="Score Keeper App"
      alt="Score Keeper App"
      git="https://github.com/apirrera/ScoreKeeperApp/tree/master"
      site="https://www.figma.com/file/QgIMSZsvkVNbf2SALXMu7q/Score-Keeper-App"
      />
      
    </div>
    <img src="../images/footerimage.png" alt="Footer" className="footer" />
    </div>
  );
}



export default App;
