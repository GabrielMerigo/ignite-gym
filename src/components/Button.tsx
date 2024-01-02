import { Button as NativeBaseButton, IButtonProps, Text } from 'native-base';

type ButtonProps = IButtonProps & {
  title: string;
};

export function Button({ title, variant, ...rest }: ButtonProps) {
  return (
    <NativeBaseButton
      bg={variant === 'outline' ? 'transparent' : 'green.700'}
      borderWidth={variant === 'outline' ? 1 : 0}
      borderColor="green.500"
      h={14}
      w="full"
      rounded="sm"
      _pressed={{
        background: variant === 'outline' ? 'gray.500' : 'green.500'
      }}
      {...rest}
    >
      <Text
        color={variant === 'outline' ? 'green.500' : 'white'}
        fontFamily="heading"
        fontSize="sm"
      >
        {title}
      </Text>
    </NativeBaseButton>
  );
}
