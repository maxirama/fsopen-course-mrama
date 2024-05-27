import { Heading } from "@chakra-ui/react";

interface IHeaderProps {
  title: string;
}

const Header = ({ title }: IHeaderProps) => {
  return <Heading>{title}</Heading>;
};

export default Header;
