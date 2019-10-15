import React, { useState, useEffect } from 'react';
import Icon from "react-native-vector-icons/MaterialIcons";
import { View, TouchableOpacity } from 'react-native';
import { Badge } from 'react-native-elements'

import { Container, ItemTitle, ItemRow, RobotBubble, Chat } from './styles';

function Menu() {
    const [notify, SetNotify] = useState(true);
    function handleButton() {
        SetNotify(true)

    }
    return (
        <Container>
            <ItemRow>
                <TouchableOpacity onPress={() => props.navigation.navigate('Feed')}>
                    <ItemTitle>Feed</ItemTitle>
                    <View>
                        <Icon
                            style={{ textAlign: 'center' }}
                            name="timeline"
                            color="#0c1c3f"
                            size={50}
                        />
                        {
                            notify ?
                                <Badge
                                    status="error"
                                    containerStyle={{ position: 'absolute', top: 35, right: -10 }}
                                    value="Novo"
                                /> : <View />
                        }
                    </View>
                </TouchableOpacity>
                <View>
                    <ItemTitle>Notificações</ItemTitle>
                    <View>
                        <Icon
                            style={{ textAlign: 'center' }}
                            name="notifications-none"
                            color="#0c1c3f"
                            size={50}
                        />
                        {
                            notify ?
                                <Badge
                                    status="error"
                                    containerStyle={{ position: 'absolute', top: 50, right: 8 }}
                                    value="1"
                                /> : <View />
                        }
                    </View>
                </View>
            </ItemRow>
            <ItemRow>
                <View>
                    <ItemTitle>Trilha</ItemTitle>
                    <Icon
                        style={{ textAlign: 'center' }}
                        name="play-circle-outline"
                        color="#0c1c3f"
                        size={50}
                    />
                    {
                        notify ?
                            <Badge
                                status="error"
                                containerStyle={{ position: 'absolute', top: 50, right: 2 }}
                                value="1"
                            /> : <View />
                    }
                </View>
                <View>
                    <ItemTitle>Conquistas</ItemTitle>
                    <Icon
                        style={{ textAlign: 'center' }}
                        name="timeline"
                        color="#0c1c3f"
                        size={50}
                    />
                    {
                        notify ?
                            <Badge
                                status="error"
                                containerStyle={{ position: 'absolute', top: 50, right: -10 }}
                                value="Novo"
                            /> : <View />
                    }
                </View>
            </ItemRow>
            <ItemRow>
                <View>
                    <ItemTitle>Simulados</ItemTitle>
                    <Icon
                        style={{ textAlign: 'center' }}
                        name="timeline"
                        color="#0c1c3f"
                        size={50}
                    />
                    {
                        notify ?
                            <Badge
                                status="error"
                                containerStyle={{ position: 'absolute', top: 52, right: 2 }}
                                value="Novo"
                            /> : <View />
                    }
                </View>
                <View>
                    <ItemTitle>Aulas</ItemTitle>
                    <Icon
                        style={{ textAlign: 'center' }}
                        name="timeline"
                        color="#0c1c3f"
                        size={50}
                    />
                    {
                        notify ?
                            <Badge
                                status="error"
                                containerStyle={{ position: 'absolute', top: 50, right: -10 }}
                                value="Novo"
                            /> : <View />
                    }
                </View>
            </ItemRow>
            <ItemRow>
                <View>
                    <ItemTitle>Avatar</ItemTitle>
                    <Icon
                        style={{ textAlign: 'center' }}
                        name="timeline"
                        color="#0c1c3f"
                        size={50}
                    />
                    {
                        notify ?
                            <Badge
                                status="error"
                                containerStyle={{ position: 'absolute', top: 50, right: -10 }}
                                value="Novo"
                            /> : <View />
                    }
                </View>
                <View >
                    <ItemTitle>Perfil</ItemTitle>
                    <Icon
                        style={{ textAlign: 'center' }}
                        name="timeline"
                        color="#0c1c3f"
                        size={50}
                    />
                    {
                        notify ?
                            <Badge
                                status="error"
                                containerStyle={{ position: 'absolute', top: 50, right: -10 }}
                                value="Novo"
                            /> : <View />
                    }
                </View>
            </ItemRow>
            <Chat>
                <RobotBubble>Posso Ajudar?</RobotBubble>
                <Icon
                    name="sentiment-very-dissatisfied"
                    color="#f46522"
                    size={40}
                />
            </Chat>
        </Container>);

}


export default Menu;
