import MainContent from "../Content section/Index";
import Header from "../Header/Index";

export default function Home({ suggestions }) {
  return (
    <div className="sm:w-[90vw] lg:w-[80vw] mx-auto sm:my-12 lg:my-24 flex flex-col lg:flex-row sm:gap-10">
      <Header />
      <MainContent suggestions={suggestions} />
    </div>
  );
}
