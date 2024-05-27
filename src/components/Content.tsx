import { Text, Box } from "@chakra-ui/react";

interface IContentPart {
  title: string;
  exercises: number;
}
interface IContentProps {
  content: IContentPart[];
}

const Content = ({ content }: IContentProps) => {
  const contentResult = content.map((item) => {
    return (
      <Box>
        <Text>{item.title}</Text>
        <Text>{item.exercises}</Text>
      </Box>
    );
  });

  return <Box>{contentResult}</Box>;
};

export default Content;
