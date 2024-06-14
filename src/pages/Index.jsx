import { Container, VStack, Box, Text, Input, Button, useColorModeValue } from "@chakra-ui/react";
import { useState } from "react";
import { FaPlus, FaTrash } from "react-icons/fa";

const Index = () => {
  const [leads, setLeads] = useState([]);
  const [newLead, setNewLead] = useState("");

  const handleAddLead = () => {
    if (newLead.trim() !== "") {
      setLeads([...leads, newLead]);
      setNewLead("");
    }
  };

  const handleDeleteLead = (index) => {
    const updatedLeads = leads.filter((_, i) => i !== index);
    setLeads(updatedLeads);
  };

  const bgColor = useColorModeValue("gray.900", "gray.800");
  const boxShadow = useColorModeValue("0 4px 6px rgba(0, 0, 0, 0.1)", "0 4px 6px rgba(0, 0, 0, 0.3)");
  const neonOrange = "rgba(255, 165, 0, 0.8)";
  const neonGreen = "rgba(0, 255, 0, 0.8)";
  const glowEffect = `0 0 10px ${neonOrange}, 0 0 20px ${neonOrange}, 0 0 30px ${neonOrange}, 0 0 40px ${neonOrange}`;

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" bg={bgColor} color="white">
      <VStack spacing={4} width="100%">
        <Text fontSize="3xl" fontWeight="bold" color={neonOrange} textShadow={glowEffect}>Sales Lead Management</Text>
        <Box width="100%" p={4} bg="gray.900" borderRadius="lg" boxShadow={boxShadow} style={{ backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", border: "1px solid rgba(255, 255, 255, 0.1)" }}>
          <VStack spacing={4}>
            <Input
              placeholder="Enter new lead"
              value={newLead}
              onChange={(e) => setNewLead(e.target.value)}
              bg="gray.800"
              border="none"
              _placeholder={{ color: "gray.500" }}
              color="white"
              _focus={{ boxShadow: `0 0 0 2px ${neonOrange}` }}
              style={{ borderRadius: "10px", boxShadow: "inset 5px 5px 10px #1a1a1a, inset -5px -5px 10px #333" }}
            />
            <Button leftIcon={<FaPlus />} colorScheme="orange" onClick={handleAddLead} width="100%" _hover={{ bg: neonOrange, boxShadow: glowEffect }} _active={{ bg: neonOrange }}>
              Add Lead
            </Button>
          </VStack>
        </Box>
        <VStack spacing={2} width="100%">
          {leads.map((lead, index) => (
            <Box key={index} width="100%" p={4} bg="gray.900" borderRadius="lg" boxShadow={boxShadow} style={{ backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", border: "1px solid rgba(255, 255, 255, 0.1)" }} display="flex" justifyContent="space-between" alignItems="center">
              <Text>{lead}</Text>
              <Button size="sm" colorScheme="red" onClick={() => handleDeleteLead(index)} _hover={{ bg: neonGreen, boxShadow: glowEffect }} _active={{ bg: neonGreen }}>
                <FaTrash />
              </Button>
            </Box>
          ))}
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;