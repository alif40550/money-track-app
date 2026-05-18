class Test {
  prisma = "hello";
  constructor(prisma: string) {
    this.prisma = prisma;
  }
  public test = () => {
    console.log(this.prisma);
  }
}
const t = new Test("world");
const testFn = t.test;
testFn();
