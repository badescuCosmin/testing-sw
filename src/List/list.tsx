import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Grid,
  Input,
  Text,
} from '@chakra-ui/react';
import { Product } from '../components/product';
import { ProductProps } from '../mocks/handlers';
import { useList } from './useList';
import { TransitionExample } from './dialog';

const List = () => {
  const { input, setInput, products } = useList();
  return (
    <Box maxWidth="1400px" margin="auto" mt={20}>
      <Text fontSize="3xl">List of Products</Text>
      <Box display="flex">
        <FormControl my={10} textAlign="left">
          <FormLabel>Product</FormLabel>
          <Input
            type="text"
            placeholder="Filter a product"
            name="product"
            width="50%"
            value={input}
            onChange={e => setInput(e.target.value)}
          />
        </FormControl>
        <TransitionExample />
      </Box>

      <Grid templateColumns="repeat(4, 1fr)" gap={6}>
        {products &&
          products?.map((p: ProductProps) => <Product key={p.id} {...p} />)}
      </Grid>
    </Box>
  );
};

export default List;
