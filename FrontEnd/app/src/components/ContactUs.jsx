import React from 'react'
import { Table , Heading, PageContent } from 'bumbag';

export default function ContactUs() {
    return (
        <PageContent>
                <Heading textAlign="center" fontWeight="normal" border= "1px solid black" padding="50px">Contact Us!</Heading>
                <br></br>
                <Table boxShadow="0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)">
                    <Table.Row>
                        <Table.Cell>MATIC, Marcus (s3703981)</Table.Cell>
                        <Table.Cell textAlign="right">s3703981@student.rmit.edu.au</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>CAUCCI, Raymond (s3779722)</Table.Cell>
                        <Table.Cell textAlign="right">s3779722@student.rmit.edu.au</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>WESTON, Michael (s3541742)</Table.Cell>
                        <Table.Cell textAlign="right">s3541742@student.rmit.edu.au</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>NADALIN, Marco (s3782230)</Table.Cell>
                        <Table.Cell textAlign="right">s3782230@student.rmit.edu.au</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>PAPAHARISIS, Athanasios (s3372134)</Table.Cell>
                        <Table.Cell textAlign="right">s3372134@student.rmit.edu.au</Table.Cell>
                    </Table.Row>
                </Table>       
        </PageContent>
    )
}
