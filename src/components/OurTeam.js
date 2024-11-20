import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import CardComponent from "./Card";
import { ArrowBigRight } from 'lucide-react';
import CustomButton from '../components/Customebutton';
const CardList = ({ images }) => {
    const handleClikc = () => {
        console.log('Button clicked!');
    };
    return (_jsxs(_Fragment, { children: [_jsx("div", { className: "flex flex-wrap mx-auto gap-2 max-w-[99%]", children: images.map((image, index) => (_jsx(CardComponent, { src: image.src, alt: image.alt, width: image.width, height: image.height, title: image.title, description: image.description, category: image.category }, index))) }), _jsx("div", { className: "flex flex-col items-end justify-end my-2 mx-32", children: _jsx(CustomButton, { label: "View More", variant: "primary", size: "medium", onClick: handleClikc, icon: _jsx(ArrowBigRight, {}) }) })] }));
};
export default CardList;
