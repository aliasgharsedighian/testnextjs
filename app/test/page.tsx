import React from "react";
import "../../styles/test.css";
import Link from "next/link";

function TestPage() {
  return (
    <div className="flex flex-col gap-5 px-10">
      <Link href="/test/loadmore">Load More Paginate</Link>
      <Link href="/test/memo">Memo</Link>
      <Link href="/test/selectfilter">
        Filter item with Select and option (dropdown)
      </Link>
      <Link href="/test/showmore">Show More in map item</Link>
      <Link href="/test/suspense">Suspense Example</Link>
    </div>
  );
}

export default TestPage;
