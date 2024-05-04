import ContentHeader from "./ContentHeader";
import Suggestions from "./Suggestions";

export default function MainContent({ suggestions }) {
  return (
    <div className="w-full lg:w-[80%]">
      <ContentHeader />
      <Suggestions suggestions={suggestions}/>
    </div>
  );
}
