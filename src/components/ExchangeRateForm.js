import { Box, Flex, Grid, GridItem, Input, InputGroup, InputLeftAddon, Stack } from "@chakra-ui/react";

const ExchangeRateForm = ({ fxRate, overrideFxRate, setOverrideFxRate }) => {
    return (

        <>
            <Grid templateColumns={{ base: "1fr", md: "1fr 1fr", lg: "1fr 1fr" }} gap={1} >
                <GridItem>
                    <Stack spacing={4}>
                        <InputGroup>
                            <InputLeftAddon children='Real-time FX-Rate' />
                            <Input type='number' value={fxRate} disabled />
                        </InputGroup>
                    </Stack>
                </GridItem>
                <GridItem>
                    <Stack spacing={4}>
                        <InputGroup>
                            <InputLeftAddon children='Override FX-Rate' />
                            <Input type='number' placeholder='Custom Rate' value={overrideFxRate} onChange={(e) => setOverrideFxRate(e.target.value)} />
                        </InputGroup>
                    </Stack>
                </GridItem>
            </Grid>
        </>
    );
}

export default ExchangeRateForm;