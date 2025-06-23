import { Button } from "@/components/ui/button";
const Home = () => {
  return (
    <header className="py-5">
      <div className="flex items-center justify-center">
        <div className="bg-[url(/src/assets/images/svgs/construction.svg)] bg-no-repeat h-[480px] flex flex-col items-center justify-center max-w-[92%] min-[927px]:max-w-[928px] relative after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-linear-[180deg,black_10%,black_40%] after:-z-10 z-10 after:opacity-25 rounded-[8px] after:rounded-[8px]">
          <h1 className="text-2xl md:text-5xl text-white leading-9 sm:leading-[60px] -tracking-[2px] font-bold px-4 text-center mb-2">
            Building the Future, One Project at a Time
          </h1>
          <p className="leading-6 text-white px-4 text-center mb-8">
            BuildRight is a leading construction company specializing in
            residential and commercial projects. With a commitment to quality,
            safety, and client satisfaction, we deliver exceptional results that
            exceed expectations.
          </p>
          <Button className="px-5 rounded-[8px] bg-primary-blue text-dark-white font-bold leading-6 cursor-pointer w-[205px] h-[48px] flex items-center justify-center hover:bg-dark-black">
            Explore Our Services
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Home;
