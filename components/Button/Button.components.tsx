import Link from "next/link";
import S from "./Button.module.css";

export default function Button({ children, variant, path }: Readonly<{ children: React.ReactNode, variant: 'primary' | 'secondary', path?: string }>) {
  return (
      <Link href={path ?? ''} className={`${S.button} ${S[variant]} ml-8`}>
        <p className="text-sm font-bold">{children}</p>
      </Link>
  );
}