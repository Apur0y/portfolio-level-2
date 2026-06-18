
import CodeBlock from "./CodeBlock";
import { Tutorial } from "./SideBar";

interface Props {
  tutorial: Tutorial;
}

export default function TutorialContent({
  tutorial,
}: Props) {
  return (
    <div className="flex-1 p-8  ml-[18%]">
      <h1 className="mb-3 text-4xl font-bold">
        {tutorial.title}
      </h1>

      <p className="mb-8 text-gray-600">
        {tutorial.description}
      </p>

      {tutorial.sections.map((section, index) => (
        <div key={index} className="mb-10">
          <h2 className="mb-3 text-2xl font-semibold">
            {section.title}
          </h2>

          <p className="mb-4 text-gray-700">
            {section.content}
          </p>

          {section.code && (
            <CodeBlock code={section.code} />
          )}
        </div>
      ))}
    </div>
  );
}