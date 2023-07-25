import SquareHomePage from "@/components/SquareHomePage";
import { BsCheck2Square, BsSearch } from "react-icons/bs";
import { BiBook } from "react-icons/bi";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <div className="flex flex-col justify-center gap-6 flex-wrap items-center h-full w-full">
      <div onClick={() => router.push("/pesquisas/ent")}>
        <SquareHomePage
          colorBgClass="bg-green-300"
          icon={<BsSearch />}
          name="PESQUISA"
        />
      </div>
      <SquareHomePage colorBgClass="bg-red-300" icon={<BiBook />} name="QUIZ" />
      <SquareHomePage
        colorBgClass="bg-blue-300"
        icon={<BsCheck2Square />}
        name="CHECKLIST"
      />
    </div>
  );
}
