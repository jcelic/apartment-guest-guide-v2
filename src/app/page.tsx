import Header from '@/components/Header';
import StayInfo from '@/components/StayInfo';

const Page = () => {
  return (
    <>
      <section className="bg-deep pb-16 text-white">
        <Header />

        <div className="px-5 pt-4">
          <p className="text-sm font-bold tracking-wider text-blue-200">
            YOUR GUEST GUIDE
          </p>

          <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl">
            Welcome, Ana
          </h1>

          <p className="mt-3 text-lg text-white/85">
            Everything for your stay, in one place.
          </p>
        </div>
      </section>

      <div className="relative z-10 mx-5 -mt-10">
        <StayInfo />
      </div>
    </>
  );
};

export default Page;
