import Link from "next/link";

export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center font-mono gap-5">
      <h1 className="text-3xl font-bold">Sorry :(</h1>
      <p className="text-xl text-gray-500">Page not found</p>
      <Link href="/" className="mt-20 text-blue-600 hover:text-blue-700">
        Back to home page{" "}
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          -&gt;
        </span>
      </Link>
    </div>
  );
}
