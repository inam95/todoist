"use client";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import UserProfile from "./user-profile";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Hash, PlusIcon } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { primaryNavItems } from "../utils";

interface MyListTitleType {
  [key: string]: string;
}

export function SideBar() {
  return (
    <div className="hidden border-r bg-muted/40 md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex justify-between h-14 items-center border-b p-1 lg:h-[60px] lg:px-2">
          <UserProfile />
        </div>
        <nav className="grid items-start px-1 text-sm font-medium lg:px-4">
          {primaryNavItems.map(({ name, icon, link, id }, idx) => (
            <div key={idx}>
              {id && (
                <div
                  className={cn(
                    "flex items-center mt-6 mb-2",
                    id === "filters" && "my-0"
                  )}
                >
                  {/* <p className="flex flex-1 text-base">
                    {LIST_OF_TITLE_IDS[id]}
                  </p>
                  {LIST_OF_TITLE_IDS[id] === "My Projects" && (
                    <AddProjectDialog />
                  )} */}
                </div>
              )}
              <div className={cn("flex items-center lg:w-full")}>
                <div
                  className={cn(
                    "flex items-center text-left lg:gap-3 rounded-lg py-2 transition-all hover:text-primary justify-between w-full"
                  )}
                >
                  <Link
                    key={idx}
                    href={link}
                    className={cn(
                      "flex items-center text-left gap-3 rounded-lg transition-all hover:text-primary w-full"
                    )}
                  >
                    <div className="flex gap-4 items-center w-full">
                      <div className="flex gap-2 items-center">
                        <p className="flex text-base text-left">
                          {icon || <Hash />}
                        </p>
                        <p>{name}</p>
                      </div>
                    </div>
                  </Link>
                  {id === "filters" && (
                    <Dialog>
                      <DialogTrigger id="closeDialog">
                        <PlusIcon
                          className="h-5 w-5"
                          aria-label="Add a Label"
                        />
                      </DialogTrigger>
                      {/* <AddLabelDialog /> */}
                    </Dialog>
                  )}
                </div>
              </div>
            </div>
          ))}
        </nav>
      </div>
      <div className="mt-auto p-4">
        <Card x-chunk="dashboard-02-chunk-0">
          <CardHeader className="p-2 pt-0 md:p-4">
            <CardTitle>Upgrade to Pro</CardTitle>
            <CardDescription>
              Unlock all features and get unlimited access to our support team.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
            <Button size="sm" className="w-full">
              Upgrade
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
