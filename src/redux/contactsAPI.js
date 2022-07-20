import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contacts',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://62c98fb9d9ead251e8bd78e1.mockapi.io/',
  }),
  tagTypes: ['Contacts'],
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => `contacts`,
      providesTags: ['Contacts'],
    }),
    deleteContact: builder.mutation({
      query(contactId) {
        return {
          url: `contacts/${contactId}`,
          method: 'DELETE',
        };
      },
      invalidatesTags: ['Contacts'],
    }),
    addContact: builder.mutation({
      query(contact) {
        return {
          url: `contacts`,
          method: 'POST',
          body: contact,
        };
      },
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useDeleteContactMutation,
  useAddContactMutation,
} = contactsApi;
