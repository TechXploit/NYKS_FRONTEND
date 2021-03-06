import React from 'react'
import { TouchableHighlight, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from '../../globals/Colors';
import { Styles } from '../../globals/Styles';


export const ButtonGradient = ({ gradientStyle, disabled, viewStyle, locations, onPress, style, textStyle, iconName, angle = 90, onleft = false, iconSize = 18, iconColor = Colors.black, textless = false, colors = [Colors.blue, Colors.light_blue], color = Colors.black, text = 'Button', onlyBorder = false, ...props }) => (
    <TouchableHighlight
        disabled={disabled}
        onPress={onPress}
        underlayColor={Colors.white}
        {...props}
        style={[
            { overflow: "hidden" },
            style
        ]}
    >
        <LinearGradient
            colors={!disabled ? colors : [Colors.grey, Colors.grey]}
            style={[
                (disabled ? { opacity: 0.6 } : null),
                (!onlyBorder
                    ? {
                        padding: 12,
                        paddingHorizontal: 25,
                        flexDirection: "row",
                        alignItems: "center",
                        // justifyContent: 'center',
                        height: "100%",
                        textAlign: "center"
                    }
                    : {
                        padding: 2,
                    }
                ),
                gradientStyle
            ]}
            useAngle={true}
            angle={angle}
            locations={locations}
        >

            {(!onlyBorder)
                ? (
                    <>
                        {(
                            ((textless || (iconName)) && onleft)
                                ? <Icon name={iconName} color={iconColor} size={iconSize} ></Icon>
                                : null
                        )}
                        {(
                            !textless ?
                                <Text style={[
                                    { fontSize: 18 },
                                    (iconName && !onleft) ? { marginRight: 10 } : null,
                                    (iconName && onleft) ? { marginLeft: 10 } : null,
                                    (disabled ? { color: Colors.grey } : null),
                                    textStyle,
                                ]}
                                >
                                    {text}
                                </Text>
                                : null
                        )}
                        {(
                            ((textless || (iconName)) && !onleft)
                                ? <Icon name={iconName} color={iconColor} size={iconSize} ></Icon>
                                : null
                        )}
                    </>
                )
                : (
                    <View style={[
                        {
                            backgroundColor: Colors.white,
                            padding: 12,
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center"
                        },
                        viewStyle
                    ]}>
                        {((textless || (iconName)) && onleft) ? <Icon name={iconName} color={iconColor} size={iconSize} ></Icon> : null}
                        {!textless ?
                            <Text style={[
                                Styles.font,
                                (iconName && !onleft) ? { marginRight: 10 } : null,
                                (iconName && onleft) ? { marginLeft: 10 } : null,
                                (disabled ? { color: Colors.grey } : null),
                                textStyle,
                            ]}
                            >
                                {text}
                            </Text>
                            : null}
                        {((textless || iconName) && !onleft) ? <Icon name={iconName} color={iconColor} size={iconSize} ></Icon> : null}

                    </View>
                )
            }
        </LinearGradient>
    </TouchableHighlight >
)