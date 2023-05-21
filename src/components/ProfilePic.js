import { Image } from 'react-native';

export default function ProfilePic({ src }) {
    return (
        <Image
            style={{
              width: 160,
              height: 160,
              borderRadius: 60
            }}
            source={{
              uri: src 
            }}
        />
    )
}