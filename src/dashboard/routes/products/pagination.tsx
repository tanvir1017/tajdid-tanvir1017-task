export function Pagination() {
  return (
    <div className="w-full border-t border-gray-300 mt-12">
      <div className="mt-2 flex items-center justify-between">
        <div>
          <a
            href="#"
            className="mx-1 cursor-not-allowed text-sm font-semibold text-gray-900"
          >
            &larr; Previous
          </a>
        </div>
        <div className="flex items-center">
          {[...Array(7).keys()].map((i: number) => (
            <a
              key={i}
              href="#"
              className="mx-1 flex items-center px-3 py-1 text-gray-900 hover:scale-105"
            >
              {[3].includes(i) ? "......." : i + 1}
            </a>
          ))}
        </div>
        <div>
          <a href="#" className="mx-2 text-sm font-semibold text-gray-900">
            Next &rarr;
          </a>
        </div>
      </div>
    </div>
  );
}
