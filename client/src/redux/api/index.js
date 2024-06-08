import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const portfolioAPI = createApi({
  reducerPath: "portfolioAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_SERVER,
  }),
  tagTypes: ["Project", "Message"],
  endpoints: (builder) => ({

    // _______________Authentication_______________
    login: builder.mutation({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),
    }),

    logout: builder.query({
      query: () => "/auth/logout",
    }),

    // _______________Projects_______________
    getProject: builder.query({
      query: () => "/project",
      providesTags: ["Project"],
    }),

    createProject: builder.mutation({
      query: (newProject) => ({
        url: "/project",
        method: "POST",
        body: newProject,
      }),
      invalidatesTags: ["Project"],
    }),

    updateProject: builder.mutation({
      query: (updatedProject) => ({
        url: `/project/${updatedProject.id}`,
        method: "PATCH",
        body: updatedProject,
      }),
      invalidatesTags: ["Project"],
    }),

    deleteProject: builder.mutation({
      query: (id) => ({
        url: `/project/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Project"],
    }),

    // _______________Messages_______________
    getMsg: builder.query({
      query: () => "/contact",
      providesTags: ["Message"],
    }),

    createMsg: builder.mutation({
      query: (newMsg) => ({
        url: "/contact",
        method: "POST",
        body: newMsg,
      }),
      invalidatesTags: ["Message"],
    }),

    deleteMsg: builder.mutation({
      query: (id) => ({
        url: `/contact/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Message"],
    }),
  }),
});

export const {
  useLoginMutation, 
  useLogoutQuery,
  useGetProjectQuery,
  useCreateProjectMutation,
  useUpdateProjectMutation,
  useDeleteProjectMutation,
  useGetMsgQuery,
  useCreateMsgMutation,
  useDeleteMsgMutation,
} = portfolioAPI;
