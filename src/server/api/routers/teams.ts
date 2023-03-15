import { TRPCError } from "@trpc/server";
import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

export const exampleRouter = createTRPCRouter({

  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.team.findMany();
  }),
  createTeam: protectedProcedure
  .input(z.object({name: z.string()}))
  .mutation(({input, ctx})=>{
    try {
      ctx.prisma.team.create({
        data:{
          name: input.name,
          userId: parseInt(ctx.session.user.id, 10)
        }
      })
    } catch (error) {
      throw new TRPCError({
        code: 'BAD_REQUEST',
        message: 'There is something wrong'
      })
    }
  })
  ,
  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
