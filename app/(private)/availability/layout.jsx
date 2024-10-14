import { Suspense } from "react";

export default function AvailabilityLayout({ children }) {
  return (
    <div className="mx-auto">
      {" "}
      <Suspense fallback={<div>Loading events...</div>}>{children}</Suspense>
    </div>
  );
}
