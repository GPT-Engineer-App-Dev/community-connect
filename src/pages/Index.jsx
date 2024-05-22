import React from "react";
import { Box, Container, VStack, HStack, Text, Image, Button, Heading, IconButton } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Smartphone",
    description: "Latest model with advanced features",
    price: "$699",
    image: "https://images.unsplash.com/photo-1592890288564-76628a30a657?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lfGVufDB8fHx8MTcxNjM2NDI1NHww&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 2,
    name: "Laptop",
    description: "High performance laptop for professionals",
    price: "$999",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxsYXB0b3B8ZW58MHx8fHwxNzE2MzY0MjU0fDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 3,
    name: "Smartwatch",
    description: "Keep track of your fitness and notifications",
    price: "$199",
    image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzbWFydHdhdGNofGVufDB8fHx8MTcxNjM2NDI1NHww&ixlib=rb-4.0.3&q=80&w=1080",
  },
];

const Header = () => (
  <Box bg="teal.500" w="100%" p={4} color="white">
    <HStack justifyContent="space-between">
      <Heading size="lg">Electronics Store</Heading>
      <IconButton aria-label="Cart" icon={<FaShoppingCart />} size="lg" />
    </HStack>
  </Box>
);

const ProductCard = ({ product }) => (
  <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} m={2}>
    <Image src={product.image} alt={product.name} boxSize="200px" objectFit="cover" />
    <VStack align="start" mt={4}>
      <Heading size="md">{product.name}</Heading>
      <Text>{product.description}</Text>
      <Text fontWeight="bold">{product.price}</Text>
      <Button colorScheme="teal">Add to Cart</Button>
    </VStack>
  </Box>
);

const ProductList = () => (
  <VStack spacing={4}>
    {products.map((product) => (
      <ProductCard key={product.id} product={product} />
    ))}
  </VStack>
);

const Footer = () => (
  <Box bg="teal.500" w="100%" p={4} color="white" mt={8}>
    <Text>&copy; 2023 Electronics Store. All rights reserved.</Text>
  </Box>
);

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Header />
      <Container maxW="container.md" py={8}>
        <ProductList />
      </Container>
      <Footer />
    </Container>
  );
};

export default Index;
