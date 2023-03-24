import { Box, Flex, Grid, GridItem, Input, InputGroup, InputLeftElement, InputRightElement, SimpleGrid, Stack } from '@chakra-ui/react';
import exchangeIcon from '../assets/exchange.png';

const ExchangeForm = ({ handleFormSumbit, mainInputRef, isEuro, euroAmount, usdAmount, exchangeAmount, handleSwitch }) => {

    return (

        <form onSubmit={handleFormSumbit}>
            <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} gap={0}>
                <GridItem>
                    <InputGroup>
                        <Input type="number" ref={mainInputRef} value={isEuro ? euroAmount : usdAmount} onChange={exchangeAmount} />
                        <InputRightElement children={isEuro ? '€' : '$'} />
                    </InputGroup>
                </GridItem>
                <GridItem id="exchange_icon">
                    <Flex onClick={handleSwitch} height="100%" justifyContent="center" align="center">
                        <img src={exchangeIcon} className="img-fluid" alt="Switch" />
                    </Flex>
                </GridItem>
                <GridItem>
                    <InputGroup>
                        <Input type="number" value={!isEuro ? euroAmount : usdAmount} disabled />
                        <InputRightElement children={!isEuro ? '€' : '$'} />
                    </InputGroup>
                </GridItem>
            </Grid>
            <button type="submit" className="btn btn-lg btn-outline-secondary" disabled={euroAmount === 0 || usdAmount === 0}>Save to History</button>
        </form>

    );

}

export default ExchangeForm;