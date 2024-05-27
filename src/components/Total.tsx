import {Box} from "@chakra-ui/react";

interface ITotalProps{
    total: number
}

const Total = ({total}:ITotalProps) => {

    return <Box>{total}</Box>
}


export default Total;