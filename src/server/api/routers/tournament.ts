import { TRPCError } from "@trpc/server";
import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

export const tournamentRouter = createTRPCRouter({

  getAll: publicProcedure.query(({ ctx }) => {
    try {
      return ctx.prisma.tournament.findMany();
    } catch (error) {
      throw new TRPCError({
        code: 'BAD_REQUEST',
        message: 'There is something wrong'
      })
    }
  }),

  getTournamentById: publicProcedure
  .input(z.number())
  .query(({ ctx, input }) => {
    try {
      const tournament = ctx.prisma.tournament.findUnique({
        where:{
          id: input
        }
      });
      return tournament
    } catch (error) {
      throw new TRPCError({
        code: 'BAD_REQUEST',
        message: 'There is something wrong'
      })
    }
  }),

  getMyTournament: protectedProcedure.query(({ctx})=>{
    try {
      return ctx.prisma.tournament.findMany({
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
  
  createTournament: protectedProcedure
  .input(z.object({name: z.string()}))
  .mutation(({input, ctx})=>{
    try {
      const tournament = ctx.prisma.tournament.create({
        data:{
          name: input.name,
          userId: parseInt(ctx.session.user.id, 10)
        }
      })
      return tournament
    } catch (error) {
      throw new TRPCError({
        code: 'BAD_REQUEST',
        message: 'There is something wrong'
      })
    }
  }),
});
