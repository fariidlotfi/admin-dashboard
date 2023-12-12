export default function SectionTitle(params) {
  const { title } = params;

  return (
    <h1 className="p-5 bg-white w-full my-5 text-3xl shadow rounded border">
      {title}
    </h1>
  );
}
