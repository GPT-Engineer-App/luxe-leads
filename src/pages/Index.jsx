import { Container, VStack, Box, Text, Input, Button, useColorModeValue, useBreakpointValue, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import { FaPlus, FaTrash } from "react-icons/fa";

const Index = () => {
  const [leads, setLeads] = useState([]);
  const [newLead, setNewLead] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [salesman, setSalesman] = useState("");
  const [rvUnit, setRvUnit] = useState("");
  const [leadSource, setLeadSource] = useState("");
  const [notes, setNotes] = useState("");
  
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleAddLead = () => {
    if (newLead.trim() !== "") {
      const newLeadData = {
        name: newLead,
        phone,
        email,
        salesman,
        rvUnit,
        leadSource,
        notes,
      };
      setLeads([...leads, newLeadData]);
      setNewLead("");
      setPhone("");
      setEmail("");
      setSalesman("");
      setRvUnit("");
      setLeadSource("");
      setNotes("");
      onClose();
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
    <Container centerContent maxW={{ base: "100%", md: "container.md" }} height={{ base: "auto", md: "100vh" }} display="flex" flexDirection="column" justifyContent="center" alignItems="center" bg={bgColor} color="white">
      <VStack spacing={{ base: 2, md: 4 }} width="100%">
        <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="bold" color={neonOrange} textShadow={glowEffect}>Sales Lead Management</Text>
        <Box width="100%" p={{ base: 2, md: 4 }} bg="gray.900" borderRadius="lg" boxShadow={boxShadow} style={{ backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", border: "1px solid rgba(255, 255, 255, 0.1)" }}>
          <VStack spacing={4}>
            <Button leftIcon={<FaPlus />} colorScheme="orange" onClick={onOpen} width={{ base: "100%", md: "auto" }} _hover={{ bg: neonOrange, boxShadow: glowEffect }} _active={{ bg: neonOrange }}>
              Add Lead
            </Button>
            <Modal isOpen={isOpen} onClose={onClose} size="xl">
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Add New Lead</ModalHeader>
                <ModalCloseButton />
                <ModalBody overflowY="auto" maxHeight="400px">
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
                    width={{ base: "100%", md: "auto" }}
                  />
                  <Input
                    placeholder="Enter phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    bg="gray.800"
                    border="none"
                    _placeholder={{ color: "gray.500" }}
                    color="white"
                    _focus={{ boxShadow: `0 0 0 2px ${neonOrange}` }}
                    style={{ borderRadius: "10px", boxShadow: "inset 5px 5px 10px #1a1a1a, inset -5px -5px 10px #333" }}
                    width={{ base: "100%", md: "auto" }}
                  />
                  <Input
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    bg="gray.800"
                    border="none"
                    _placeholder={{ color: "gray.500" }}
                    color="white"
                    _focus={{ boxShadow: `0 0 0 2px ${neonOrange}` }}
                    style={{ borderRadius: "10px", boxShadow: "inset 5px 5px 10px #1a1a1a, inset -5px -5px 10px #333" }}
                    width={{ base: "100%", md: "auto" }}
                  />
                  <Input
                    placeholder="Enter salesman"
                    value={salesman}
                    onChange={(e) => setSalesman(e.target.value)}
                    bg="gray.800"
                    border="none"
                    _placeholder={{ color: "gray.500" }}
                    color="white"
                    _focus={{ boxShadow: `0 0 0 2px ${neonOrange}` }}
                    style={{ borderRadius: "10px", boxShadow: "inset 5px 5px 10px #1a1a1a, inset -5px -5px 10px #333" }}
                    width={{ base: "100%", md: "auto" }}
                  />
                  <Input
                    placeholder="Enter RV unit"
                    value={rvUnit}
                    onChange={(e) => setRvUnit(e.target.value)}
                    bg="gray.800"
                    border="none"
                    _placeholder={{ color: "gray.500" }}
                    color="white"
                    _focus={{ boxShadow: `0 0 0 2px ${neonOrange}` }}
                    style={{ borderRadius: "10px", boxShadow: "inset 5px 5px 10px #1a1a1a, inset -5px -5px 10px #333" }}
                    width={{ base: "100%", md: "auto" }}
                  />
                  <Input
                    placeholder="Enter lead source"
                    value={leadSource}
                    onChange={(e) => setLeadSource(e.target.value)}
                    bg="gray.800"
                    border="none"
                    _placeholder={{ color: "gray.500" }}
                    color="white"
                    _focus={{ boxShadow: `0 0 0 2px ${neonOrange}` }}
                    style={{ borderRadius: "10px", boxShadow: "inset 5px 5px 10px #1a1a1a, inset -5px -5px 10px #333" }}
                    width={{ base: "100%", md: "auto" }}
                  />
                  <Input
                    placeholder="Enter notes"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    bg="gray.800"
                    border="none"
                    _placeholder={{ color: "gray.500" }}
                    color="white"
                    _focus={{ boxShadow: `0 0 0 2px ${neonOrange}` }}
                    style={{ borderRadius: "10px", boxShadow: "inset 5px 5px 10px #1a1a1a, inset -5px -5px 10px #333" }}
                    width={{ base: "100%", md: "auto" }}
                  />
                </ModalBody>
                <ModalFooter>
                  <Button colorScheme="blue" mr={3} onClick={onClose}>
                    Close
                  </Button>
                  <Button leftIcon={<FaPlus />} colorScheme="orange" onClick={handleAddLead} width={{ base: "100%", md: "auto" }} _hover={{ bg: neonOrange, boxShadow: glowEffect }} _active={{ bg: neonOrange }}>
                    Add Lead
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </VStack>
        </Box>
        <VStack spacing={2} width="100%">
          {leads.map((lead, index) => (
            <Box key={index} width="100%" p={{ base: 2, md: 4 }} bg="gray.900" borderRadius="lg" boxShadow={boxShadow} style={{ backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", border: "1px solid rgba(255, 255, 255, 0.1)" }} display="flex" flexDirection="column" justifyContent="space-between" alignItems="flex-start">
              <Text>Name: {lead.name}</Text>
              <Text>Phone: {lead.phone}</Text>
              <Text>Email: {lead.email}</Text>
              <Text>Salesman: {lead.salesman}</Text>
              <Text>RV Unit: {lead.rvUnit}</Text>
              <Text>Lead Source: {lead.leadSource}</Text>
              <Text>Notes: {lead.notes}</Text>
              
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