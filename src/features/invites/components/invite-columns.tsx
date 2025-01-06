"use client";

import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal, Trash } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SortableTableHeader } from "@/features/common/components/sortable-table-header";

import { TInvite } from "../invite-schemas";

/* eslint-disable react-hooks/rules-of-hooks */
export const inviteColumns: ColumnDef<TInvite>[] = [
  {
    accessorKey: "email",
    header: ({ column }) => {
      return <SortableTableHeader column={column} title="Email" />;
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => {
      return <SortableTableHeader column={column} title="Status" />;
    },
  },
  {
    accessorKey: "organization.name",
    header: ({ column }) => {
      return <SortableTableHeader column={column} title="Organization" />;
    },
  },
  {
    accessorKey: "createdBy.email",
    header: ({ column }) => {
      return <SortableTableHeader column={column} title="Invited By" />;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const invite = row.original;
      console.log({ invite });

      //   const { setDialogConfig } = useDialogConfigStore();
      //   const deleteWorkItem = useDeleteWorkItem(
      //     workItem.projectId,
      //     workItem.sprintId
      //   );
      //   const { toast } = useToast();

      //   const deleteCallback = () => {
      // deleteWorkItem.mutate(
      //   {
      //     projectId: workItem.projectId,
      //     workItemId: workItem.id,
      //   },
      //   {
      //     onSuccess: () => {
      //       toast({
      //         title: "Work item deleted.",
      //       });
      //       setDialogConfig(undefined);
      //     },
      //     onError: (error) => {
      //       toast({
      //         title: error.message,
      //         variant: "destructive",
      //       });
      //       setDialogConfig(undefined);
      //     },
      //   }
      // );
      //   };

      const showDeleteSprintConfirmation = () => {
        // setDialogConfig({
        //   open: true,
        //   title: "Delete Work Item",
        //   description: workItem.title,
        //   content: <DeleteContent deleteCallback={deleteCallback} />,
        // });
      };

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              className="cursor-pointer"
              onClick={showDeleteSprintConfirmation}
            >
              <div className="flex items-center gap-2 text-red-500">
                <Trash className="h-4 w-4" />
                <span>Delete</span>
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
