import Link from "next/link";

const linkStyle = {
  color: "green",
};


export default function Header () {
  return (
    <div>
      <Link href="/">
        <a style={linkStyle}>Home</a>
      </Link>
      <Link href="/about">
        <a style={linkStyle}>About</a>
      </Link>
    </div>
  );
};
