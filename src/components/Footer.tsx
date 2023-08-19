const Footer = () => {
  return (
    <footer className="bg-primary-blue text-white pt-20 pb-8">
      {/* center inner wrapper */}
      <div className="centered-container flex flex-col gap-y-20">
        {/* lists */}
        <div>
          <ul></ul>
          <ul></ul>
          <ul></ul>
        </div>

        {/* bottom text */}
        <p
          className="mobileXL:text-xl text-center relative before:block 
          before:w-full before:h-[1px] before:bg-[#05ABF3] 
          flex flex-col gap-7"
        >
          © 2022 All rights reserved. Reliance Retail Ltd.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
