import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import HeroSection from '../components/HeroSection';
import OurTeam from '../components/OurTeam';
import image from "../../public/data";
const Home = ({ onLogout }) => {
    return (_jsxs("div", { className: "w-full", children: [_jsx(HeroSection, {}), _jsx("h2", { className: "text-5xl font-bold text-center    mb-8", children: "Our Services" }), _jsx(OurTeam, { images: image })] }));
};
export default Home;
