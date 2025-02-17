import { z } from "zod";

import { TSprint } from "../sprints/sprint-schema";
import { WORK_ITEM_TYPES_MAP } from "./utils";

export type TWorkItemKeyMap = keyof typeof WORK_ITEM_TYPES_MAP;

export type TWorkItem = {
  id: string;
  title: string;
  description: string;
  type: "NONE" | "STORY" | "TASK" | "BUG";
  storyPoint?: number;
  status: "PENDING" | "IN_PROGRESS" | "DONE" | "CLOSED";
  createdByUserId: string;
  assignedToUserId?: string;
  projectId: string;
  sprintId?: string | null;
  parentWorkItemId?: string;
  createdAt: string;
  childWorkItems?: TWorkItem[];
  sprint?: TSprint;
};

export type TCreateWorkItem = Omit<TWorkItem, "id" | "createdAt">;
export type TUpdateWorkItem = Omit<
  TWorkItem,
  "id" | "assignedToUserId" | "createdByUserId" | "createdAt"
>;

export const workItemFormSchema = z.object({
  title: z
    .string()
    .trim()
    .min(1, { message: "Title is required." })
    .max(200, { message: "Title is too long." })
    .regex(/^[a-zA-Z0-9\s-\.,'"]+$/, {
      message: "Title can only contain letters, numbers, spaces, and hyphens.",
    }),
  description: z.string().min(1, { message: "Description is required." }),
  type: z.enum(["NONE", "STORY", "TASK", "BUG"], {
    message: "Type is required.",
  }),
  storyPoint: z.preprocess(
    (val) => (val === "" ? undefined : Number(val)),
    z.number().optional()
  ),
  status: z.enum(["PENDING", "IN_PROGRESS", "DONE", "CLOSED"], {
    message: "Status is required.",
  }),
  assignedToUserId: z.string().optional(),
  parentWorkItemId: z.string().optional(),
  sprintId: z.string().optional(),
});
export type TWorkItemFormSchema = z.infer<typeof workItemFormSchema>;
