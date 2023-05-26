import { Image } from 'react-native';
import { useProfileProvider } from '../contexts/ProfileContext';

export default function ProfilePic() {

  const { profile, profileIsMissing, notFound } = useProfileProvider()

  return (
    <Image
      style={{
        width: 160,
        height: 160,
        borderRadius: 60,
      }}
      source={
        profileIsMissing || notFound ?
          require('../../assets/gitlogo.png') :
          { uri: profile.avatar_url}
      }
    />
  )
}