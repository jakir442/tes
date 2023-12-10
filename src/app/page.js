import Header from './components/layout/Header';
import Hero from './components/layout/Hero';
import HomeMenu from './components/layout/HomeMenu';
import SectionHeaders from './components/layout/SectionHeaders';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <HomeMenu />
      <section className="text-center my-16">
        <SectionHeaders subHeader={'Our story'} mainHeader={'About us'} />
        <div className="text-gray-500 max-w-2xl mx-auto mt-4 flex-col gap-4">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae quas doloribus vel. Architecto iure quasi, rerum recusandae, itaque, accusantium quidem beatae porro quos enim
            voluptatum fugit voluptatem minima maxime nulla.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet dicta unde earum, molestiae quidem nemo inventore maiores quaerat corrupti ducimus velit dolor ipsam libero deserunt
            laboriosam placeat. Quod, sequi similique?
          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet dicta unde earum, molestiae quidem nemo inventore maiores quaerat corrupti ducimus velit dolor ipsam libero deserunt.</p>
        </div>
      </section>
      <section className="text-center my-8">
        <SectionHeaders subHeader={"Don't hesitate"} mainHeader={'Contact us'} />
        <div className="mt-8">
          <a className="text-4xl underline text-gray-500" href="tel:+6281234325673">
            +62812-3432-5673
          </a>
        </div>
      </section>
      <footer className="border-t p-8 text-center text-gray-500 mt-16">
        <a className="underline">JakirApriyan</a> &copy; 2023 All rights reserved
      </footer>
    </>
  );
}
