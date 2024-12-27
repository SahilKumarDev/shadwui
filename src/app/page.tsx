import Documents from "@/components/_components/Documents";
import { Separator } from "@/components/ui/separator";
import Hero from "@/components/_components/Page/hero";

const Home = () => {
  return (
    <>
      <div className="background-gradient" />

      <div className="mx-auto w-full max-w-7xl pt-4 lg:pt-10 space-y-2 lg:space-y-4 px-4">
        <Hero />
        <Separator />
        <Documents />
      </div>
    </>
  );
};

export default Home;

// {/* <div className="flex-center w-full lg:py-6 py-4">
//   <Separator />
// </div> */}
