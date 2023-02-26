/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateAppointment = /* GraphQL */ `
  subscription OnCreateAppointment(
    $filter: ModelSubscriptionAppointmentFilterInput
  ) {
    onCreateAppointment(filter: $filter) {
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
export const onUpdateAppointment = /* GraphQL */ `
  subscription OnUpdateAppointment(
    $filter: ModelSubscriptionAppointmentFilterInput
  ) {
    onUpdateAppointment(filter: $filter) {
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
export const onDeleteAppointment = /* GraphQL */ `
  subscription OnDeleteAppointment(
    $filter: ModelSubscriptionAppointmentFilterInput
  ) {
    onDeleteAppointment(filter: $filter) {
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
