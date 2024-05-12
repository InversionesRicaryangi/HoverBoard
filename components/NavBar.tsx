import { Container, Flex, Heading, Link } from "@chakra-ui/react";
import { ConnectWallet } from "@thirdweb-dev/react";

export default function NavBar() {
    return (
        <Container maxW={"1200px"} py={4}>
            <Flex direction={"row"} justifyContent={"space-between"}>
                <Heading>HoverBoard-Mining</Heading>
                <Flex alignItems={"center"}>
                    <Link href={"/"} mx={2}>Play</Link>
                    <Link href={"/shop"} mx={2}>Shop</Link>
                    <Link href="https://clain-token-dsp.netlify.app/" target="_blank" rel="noopener noreferrer">Withdraw</Link>
                    <Link href="/Introduccion-al-Staking-en-Polygon.pdf" target="_blank" rel="noopener noreferrer" mx={2}>WHITEPAPER</Link>
                    <a href="https://t.me/hoverboardlife" target="_blank" rel="noopener noreferrer" style={{ marginRight: '2px' }}>Telegram</a>
                </Flex>
                <ConnectWallet/>
            </Flex>
        </Container>
    )
};
