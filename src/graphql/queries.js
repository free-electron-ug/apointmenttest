/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAppointment = /* GraphQL */ `
  query GetAppointment($id: ID!) {
    getAppointment(id: $id) {
      id
      name
      email
      phoneNumber
      start
      isAccepted
      createdAt
      updatedAt
    }
  }
`;
export const listAppointments = /* GraphQL */ `
  query ListAppointments(
    $filter: ModelAppointmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAppointments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        email
        phoneNumber
        start
        isAccepted
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
