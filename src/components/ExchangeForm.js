import { Button, Flex, Grid, GridItem, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { useRef, useState } from 'react';
import exchangeIcon from '../assets/exchange.png';

const ExchangeForm = ({ handleFormSumbit, mainInputRef, isEuro, euroAmount, usdAmount, exchangeAmount, handleSwitch }) => {
    const imgRef = useRef(null)
    const [oldDegree, setOldDegree] = useState(0)

    const onClickSwitch = () => {
        const degree =  !imgRef.current.style.transform ? 180 : oldDegree + 180
        imgRef.current.style.transform = `rotate(${degree}deg)`
        setOldDegree(degree)
        handleSwitch()
    }

    return (

        <form onSubmit={handleFormSumbit}>
            <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} gap={2}>
                <GridItem>
                    <InputGroup size="lg">
                        <Input type="number" ref={mainInputRef} value={isEuro ? euroAmount : usdAmount} onChange={exchangeAmount} />
                        <InputRightElement children={isEuro ? '€' : '$'} />
                    </InputGroup>
                </GridItem>
                <GridItem id="exchange_icon">
                    <Flex onClick={onClickSwitch} height="100%" justifyContent="center" align="center">
                        <img style={{ transitionDuration: ".8s" }} ref={imgRef} src={exchangeIcon} className="img-fluid" alt="Switch" />
                    </Flex>
                </GridItem>
                <GridItem>
                    <InputGroup size="lg">
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