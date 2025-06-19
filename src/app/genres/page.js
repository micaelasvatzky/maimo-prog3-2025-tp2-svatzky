import GenresContainer from "@/components/GenresContainer";
import Navbar from "@/components/Navbar";

const Genres = () => {
  return (
    <div
      className="bg-fixed bg-center min-h-screen pt-18 px-6"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(0,0,0,0.5),80%, rgba(0,0,0,0.5)), url('/assets/pochoclos.jpeg') "
      }}
    >
      <Navbar />
      <GenresContainer />
    </div>
  );
};

export default Genres;
