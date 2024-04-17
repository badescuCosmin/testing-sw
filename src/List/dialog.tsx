import {
  useDisclosure,
  Button,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogCloseButton,
  AlertDialogBody,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { ProductProps } from '../mocks/handlers';

export const TransitionExample = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef<any>();

  const [form, setForm] = useState<Omit<ProductProps, 'id'>>({
    thumbnail: '',
    title: '',
    description: '',
    price: 0,
    stock: 0,
  });

  return (
    <>
      <Button onClick={onOpen}>Add new product</Button>
      <AlertDialog
        motionPreset="slideInBottom"
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogHeader>Add new product?</AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>
            <form
              onSubmit={e => {
                e.preventDefault();
                console.log(form);
              }}
            >
              <FormControl isRequired my={5} textAlign="left">
                <FormLabel>Thumbnail</FormLabel>
                <Input
                  type="text"
                  placeholder="Thumbnail"
                  value={form.thumbnail}
                  onChange={e =>
                    setForm({ ...form, thumbnail: e.target.value })
                  }
                />
              </FormControl>
              <FormControl isRequired my={5} textAlign="left">
                <FormLabel>Title</FormLabel>
                <Input
                  type="text"
                  placeholder="Title"
                  value={form.title}
                  onChange={e => setForm({ ...form, title: e.target.value })}
                />
              </FormControl>
              <FormControl isRequired my={5} textAlign="left">
                <FormLabel>Description</FormLabel>
                <Input
                  type="text"
                  placeholder="Description"
                  value={form.description}
                  onChange={e =>
                    setForm({ ...form, description: e.target.value })
                  }
                />
              </FormControl>
              <FormControl isRequired my={5} textAlign="left">
                <FormLabel>Price</FormLabel>
                <Input
                  type="number"
                  placeholder="Price"
                  value={form.price}
                  onChange={e =>
                    setForm({ ...form, price: Number(e.target.value) })
                  }
                />
              </FormControl>
              <FormControl isRequired my={5} textAlign="left">
                <FormLabel>Stock</FormLabel>
                <Input
                  type="number"
                  placeholder="Stock"
                  value={form.stock}
                  onChange={e =>
                    setForm({ ...form, stock: Number(e.target.value) })
                  }
                />
              </FormControl>
              <Button type="submit" colorScheme="blue" ml={3}>
                Add
              </Button>
            </form>
          </AlertDialogBody>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};
