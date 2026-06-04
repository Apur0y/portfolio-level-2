import Link from "next/link";

export interface TutorialSection {
  title: string;
  content: string;
  code?: string;
}

export interface Tutorial {
  id: number;
  slug: string;
  title: string;
  description: string;
  sections: TutorialSection[];
}

interface Props {
  tutorials: Tutorial[];
}

export default function Sidebar({ tutorials }: Props) {
  return (
    <aside className="w-2/12 border-r bg-slate-900 text-white h-screen fixed top-0 overflow-y-auto">
      <div className="p-4">
        <h2 className="font-bold text-xl">
          Topics
        </h2>
      </div>

      <ul>
        {tutorials.map((item) => (
          <li key={item.id}>
            <Link
              href={`/blog/${item.slug}`}
              className="block px-4 py-3 hover:bg-slate-800"
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}