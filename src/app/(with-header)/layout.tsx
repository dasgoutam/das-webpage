import Header from '../components/header/Header';
import "../globals.css";

export default function WithHeaderLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
}