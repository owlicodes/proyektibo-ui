import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { WORK_ITEM_TYPES_MAP } from "../utils";
import { TWorkItemKeyMap } from "../work-item-schemas";

type FilterWorkItemStatusSelectProps = {
  defaultValue?: TWorkItemKeyMap | "ALL" | undefined;
  onFilterType?: (type: TWorkItemKeyMap) => void;
};

export const FilterWorkItemStatusSelect = ({
  defaultValue,
  onFilterType,
}: FilterWorkItemStatusSelectProps) => {
  return (
    <Select onValueChange={onFilterType} defaultValue={defaultValue || ""}>
      <SelectTrigger className="w-[200px]">
        <SelectValue placeholder="Filter by type" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Types</SelectLabel>
          <SelectItem key="all" value="ALL">
            All
          </SelectItem>
          {Object.keys(WORK_ITEM_TYPES_MAP)
            .filter((typeKey) => typeKey !== "NONE")
            .map((typeKey) => (
              <SelectItem key={typeKey} value={typeKey}>
                {WORK_ITEM_TYPES_MAP[typeKey as TWorkItemKeyMap].label}
              </SelectItem>
            ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
