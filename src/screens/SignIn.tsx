import { VStack, Image } from 'native-base';
import BackgroundImg from '@assets/background.png';

export function SignIn() {
  return (
    <VStack flex={1} bg={'gray.700'}>
      <Image
        resizeMode="contain"
        source={BackgroundImg}
        alt="Two people doing exercise"
        position="absolute"
      />
    </VStack>
  );
}
