import { Table, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from "@chakra-ui/react";

const History = ({ history }) => {
    return (
        <>
            <TableContainer width="100%">
                <Table size='sm'>
                    <Thead>
                        <Tr>
                            <Th>FX Rate</Th>
                            <Th>Override</Th>
                            <Th>Amount</Th>
                            <Th>Converted Amount</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {history.map((data, index) => (
                            <Tr key={index}>
                                <Td>{data.fxRate}</Td>
                                <Td>{data.overrideFxRate ? "Yes" : "No"}</Td>
                                <Td>{data.amount}</Td>
                                <Td>{data.convertedAmount}</Td>
                            </Tr>
                        ))}
                    </Tbody>
                    <Tfoot>
                        <Tr>
                            <Th>Total</Th>
                            <Th isNumeric>5</Th>
                        </Tr>
                    </Tfoot>
                </Table>
            </TableContainer>
        </>
    );
}

export default History;