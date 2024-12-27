import HeroSection from "@/components/_components/Page/HeroSection";
import Documents from "@/components/_components/Page/Documents";
import { Separator } from "@/components/ui/separator";

const Home = () => {
  return (
    <>
      <div className="background-gradient" />

      <div className="mx-auto w-full max-w-7xl pt-4 lg:pt-10 space-y-2 lg:space-y-4 px-4">
        <HeroSection />
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
