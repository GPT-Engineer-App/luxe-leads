import { useState } from "react";
import { Box, VStack, Text, Input, Button, HStack, Select, useColorModeValue } from "@chakra-ui/react";
import { FaSearch, FaFilter, FaArrowLeft, FaArrowRight } from "react-icons/fa";

const SalesmanDashboard = () => {
  const [leads, setLeads] = useState([
    // Sample leads data
    { name: "John Doe", phone: "123-456-7890", email: "john@example.com", salesman: "Alice", rvUnit: "RV123", leadSource: "Website", notes: "Interested in RV123" },
    { name: "Jane Smith", phone: "987-654-3210", email: "jane@example.com", salesman: "Bob", rvUnit: "RV456", leadSource: "Referral", notes: "Looking for RV456" },
    // Add more leads as needed
  ]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const leadsPerPage = 5;

  const handleSearch = () => {
    // Implement search functionality
  };

  const handleFilter = (e) => {
    setFilter(e.target.value);
    // Implement filter functionality
  };

  const handlePageChange = (direction) => {
    if (direction === "prev" && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else if (direction === "next" && currentPage < Math.ceil(leads.length / leadsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const indexOfLastLead = currentPage * leadsPerPage;
  const indexOfFirstLead = indexOfLastLead - leadsPerPage;
  const currentLeads = leads.slice(indexOfFirstLead, indexOfLastLead);

  const bgColor = useColorModeValue("gray.900", "gray.800");
  const boxShadow = useColorModeValue("0 4px 6px rgba(0, 0, 0, 0.1)", "0 4px 6px rgba(0, 0, 0, 0.3)");
  const neonOrange = "rgba(255, 165, 0, 0.8)";
  const glowEffect = `0 0 10px ${neonOrange}, 0 0 20px ${neonOrange}, 0 0 30px ${neonOrange}, 0 0 40px ${neonOrange}`;

  return (
    <Box p={{ base: 2, md: 4 }} height={{ base: "auto", md: "100vh" }} overflowY="auto" bg={bgColor}>
      <VStack spacing={{ base: 2, md: 4 }}>
        <Text fontSize="2xl" fontWeight="bold" color="white">Salesman Dashboard</Text>
        <HStack spacing={4} width="100%">
          <Input
            placeholder="Search leads"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            bg="gray.800"
            border="none"
            _placeholder={{ color: "gray.500" }}
            color="white"
            _focus={{ boxShadow: `0 0 0 2px ${neonOrange}` }}
            style={{ borderRadius: "10px", boxShadow: "inset 5px 5px 10px #1a1a1a, inset -5px -5px 10px #333" }}
          />
          <Button leftIcon={<FaSearch />} colorScheme="orange" onClick={handleSearch}>
            Search
          </Button>
          <Select placeholder="Filter by" value={filter} onChange={handleFilter} bg="gray.800" border="none" color="white" _focus={{ boxShadow: `0 0 0 2px ${neonOrange}` }} style={{ borderRadius: "10px", boxShadow: "inset 5px 5px 10px #1a1a1a, inset -5px -5px 10px #333" }}>
            <option value="salesman">Salesman</option>
            <option value="rvUnit">RV Unit</option>
            <option value="leadSource">Lead Source</option>
          </Select>
          <Button leftIcon={<FaFilter />} colorScheme="orange">
            Filter
          </Button>
        </HStack>
        <VStack spacing={2} width="100%">
          {currentLeads.map((lead, index) => (
            <Box key={index} width="100%" p={{ base: 2, md: 4 }} bg="gray.900" borderRadius="lg" boxShadow={boxShadow} style={{ backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", border: "1px solid rgba(255, 255, 255, 0.1)" }} display="flex" flexDirection="column" justifyContent="space-between" alignItems="flex-start">
              <Text>Name: {lead.name}</Text>
              <Text>Phone: {lead.phone}</Text>
              <Text>Email: {lead.email}</Text>
              <Text>Salesman: {lead.salesman}</Text>
              <Text>RV Unit: {lead.rvUnit}</Text>
              <Text>Lead Source: {lead.leadSource}</Text>
              <Text>Notes: {lead.notes}</Text>
            </Box>
          ))}
        </VStack>
        <HStack spacing={4}>
          <Button leftIcon={<FaArrowLeft />} colorScheme="orange" onClick={() => handlePageChange("prev")} isDisabled={currentPage === 1}>
            Previous
          </Button>
          <Button rightIcon={<FaArrowRight />} colorScheme="orange" onClick={() => handlePageChange("next")} isDisabled={currentPage === Math.ceil(leads.length / leadsPerPage)}>
            Next
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
};

export default SalesmanDashboard;