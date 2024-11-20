import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-7 px-4 md:py-4 text-center">
      <p className="text-neutral-grayBlue">
        Challenge by{" "}
        <Link
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
          className="text-gradients-slateBlue hover:text-gradients-royalBlue"
        >
          Frontend Mentor
        </Link>
        . Coded by{" "}
        <Link
          href="https://github.com/Chermann-KING"
          target="_blank"
          rel="noreferrer"
          className="text-gradients-slateBlue hover:text-gradients-royalBlue"
        >
          Chermann KING
        </Link>
        .
      </p>
    </footer>
  );
}
