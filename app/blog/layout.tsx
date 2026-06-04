import Sidebar from "@/components/blog/SideBar";
import { getTutorials } from "./[slug]/page";


export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const tutorials = getTutorials();

  return (
    <div className="flex min-h-screen">
      <Sidebar tutorials={tutorials} />

      <main className="flex-1 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}