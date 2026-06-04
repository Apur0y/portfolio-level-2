interface Props {
  code: string;
}

export default function CodeBlock({ code }: Props) {
  return (
    <div className="my-6 overflow-hidden rounded-lg border border-slate-700">
      <div className="bg-slate-800 px-4 py-2 text-sm text-slate-300">
        example.tsx
      </div>

      <pre className="overflow-x-auto bg-[#1e1e1e] p-4 text-sm text-green-400">
        <code>{code}</code>
      </pre>
    </div>
  );
}