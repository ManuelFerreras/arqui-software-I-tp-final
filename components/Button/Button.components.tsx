import Link from "next/link";
import S from "./Button.module.css";

export default function Button({ children, variant }: Readonly<{ children: React.ReactNode, variant: 'primary' | 'secondary' }>) {
  return (
      <Link href="/login" className={`${S.button} ${S[variant]} ml-8`}>
        <p className="text-sm font-bold">{children}</p>
      </Link>
  );
}