import { Box, VStack, Text, useBreakpointValue } from "@chakra-ui/react";
import DateTimePickerWidget from "../components/DateTimePickerWidget";

const Dashboard = () => {
  return (
    <Box p={{ base: 2, md: 4 }} height={{ base: "auto", md: "100vh" }} overflowY="auto">
      <VStack spacing={{ base: 2, md: 4 }}>
        <Text fontSize="2xl" fontWeight="bold" color="white">Dashboard</Text>
        <DateTimePickerWidget />
      </VStack>
    </Box>
  );
};

export default Dashboard;