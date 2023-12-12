export default function FooterCopyRight() {
  const year = new Date().getFullYear();
  return (
    <p className="text-center mt-5 mb-2">
      طراحی توسط فرید لطفی - {year + `©️`}
    </p>
  );
}
