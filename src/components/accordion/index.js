import React, { createContext, useState, useContext } from 'react';
import {
    Container,
    Inner,
    Title,
    Frame,
    Item,
    Header,
    Body,
} from './styles/accordion';

const ToggleContext = createContext();

export default function Accordian({ children, ...restProps }) {
    return (
        <Container {...restProps}>
            <Inner>{children}</Inner>
        </Container>
    );
}
Accordian.Title = function AccordianTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>;
};
Accordian.Frame = function AccordianFrame({ children, ...restProps }) {
    return <Frame {...restProps}>{children}</Frame>;
};
Accordian.Item = function AccordianItem({ children, ...restProps }) {
    const [toggleShow, setTogglrShow] = useState(false);
    return (
        <ToggleContext.Provider value={{ toggleShow, setTogglrShow }}>
            <Item {...restProps}>{children}</Item>
        </ToggleContext.Provider>
    );
};
Accordian.Header = function AccordianHeader({ children, ...restProps }) {
    const { toggleShow, setTogglrShow } = useContext(ToggleContext);
    return (
        <Header
            onClick={() => setTogglrShow((toggleShow) => !toggleShow)}
            {...restProps}
        >
            {children}
            {toggleShow ? (
                <img src="../../images/icons/close-slim.png" alt="close" />
            ) : (
                <img src="../../images/icons/add.png" alt="open" />
            )}
        </Header>
    );
};

Accordian.Body = function AccordianBody({ children, ...restProps }) {
    const { toggleShow } = useContext(ToggleContext);
    return toggleShow ? <Body {...restProps}>{children}</Body> : null;
};
