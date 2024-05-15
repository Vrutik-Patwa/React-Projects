// import Maindisplay from "./components/Maindisplay";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import CardData from "./components/CardData";
function App() {
  const Cardelements = CardData.map((card) => {
    return (
      // <Card
      //   img={card.img}
      //   title={card.title}
      //   reviews={card.reviews}
      //   rating={card.rating}
      //   country={card.country}
      //   price={card.price}
      //   openspots={card.openspots}
      // />
      // Now passing props as an object

      <Card
        item={card}
        // Have not mentioned id make sure each element has an id
        // Can also use spread out props as {...item} which will basically render same thing
      />
    );
  });
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="flex mb-20 justify-center">
        {Cardelements}
        {/* <Card
          img="Card-1.png"
          title="Life Lessons With Katie"
          reviews={8}
          rating={5}
          country="USA"
          price={589}
        />
        <Card
          img="Card-2.jpg"
          title="Gymnastics with Shekar"
          reviews={10}
          rating={4}
          country="Mexico"
          price={200}
        />
        <Card
          img="Card-3.jpg"
          title="Education System by Karan"
          reviews={100}
          rating={10}
          country="India"
          price={1800}
        />
        <Card
          img="Card-4.jpg"
          title="Travelling Experiences With Nayab"
          reviews={2}
          rating={5}
          country="China"
          price={600}
        /> */}
        {/* I have done it using props now using an arry for same thing  */}
      </div>
    </div>
  );
}

export default App;
