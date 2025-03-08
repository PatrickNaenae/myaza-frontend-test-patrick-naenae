import React from "react";
import { SearchInput } from "./search-input";

interface SectionHeaderProps {
  title: string;
  description: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  description,
}) => {
  return (
    <div className="flex flex-col lg:flex-row justify-between gap-4 lg:gap-0 lg:items-center">
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold">{title}</h1>
        <p className="text-secondary-foreground">{description}</p>
      </div>
      <SearchInput />
    </div>
  );
};
