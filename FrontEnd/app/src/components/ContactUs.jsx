import React from 'react'
import { Table , Heading, PageContent, Paragraph } from 'bumbag';

export default function ContactUs() {
    return (
        <PageContent
            wrapperProps={{ alignX:"center", backgroundImage: "url('/images/contact-us.jpg')", backgroundSize: "100%", width: '100%', height:"300px", backgroundPosition: "50px", backgroundRepeat:"no-repeat", backgroundPosition:"center" }}>
                <Heading textAlign="center" fontWeight="normal" paddingTop="50px" color="white">Contact Us!</Heading>
                <Paragraph textAlign="center" fontWeight="normal" color="white">Want to get in touch? Need some support or assistance? Here's how you can reach us...</Paragraph>
                <br/><br/>
                <Table boxShadow="0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 2px 9px 0 rgba(0, 0, 0, 0.19)" backgroundColor="white">
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
