import type { JSX } from 'solid-js';
import Footer from '../components/Footer';
import Header from '../components/Header';

type MainLayoutProps = {
  children: JSX.Element;
};

export default function MainLayout(props: MainLayoutProps) {
  return (
    <div class="min-h-screen bg-serenity-cream">
      <Header />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
}
