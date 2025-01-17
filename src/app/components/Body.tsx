import Profile from "./Profile";
import About from "./About";
import Updates from "./Updates";

export default function Body() {
  return (
    <div className="container mx-auto px-40 pt-10">
      <div className="flex flex-col">
        <Profile />
        <About />
        <Updates />
      </div>
    </div>
  );
}
