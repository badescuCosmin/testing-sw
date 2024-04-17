import {
  Card,
  CardBody,
  Stack,
  Heading,
  Divider,
  Image,
  Text,
  Button,
  ButtonGroup,
  CardFooter,
} from '@chakra-ui/react';
import { FC } from 'react';
import { ProductProps } from '../mocks/handlers';

export const Product: FC<ProductProps> = ({
  description,
  stock,
  price,
  thumbnail,
  title,
}) => {
  return (
    <Card maxW="sm">
      <CardBody>
        <Image
          src={thumbnail}
          alt="Green double couch with wooden legs"
          borderRadius="lg"
          style={{ height: '200px' }}
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{title}</Heading>
          <Text sx={{ height: '100px' }} mb={10}>
            {description}
          </Text>
          <Text color="blue.600" fontSize="2xl">
            ${price}
          </Text>
          <Text color="blue.600" fontSize="2xl">
            Stock-{stock}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="20">
          <Button variant="solid" colorScheme="red">
            Delete
          </Button>
          <Button variant="ghost" colorScheme="blue">
            Edit
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};
