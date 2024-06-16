import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const portfolioAPI = createApi({
  reducerPath: "portfolioAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_SERVER,
  }),
  tagTypes: [],
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),
    }),

    logout: builder.query({
      query: () => ({
        url: "/auth/logout",
        method: "GET",
      }),
    }),

    getProject: builder.query({
      query: () => "/project",
    }),

    createProject: builder.mutation({
      query: (newProject) => ({
        url: "/project",
        method: "POST",
        body: newProject,
      }),
    }),

    updateProject: builder.mutation({
      query: (updatedProject) => ({
        url: `/project/${updatedProject.id}`,
        method: "PATCH",
        body: updatedProject,
      }),
    }),

    deleteProject: builder.mutation({
      query: (id) => ({
        url: `/project/${id}`,
        method: "DELETE",
      }),
    }),

    getMsg: builder.query({
      query: () => "/contact",
    }),

    createMsg: builder.mutation({
      query: (newMsg) => ({
        url: "/contact",
        method: "POST",
        body: newMsg,
      }),
    }),

    deleteMsg: builder.mutation({
      query: (id) => ({
        url: `/contact/${id}`,
        method: "DELETE",
      }),
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
