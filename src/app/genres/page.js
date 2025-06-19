import GenresContainer from "@/components/GenresContainer";
import Navbar from "@/components/Navbar";

const Genres = () => {
  return (
    <div
      className="bg-black min-h-screen bg-center bg-fixed md:bg-no-repeat px-4 pt-20 pb-6 md:px-6"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(0,0,0,0.5),80%, rgba(0,0,0,0.5)), url('/assets/pochoclos.jpeg')",
        backgroundSize: "130%",
        backgroundPosition: "center top",
      }}
    >
      <Navbar />
      <GenresContainer />
    </div>
  );
};

export default Genres;
