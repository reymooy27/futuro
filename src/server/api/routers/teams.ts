import { TRPCError } from "@trpc/server";
import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

export const teamRouter = createTRPCRouter({

  getAll: publicProcedure.query(({ ctx }) => {
    try {
      return ctx.prisma.team.findMany();
    } catch (error) {
      throw new TRPCError({
        code: 'BAD_REQUEST',
        message: 'There is something wrong'
      })
    }
  }),

  getTeamById: publicProcedure
  .input(z.number())
  .query(({ ctx, input }) => {
    try {
      const team = ctx.prisma.team.findUnique({
        where:{
          id: input
        }
      });
      return team
    } catch (error) {
      throw new TRPCError({
        code: 'BAD_REQUEST',
        message: 'There is something wrong'
      })
    }
  }),

  getMyTeam: protectedProcedure.query(({ctx})=>{
    try {
      return ctx.prisma.team.findMany({
        where:{
          userId: parseInt(ctx.session.user.id, 10)
        } 
      })
    } catch (error) {
      throw new TRPCError({
        code: 'BAD_REQUEST',
        message: 'There is something wrong'
      })
    }
  }),
  
  createTeam: protectedProcedure
  .input(z.object({name: z.string()}))
  .mutation(({input, ctx})=>{
    try {
      const team = ctx.prisma.team.create({
        data:{
          name: input.name,
          userId: parseInt(ctx.session.user.id, 10)
        }
      })
      return team
    } catch (error) {
      throw new TRPCError({
        code: 'BAD_REQUEST',
        message: 'There is something wrong'
      })
    }
  }),
});
