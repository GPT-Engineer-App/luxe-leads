import { Box, VStack, Text, useBreakpointValue } from "@chakra-ui/react";
import DateTimePickerWidget from "../components/DateTimePickerWidget";

const Dashboard = () => {
  return (
    <Box p={{ base: 2, md: 4 }} height={{ base: "auto", md: "100vh" }} overflowY="auto" bg="gray.800">
      <VStack spacing={{ base: 2, md: 4 }}>
        <Text fontSize="2xl" fontWeight="bold" color="white">Dashboard</Text>
        <Box bg="gray.700" p={4} borderRadius="md" boxShadow="md">
          <DateTimePickerWidget />
        </Box>
      </VStack>
    </Box>
  );
};

export default Dashboard;