import { Box, Flex, Input, InputGroup, InputLeftAddon, Stack } from "@chakra-ui/react";

const ExchangeRateForm = ({ fxRate, overrideFxRate, setOverrideFxRate }) => {
    return (

        <>
            <Flex wrap="wrap">
                <Box>
                    <Stack spacing={4}>
                        <InputGroup>
                            <InputLeftAddon children='Real-time FX-Rate' />
                            <Input type='number' value={fxRate} disabled/>
                        </InputGroup>
                    </Stack>
                </Box>
                <Box>
                    <Stack spacing={4}>
                        <InputGroup>
                            <InputLeftAddon children='Override FX-Rate' />
                            <Input type='number' placeholder='Custom Rate' value={overrideFxRate} onChange={(e) => setOverrideFxRate(e.target.value)}/>
                        </InputGroup>
                    </Stack>
                </Box>
            </Flex>
        </>
    );
}

export default ExchangeRateForm;