import styled  from 'styled-components';

import { TouchableOpacity } from 'react-native';

export const Container = styled.View`
    flex: 1;
    background: #DDF4F5;
    padding: 20px;
`
export const CardHeader = styled.View`
    height: 150px;
    background: #fff;
    borderRadius: 30px;
`
export const ImageContainer = styled.View`
    flex: 1;
    alignItems: center;
    padding: 0px;
    justifyContent: center;
`

export const Button = styled.TouchableOpacity`
    width: 65px;
    height: 65px;
    borderRadius: 40px;
    background: #FF9911;
    position: absolute;
    bottom: 20px;
    right: 20px;
    alignItems: center;
    justifyContent: center
    
`
