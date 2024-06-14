import { useState } from "react";
import { Box, Button, Input, VStack, Text } from "@chakra-ui/react";
import { FaCalendarAlt } from "react-icons/fa";

const DateTimePickerWidget = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSetReminder = () => {
    if (date && time) {
      console.log(`Reminder set for ${date} at ${time}`);
      setDate("");
      setTime("");
    }
  };

  return (
    <Box p={{ base: 2, md: 4 }} width={{ base: "100%", md: "auto" }} bg="gray.900" borderRadius="lg" boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)">
      <VStack spacing={{ base: 2, md: 4 }}>
        <Text fontSize="xl" color="white">Set a Reminder</Text>
        <Input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          bg="gray.800"
          border="none"
          color="white"
          _placeholder={{ color: "gray.500" }}
          _focus={{ boxShadow: `0 0 0 2px rgba(255, 165, 0, 0.8)` }}
        />
        <Input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          bg="gray.800"
          border="none"
          color="white"
          _placeholder={{ color: "gray.500" }}
          _focus={{ boxShadow: `0 0 0 2px rgba(255, 165, 0, 0.8)` }}
        />
        <Button leftIcon={<FaCalendarAlt />} colorScheme="orange" onClick={handleSetReminder}>
          Set Reminder
        </Button>
      </VStack>
    </Box>
  );
};

export default DateTimePickerWidget;