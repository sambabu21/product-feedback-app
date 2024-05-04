import suggestionIcon from "../../../starter-code/assets/suggestions/icon-suggestions.svg";
import Selector from "./Selector";

export default function ContentHeader() {
  return (
    <div className="w-full bg-[#373F68] h-[72px]  sm:rounded-[10px]  flex justify-between items-center px-5">
      <div className="flex justify-between items-center gap-10">
        <div className="gap-3 justify-center items-center hidden sm:flex">
          <img src={suggestionIcon} />
          <h1 className="text-white text-[18px] font-bold">6 Suggestions</h1>
        </div>
        <div className="flex gap-2 justify-center items-center relative">
          <p className="text-white">Sort by:</p>
          <Selector />
        </div>
      </div>
      <button className="w-[134px] h-[40px] lg:w-[158px] lg:h-[44px] bg-[#AD1FEA] text-white font-bold rounded-[10px] text-[13px] lg:text-[14px]">
        + Add Feedback
      </button>
    </div>
  );
}
