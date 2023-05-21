import { 
    FontAwesome5, 
    FontAwesome, 
    MaterialIcons, 
    MaterialCommunityIcons, 
    Entypo,
} from '@expo/vector-icons';

export default function Icons({name, ...iconProps}){
    let icons = {
        user: <FontAwesome5 name="user" {...iconProps}/>,
        organization: <FontAwesome5 name="headset" {...iconProps}/>,
        file: <FontAwesome5 name="file-alt" {...iconProps}/>,
        face: <MaterialCommunityIcons name="face-recognition" {...iconProps}/>,
        mobile: <MaterialIcons name="send-to-mobile" {...iconProps}/>,
        right: <Entypo name="chevron-right" {...iconProps} />,
        search: <FontAwesome name="search" {...iconProps} />,
        close: <FontAwesome name="close" {...iconProps} />,
        lock: <Entypo name="lock" {...iconProps} />,
        unlock: <Entypo name="lock-open" {...iconProps} />
    }

    return icons[name] || null;
}

