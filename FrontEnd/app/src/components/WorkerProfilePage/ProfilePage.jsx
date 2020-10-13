import React from 'react'
import { PageContent, Heading, Card, Box, Image, Button, Tabs, Text, Table, Icon } from 'bumbag';
import { faUserCircle, faCalendarCheck } from '@fortawesome/free-solid-svg-icons'


export default function ProfilePage() {
    return (
        <PageContent marginBottom='250px'>
            <Heading textAlign = 'Center'>Worker Profile</Heading>

            <Card title="Title" marginTop = "50px">
                <Box overflow = 'hidden'>
                    {/* Section of the profile card to containt the profile image */}
                    <Box float='left' width ='250px' padding='50px' textAlign='center' overflow='hidden'>
                        <Image src='/images/profile-image.jpg' height='150x' width='150px' boxShadow='0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 1px 2px 0 rgba(0, 0, 0, 0.19)'></Image>
                    </Box>
                    {/* Box next to profile page image displaying  */}
                    <Box alignX="Left" padding='20px' overflow = 'hidden' borderLeft="1px solid lightgray" textAlign='Left'>
                        <Heading use="h5" padding="10px 0px 10px 0px">Worker Name Here</Heading>
                        <Button iconBefore="info-circle" width="30%">Book</Button>

                        <Tabs selectedId="tab1" paddingTop="30px">
                            <Tabs.List>
                                <Tabs.Tab tabId="tab1">
                                    <Icon aria-label="Settings" icon={faUserCircle} type="font-awesome" marginRight="20px"/>
                                    About
                                </Tabs.Tab>
                                <Tabs.Tab tabId="tab2">Available Times</Tabs.Tab>
                            </Tabs.List>
                            <Tabs.Panel tabId="tab1" padding="major-2" border="none">
                            <div style={{overflow:'hidden', 
                                        whiteSpace:'nowrap', 
                                        color:'#bababa', 
                                        fontWeight:'bold', 
                                        fontSize:'12.5px', 
                                        letterSpacing:'1px',
                                        marginTop:'10px'}}>CONTACT INFORMATION</div>
                                {/*<hr style={{display:'inline-block', width:'100%'}}*/}
                                <Table marginTop="20px">
                                    <Table.Row>
                                        <Table.Cell><Text>Phone:</Text></Table.Cell>
                                        <Table.Cell><Text fontStyle="italic">Placeholder phone number</Text></Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell><Text>E-mail:</Text></Table.Cell>
                                        <Table.Cell><Text fontStyle="italic">Placeholder email address</Text></Table.Cell>
                                    </Table.Row>
                                </Table>
                                <div style={{overflow:'hidden', 
                                        whiteSpace:'nowrap', 
                                        color:'#bababa', 
                                        fontWeight:'bold', 
                                        fontSize:'12.5px', 
                                        letterSpacing:'1px',
                                        marginTop:'19px'}}>OTHER INFORMATION</div>
                                <Table marginTop="20px">
                                    <Table.Row>
                                        <Table.Cell><Text>Other:</Text></Table.Cell>
                                        <Table.Cell><Text fontStyle="italic">Placeholder other information</Text></Table.Cell>
                                    </Table.Row>
                                </Table>
                               
                            </Tabs.Panel>
                            <Tabs.Panel tabId="tab2" padding="major-2">
                            <div style={{overflow:'hidden', 
                                        whiteSpace:'nowrap', 
                                        color:'#bababa', 
                                        fontWeight:'bold', 
                                        fontSize:'12.5px', 
                                        letterSpacing:'1px',
                                        marginTop:'10px'}}>LIST OF AVAILABLE TIMES</div>
                            <Table marginTop="20px">
                                <Table.Row>
                                    <Table.Cell><Text>Monday</Text></Table.Cell>
                                    <Table.Cell><Text fontStyle="italic">5:00pm</Text></Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell><Text>Tuesday</Text></Table.Cell>
                                    <Table.Cell><Text fontStyle="italic">3:50pm</Text></Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell><Text>Wednesday</Text></Table.Cell>
                                    <Table.Cell><Text fontStyle="italic">4:00pm</Text></Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell><Text>Thursday</Text></Table.Cell>
                                    <Table.Cell><Text fontStyle="italic">2:30pm</Text></Table.Cell>
                                </Table.Row>
                            </Table>
                            </Tabs.Panel>
                        </Tabs>
                    </Box>
                </Box>
            </Card>
        </PageContent>
    )
}
