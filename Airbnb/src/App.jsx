// import Maindisplay from "./components/Maindisplay";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="flex mb-20 justify-center">
        <Card
          img="images/Card-1.png"
          title="Life Lessons With Katie"
          reviews={8}
          rating={5}
          country="USA"
          price={589}
        />
        <Card
          img="images/Card-2.jpg"
          title="Gymnastics with Shekar"
          reviews={10}
          rating={4}
          country="Mexico"
          price={200}
        />
        <Card
          img="images/Card-3.jpg"
          title="Education System by Karan"
          reviews={100}
          rating={10}
          country="India"
          price={1800}
        />
        <Card
          img="images/Card-4.jpg"
          title="Travelling Experiences With Nayab"
          reviews={2}
          rating={5}
          country="China"
          price={600}
        />
      </div>
    </div>
  );
}

export default App;
