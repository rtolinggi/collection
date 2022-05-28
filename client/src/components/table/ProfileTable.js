import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  chakra,
  Icon,
  Box,
  Skeleton,
  Stack,
} from "@chakra-ui/react";
import { useTable, useSortBy } from "react-table";
import { BsSortUp, BsSortDown } from "react-icons/bs";

const ProfileTable = ({ columns, data, isLoading }) => {
  const tableInstance = useTable({ columns, data }, useSortBy);
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <Box
      py={8}
      px={6}
      borderRadius='md'
      boxShadow='lg'
      bg='white'
      overflow='auto'>
      <Table {...getTableProps()} size='xs' borderRadius='md'>
        <Thead>
          {headerGroups.map((headerGroup) => (
            <Tr {...headerGroup.getHeaderGroupProps()} bg='primary.600'>
              {headerGroup.headers.map((column) => (
                <Th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  isNumeric={column.isNumeric}
                  alignItems='center'
                  color='white'
                  fontFamily='body'
                  borderBottomColor='white'
                  borderBottomWidth='10px'
                  p={4}>
                  {column.render("Header")}
                  <chakra.span pl='4'>
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <Icon as={BsSortUp} aria-label='sorted descending' />
                      ) : (
                        <Icon as={BsSortDown} aria-label='sorted ascending' />
                      )
                    ) : null}
                  </chakra.span>
                </Th>
              ))}
            </Tr>
          ))}
        </Thead>
        {isLoading ? null : (
          <Tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <Tr
                  {...row.getRowProps()}
                  {...(row.index % 2 === 0
                    ? { backgroundColor: "gray.50" }
                    : null)}
                  _hover={{ backgroundColor: "#e0f2fe" }}>
                  {row.cells.map((cell) => (
                    <Td
                      {...cell.getCellProps()}
                      isNumeric={cell.column.isNumeric}
                      px={4}
                      py={2}>
                      {cell.render("Cell")}
                    </Td>
                  ))}
                </Tr>
              );
            })}
          </Tbody>
        )}
      </Table>
      {isLoading && (
        <Stack>
          <Skeleton height='30px' />
          <Skeleton height='30px' />
          <Skeleton height='30px' />
        </Stack>
      )}
    </Box>
  );
};

export default ProfileTable;
