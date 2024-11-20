import ResultSection from "../components/ResultSection";
import SummarySection from "../components/SummarySection";

export default function Home() {
  return (
    <div className="w-full max-w-[740px] bg-neutral-white flex flex-col md:flex-row rounded-[32px] shadow-custom">
      <ResultSection />
      <SummarySection />
    </div>
  );
}
