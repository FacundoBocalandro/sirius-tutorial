import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
import Generate from "../../generate-qr/components/Generate";
import Scan from "../../scan-qr/components/Scan";

export default class MyBottomNavigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: 0,
        }
    }

    render() {
        return (
            <Container>
                <Header />
                <Content>
                    {this.state.active === 0?
                        <Scan/>
                        :
                        <Generate/>
                    }
                </Content>
                <Footer>
                    <FooterTab>
                        <Button vertical active={this.state.active === 0} onPress={() => this.setState({
                            active: 0,
                        })}>
                            <Icon name="camera" />
                            <Text>Scan</Text>
                        </Button>
                        <Button vertical active={this.state.active === 1} onPress={() => this.setState({
                            active: 1,
                        })}>
                            <Icon name="barcode" />
                            <Text>Generate</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}