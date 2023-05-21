import { 
    FontAwesome5, 
    FontAwesome, 
    MaterialIcons, 
    Octicons, 
    MaterialCommunityIcons, 
    Entypo,
} from '@expo/vector-icons';

export default function Icons({name, ...iconProps}){
    let icons = {
        user: <FontAwesome5 name="user" {...iconProps}/>,
        organization: <Octicons name="organization" {...iconProps}/>,
        file: <FontAwesome5 name="file-alt" {...iconProps}/>,
        face: <MaterialCommunityIcons name="face-recognition" {...iconProps}/>,
        mobile: <MaterialIcons name="send-to-mobile" {...iconProps}/>,
        right: <Entypo name="chevron-right" {...iconProps} />,
        search: <FontAwesome name="search" {...iconProps} />,
        close: <FontAwesome name="close" {...iconProps} />
    }

    return icons[name] || null;
}