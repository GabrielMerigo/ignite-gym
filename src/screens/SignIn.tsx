import { VStack, Image, Text, Center, Heading } from 'native-base';

import LogoImg from '@assets/logo.svg';
import BackgroundImg from '@assets/background.png';
import { Input } from '@components/Input';

export function SignIn() {
  return (
    <VStack flex={1} bg={'gray.700'}>
      <Image
        resizeMode="contain"
        source={BackgroundImg}
        alt="Two people doing exercise"
        position="absolute"
      />

      <Center my={24}>
        <LogoImg />
        <Text color={'gray.100'} fontSize="sm">
          Treine sua mente e o seu corpo
        </Text>
      </Center>

      <Center>
        <Heading color="gray.100" fontSize="xl" mb="6" fontFamily="heading">
          Acesse sua conta
        </Heading>
      </Center>

      <Input placeholder="E-mail" />
    </VStack>
  );
}
