import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="container">
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/products">Products</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
