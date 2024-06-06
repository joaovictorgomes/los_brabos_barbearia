import { About } from "@/components/about";
import NavBar from "@/components/navbar";
import { Page } from "@/components/page";
import Services from "@/components/services";
import Team from "@/components/team";
import Unit from "@/components/unit";


export default function Home() {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <Page />
      <About />
      <Services />
      <Team />
      <Unit />
    </div>
  );
}
