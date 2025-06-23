"use client";
import React from "react";
import Input from "../Input/Input";

type SearchInputElement = React.ReactElement<
  React.ComponentProps<typeof SearchInput>
>;

export function SearchContainer({
  children,
}: {
  children: SearchInputElement;
}) {
  // TODO: Autocomplete results
  // TODO: Autocomplete results debounce

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Get the input value from the form
    const formData = new FormData(e.currentTarget);
    const searchValue = formData.get("search") as string;
    console.log("Search submitted:", searchValue);
    // TODO: Navigate to results page
  };

  return <form onSubmit={handleSubmit}>{children}</form>;
}

export default function SearchInput() {
  const [inputValue, setInputValue] = React.useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <Input
      name="search"
      className=""
      placeholder="Search..."
      value={inputValue}
      onChange={handleChange}
    />
  );
}
