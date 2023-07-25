import SquareHomePage from "@/components/SquareHomePage";
import { BsCheck2Square, BsSearch } from "react-icons/bs";
import { BiBook } from "react-icons/bi";

export default function Home() {
  return (
    <div className="flex flex-col justify-center gap-6 flex-wrap items-center h-full w-full">
      <SquareHomePage
        colorBgClass="bg-green-300"
        icon={<BsSearch />}
        name="PESQUISA"
      />
      <SquareHomePage colorBgClass="bg-red-300" icon={<BiBook />} name="QUIZ" />
      <SquareHomePage
        colorBgClass="bg-blue-300"
        icon={<BsCheck2Square />}
        name="CHECKLIST"
      />
    </div>
  );
}
