import React from "react";
import "./styles.css";

let now = new Date().toLocaleTimeString();



export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="Image">
          <img
            src="/img/640px-Flag_of_Astrakhan.svg.png"
            alt="flag"
            width="400px"
            hight="300px"
          />
        </div>
        <h1>Астрахань — город России.</h1>

        <h2> {now} </h2>

        <h3>
          Старейший экономический и культурный центр Нижнего Поволжья и
          Прикаспия. Входит в перечень исторических городов России.
        </h3>
        <p>
          Располагается в верхней части дельты реки Волги, на 11 островах
          Прикаспийской низменности.
        </p>
        <p>
          Город разделён на 4 административных района: Кировский, Советский,
          Ленинский и Трусовский.
        </p>
        <p>
          Население: 524 371 чел. (2021). Площадь: 208,70 км². В Астрахани
          проживают представители более 200 национальностей, 19 конфессий,
          действуют 170 обществ национальных культур.
        </p>
        <a href="https://ru.wikipedia.org/wiki/Астрахань">Подробнее здесь</a>
      </div>
    );
  }
}
