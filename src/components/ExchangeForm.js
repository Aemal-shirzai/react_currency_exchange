import { Button, Flex, Grid, GridItem, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import exchangeIcon from '../assets/exchange.png';

const ExchangeForm = ({ handleFormSumbit, mainInputRef, isEuro, euroAmount, usdAmount, exchangeAmount, handleSwitch }) => {

    return (

        <form onSubmit={handleFormSumbit}>
            <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} gap={3}>
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

            <Button type="submit" mt="15px" colorScheme='blue' variant='outline' disabled={euroAmount === 0 || usdAmount === 0}>
                Save to History
            </Button>
        </form>

    );

}

export default ExchangeForm;