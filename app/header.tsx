import { Box, Flex, Link, Text } from "@chakra-ui/react";

interface Props {
  children: React.ReactNode;
}
const Links = ["Dashboard", "Projects", "Team"];
const NavLink = (props: Props) => {
  const { children } = props;

  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={"md"}
      href={"#"}
    >
      {children}
    </Box>
  );
};

export default function Header() {
  return (
    <Flex
      as="header"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      bg="teal.500"
      color="white"
    >
      <Box
        display={{ sm: "block", md: "flex" }}
        width={{ sm: "full", md: "auto" }}
        alignItems="center"
        flexGrow={1}
      >
        <Link href="/profile">Profile</Link>
      </Box>
      <Box
        display={{ sm: "block", md: "flex" }}
        width={{ sm: "full", md: "auto" }}
        alignItems="center"
        flexGrow={1}
      >
        <Link href="/profile">Profile</Link>
      </Box>
    </Flex>
  );
}
