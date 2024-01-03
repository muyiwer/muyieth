import { BreadCrumb } from "@/components/breadcrum";
import { PageFilter } from "@/components/filter";
import { Products } from "@/components/products";
import { PageHeader } from "../components/pageHeader";

export default function Home() {
  return (
    <section className="grid grid-cols-1">
      <PageHeader />
      <main className="m-[150px] mt-[30px] grid grid-cols-[2fr,1fr] gap-4">
        <div className="flex flex-col gap-[20px]">
          <BreadCrumb />
          <Products />
        </div>
        <PageFilter />
      </main>
      <footer></footer>
    </section>
  );
}
