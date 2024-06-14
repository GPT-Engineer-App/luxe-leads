import { Box, VStack, Text } from "@chakra-ui/react";
import DateTimePickerWidget from "../components/DateTimePickerWidget";

const Dashboard = () => {
  return (
    <Box p={4}>
      <VStack spacing={4}>
        <Text fontSize="2xl" fontWeight="bold" color="white">Dashboard</Text>
        <DateTimePickerWidget />
      </VStack>
    </Box>
  );
};

export default Dashboard;