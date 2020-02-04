import React, { Component } from 'react';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { 
    Container, 
    Button, 
    CardHeader,
    ImageContainer
} from './styles';
import { ceil } from 'react-native-reanimated';

export default class Home extends Component {
    render() {
        return(
            <Container>
                <CardHeader>
                </CardHeader>
                <ImageContainer>
                    <Image
                        source={require('../../assets/arvore.png') }
                        style={{ width: 299, height: 329 }}
                    />
                </ImageContainer>
                <Button
                    onPress={ () => this.props.navigation.navigate('Desafios') }
                >
                    <Icon
                        name='add'
                    />
                </Button>
            </Container>
        )
    }
};