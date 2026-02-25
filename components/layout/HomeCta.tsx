export const HomeCta = () => {
  return (
    <section
      id="book"
      className="relative w-full py-24 flex items-center justify-center text-center text-white"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/class.jpg')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-stone-900/40" />

      {/* Content */}
      <div className="relative z-10 max-w-xl px-6">
        <h2 className="text-3xl md:text-4xl font-light">
          Join a Biodanza Workshop
        </h2>

        <p className="mt-4 text-lg opacity-90">90 minutes | £15</p>

        <p className="mt-4 opacity-80">
          Experience music, movement, and connection in a welcoming space.
        </p>

        <a
          href="https://dandelion.events/e/f88qh?fbclid=IwZnRzaAQDpcJleHRuA2FlbQIxMQBzcnRjBmFwcF9pZAo2NjI4NTY4Mzc5AAEeyYaBmk2OnxQ_4wlsVnBnZw7Q_CE7X6X1xCcOrGoy16WALQ_m1Jb-dg7ZZXw_aem_wq2LH2Ke1kKvTyQZO5PT3w"
          className="inline-block mt-8 px-6 py-3 bg-white text-black rounded-full hover:opacity-90 transition"
        >
          Book Your Place
        </a>
      </div>
    </section>
  );
};
