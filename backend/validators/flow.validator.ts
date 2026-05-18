import z from "zod";

export const CreateFlowSchema = z.object({
  name: z.string({
    error: (issue) => issue.input === undefined
      ? "Nama wajib diisi"
      : "Nama harus berupa teks",
  }).min(3, { error: "minimal 3 karakter" }),

  amount: z.number({
    error: (issue) => issue.input === undefined
      ? "jumlah wajib diisi"
      : "harus berupa angka murni",
  }).positive({ error: "Tak boleh bilangan negatif" }),
});

export type CreateFlowInput = z.infer<typeof CreateFlowSchema>;

