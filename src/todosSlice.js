import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const todoApi = createApi({
    reducerPath: 'todoApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://65d1655fab7beba3d5e452c6.mockapi.io/' }),
    tagTypes: ['Todo'],
    endpoints: builder => ({
        fetchToDos: builder.query({
            query: () => '/todos',
            providesTags: ['Todo']
        }),
        deleteToDo: builder.mutation({
            query: todoId => ({
                url: `/todos/${todoId}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Todo']
        }),
        createToDo: builder.mutation({
            query: toDoContent => ({
                url: `/todos`,
                method: 'POST',
                body: {
                    name: toDoContent
                }
            }),
            invalidatesTags: ['Todo']
        })
    })
})

export const { useFetchToDosQuery,
    useDeleteToDoMutation,
    useCreateToDoMutation } = todoApi;
