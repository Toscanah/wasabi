"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import Link from "next/link";



// const formSchema = z.object({
//   email:,
// });

export default function LoginForm() {
  return (
    <div
      className="text-lg flex flex-col h-[100%] justify-evenly items-center z-100"
    >
      <b className="text-xl">Accedi</b>
      <Input type="email" placeholder="Email" id="email" />
      <Input type="password" placeholder="Password" id="password" />
      <Link href={"main"}>
        <Button className="self-end" type="submit">
          Entra
        </Button>
      </Link>
    </div>
  );
}
