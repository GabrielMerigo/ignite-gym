import { Button as NativeBaseButton, IButtonProps, Text } from 'native-base';

type ButtonProps = IButtonProps & {
  title: string;
};

export function Button({ title, ...rest }: ButtonProps) {
  return (
    <NativeBaseButton
      bg="green.700"
      h={14}
      w="full"
      rounded="sm"
      _pressed={{
        background: 'green.500'
      }}
      {...rest}
    >
      <Text color="white" fontFamily="heading" fontSize="sm">
        {title}
      </Text>
    </NativeBaseButton>
  );
}
