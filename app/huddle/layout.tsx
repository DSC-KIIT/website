import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Huddle",
  description:
    "Huddle by GDSC KIIT is a bi-monthly community event where we host technical talks submitted by the student developers of KIIT.",
};

export default function HuddleLayout({ children }: { children: React.ReactNode }) {
  return <main>{children}</main>;
}
