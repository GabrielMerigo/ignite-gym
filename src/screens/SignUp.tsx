import { VStack, Image, Text, Center, Heading, ScrollView } from 'native-base';

import LogoImg from '@assets/logo.svg';
import BackgroundImg from '@assets/background.png';
import { Input } from '@components/Input';
import { Button } from '@components/Button';

export function SignUp() {
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1} bg={'gray.700'} px={10}>
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
            Crie sua conta
          </Heading>

          <Input placeholder="Nome" />

          <Input
            placeholder="E-mail"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <Input placeholder="Senha" secureTextEntry />
          <Input placeholder="Confirmar senha" secureTextEntry />

          <Button title="Criar e acessar" />
        </Center>

        <Button mt={24} title="Voltar para login" variant={'outline'} />
      </VStack>
    </ScrollView>
  );
}
