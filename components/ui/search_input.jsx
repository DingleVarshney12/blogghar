"use client";

import * as React from "react";
import { Input } from "@/components/ui/input";
import { useRouter, useSearchParams } from "next/navigation";

export default function SearchInput() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const defaultValue = searchParams.get("search") || "";
  const [value, setValue] = React.useState(defaultValue);

  React.useEffect(() => {
    const delayDebounce = setTimeout(() => {
      const params = new URLSearchParams(searchParams.toString());

      if (value) {
        params.set("search", value);
      } else {
        params.delete("search");
      }

      router.push(`?${params.toString()}`);
    }, 400);

    return () => clearTimeout(delayDebounce);
  }, [value, router, searchParams]);

  return (
    <div className="max-w-md mx-auto">
      <Input
        type="text"
        placeholder="Search blogs..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-full"
      />
    </div>
  );
}
