import FooterList from "../components/FooterList";
import FooterConected from "../components/FooterConected";
import Email from "../components/Email";
import Logo from "../components/Logo";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col p-5 font-[Soraya] pt-[6rem]">
      <div className="top grid grid-cols-2 gap-6 lg:grid-cols-[20rem_minmax(0,1fr)_minmax(0,1fr)_20rem]">
        <Logo />
        <FooterList />
        <Email />
        <FooterConected />
      </div>
      <div className="bottom w-full border-t-2 border-dotted border-[#908573] mt-10 pt-10 max-lg:text-center">
        <p className="text-[2rem] text-[#f5e4c7]">
          © 2026. Bucks Sauce Co. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
